// Tissue- and preparation-bound immunity; original organism-wide regimes remain hypotheses.
const commonLimit = "Primary-source interpretation only: no raw-data replay, laboratory reproduction, independent scientific review, universal causal weight, minimal organism or numerical construction rule is admitted.";
const sources = [], entities = [], claims = [], relations = [], studies = [], comparisons = [], readiness = [];
const sourceIndex = new Map(), studyIndex = new Map(), findingIndex = new Map();
function publication(meta, locators, limit, extent = "selected-primary-results-methods-and-figure-legends-supplement-unread", correction = "Primary article record and NLM correction links were inspected; this limited check does not establish the absence of corrections.") {
  const { id, title, authors, year, doi, pmcid, journal, volume, issue, pages } = meta;
  const source = { id, kind: "research-publication", title, authors, year, doi, url: pmcid ? `https://pmc.ncbi.nlm.nih.gov/articles/${pmcid}/` : `https://doi.org/${doi}`, path: null, sha256: null, review: { extent, locators, limit } };
  sources.push(source); sourceIndex.set(id, { source, journal, volume, issue, pages, correction });
}
function citation(sourceId, locator, role = "supports") { return { sourceId, locator, role, note: "Read primary material within its declared extent; preparation, endpoint, dependence and uncertainty stay publication-specific." }; }
function node(id, name, kind, statement, claimIds, coordinates, obligations = [], status = "evidence-scoped") {
  const nodeId = `org:infl-${id}`;
  entities.push({ id: nodeId, name, kind, description: statement, claimIds, status, sourceCoordinates: coordinates, openObligations: [...obligations, commonLimit], level: 5 });
  readiness.push({ nodeId, role: kind === "context" ? "experimental-context" : kind === "definition" ? "definition" : "scoped-phenomenon", denotes: statement, instanceAdmission: "none", claimIds }); return nodeId;
}
function study(id, sourceId, system, preparation, observable, finding, limitations, studyType = "primary-experiment", locatorIndexes = null) {
  const meta = sourceIndex.get(sourceId), locators = locatorIndexes ? locatorIndexes.map((i) => meta.source.review.locators[i]) : meta.source.review.locators;
  const methodId = `M-org-infl-${id}`, limits = [meta.source.review.limit, ...limitations, commonLimit];
  claims.push({ id: methodId, kind: "method", statement: preparation, scope: system, status: "method-contract", citations: locators.map((locator) => citation(sourceId, locator, "method")), checkIds: [], limitations: limits, contextIds: [id] });
  const contextNodeId = node(`${id}-context`, `${id}: acquisition context`, "context", preparation, [methodId], locators.map((locator) => ({ sourceId, locator })), limits, "definition");
  if (studyType === "computational-analysis") readiness.find((row) => row.nodeId === contextNodeId).role = "model-context";
  const record = { id, sourceId, studyType, doi: meta.source.doi, journal: meta.journal, volume: meta.volume, issue: meta.issue, pages: meta.pages, system, preparation, observable, finding, limitations: limits, readExtent: meta.source.review.extent, reviewedLocators: locators, metadataCheckedAt: "2026-10-22", metadataUrl: `https://doi.org/${meta.source.doi}`, correctionCheck: meta.correction };
  studies.push(record); studyIndex.set(id, { record, methodId, limits, locators });
}
function observation(id, name, studyId, statement, extraLimits = [], status = "publication-supported") {
  const context = studyIndex.get(studyId), claimId = `C-org-infl-${id}`;
  claims.push({ id: claimId, kind: "review-finding", statement, scope: context.record.system, status, citations: context.locators.map((locator) => citation(context.record.sourceId, locator)), checkIds: [], limitations: [...context.limits, ...extraLimits], contextIds: [studyId] });
  node(id, name, "scoped-process", statement, [claimId, context.methodId], context.locators.map((locator) => ({ sourceId: context.record.sourceId, locator })), extraLimits);
  relations.push({ id: `organismal:infl-${studyId}-measures-${id}`, source: `org:infl-${studyId}-context`, target: `org:infl-${id}`, kind: "descriptive", role: context.record.studyType === "computational-analysis" ? "computation-context" : "measurement-context", assertion: "The source preparation or analytical input defines the acquisition and interpretation boundary of this finding.", claimIds: [context.methodId, claimId], contextIds: [studyId] });
  findingIndex.set(id, { claimId, studyId }); return claimId;
}
function operating(source, target, studyId, assertion, bearer, input, observable, limit) {
  const context = studyIndex.get(studyId), a = findingIndex.get(source), b = findingIndex.get(target);
  if (a.studyId !== studyId || b.studyId !== studyId) throw new TypeError("Functional endpoints must retain the identical tested preparation.");
  relations.push({ id: `organismal:infl-${source}-supports-${target}`, source: `org:infl-${source}`, target: `org:infl-${target}`, kind: "functional-support", role: "scoped-operating-support", assertion, claimIds: [...new Set([a.claimId, b.claimId, context.methodId])], contextIds: [studyId], carrier: { contextIds: [studyId], citations: context.locators.map((locator) => ({ sourceId: context.record.sourceId, locator })), interpretation: { bearer, input, observable, limit }, countingStatus: "unoperationalized", numericalAdmission: "none" } });
}

// Bibliography checked against NLM records, available Crossref records and primary article author lists.
const publicationMetadata = {
  "weisberg2003": {
    "id": "weisberg2003-adipose-macrophages",
    "title": "Obesity is associated with macrophage accumulation in adipose tissue",
    "authors": [
      "Stuart P Weisberg",
      "Daniel McCann",
      "Manisha Desai",
      "Michael Rosenbaum",
      "Rudolph L Leibel",
      "Anthony W Ferrante"
    ],
    "year": 2003,
    "doi": "10.1172/jci19246",
    "pmcid": "PMC296995",
    "journal": "The Journal of clinical investigation",
    "volume": "112",
    "issue": "12",
    "pages": "1796-1808"
  },
  "cinti2005": {
    "id": "cinti2005-adipocyte-death-niches",
    "title": "Adipocyte death defines macrophage localization and function in adipose tissue of obese mice and humans",
    "authors": [
      "Saverio Cinti",
      "Grant Mitchell",
      "Giorgio Barbatelli",
      "Incoronata Murano",
      "Enzo Ceresi",
      "Emanuela Faloia",
      "Shupei Wang",
      "Melanie Fortier",
      "Andrew S Greenberg",
      "Martin S Obin"
    ],
    "year": 2005,
    "doi": "10.1194/jlr.m500294-jlr200",
    "pmcid": null,
    "journal": "Journal of lipid research",
    "volume": "46",
    "issue": "11",
    "pages": "2347-2355"
  },
  "cani2007": {
    "id": "cani2007-metabolic-endotoxemia",
    "title": "Metabolic endotoxemia initiates obesity and insulin resistance",
    "authors": [
      "Patrice D Cani",
      "Jacques Amar",
      "Miguel Angel Iglesias",
      "Marjorie Poggi",
      "Claude Knauf",
      "Delphine Bastelica",
      "Audrey M Neyrinck",
      "Francesca Fava",
      "Kieran M Tuohy",
      "Chantal Chabo",
      "Aurélie Waget",
      "Evelyne Delmée",
      "Béatrice Cousin",
      "Thierry Sulpice",
      "Bernard Chamontin",
      "Jean Ferrières",
      "Jean-François Tanti",
      "Glenn R Gibson",
      "Louis Casteilla",
      "Nathalie M Delzenne",
      "Marie Christine Alessi",
      "Rémy Burcelin"
    ],
    "year": 2007,
    "doi": "10.2337/db06-1491",
    "pmcid": null,
    "journal": "Diabetes",
    "volume": "56",
    "issue": "7",
    "pages": "1761-1772"
  },
  "cani2008": {
    "id": "cani2008-microbiota-antibiotics",
    "title": "Changes in gut microbiota control metabolic endotoxemia-induced inflammation in high-fat diet-induced obesity and diabetes in mice",
    "authors": [
      "Patrice D Cani",
      "Rodrigo Bibiloni",
      "Claude Knauf",
      "Aurélie Waget",
      "Audrey M Neyrinck",
      "Nathalie M Delzenne",
      "Rémy Burcelin"
    ],
    "year": 2008,
    "doi": "10.2337/db07-1403",
    "pmcid": null,
    "journal": "Diabetes",
    "volume": "57",
    "issue": "6",
    "pages": "1470-1481"
  },
  "thevaranjan2017": {
    "id": "thevaranjan2017-age-microbiota-inflammation",
    "title": "Age-Associated Microbial Dysbiosis Promotes Intestinal Permeability, Systemic Inflammation, and Macrophage Dysfunction",
    "authors": [
      "Netusha Thevaranjan",
      "Alicja Puchta",
      "Christian Schulz",
      "Avee Naidoo",
      "J C Szamosi",
      "Chris P Verschoor",
      "Dessi Loukov",
      "Louis P Schenck",
      "Jennifer Jury",
      "Kevin P Foley",
      "Jonathan D Schertzer",
      "Maggie J Larché",
      "Donald J Davidson",
      "Elena F Verdú",
      "Michael G Surette",
      "Dawn M E Bowdish"
    ],
    "year": 2017,
    "doi": "10.1016/j.chom.2017.03.002",
    "pmcid": "PMC5392495",
    "journal": "Cell host & microbe",
    "volume": "21",
    "issue": "4",
    "pages": "455-466.e4"
  },
  "thevaranjan2018-correction": {
    "id": "thevaranjan2018-permeability-correction",
    "title": "Age-Associated Microbial Dysbiosis Promotes Intestinal Permeability, Systemic Inflammation, and Macrophage Dysfunction",
    "authors": [
      "Netusha Thevaranjan",
      "Alicja Puchta",
      "Christian Schulz",
      "Avee Naidoo",
      "J C Szamosi",
      "Chris P Verschoor",
      "Dessi Loukov",
      "Louis P Schenck",
      "Jennifer Jury",
      "Kevin P Foley",
      "Jonathan D Schertzer",
      "Maggie J Larché",
      "Donald J Davidson",
      "Elena F Verdú",
      "Michael G Surette",
      "Dawn M E Bowdish"
    ],
    "year": 2018,
    "doi": "10.1016/j.chom.2018.03.006",
    "pmcid": "PMC5899819",
    "journal": "Cell host & microbe",
    "volume": "23",
    "issue": "4",
    "pages": "570"
  },
  "camell2017": {
    "id": "camell2017-catecholamine-catabolism",
    "title": "Inflammasome-driven catecholamine catabolism in macrophages blunts lipolysis during ageing",
    "authors": [
      "Christina D Camell",
      "Jil Sander",
      "Olga Spadaro",
      "Aileen Lee",
      "Kim Y Nguyen",
      "Allison Wing",
      "Emily L Goldberg",
      "Yun-Hee Youm",
      "Chester W Brown",
      "John Elsworth",
      "Matthew S Rodeheffer",
      "Joachim L Schultze",
      "Vishwa Deep Dixit"
    ],
    "year": 2017,
    "doi": "10.1038/nature24022",
    "pmcid": "PMC5718149",
    "journal": "Nature",
    "volume": "550",
    "issue": "7674",
    "pages": "119-123"
  },
  "furman2017": {
    "id": "furman2017-inflammasome-aging-subgroups",
    "title": "Expression of specific inflammasome gene modules stratifies older individuals into two extreme clinical and immunological states",
    "authors": [
      "David Furman",
      "Junlei Chang",
      "Lydia Lartigue",
      "Christopher R Bolen",
      "François Haddad",
      "Brice Gaudilliere",
      "Edward A Ganio",
      "Gabriela K Fragiadakis",
      "Matthew H Spitzer",
      "Isabelle Douchet",
      "Sophie Daburon",
      "Jean-François Moreau",
      "Garry P Nolan",
      "Patrick Blanco",
      "Julie Déchanet-Merville",
      "Cornelia L Dekker",
      "Vladimir Jojic",
      "Calvin J Kuo",
      "Mark M Davis",
      "Benjamin Faustin"
    ],
    "year": 2017,
    "doi": "10.1038/nm.4267",
    "pmcid": "PMC5320935",
    "journal": "Nature medicine",
    "volume": "23",
    "issue": "2",
    "pages": "174-184"
  },
  "baker2016": {
    "id": "baker2016-p16-clearance-aging",
    "title": "Naturally occurring p16(Ink4a)-positive cells shorten healthy lifespan",
    "authors": [
      "Darren J Baker",
      "Bennett G Childs",
      "Matej Durik",
      "Melinde E Wijers",
      "Cynthia J Sieben",
      "Jian Zhong",
      "Rachel A Saltness",
      "Karthik B Jeganathan",
      "Grace Casaclang Verzosa",
      "Abdulmohammad Pezeshki",
      "Khashayarsha Khazaie",
      "Jordan D Miller",
      "Jan M van Deursen"
    ],
    "year": 2016,
    "doi": "10.1038/nature16932",
    "pmcid": "PMC4845101",
    "journal": "Nature",
    "volume": "530",
    "issue": "7589",
    "pages": "184-189"
  },
  "xu2018": {
    "id": "xu2018-senolytics-function",
    "title": "Senolytics improve physical function and increase lifespan in old age",
    "authors": [
      "Ming Xu",
      "Tamar Pirtskhalava",
      "Joshua N Farr",
      "Bettina M Weigand",
      "Allyson K Palmer",
      "Megan M Weivoda",
      "Christina L Inman",
      "Mikolaj B Ogrodnik",
      "Christine M Hachfeld",
      "Daniel G Fraser",
      "Jennifer L Onken",
      "Kurt O Johnson",
      "Grace C Verzosa",
      "Larissa G P Langhi",
      "Moritz Weigl",
      "Nino Giorgadze",
      "Nathan K LeBrasseur",
      "Jordan D Miller",
      "Diana Jurk",
      "Ravinder J Singh",
      "David B Allison",
      "Keisuke Ejima",
      "Gene B Hubbard",
      "Yuji Ikeno",
      "Hajrunisa Cubro",
      "Vesna D Garovic",
      "Xiaonan Hou",
      "S John Weroha",
      "Paul D Robbins",
      "Laura J Niedernhofer",
      "Sundeep Khosla",
      "Tamara Tchkonia",
      "James L Kirkland"
    ],
    "year": 2018,
    "doi": "10.1038/s41591-018-0092-9",
    "pmcid": "PMC6082705",
    "journal": "Nature medicine",
    "volume": "24",
    "issue": "8",
    "pages": "1246-1256"
  },
  "ridker2017": {
    "id": "ridker2017-cantos-cardiovascular",
    "title": "Antiinflammatory Therapy with Canakinumab for Atherosclerotic Disease",
    "authors": [
      "Paul M Ridker",
      "Brendan M Everett",
      "Tom Thuren",
      "Jean G MacFadyen",
      "William H Chang",
      "Christie Ballantyne",
      "Francisco Fonseca",
      "Jose Nicolau",
      "Wolfgang Koenig",
      "Stefan D Anker",
      "John J P Kastelein",
      "Jan H Cornel",
      "Prem Pais",
      "Daniel Pella",
      "Jacques Genest",
      "Renata Cifkova",
      "Alberto Lorenzatti",
      "Tamas Forster",
      "Zhanna Kobalava",
      "Luminita Vida-Simiti",
      "Marcus Flather",
      "Hiroaki Shimokawa",
      "Hisao Ogawa",
      "Mikael Dellborg",
      "Paulo R F Rossi",
      "Roland P T Troquay",
      "Peter Libby",
      "Robert J Glynn",
      "CANTOS Trial Group"
    ],
    "year": 2017,
    "doi": "10.1056/nejmoa1707914",
    "pmcid": null,
    "journal": "The New England journal of medicine",
    "volume": "377",
    "issue": "12",
    "pages": "1119-1131"
  },
  "arnardottir2014": {
    "id": "arnardottir2014-aged-resolution",
    "title": "Aging delays resolution of acute inflammation in mice: reprogramming the host response with novel nano-proresolving medicines",
    "authors": [
      "Hildur H Arnardottir",
      "Jesmond Dalli",
      "Romain A Colas",
      "Masakazu Shinohara",
      "Charles N Serhan"
    ],
    "year": 2014,
    "doi": "10.4049/jimmunol.1401313",
    "pmcid": "PMC4185223",
    "journal": "Journal of immunology (Baltimore, Md. : 1950)",
    "volume": "193",
    "issue": "8",
    "pages": "4235-4244"
  },
  "schwab2007": {
    "id": "schwab2007-resolution-programs",
    "title": "Resolvin E1 and protectin D1 activate inflammation-resolution programmes",
    "authors": [
      "Jan M Schwab",
      "Nan Chiang",
      "Makoto Arita",
      "Charles N Serhan"
    ],
    "year": 2007,
    "doi": "10.1038/nature05877",
    "pmcid": "PMC2757086",
    "journal": "Nature",
    "volume": "447",
    "issue": "7146",
    "pages": "869-874"
  },
  "arnold2007": {
    "id": "arnold2007-monocyte-myogenesis",
    "title": "Inflammatory monocytes recruited after skeletal muscle injury switch into antiinflammatory macrophages to support myogenesis",
    "authors": [
      "Ludovic Arnold",
      "Adeline Henry",
      "Françoise Poron",
      "Yasmine Baba-Amer",
      "Nico van Rooijen",
      "Anne Plonquet",
      "Romain K Gherardi",
      "Bénédicte Chazaud"
    ],
    "year": 2007,
    "doi": "10.1084/jem.20070075",
    "pmcid": "PMC2118577",
    "journal": "The Journal of experimental medicine",
    "volume": "204",
    "issue": "5",
    "pages": "1057-1069"
  },
  "wang2016": {
    "id": "wang2016-metabolic-tolerance",
    "title": "Opposing Effects of Fasting Metabolism on Tissue Tolerance in Bacterial and Viral Inflammation",
    "authors": [
      "Andrew Wang",
      "Sarah C Huen",
      "Harding H Luan",
      "Shuang Yu",
      "Cuiling Zhang",
      "Jean-Dominique Gallezot",
      "Carmen J Booth",
      "Ruslan Medzhitov"
    ],
    "year": 2016,
    "doi": "10.1016/j.cell.2016.07.026",
    "pmcid": "PMC5555589",
    "journal": "Cell",
    "volume": "166",
    "issue": "6",
    "pages": "1512-1525.e12"
  },
  "alpert2019": {
    "id": "alpert2019-immune-age",
    "title": "A clinically meaningful metric of immune age derived from high-dimensional longitudinal monitoring",
    "authors": [
      "Ayelet Alpert",
      "Yishai Pickman",
      "Michael Leipold",
      "Yael Rosenberg-Hasson",
      "Xuhuai Ji",
      "Renaud Gaujoux",
      "Hadas Rabani",
      "Elina Starosvetsky",
      "Ksenya Kveler",
      "Steven Schaffert",
      "David Furman",
      "Oren Caspi",
      "Uri Rosenschein",
      "Purvesh Khatri",
      "Cornelia L Dekker",
      "Holden T Maecker",
      "Mark M Davis",
      "Shai S Shen-Orr"
    ],
    "year": 2019,
    "doi": "10.1038/s41591-019-0381-y",
    "pmcid": "PMC6686855",
    "journal": "Nature medicine",
    "volume": "25",
    "issue": "3",
    "pages": "487-495"
  },
  "mannick2021": {
    "id": "mannick2021-torc1-respiratory-trials",
    "title": "Targeting the biology of ageing with mTOR inhibitors to improve immune function in older adults: phase 2b and phase 3 randomised trials",
    "authors": [
      "Joan B Mannick",
      "Grace Teo",
      "Patti Bernardo",
      "Dean Quinn",
      "Kerry Russell",
      "Lloyd Klickstein",
      "William Marshall",
      "Sarb Shergill"
    ],
    "year": 2021,
    "doi": "10.1016/s2666-7568(21)00062-3",
    "pmcid": "PMC8102040",
    "journal": "The lancet. Healthy longevity",
    "volume": "2",
    "issue": "5",
    "pages": "e250-e262"
  },
  "everett2018": {
    "id": "everett2018-cantos-diabetes",
    "title": "Anti-Inflammatory Therapy With Canakinumab for the Prevention and Management of Diabetes",
    "authors": [
      "Brendan M Everett",
      "Marc Y Donath",
      "Aruna D Pradhan",
      "Tom Thuren",
      "Prem Pais",
      "Jose C Nicolau",
      "Robert J Glynn",
      "Peter Libby",
      "Paul M Ridker"
    ],
    "year": 2018,
    "doi": "10.1016/j.jacc.2018.03.002",
    "pmcid": null,
    "journal": "Journal of the American College of Cardiology",
    "volume": "71",
    "issue": "21",
    "pages": "2392-2401"
  }
};

publication(publicationMetadata.weisberg2003,
  ["Methods: mice and diet groups; human subjects; immunohistochemistry, cell sorting and RT-PCR; Results and Figures 1-7", "Results: macrophage versus adipocyte transcript fractions, adipose depot differences and unchanged liver Kupffer-cell abundance"],
  "Primary main Methods, selected Results and displayed figure legends were read in PMC HTML. Supplementary tables, raw arrays, source blots and independent image counting were not reviewed. Macrophage abundance and cell-fraction transcripts do not prove a universal polarization state or complete endocrine mechanism.");
publication(publicationMetadata.cinti2005,
  ["Publisher Results and Figure 3: MAC-2/perilipin staining, electron microscopy and human adipocyte-size/crown-like-structure association", "Publisher Discussion: residual lipid droplets, macrophage localization and unresolved clearance of lipid-laden syncytia"],
  "Selected primary publisher Results, Figure 3 caption and Discussion excerpts were read. Complete Methods, whole-article PDF, raw images and supplementary material were not read. No intervention causing human adipocyte death, transport barrier or tissue-wide hysteresis is inferred.", "selected-primary-publisher-results-caption-discussion-excerpts-methods-unread");
publication(publicationMetadata.cani2007,
  ["Pages 1762-1765, Research Design and Methods and Figures 1-3: male mouse diets, LAL assay, oral lipid/LPS challenge and four-week subcutaneous LPS infusion", "Pages 1765-1769, Results and Figures 4-8: adipose histology, CD14 genotype comparisons and insulin-receptor signaling; Discussion on source and dose limitations"],
  "Primary Methods, selected Results and figure captions were read in the twelve-page university-repository PDF: https://research.dial.uclouvain.be/server/api/core/bitstreams/8c56dffb-ee61-42e5-bc06-27baf6e4562b/content. Raw clamps, LAL calibration/recovery, raw histology and supplementary files were not reconstructed. Continuous subcutaneous infusion bypasses the gut and is not direct evidence of spontaneous microbial-component transport.");
publication(publicationMetadata.cani2008,
  ["Primary structured abstract: Objective; Research Design and Methods; Results; Conclusions"],
  "Only the primary structured abstract and publication metadata were read; full Methods, doses, animal allocation, figures, supplementary appendix and assay validation were unavailable in this acquisition. Broad antibiotic-associated findings remain descriptive and are not an isolated LPS, barrier-restoration or universal microbiome causal mechanism.", "primary-structured-abstract-only");
publication(publicationMetadata.thevaranjan2017,
  ["Results and Figures 1-3: old/young, TNF knockout and germ-free mice; macrophage bacterial killing, cytokines, permeability and MDP reporter", "Results and Figures 4-5; STAR Methods: co-housing recolonization, Ussing chambers, FITC-dextran, MDP reporter and conflicting adalimumab regimens", "2018 correction DOI 10.1016/j.chom.2018.03.006: simultaneous datasets, pathology scale and corrected FITC-dextran concentration"],
  "Primary main Results, Figures 1-5 captions, relevant STAR Methods and the explicit 2018 correction were read in Europe PMC XML. Supplementary experiments, raw microbiome sequences and raw assay calibration were not replayed. The archived main XML retains uncorrected 0.8 mg/mL FITC-dextran; the correction specifies 80 mg/mL. Correction text and main text have inconsistent rendered volume units, so no independently verified gavage volume is admitted. Related panels from shared simultaneous datasets are not independent replications. Figure 5D reports 50 ng/g every other day for two weeks, whereas STAR Methods reports 40 micrograms/g every other day for three weeks; the dose differs by a factor of 800 and the duration also conflicts. The exact administered regimen is unresolved.", undefined,
  "Explicit author correction DOI 10.1016/j.chom.2018.03.006 was read. Figures 1G/2E/3H share blinded pathology scoring; permeability 3D/5B and ELISA 1E/1F/2B/3G/3I were acquired simultaneously and analyzed together. FITC-dextran concentration is 80 mg/mL, not 0.8 mg/mL. No raw reanalysis.");
publication(publicationMetadata["thevaranjan2018-correction"],
  ["Entire correction notice: simultaneous experiments/statistical datasets; common blinded pathology scale; 80 mg/mL FITC-dextran correction"],
  "The full short publisher correction was read in primary XML. It corrects source reporting and dependence; it supplies no new independent experiment. The volume string in the notice is not used to silently override unresolved rendered volume units in archived material.", "complete-primary-correction-notice", "This is the correction to DOI 10.1016/j.chom.2017.03.002.");
publication(publicationMetadata.camell2017,
  ["Main Results and Figures 1-4: aged adipose explants, macrophage co-cultures, Nlrp3/Gdf3 perturbations, MAOA inhibition and nerve-associated macrophages", "Methods: animals, lipolysis, co-culture, clorgyline and norepinephrine quantification"],
  "Selected main Results, Figures 1-4 legends and relevant main Methods were read in primary XML. Extended-data captions were inspected for boundaries; underlying extended-data arrays, source data and supplementary material were not replayed. Mouse adipose fasting/lipolysis assays do not measure all organismal metabolism, insulin sensitivity or a closed reciprocal inflammatory loop.");
publication(publicationMetadata.furman2017,
  ["Results and Figure 1: longitudinal older high/low inflammasome-module groups and circulating IL-1beta", "Results and Figures 2-3; Online Methods: human primary monocyte/THP-1 nucleotide-metabolite stimulation and inflammasome readouts"],
  "Selected primary Results, Figures 1-3 captions and relevant Online Methods were read in PMC HTML. Supplementary datasets, raw expression/metabolomics, complete mouse hypertension experiments and biochemical ligand binding were not reconstructed. High and low older groups exist; human association is not proof that age or module expression causes disease. This Stanford cohort overlaps the cohort reanalyzed by Alpert 2019.");
publication(publicationMetadata.baker2016,
  ["Main Results and Figures 1-5; Methods: INK-ATTAC cohorts, AP20187 regimens and lifespan/healthspan", "Main Results and Extended Data Figure 10 caption; Methods: wound closure and treatment suspension during healing"],
  "Selected primary main Results, main Methods, Figures 1-5 captions and displayed Extended Data Figure 10 caption were read in primary XML. Supplementary text, source images, raw lifespan data and previously referenced detailed wound protocol were not read. ATTAC targets a p16-promoter-selected population and not all senescent cells; systemic cytokine suppression is not substituted for the measured survival/organ readouts.");
publication(publicationMetadata.xu2018,
  ["Results and Figures 1-3, 5: senescent-cell transplantation, physical function and finite rescue with dasatinib plus quercetin", "Results and Figures 4 and 6; Online Methods: human adipose explants and separate naturally aged mouse drug regimens"],
  "Selected primary Results, Figures 1-6 captions and relevant Online Methods were read in primary XML. Raw cell counts, supplementary phenotyping, all autopsies and clinical human treatment were not reconstructed. Transplant, human explant and naturally aged mouse studies remain separate; senolytic pharmacology is not uniquely selective or proof of universal aging causation.");
publication(publicationMetadata.ridker2017,
  ["Primary published manuscript pages 2-5: CANTOS population, exclusions, randomization, biomarkers, endpoint definitions and multiplicity", "Primary published manuscript Results, Tables 2-3 and Figures 1-2: cardiovascular events, fatal infection, lipids and all-cause mortality"],
  "Primary main Methods, selected Results, Tables 2-3 and Figures 1-2 were read in the thirteen-page UEA repository PDF: https://ueaeprints.uea.ac.uk/id/eprint/64820/1/Published_manuscript.pdf. Supplementary appendix, full protocol and patient-level data were not read. Post-infarction participants with hsCRP at least 2 mg/L are not all older adults; biomarker decrease is not measured immune rejuvenation. CANTOS companion analyses share this trial.");
publication(publicationMetadata.everett2018,
  ["Primary structured abstract: CANTOS diabetes analysis, baseline HbA1c strata, randomized canakinumab comparison and incident diabetes"],
  "Only the primary structured abstract and bibliographic records were read. Full Methods, figures, supplementary tables and patient-level data were not read. This is a companion analysis of CANTOS NCT01327846, not an independent trial or independent replication of Ridker 2017. No isolated insulin-sensitivity or full feedback-loop experiment is admitted.", "primary-structured-abstract-only");
publication(publicationMetadata.arnardottir2014,
  ["Materials and Methods; Results and Figures 1-3: 2- versus 20-month male BALB/c zymosan peritonitis and lipid/exudate time courses", "Methods and Figures 4-6: separate young FVB/DHA, reprogrammed human-monocyte transfer and aged-BMDM efferocytosis preparations", "Methods and Figures 7-8: monocyte-derived resolvin nanoparticles administered before or two hours after challenge in aged mice"],
  "Relevant primary Methods, selected Results and Figures 1-8 captions were read in PMC HTML. Supplementary tables/figures, raw lipid spectra and full independent analyte validation were not read. Young FVB 1-mg zymosan resolution experiments differ from aged BALB/c 0.1-mg challenge; a four-hour nanoparticle readout is not a complete return-to-baseline curve or human therapy.");
publication(publicationMetadata.schwab2007,
  ["Main Results, Figures 1-2 and Method Summary: timed zymosan peritonitis, lipid mediators and macrophage efferocytosis", "Main Results and Figures 3-4: COX/LOX inhibitor-associated resolution deficit, mediator rescue and phagocyte/particle traffic"],
  "Primary main Results, Figures 1-4 captions and Method Summary were read in PMC HTML. Detailed supplementary protocols, supplementary figures/tables, raw spectra and lineage-level cell tracking were not read. Leukocyte decline, efferocytosis and particle appearance in lymphatic organs are distinct readouts; zymosan uptake is not live pathogen killing or proof that every resolving route preserves antimicrobial defense.");
publication(publicationMetadata.arnold2007,
  ["Results, Figures 1-3 and Materials and Methods: notexin injury, monocyte subset tracing and mouse sampling", "Results, Figures 4-5 and Methods: separate human macrophage/debris and myogenic precursor co-cultures", "Results, Figures 6-8 and Methods: circulating versus late intramuscular CD11b-DTR depletion and regeneration histology"],
  "Selected primary Results, Figures 1-8 captions and relevant Methods were read in primary XML. Supplementary data, raw histological counts and whole-organ force recovery were not read. Mouse tissue recruitment/depletion and human in-vitro myogenic effects are different preparations. Morphology, cytokines and myofiber diameter do not quantify organismal immune-resource allocation.");
publication(publicationMetadata.wang2016,
  ["Results, Figures 1-2 and STAR Methods: Listeria infection and separate sterile LPS challenge with glucose/2DG intervention", "Results, Figures 3-4 and STAR Methods: influenza infection and separate poly(I:C) challenge, survival, pathogen/cytokine measurements"],
  "Selected primary main Results, Figures 1-4 captions and relevant STAR Methods were read in PMC HTML. Raw clinical chemistry, complete neural mechanistic experiments and supplementary datasets were not reconstructed. Listeria 2DG can reduce bacterial burden; the LPS sterile case isolates tissue-tolerance effects. Source figure panels reuse some cohorts, so panel count is not replication count. No human dietary treatment recommendation is inferred.");
publication(publicationMetadata.alpert2019,
  ["Methods Sample collection and Results Figures 1-3: nine-year Stanford longitudinal immune acquisition", "Methods Computational analysis and Results Figures 4-6: diffusion pseudotime, cytokine-response mapping, gene-expression projection and Framingham mortality association"],
  "Selected primary Results, Figures 1-6 captions and relevant experimental/computational Methods were read in PMC HTML. Raw cytometry, supplementary individual histories, source code execution and independent model reanalysis were not performed. Pseudotime and inferred attractor structure are fitted interpretations, not controlled dose-response thresholds or observed inflammatory hysteresis. The Stanford cohort overlaps Furman 2017; Framingham expression-projected scores are not direct replication of cell-derived IMM-AGE.");
publication(publicationMetadata.mannick2021,
  ["Methods and Results: phase 2b trial population, 16-week RTB101 regimens, fixed-sequence and unadjusted endpoint analyses", "Methods and Results: independent phase 3 trial, changed population/clinical endpoint, 16-week outcomes and adverse events", "Methods and Figure 3: whole-blood IFN-induced gene-expression assay and selected phase 3 biomarker sample"],
  "Primary main Methods, selected Results and displayed Figures 1-4 captions were read in Europe PMC XML. Supplementary appendix, raw trial data and all assay-level calibration were not read. Phase 2b/phase 3 differ in population, countries and endpoint definition; a negative phase 3 primary endpoint is retained. Biomarker induction does not establish reduced respiratory illness or a universal gain in immune function.");

study("orginfl-weisberg-mouse-depots", "weisberg2003-adipose-macrophages", "Twenty-week mouse adipose-depot comparisons across sex, diet and obesity genotypes",
  "Six four-mouse groups supplied perigonadal expression data; F4/80 histology and adipocyte area were assessed across adipose depots. High-fat-fed mice received a 45%-energy-fat diet for twelve weeks; other genotype/sex groups are distinct comparators.",
  "F4/80-positive cell fraction, adipocyte cross-sectional area and cell-fraction cytokine transcripts",
  "Adipose macrophage fractions correlated with adiposity/adipocyte size, with depot/genotype exceptions; increased F4/80 abundance was not uniform across liver and muscle compartments.",
  ["Genotype, sex, diet and adiposity covary; this comparison is not an isolated fat-mass intervention or a temporal trajectory.", "Sorted-fraction Tnfa/Il6 transcripts do not directly quantify all circulating cytokine protein or adipokine secretion."], "primary-observation", [0, 1]);
observation("adipose-macrophage-abundance", "Adipose macrophage abundance depends on depot and preparation", "orginfl-weisberg-mouse-depots",
  "Adipose F4/80-positive fractions increased with adiposity and adipocyte area in the reported depots; leptin-deficient subcutaneous samples deviated from other groups, and hepatic Kupffer-cell abundance did not show the same increase.");
study("orginfl-weisberg-human-adipose", "weisberg2003-adipose-macrophages", "Human subcutaneous adipose biopsies",
  "Cross-sectional subcutaneous adipose samples were analyzed using CD68 immunohistochemistry and adipocyte area, alongside body-mass measures.",
  "CD68-positive cell fraction, BMI and adipocyte area",
  "Macrophage-associated histology tracked human adiposity, without establishing a unique polarization state or causal inflammatory mediator.",
  ["Human associations are separate from mouse genotype/diet and do not identify chronological aging, inflammation duration or tissue transport limits."], "primary-observation", [0]);
observation("human-adipose-cell-composition", "Human adipose cell composition association", "orginfl-weisberg-human-adipose", "Human subcutaneous CD68-positive cell fractions were associated with adiposity/adipocyte size; cell abundance is not equivalent to macrophage inflammatory function or a longitudinal remodeling rate.");
study("orginfl-cinti-human-spatial", "cinti2005-adipocyte-death-niches", "Human subcutaneous and omental white adipose biopsies",
  "The read Figure 3/Results compare MAC-2-positive cell localization with perilipin-negative adipocytes and ultrastructural features in biopsies spanning BMI 20–45. Full sampling Methods were not read.",
  "Crown-like structures, adipocyte size, perilipin loss and electron-microscopic morphology",
  "Macrophages localized around degenerate lipid droplets, and crown-like structures associated with enlarged adipocytes; some lean/obese individuals contradicted a simple BMI-only classification.",
  ["Static histology does not prove that macrophages cause death, that transport barriers stabilize niches, or how/when lipid-laden syncytia are cleared.", "Full Methods and quantitative raw image reanalysis remain unread."], "primary-observation", [0, 1]);
observation("spatial-adipose-damage-niches", "Localized human adipose damage-associated macrophage structures", "orginfl-cinti-human-spatial", "MAC-2-positive crown-like structures surrounded perilipin-negative degenerate adipocytes in human biopsies. Their association with cell size, including a lean large-adipocyte case and an obese small-adipocyte case without detected death, prevents treating BMI or uniform tissue inflammation as the sole state variable.");

study("orginfl-cani-diet-oral", "cani2007-metabolic-endotoxemia", "Twelve-week male mouse dietary and oral LPS/lipid preparations",
  "Control and 72%-energy-fat diet groups were followed for four weeks with plasma LAL measurements across the day. A separate acute oral challenge compared LPS in water versus corn oil, with thirty-minute plasma sampling.",
  "Plasma endotoxin activity over the feeding cycle and after oral challenge",
  "High-fat feeding disrupted the daily endotoxin-activity profile; oral LPS in lipid produced a larger plasma response than LPS in water.",
  ["The diet is extreme and described as carbohydrate-free; printed macronutrient energy percentages do not define a general human dietary model.", "LAL is an assay-defined activity measurement; permeability, intestinal flux and microbial identity are not directly identified by this assay."], "primary-experiment", [0]);
observation("diet-endotoxin-activity", "Diet-associated plasma endotoxin activity", "orginfl-cani-diet-oral", "The source reports changed plasma LAL activity after four weeks of high-fat feeding and greater thirty-minute response to orally delivered LPS in oil than water. These findings do not alone identify epithelial paracellular leak or a universal concentration threshold.");
study("orginfl-cani-pump", "cani2007-metabolic-endotoxemia", "Male C57BL/6 mouse chronic subcutaneous LPS infusion",
  "Osmotic minipumps delivered E. coli O55:B5 LPS at 300 micrograms/kg/day or saline for four weeks. Glucose/insulin tests, low- and high-insulin tracer clamps, tissue mass, transcripts and adipose histology were compared with separate dietary groups.",
  "Fasting glucose/insulin, hepatic glucose production, whole-body turnover, adipose mass and F4/80 histology",
  "LPS infusion increased selected inflammatory/metabolic endpoints and hepatic insulin resistance, while not reproducing whole-body insulin resistance in the reported clamp.",
  ["The pump bypasses the gut and remains continuously active; neither spontaneous translocation nor post-removal persistence is tested.", "Hepatic versus whole-body clamp contrasts and high-fat versus infused-LPS outcomes must not be collapsed into one systemic insulin-resistance result."], "primary-experiment", [0, 1]);
observation("chronic-lps-pump-input", "Four-week LPS pump intervention", "orginfl-cani-pump", "Continuous subcutaneous LPS versus saline supplies a defined four-week inflammatory input in male mice while food and water remain available.");
observation("chronic-lps-metabolic-output", "LPS produces partial metabolic phenocopy", "orginfl-cani-pump", "The LPS-pump group showed increased fasting glycemia/insulinemia and adipose measures with hepatic insulin resistance; whole-body insulin resistance was not induced in the reported clamp. The dietary group and pump group therefore did not share every metabolic response.");
operating("chronic-lps-pump-input", "chronic-lps-metabolic-output", "orginfl-cani-pump", "Continuous LPS exposure changes bounded hepatic/metabolic readouts in the tested mice.", "Existing male mouse exposed through a subcutaneous osmotic pump", "LPS versus saline for four weeks", "Reported glucose/clamp, tissue-mass and inflammatory endpoints", "No claim that gut leak caused this pump input or that inflammation and metabolism form a measured self-maintaining reciprocal loop.");
study("orginfl-cani-cd14-duration", "cani2007-metabolic-endotoxemia", "WT and CD14-mutant male mice on high-fat diet",
  "WT and CD14-mutant mice were compared after four or twenty-four weeks of high-fat feeding using glucose tolerance, insulin response, tissue mass and clamp-related endpoints.",
  "Early versus later glucose tolerance, insulin sensitivity and hepatic lipid measurements",
  "CD14 deficiency delayed selected metabolic abnormalities but did not prevent glucose intolerance/insulin resistance after prolonged high-fat feeding.",
  ["CD14-mutant mice already differ in basal insulin sensitivity; constitutive genotype is not an acute receptor blockade or isolated timing intervention.", "No entry/exit sweep or same-drive two-state comparison is present."], "primary-experiment", [1]);
observation("cd14-diet-duration-input", "CD14 genotype with bounded dietary durations", "orginfl-cani-cd14-duration", "The source contrasts WT/CD14-mutant backgrounds under four- and twenty-four-week dietary regimens, rather than one fixed universal LPS requirement.");
observation("cd14-protection-not-universal", "Early CD14 protection does not guarantee long-term prevention", "orginfl-cani-cd14-duration", "CD14-mutant mice retained improved early metabolic responses but became glucose intolerant and insulin resistant with prolonged high-fat feeding; a necessary universal endotoxin-only cause is not established.");
operating("cd14-diet-duration-input", "cd14-protection-not-universal", "orginfl-cani-cd14-duration", "Constitutive CD14 genotype modifies the reported dietary response in a duration-dependent context.", "WT and CD14-mutant mouse cohorts", "Genotype and four- versus twenty-four-week high-fat regimen", "Source-specific metabolic readouts", "Not a direct LPS dose threshold, universal disease prevention or isolated single molecular pathway.");
study("orginfl-cani-antibiotic-abstract", "cani2008-microbiota-antibiotics", "Abstract-reported high-fat-fed and ob/ob mouse antibiotic comparisons",
  "The structured abstract reports antibiotic alteration of gut microbiota and comparisons involving CD14-deficient ob/ob mice. Exact drug regimens, allocation, times and assay protocols remain unknown from the read abstract.",
  "Abstract-reported plasma/cecal endotoxin, permeability-related gene expression and metabolic/inflammatory measures",
  "Antibiotic-associated reductions in endotoxemia and selected metabolic/inflammatory abnormalities were reported; the abstract proposes a permeability-related mechanism.",
  ["A broad microbiota intervention can have multiple metabolic/immune effects; it does not isolate a universal gut-LPS causal chain.", "No functional edge, exact exposure protocol or numerical effect is admitted from this abstract-only acquisition."], "primary-experiment", [0]);
observation("antibiotics-associated-endotoxin-change", "Abstract-bound antibiotic/microbiota comparison", "orginfl-cani-antibiotic-abstract", "The primary abstract reports antibiotic-associated lowering of endotoxemia and correlated metabolic/inflammatory changes. Specific barrier-restoration causality, organism-wide set-point resetting and source dose-response remain unverified.");

const thevarCorrection = "Correction DOI 10.1016/j.chom.2018.03.006 specifies 80 mg/mL FITC-dextran, shared simultaneous ELISA/permeability datasets across panels and a common blinded pathology scale; archived main text is not silently treated as corrected raw protocol.";
study("orginfl-thevar-age-germfree", "thevaranjan2017-age-microbiota-inflammation", "Young and old SPF versus germ-free mouse cohorts",
  "Young 10–14-week and old 18–22-month mice were compared for cytokines, lung histology and macrophage bacterial killing. Intestinal permeability used tracer/Ussing assays; circulating microbial activity used a Nod2-dependent MDP bioassay. Germ-free housing is a lifelong distinct preparation.",
  "Plasma/lung cytokines, lung infiltrates, colonic tracer flux and MDP reporter activity",
  "Old SPF mice showed selected inflammatory/permeability changes, whereas old germ-free mice lacked these age-group differences in the reported assays.",
  [thevarCorrection, "Lifelong germ-free physiology differs in more than endotoxin exposure; MDP activity is not an LPS-specific assay or direct transport tracing.", "Prose and Figure 1 label some whole-blood/lung/culture readouts differently, so no exact panel-to-assay harmonization is assumed."], "primary-observation", [0, 1, 2]);
observation("age-microbiota-conditional-inflammation", "Age-associated inflammation differs across microbial preparations", "orginfl-thevar-age-germfree", "Old SPF mice had increased selected cytokines and microbial-product/permeability readouts; old germ-free mice did not reproduce the same pattern. Chronological age alone does not entail the same inflammatory baseline in every preparation.");
study("orginfl-thevar-tnf-killing", "thevaranjan2017-age-microbiota-inflammation", "Mouse peritoneal and bone-marrow-derived macrophage pneumococcal killing assays",
  "Macrophages from young/old WT or TNF-knockout mice were compared after standardized bacterial exposure and uptake normalization; a separate exogenous-TNF addition used 10 ng/mL. Viable S. pneumoniae CFU and cytokine output were measured.",
  "Bacterial survival after macrophage uptake and IL-6 output",
  "Exogenous TNF reduced killing, and aged TNF-knockout macrophages did not show the WT age-related killing defect; greater inflammatory output was not synonymous with better antibacterial function.",
  [thevarCorrection, "Ex-vivo killing after culture is not whole-animal infection survival or proof that all immune tasks compete for one resource budget.", "Constitutive TNF absence has developmental/microbiota consequences distinct from acute addition."], "primary-experiment", [0, 2]);
observation("tnf-macrophage-perturbation", "TNF-linked perturbation in a killing preparation", "orginfl-thevar-tnf-killing", "The source compares TNF addition and genotype-related macrophage preparations while measuring bacterial killing independently of inflammatory cytokine output.");
observation("inflammation-not-antibacterial-capacity", "Inflammatory output and bacterial killing can dissociate", "orginfl-thevar-tnf-killing", "TNF addition reduced macrophage pneumococcal killing, while old TNF-deficient macrophages lacked the WT age-associated defect. Elevated IL-6 production is not a measure of stronger pathogen clearance.");
operating("tnf-macrophage-perturbation", "inflammation-not-antibacterial-capacity", "orginfl-thevar-tnf-killing", "Tested TNF context changes the measured macrophage killing response.", "Isolated mouse macrophages with bacterial uptake normalization", "Reported TNF addition/genotype contrasts", "Viable pneumococcal CFU after uptake", "No universal human immune suppression, lifetime protective capacity or fixed energetic trade-off inferred.");
study("orginfl-thevar-recolonization", "thevaranjan2017-age-microbiota-inflammation", "Young/old germ-free mice co-housed with young/old SPF donors",
  "Recipient age and donor-community age were crossed by co-housing; colonization was maintained for at least six weeks. Colonic paracellular permeability, plasma TNF and fecal community profiles were assayed. Multiple colonization batches were performed over 3.5 years.",
  "Colonic 51Cr-EDTA flux, circulating TNF and fecal 16S community profiles",
  "Older donor microbiota increased permeability in young recipients, while older recipients remained susceptible with either donor age; host and microbiota histories were not interchangeable.",
  [thevarCorrection, "Co-housing transfers communities/exposures, not a single identified organism or purified microbial component.", "No complete within-host time course establishing a stable attractor after exposure withdrawal is supplied."], "primary-experiment", [1, 2]);
observation("aged-community-transfer-input", "Crossed host/community recolonization", "orginfl-thevar-recolonization", "Co-housing germ-free young/old recipients with young/old SPF donors establishes a community-history perturbation evaluated after at least six weeks.");
observation("host-community-permeability-interaction", "Host age and community age affect different boundaries", "orginfl-thevar-recolonization", "Old-donor communities increased permeability in young hosts; old hosts showed increased permeability and TNF after colonization with either age community. A microbiota-only explanation is insufficient for all observed host responses.");
operating("aged-community-transfer-input", "host-community-permeability-interaction", "orginfl-thevar-recolonization", "Donor-community/recipient-age conditions modify colonic permeability and inflammatory readouts in recolonized mice.", "Germ-free mouse recipients in defined co-housing histories", "Donor-community and recipient-age contrasts", "Colonic tracer flux and plasma TNF", "No universal dysbiosis signature, necessary LPS threshold or irreversible inflammatory regime is established.");
study("orginfl-thevar-anti-tnf", "thevaranjan2017-age-microbiota-inflammation", "Young/old WT mice under adalimumab or IgG treatment with unresolved regimen reporting",
  "Adalimumab or human IgG control was compared for circulating TNF, fecal community composition and FITC-dextran permeability. Figure 5D reports 50 ng/g every other day for two weeks, whereas STAR Methods reports 40 micrograms/g every other day for three weeks; the dose differs by a factor of 800 and the duration also conflicts. The exact administered regimen is unresolved.",
  "TNF detection, fecal Bray-Curtis community differences and stated permeability result",
  "Anti-TNF altered the old-mouse microbial community; the text explicitly reports no measurable improvement in FITC-dextran permeability.",
  [thevarCorrection, "Figure 5D reports 50 ng/g every other day for two weeks, whereas STAR Methods reports 40 micrograms/g every other day for three weeks; the dose differs by a factor of 800 and the duration also conflicts. The exact administered regimen is unresolved.", "The negative permeability result is stated as data not shown; no raw curve/effect bound is available.", "Short partial non-reversal does not distinguish slow relaxation, ongoing triggers, inadequate dose or hysteresis."], "primary-experiment", [1, 2]);
observation("anti-tnf-duration-input", "Anti-TNF perturbation with unresolved schedule", "orginfl-thevar-anti-tnf", "Old WT mice received adalimumab versus IgG; the two-week caption/Results account conflicts with a three-week Methods account and a different dose. This is not a verified exact regimen or a controlled reversal sweep of every inflammatory driver.");
observation("anti-tnf-microbiota-not-permeability-rescue", "Microbiota change without demonstrated barrier rescue", "orginfl-thevar-anti-tnf", "The source reports altered old-mouse fecal microbiota after anti-TNF, but no measurable FITC-dextran permeability effect. This is a bounded partial-response observation, not evidence that barrier function or a complete inflammatory regime reset.");
operating("anti-tnf-duration-input", "anti-tnf-microbiota-not-permeability-rescue", "orginfl-thevar-anti-tnf", "The anti-TNF schedule changes one measured community readout without demonstrating permeability rescue.", "Old WT mice in the reported antibody contrast; exact dose and duration conflict within the source", "Adalimumab versus human IgG", "Fecal community profile and separately reported null permeability response", "The permeability data were not shown; the result cannot establish an experimentally measured hysteresis loop.");

claims.push({ id: "D-org-infl-thevar-correction-boundary", kind: "review-finding", statement: thevarCorrection, scope: "Reporting and dependence of Thevaranjan 2017 assays", status: "definition", citations: [citation("thevaranjan2018-permeability-correction", sourceIndex.get("thevaranjan2018-permeability-correction").source.review.locators[0], "limits"), citation("thevaranjan2017-age-microbiota-inflammation", sourceIndex.get("thevaranjan2017-age-microbiota-inflammation").source.review.locators[2], "limits")], checkIds: [], limitations: ["Correction notices do not add an independent replicate; raw source protocol and data were not replayed.", commonLimit] });
node("thevar-correction-boundary", "Shared experiments and corrected permeability reporting", "definition", thevarCorrection, ["D-org-infl-thevar-correction-boundary"], [{ sourceId: "thevaranjan2018-permeability-correction", locator: sourceIndex.get("thevaranjan2018-permeability-correction").source.review.locators[0] }], [], "definition");

study("orginfl-camell-atm-coculture", "camell2017-catecholamine-catabolism", "Young mouse adipocytes with age-selected adipose macrophages",
  "Sorted F4/80-positive/CD11b-positive adipose macrophages from young or old mice were added to young adipocytes; norepinephrine was applied after one hour and FFA/glycerol output assessed after stimulation. Source Fig. 1 includes separate explant and old-tissue/young-ATM comparisons.",
  "Norepinephrine-stimulated FFA/glycerol release",
  "Old adipose macrophages blunted the tested young-adipocyte lipolytic response.",
  ["Use the adipocyte/old-ATM contrast only; old VAT plus young ATM and different norepinephrine concentrations are separate preparations.", "Sorted old macrophages came from pooled donors; cell-number minima and a unique universal aging state are not inferred."], "primary-experiment", [0, 1]);
observation("old-atm-coculture-input", "Age-selected adipose macrophage input", "orginfl-camell-atm-coculture", "Old versus young adipose macrophages provide a controlled co-culture contrast for an existing norepinephrine-stimulated young adipocyte preparation.");
observation("old-atm-lipolysis-output", "Old adipose macrophages reduce a bounded lipolysis response", "orginfl-camell-atm-coculture", "The source co-culture reports reduced norepinephrine-stimulated lipolytic output with old adipose macrophages. This is a measured local metabolic effect, not every endocrine/adipokine output or a complete organismal positive-feedback loop.");
operating("old-atm-coculture-input", "old-atm-lipolysis-output", "orginfl-camell-atm-coculture", "Age-selected macrophage addition changes the bounded norepinephrine/lipolysis response.", "Cultured young mouse adipocytes with sorted adipose macrophages", "Old versus young ATM co-culture under the source norepinephrine challenge", "FFA/glycerol release", "No conversion of age-correlated transcript networks into direct molecular interactions or whole-body causal closure.");
study("orginfl-camell-nlrp3-coculture", "camell2017-catecholamine-catabolism", "Young mouse visceral adipose explants co-cultured with WT/Nlrp3-null BMDMs",
  "BMDMs were primed with LPS for four hours and ATP for one hour or left as controls, washed and combined with weighed young VAT. Norepinephrine at 1 micromolar was applied after one hour and lipolysis measured.",
  "Explanted VAT glycerol response to norepinephrine",
  "Inflammasome-activated WT BMDMs suppressed lipolytic output, with altered response under Nlrp3 deficiency.",
  ["This is a primed BMDM/explant comparison; it does not establish that every aged tissue requires NLRP3 or that peripheral insulin resistance was measured."], "primary-experiment", [0, 1]);
observation("nlrp3-atm-input", "Matched inflammasome/explant perturbation", "orginfl-camell-nlrp3-coculture", "WT/Nlrp3-null BMDMs with specified LPS/ATP activation histories were compared after washing in the same young-VAT/norepinephrine assay.");
observation("nlrp3-lipolysis-output", "Inflammasome context conditions explant lipolysis", "orginfl-camell-nlrp3-coculture", "The activated-WT versus Nlrp3-deficient BMDM contrast modifies norepinephrine-stimulated VAT glycerol output; this local readout is distinct from blood glucose, body mass or complete immune-metabolic reciprocity.");
operating("nlrp3-atm-input", "nlrp3-lipolysis-output", "orginfl-camell-nlrp3-coculture", "The matched BMDM activation/genotype condition alters explant lipolysis.", "Young VAT explants and washed WT/Nlrp3-null BMDMs", "Reported LPS/ATP history and genotype", "Glycerol release under norepinephrine", "A source-local immune-to-metabolic effect, without universal necessity or a reverse metabolic-to-immune edge.");
study("orginfl-camell-maoa-aged", "camell2017-catecholamine-catabolism", "Young/old mice given MAOA inhibitor during fasting",
  "The source Figure 4g-j compares young and aged mice given clorgyline at 2 mg/kg intraperitoneally and fasted for twenty-four hours, with VAT norepinephrine HPLC and lipolytic readouts.",
  "VAT norepinephrine, glycerol release and selected lipolytic proteins",
  "MAOA inhibition increased norepinephrine availability and restored selected lipolytic responses in the tested old mice.",
  ["Systemic pharmacology is not macrophage-specific; complete cell-selective mediation and effects on every tissue remain unknown.", "Fasting, substrate availability and time define this response; no dose for clinical human use is inferred."], "primary-experiment", [0, 1]);
observation("maoa-inhibition-input", "MAOA inhibitor in a finite fasting challenge", "orginfl-camell-maoa-aged", "Clorgyline versus the source control conditions perturbs catecholamine degradation during a twenty-four-hour fasting preparation.");
observation("maoa-lipolysis-rescue", "Catecholamine availability and bounded metabolic rescue", "orginfl-camell-maoa-aged", "In the tested aged mice, MAOA inhibition raised adipose norepinephrine and restored selected glycerol/lipolysis responses. Systemic drug action does not isolate a universal macrophage-specific aging cause or demonstrate restoration of all organismal homeostasis.");
operating("maoa-inhibition-input", "maoa-lipolysis-rescue", "orginfl-camell-maoa-aged", "MAOA inhibition changes the source fasting-associated adipose readouts.", "Existing young/old mice and sampled VAT", "Clorgyline under the specified fasting schedule", "Adipose norepinephrine and lipolytic endpoints", "No universal sign for every metabolic process or tissue-specific molecular mediation is assigned.");

study("orginfl-furman-human-acquisition", "furman2017-inflammasome-aging-subgroups", "Stanford–Ellison human blood collection over 2008–2012",
  "Blood expression and serum measurements were acquired across young and older adults returning over five years. Initial-appearance samples and longitudinal older subsets supplied distinct analyses; high/low groups were defined subsequently from expression histories.",
  "Whole-blood gene expression, circulating IL-1beta and clinical covariates",
  "Older individuals were heterogeneous rather than uniformly high in the selected inflammasome-associated profile.",
  ["Not every participant returned in every year; observed stable group differences do not establish an autonomous inflammatory attractor.", "This source and Alpert2019 reuse parts of the same Stanford cohort."], "primary-observation", [0]);
observation("older-inflammatory-heterogeneity", "Older inflammatory profiles are heterogeneous", "orginfl-furman-human-acquisition", "The cohort contains older low- and high-profile groups with differing circulating IL-1beta and clinical associations. Chronological age does not imply a single universal inflammatory baseline or inevitable monotonic decline.");
study("orginfl-furman-module-analysis", "furman2017-inflammasome-aging-subgroups", "Model-defined high/low module groups in human blood datasets",
  "Coexpression modules were screened for age association; extreme older groups used upper/lower quartile expression in at least three of five years. Regression and metabolomics associations were evaluated under source-specific selection and multiplicity rules.",
  "Selected module scores, extreme-group membership and covariate-adjusted associations",
  "Module-high status associated with IL-1beta/hypertension-related measures, without identifying a unique causal inflammaging state variable.",
  ["Module membership is an analytical association and contains genes with differing functions; it is not a measured molecular interaction graph.", "Extreme-group selection and overlap with Alpert2019 prevent treating every analysis as independent confirmation."], "computational-analysis", [0, 1]);
observation("inflammatory-module-inference", "Inflammatory module stratification is an inference", "orginfl-furman-module-analysis", "The source-defined repeated high/low expression strata support conditional associations with inflammatory/clinical measures; they do not establish organism-wide causal thresholds, an optimal immune allocation point or a bistable mechanism.");
study("orginfl-furman-thp-metabolites", "furman2017-inflammasome-aging-subgroups", "Differentiated human THP-1 cells under nucleotide-metabolite perturbation",
  "Figure 3 reports six-hour N4-acetylcytidine/adenine exposure, including 1 mM N4A and 300 micromolar adenine in selected comparisons, with ATP, caspase inhibition and NLRC4-silencing controls. Secreted IL-1beta/IL-18 and caspase processing were measured.",
  "Cytokine secretion and inflammasome-associated processing under specified combinations",
  "The combination induced selected cytokines, with reduced IL-1beta under caspase inhibition/NLRC4 silencing; no single ligand mechanism or systemic human-age causality is reconstructed.",
  ["Displayed Methods give inconsistent PMA differentiation and LPS-control concentrations across sections/captions; no single reconciled value is asserted.", "Cell-line exposures differ from individual circulating concentration histories; no direct ligand binding or complete unique molecular pathway is admitted."], "primary-experiment", [1]);
observation("metabolite-combination-input", "Defined nucleotide-metabolite combination", "orginfl-furman-thp-metabolites", "N4A and adenine were tested separately and together in the six-hour THP-1 preparation, with inhibitory/silencing controls.");
observation("metabolite-inflammasome-output", "Conditional inflammasome-associated cytokine output", "orginfl-furman-thp-metabolites", "Combined N4A/adenine increased selected THP-1 IL-1beta/IL-18 output while caspase/NLRC4 perturbations reduced IL-1beta; these results do not establish that the same metabolites necessarily drive chronic inflammation in every older person.");
operating("metabolite-combination-input", "metabolite-inflammasome-output", "orginfl-furman-thp-metabolites", "Specified metabolite/control conditions alter a bounded cell-line cytokine response.", "Differentiated THP-1 cells in the source six-hour assay", "N4A/adenine combinations and the declared controls", "IL-1beta/IL-18 secretion and processing-associated measurements", "Inconsistent differentiation/control reporting and unisolated biochemical ligand mechanism limit transfer to human aging.");

study("orginfl-baker-lifespan", "baker2016-p16-clearance-aging", "Two naturally aging INK-ATTAC mouse cohorts",
  "p16-promoter-driven FKBP-caspase transgenic mice on mixed or C57BL/6 backgrounds received AP20187 or vehicle twice weekly from twelve months. Cohorts had distinct chow/background regimens; survival and separate eighteen-month organ/healthspan cohorts were evaluated.",
  "Survival, tissue-specific senescence-associated measures and organ/healthspan endpoints",
  "Targeted cell clearance extended median lifespan and improved selected organ measures in these preparations, without improving every tested outcome.",
  ["The p16 promoter selects some cells and is not an exhaustive unique senescence marker; transgene-negative AP controls constrain drug-only interpretation.", "No direct all-tissue cytokine normalization, immune-competence preservation or organism-wide causal aging model follows."], "primary-experiment", [0]);
observation("p16-clearance-aging-input", "p16-selected cell clearance in aging mice", "orginfl-baker-lifespan", "AP20187 versus vehicle activates the ATTAC cell-clearance construct under declared genotype, age, diet and dosing conditions.");
observation("p16-clearance-bounded-benefits", "Selected lifespan and organ effects of p16-cell clearance", "orginfl-baker-lifespan", "The source reports extended median survival and selected organ/healthspan benefits after p16-selected cell clearance. This does not establish that every targeted cell was senescent or that all circulating inflammatory markers, immunity and repair improved together.");
operating("p16-clearance-aging-input", "p16-clearance-bounded-benefits", "orginfl-baker-lifespan", "Construct-dependent clearance changes the measured survival/organ outcomes in the reported cohorts.", "INK-ATTAC mouse cohorts with the declared background and chow", "AP20187 versus vehicle from twelve months", "Source survival and separate organ readouts", "No universal senolytic selectivity, whole-organism inflammatory reset or human lifespan prediction.");
study("orginfl-baker-wound", "baker2016-p16-clearance-aging", "Cutaneous punch wounds in young/old female ATTAC mice",
  "Displayed Extended Data Figure 10 compares 3-mm punch-wound closure when AP20187 is continued versus suspended during healing, including eighteen-month females with or without prior six-month clearance and a separate four-month group.",
  "Serial wound closure and wound-associated GFP-positive cells",
  "AP administration during repair delayed closure; suspension permitted closure despite earlier chronic clearance.",
  ["Previously published detailed wound protocol and raw image measurements were not read; this is local cutaneous repair, not universal antimicrobial surveillance.", "Timing-dependent benefit/harm does not measure a conserved organismal resource-allocation budget."], "primary-experiment", [1]);
observation("clearance-during-wounding-input", "Cell-clearance timing during wound repair", "orginfl-baker-wound", "Continuing versus suspending the ATTAC-triggering drug during skin repair supplies a timing-specific perturbation distinct from the longevity experiment.");
observation("clearance-repair-cost", "Clearance can delay wound closure during active repair", "orginfl-baker-wound", "The source reports delayed closure under AP treatment during wounding, whereas animals with earlier clearance could repair when treatment was suspended. This qualifies the claim that removal of inflammatory/senescence-associated cells always benefits every tissue objective.");
operating("clearance-during-wounding-input", "clearance-repair-cost", "orginfl-baker-wound", "The source clearance schedule changes finite skin-wound closure.", "Female ATTAC mice bearing the specified punch wounds", "Drug continuation versus suspension during healing", "Wound closure over the source observation period", "The result demonstrates context/timing dependence and does not identify a universal surveillance-versus-repair trade-off curve.");
study("orginfl-xu-transplant", "xu2018-senolytics-function", "Young/adult C57BL/6 mice receiving prepared senescent or control preadipocytes",
  "Radiation-induced senescent versus control preadipocytes were injected intraperitoneally, with PBS and non-senescent controls. Physical function was measured after weeks; the source separately tested later finite dasatinib/quercetin courses.",
  "Walking speed, hanging endurance, grip strength and donor/recipient senescence-associated signals",
  "Prepared senescent-cell transplantation impaired selected physical endpoints; later finite senolytic treatment improved selected endpoints.",
  ["Transplant cell doses and preparation are artificial; no source-independent universal threshold or minimum harmful cell count is admitted.", "Physical dysfunction is not itself a direct circulating inflammation measurement or proof of hysteresis."], "primary-experiment", [0]);
observation("senescent-transplant-effect", "Prepared senescent-cell transplantation and finite dysfunction", "orginfl-xu-transplant", "Senescent versus control cell transplantation impaired selected mouse physical-function measures over weeks; finite rescue in a separate treatment arm shows modifiability, without establishing asymmetric inflammatory entry/exit thresholds.");
study("orginfl-xu-human-explant", "xu2018-senolytics-function", "Human adipose tissue explants treated ex vivo",
  "Human adipose explants received dasatinib plus quercetin versus vehicle; senescence-associated markers, caspase staining and secreted cytokines/adipokines were assessed in the source Figure 4 preparation.",
  "Tissue marker abundance and conditioned-medium secretion",
  "D+Q reduced selected senescence-associated cell measures and proinflammatory secretory outputs in these explants.",
  ["Ex-vivo tissue drug exposure is not human clinical systemic treatment or proof of exclusive senescent-cell drug targeting.", "This preparation does not measure whole-animal barrier function, repair allocation or endocrine homeostasis."], "primary-experiment", [1]);
observation("human-explant-dq-input", "D+Q exposure in human adipose explants", "orginfl-xu-human-explant", "The source exposes excised human adipose tissue to D+Q versus vehicle and measures tissue markers separately from conditioned-medium output.");
observation("human-explant-secretory-change", "Ex-vivo secretory change is bounded to treated human adipose", "orginfl-xu-human-explant", "Treated explants showed reduced selected senescence-associated markers and secreted cytokine/adipokine outputs. These are actual preparation-specific secretion measures, not a universal inflammatory adipokine switch or evidence of systemic clinical rejuvenation.");
operating("human-explant-dq-input", "human-explant-secretory-change", "orginfl-xu-human-explant", "D+Q exposure changes the measured human-explant secretory phenotype.", "Excised human adipose tissue", "D+Q versus vehicle under the reported ex-vivo protocol", "Selected tissue markers and conditioned-medium secretion", "Systemic efficacy, complete cellular specificity and all endocrine consequences remain outside the preparation.");
study("orginfl-xu-aged-mouse", "xu2018-senolytics-function", "Naturally aged wild-type mouse D+Q preparations",
  "Twenty-month male mice received intermittent D+Q or vehicle for four months for physical-function/tissue assays; a separate survival cohort began at twenty-four to twenty-seven months with three-day courses every two weeks. Dasatinib 5 mg/kg and quercetin 50 mg/kg were given orally.",
  "Physical function, adipose SASP-associated transcripts and separate late-life survival",
  "Selected physical endpoints improved and the separate survival cohort had longer remaining survival; adipose transcript reductions did not establish total circulating cytokine normalization.",
  ["Distinct cohorts and endpoints are not one continuously observed immune-inflammatory trajectory.", "D+Q can affect non-senescent cells; independent mediation by inflammatory burden alone is unresolved."], "primary-experiment", [1]);
observation("aged-dq-bounded-outcomes", "Naturally aged mouse intervention with distinct endpoints", "orginfl-xu-aged-mouse", "The source reports selected functional benefits and, in a separate late-life cohort, survival effects of intermittent D+Q. Adipose SASP-associated transcript changes are not direct measurements of all systemic secretion, immune competence or resolution dynamics.");

study("orginfl-cantos-main", "ridker2017-cantos-cardiovascular", "CANTOS randomized post-infarction participants with persistent hsCRP elevation",
  "10,061 participants with prior myocardial infarction and hsCRP at least 2 mg/L received placebo or canakinumab 50/150/300 mg subcutaneously every three months. The 300-mg group had an initial loading schedule. Cardiovascular events were adjudicated; median follow-up was 3.7 years.",
  "Nonfatal myocardial infarction/stroke/cardiovascular death, inflammatory biomarkers, lipids, infection events and all-cause mortality",
  "The 150-mg arm met the prespecified multiplicity-adjusted efficacy threshold; lipids were not reduced, pooled fatal infection/sepsis was higher, and all-cause mortality was not significantly reduced.",
  ["The 50- and 300-mg arms did not meet their prespecified adjusted primary-endpoint thresholds; nominal trends are not equivalent confirmation.", "Fatal infection excess concerns pooled treatment groups and an unadjusted safety comparison, not an isolated dose-specific mechanistic budget.", "The selected population excluded important infection/immunocompromise risks and does not represent all aging or inflammatory states."], "primary-experiment", [0, 1]);
observation("cantos-150mg-input", "Randomized IL-1beta inhibition under CANTOS eligibility", "orginfl-cantos-main", "The 150-mg canakinumab versus placebo contrast targets IL-1beta in the specified secondary-prevention population under repeated three-month dosing.");
observation("cantos-cardiovascular-benefit", "CANTOS clinical benefit is endpoint and dose bounded", "orginfl-cantos-main", "The 150-mg arm reduced the primary cardiovascular event composite under the source multiplicity rule, alongside lower inflammatory biomarkers and no lipid lowering. This does not show that every dose, organ or immune function improved.");
observation("cantos-infection-mortality-boundary", "Cardiovascular benefit does not imply unrestricted host benefit", "orginfl-cantos-main", "Pooled canakinumab groups had more fatal infection/sepsis, while all-cause mortality was not significantly reduced. These measured harms/neutral outcomes qualify universal anti-inflammatory benefit without demonstrating a conserved surveillance-repair resource budget.");
operating("cantos-150mg-input", "cantos-cardiovascular-benefit", "orginfl-cantos-main", "Randomized IL-1beta inhibition changes the bounded cardiovascular endpoint in the eligible population.", "Existing post-infarction participants with residual hsCRP elevation", "150-mg canakinumab schedule versus placebo", "Adjudicated primary cardiovascular composite", "No universal anti-inflammatory benefit, pathogen-clearance mechanism, repair cost or whole-system set-point reset is inferred.");
study("orginfl-cantos-diabetes-companion", "everett2018-cantos-diabetes", "CANTOS prespecified diabetes analysis reported in the primary abstract",
  "The read abstract describes the same 10,061-person randomized trial NCT01327846, baseline diabetes/prediabetes classification and incident adjudicated diabetes over median 3.7-year follow-up. Full diabetes-analysis Methods were not read.",
  "Incident diabetes, fasting glucose, HbA1c and inflammatory biomarkers",
  "Despite hsCRP/IL-6 reduction, incident diabetes was not reduced and early HbA1c changes were not sustained consistently.",
  ["Same trial participants and treatment assignments as Ridker2017; these are dependent endpoints, not independent scientific replications.", "Abstract-only interpretation cannot resolve individual insulin secretion/sensitivity mechanisms or every subgroup."], "primary-experiment", [0]);
observation("cantos-inflammation-not-diabetes-prevention", "Inflammatory biomarker decrease did not prevent diabetes in CANTOS", "orginfl-cantos-diabetes-companion", "The primary companion abstract reports no reduction of incident diabetes despite lower hsCRP/IL-6, with no consistent long-term HbA1c/fasting-glucose benefit. This limits a universal claim that suppressing inflammation necessarily breaks every metabolic disorder loop.");

study("orginfl-aged-peritonitis", "arnardottir2014-aged-resolution", "Male BALB/c mice aged two versus twenty months under acute sterile peritonitis",
  "Mice received 0.1 mg zymosan intraperitoneally; exudate neutrophils, monocyte/macrophage counts, cytokines and lipid profiles were sampled over 0–24 hours. Source resolution indices refer to peak neutrophils and the time to half of that peak.",
  "Neutrophil time course, source-defined resolution interval, cytokines and lipid profiles",
  "Aged mice showed greater recruitment and delayed neutrophil decline; greater macrophage abundance did not establish efficient clearance.",
  ["Finite acute sterile challenge is not an aged organism's complete chronic inflammatory state.", "The half-peak index is not full return to baseline, barrier repair, live microbial killing or an entry/exit hysteresis measurement."], "primary-observation", [0]);
observation("aged-resolution-time-course", "Acute resolution dynamics are age and preparation dependent", "orginfl-aged-peritonitis", "Aged BALB/c mice had increased neutrophil accumulation and a longer source-defined half-peak resolution interval after 0.1-mg zymosan. Elevated monocyte/macrophage counts are not evidence of better debris clearance or complete restoration of homeostasis.");
study("orginfl-aged-bmdm-efferocytosis", "arnardottir2014-aged-resolution", "Aged mouse GM-CSF-derived macrophages in an apoptotic-neutrophil uptake assay",
  "Six-day differentiated BMDMs were incubated with RvD3 at 1 nM for fifteen minutes before fluorescent apoptotic PMNs at a 3:1 PMN/macrophage ratio for sixty minutes. Vehicle controls were assayed separately from in-vivo peritonitis.",
  "Fluorescent apoptotic-PMN uptake",
  "RvD3 increased uptake by aged BMDMs under the reported ex-vivo conditions.",
  ["Fluorescent uptake is a bounded efferocytosis proxy, not complete lysosomal degradation, whole-tissue resolution or pathogen killing.", "Human donor PMNs and mouse BMDMs create a defined cross-species assay."], "primary-experiment", [1]);
observation("rvd3-aged-macrophage-input", "RvD3 in an aged-macrophage uptake preparation", "orginfl-aged-bmdm-efferocytosis", "RvD3 versus vehicle perturbs a fifteen-minute pretreatment before the declared one-hour apoptotic-PMN uptake assay.");
observation("aged-efferocytosis-modifiable", "Aged-macrophage efferocytosis remains modifiable", "orginfl-aged-bmdm-efferocytosis", "RvD3 increased fluorescent apoptotic-PMN uptake in aged BMDMs. Impaired uptake in aging is not established as an irreversible loss or proof of a permanently locked resolution-failure regime.");
operating("rvd3-aged-macrophage-input", "aged-efferocytosis-modifiable", "orginfl-aged-bmdm-efferocytosis", "RvD3 changes the bounded aged-BMDM uptake response.", "Defined aged mouse BMDM/human apoptotic-PMN assay", "RvD3 versus vehicle pretreatment", "Fluorescent apoptotic-PMN uptake over sixty minutes", "No complete human tissue recovery or universal resolution mechanism.");
study("orginfl-aged-resolvin-nprm", "arnardottir2014-aged-resolution", "Aged BALB/c mice receiving human-monocyte-derived resolvin nanoparticles",
  "Aged mice received zymosan at 0.1 mg and resolvin-NPRM containing AT-RvD1/AT-RvD3 either before or two hours after challenge; exudates were collected at four hours. Particles derive from separately reprogrammed human monocyte microparticles.",
  "Macrophages containing neutrophil-associated signal, exudate PMNs and LTB4",
  "NPRM increased efferocytosis-associated events and lowered PMN counts; timing affected the LTB4 result.",
  ["Four-hour results do not establish a complete resolution interval, long-term return to baseline or continued defense competence.", "This is a mouse challenge with a complex delivered particle mixture, not direct human anti-aging therapy or one uniquely identified active molecule."], "primary-experiment", [2]);
observation("aged-nprm-input", "Timed resolvin-NPRM delivery in aged mice", "orginfl-aged-resolvin-nprm", "The source compares delivered resolvin-loaded monocyte-derived particles against the challenge/control preparation with administration before or two hours after zymosan.");
observation("aged-nprm-bounded-resolution-output", "Early resolution-associated outputs can improve in aged mice", "orginfl-aged-resolvin-nprm", "At four hours the source reports increased macrophage efferocytosis-associated events and reduced PMN accumulation after resolvin-NPRM, with LTB4 reduction depending on administration time. Complete resolution and all antimicrobial functions were not measured by this finite endpoint.");
operating("aged-nprm-input", "aged-nprm-bounded-resolution-output", "orginfl-aged-resolvin-nprm", "Timed complex-particle delivery alters bounded early resolution-associated readouts.", "Aged mice under the source 0.1-mg sterile zymosan challenge", "Resolvin-NPRM versus the specified control and timing", "Four-hour exudate PMN/efferocytosis-associated events", "No full time-to-baseline restoration, clinical efficacy or sole active-molecule attribution.");
study("orginfl-schwab-timed-mediators", "schwab2007-resolution-programs", "FVB mouse zymosan peritonitis with timed pro-resolving mediator delivery",
  "RvE1, PD1 or an aspirin-triggered lipoxin analog at 300 ng was administered with zymosan or twelve hours later, near peak inflammation; exudate cells were assayed at twenty-four hours and source resolution indices compared.",
  "PMN/mononuclear accumulation and source-defined resolution indices",
  "The tested mediators retained activity when delivered after onset; their effects on cell subsets differed.",
  ["Reduced recruitment and increased exit both can change exudate counts; this readout alone does not isolate clearance mechanism.", "The resolution interval is defined relative to neutrophil peak, not complete restoration of every tissue function."], "primary-experiment", [0]);
observation("post-peak-lipid-input", "Mediator delivery after inflammatory onset", "orginfl-schwab-timed-mediators", "The source compares mediator delivery at initiation versus twelve hours after zymosan, allowing an established response to be perturbed.");
observation("post-peak-pmn-resolution-output", "Delayed mediator delivery changes finite neutrophil accumulation", "orginfl-schwab-timed-mediators", "The tested pro-resolving mediators reduced twenty-four-hour PMN accumulation even when delivered at twelve hours. This supports active modification of a response while preserving the distinction between recruitment, efflux and complete return to baseline.");
operating("post-peak-lipid-input", "post-peak-pmn-resolution-output", "orginfl-schwab-timed-mediators", "Timed mediator delivery modifies the source neutrophil response after onset.", "FVB mice under the source sterile zymosan protocol", "300-ng mediator versus source control, with administration timing retained", "Exudate PMN counts and source resolution indices", "No universal cytokine set point or proof of pathogen-killing preservation.");
study("orginfl-schwab-phagocytosis", "schwab2007-resolution-programs", "Isolated mouse macrophage/apoptotic-PMN co-incubation",
  "Elicited macrophages were exposed to RvE1/PD1 or comparator lipid mediator before apoptotic PMNs at a 2:1 PMN/macrophage ratio. Figure 2 reports 100-nM mediator conditions and sixty-minute uptake, with cytokine measurements.",
  "F4/80/Gr-1 uptake-associated events and selected cytokine outputs",
  "RvE1/PD1 enhanced PMN uptake in vitro and altered selected cytokines; not every inflammatory mediator changed.",
  ["In-vitro uptake is separate from in-vivo PMN accumulation and particle transport; they are not one unmeasured end-to-end clearance trajectory.", "Apoptotic-neutrophil uptake is not direct live-pathogen destruction."], "primary-experiment", [0]);
observation("lipid-macrophage-input", "Pro-resolving lipid in an uptake assay", "orginfl-schwab-phagocytosis", "Defined RvE1/PD1 versus vehicle exposure precedes macrophage/apoptotic-PMN co-incubation.");
observation("lipid-efferocytosis-output", "Enhanced uptake differs from global immune suppression", "orginfl-schwab-phagocytosis", "The tested lipids enhanced apoptotic-PMN uptake with selective cytokine changes in this isolated-cell assay; cytokine effects and phagocytic uptake are distinct outputs, and a loss of all defense competence is not demonstrated.");
operating("lipid-macrophage-input", "lipid-efferocytosis-output", "orginfl-schwab-phagocytosis", "The tested lipid exposure changes macrophage uptake under the declared conditions.", "Isolated macrophage/apoptotic-neutrophil co-incubation", "RvE1/PD1 versus vehicle", "Uptake-associated events over sixty minutes", "No live-pathogen survival endpoint or complete intracellular degradation mechanism is inferred.");
study("orginfl-schwab-inhibitor-rescue", "schwab2007-resolution-programs", "Mouse sterile peritonitis under COX-2/LOX inhibitor and mediator rescue",
  "NS-398 or baicalein at 100 micrograms was administered thirty minutes before zymosan, with or without 300-ng mediator supplementation. Twenty-four-hour exudate counts and zymosan-associated material in lymph nodes/spleen were assayed.",
  "Exudate leukocytes/PMNs and lymphatic-organ zymosan-associated material",
  "Inhibitors produced a resolution-deficit phenotype; mediator addition partly restored tested outputs under the pharmacological preparation.",
  ["Broad enzyme inhibitors alter multiple products; rescue does not isolate every endogenous biosynthetic route.", "Lymph-node/spleen particle appearance does not prove total degradation or complete cell lineage tracing."], "primary-experiment", [1]);
observation("resolution-inhibitor-rescue-input", "Perturbed resolution with defined add-back", "orginfl-schwab-inhibitor-rescue", "COX-2/LOX inhibitor schedules and mediator add-back provide an explicit perturbation/rescue contrast in the same peritonitis preparation.");
observation("resolution-deficit-rescue-output", "Resolution deficit can be experimentally modifiable", "orginfl-schwab-inhibitor-rescue", "Enzyme inhibition increased residual inflammatory cells and reduced lymphatic-organ zymosan-associated signal; mediator add-back rescued selected endpoints. Failure of resolution is conditional here and not necessarily a permanently self-maintaining organism-wide state.");
operating("resolution-inhibitor-rescue-input", "resolution-deficit-rescue-output", "orginfl-schwab-inhibitor-rescue", "The source pharmacological/add-back contrast changes bounded resolution-related endpoints.", "Mouse zymosan peritonitis under the specified inhibitor schedule", "Inhibitor alone versus mediator add-back and source controls", "Exudate counts and particle-associated lymphatic readouts", "No universal pro-resolution deficiency, sole mediator mechanism or permanent failure attractor.");

study("orginfl-arnold-muscle-trajectories", "arnold2007-monocyte-myogenesis", "Young mouse skeletal muscle after notexin injury",
  "Four- to eight-week mouse preparations received notexin into tibialis anterior; CX3CR1/Ly6C and bead-labeling histories were sampled with histology and flow cytometry over subsequent days.",
  "Recruited cell phenotypes, subset tracing and muscle histology",
  "Inflammatory-phenotype recruited monocytes changed phenotype during repair, rather than constituting two immutable macrophage kinds.",
  ["Subset markers and tracing are not a universal M1/M2 taxonomy, full clonal lineage history or direct whole-muscle force measurement."], "primary-observation", [0]);
observation("injury-myeloid-state-transition", "Injury-associated myeloid trajectories", "orginfl-arnold-muscle-trajectories", "The source traces recruited Ly6C-positive inflammatory monocytes toward a later anti-inflammatory macrophage-associated phenotype in injured mouse muscle. Temporal coordination can support repair without proving a fixed antagonism between every immune and repair task.");
study("orginfl-arnold-human-myogenesis", "arnold2007-monocyte-myogenesis", "Human blood-derived macrophage and myogenic-precursor co-culture",
  "Macrophages received forty-eight-hour LPS/IFNgamma, IL-4 or dexamethasone/IL-10 treatments before myogenic precursor co-culture; growth/BrdU, myogenin and fusion were measured over one to three days.",
  "Precursor proliferation, myogenin expression and myotube fusion",
  "Inflammatory activation favored growth while reducing differentiation; alternative treatments increased selected differentiation/fusion endpoints.",
  ["Human in-vitro programs are distinct from mouse tissue tracing/depletion; treatments and donors need not map one-to-one to in-vivo subsets.", "Different myogenic endpoints are not a measured whole-organism surveillance/repair resource budget."], "primary-experiment", [1]);
observation("macrophage-myogenesis-input", "Macrophage activation in a precursor co-culture", "orginfl-arnold-human-myogenesis", "Defined macrophage activation histories are compared before their contact/co-culture with human myogenic precursors.");
observation("myogenesis-stage-dependent-output", "Immune context affects stages of myogenesis differently", "orginfl-arnold-human-myogenesis", "LPS/IFNgamma-treated macrophages favored precursor proliferation while reducing differentiation/fusion; IL-4 or DEX/IL-10 programs favored selected differentiation measures. More growth and more differentiation are not interchangeable maxima.");
operating("macrophage-myogenesis-input", "myogenesis-stage-dependent-output", "orginfl-arnold-human-myogenesis", "Defined macrophage programs alter bounded myogenic responses.", "Human macrophage/myogenic-precursor co-culture", "Source macrophage activation treatments", "BrdU/growth, myogenin and fusion endpoints over one to three days", "No fixed universal macrophage binary or organism-wide immune allocation envelope.");
study("orginfl-arnold-early-depletion", "arnold2007-monocyte-myogenesis", "CD11b-DTR mouse circulating-monocyte depletion around muscle injury",
  "Intravenous DT at 12 ng/g was given at or twelve hours before notexin, including a double schedule. Blood depletion was transient, and histological muscle regeneration was assessed through day seven; a day-four intravenous schedule provided a distinct timing control.",
  "Necrotic-fiber persistence and regenerating-fiber histology",
  "Early depletion impaired removal/regeneration despite later circulating-cell return; day-four intravenous depletion did not reproduce the early phenotype.",
  ["DT/genotype and delivery route define the perturbation; late intramuscular macrophage depletion is a separate preparation.", "No infection or malignancy-surveillance readout and no resource-budget estimate are present."], "primary-experiment", [2]);
observation("early-monocyte-depletion-input", "Early circulating-monocyte depletion", "orginfl-arnold-early-depletion", "The source removes circulating CD11b-DTR-associated monocytes transiently around injury while retaining later recovery and timing controls.");
observation("early-inflammatory-cells-enable-repair", "Early inflammatory recruitment can enable repair", "orginfl-arnold-early-depletion", "Early depletion delayed necrotic-fiber removal and regeneration even though circulating cells returned; later intravenous depletion had a different outcome. Inflammation-associated cell recruitment is not universally antagonistic to repair.");
operating("early-monocyte-depletion-input", "early-inflammatory-cells-enable-repair", "orginfl-arnold-early-depletion", "Depletion timing changes source muscle-regeneration histology.", "Young CD11b-DTR mice under notexin injury", "Early versus control/timed intravenous DT schedules", "Necrotic and regenerating muscle-fiber histology through day seven", "No quantitative universal surveillance-versus-repair trade-off.");
study("orginfl-arnold-late-local-depletion", "arnold2007-monocyte-myogenesis", "Late intramuscular macrophage depletion during mouse muscle regeneration",
  "DT at 25 ng/g was injected intramuscularly on days five and six after injury; regeneration diameter was evaluated at day ten with the needle-puncture area excluded from quantification.",
  "Macrophage-associated depletion and regenerating myofiber diameter",
  "Late local depletion reduced growth of regenerating fibers in the source field-selection protocol.",
  ["This differs from intravenous depletion of circulating monocytes; the two routes cannot be pooled as identical interventions.", "Myofiber diameter is not complete mechanical recovery or a measure of pathogen/cancer clearance."], "primary-experiment", [2]);
observation("late-local-macrophages-repair", "Local macrophages contribute to later fiber growth", "orginfl-arnold-late-local-depletion", "Late local depletion reduced regenerating-fiber diameter, adding a later source-bound supportive role distinct from the early inflammatory recruitment requirement.");

study("orginfl-wang-lps-tolerance", "wang2016-metabolic-tolerance", "Young male mice under sterile LPS endotoxemia",
  "Seven- to ten-week male C57BL/6J mice received intraperitoneal LPS; source Figure 2 uses 15 mg/kg. Glucose or 2DG was delivered under the stated twice-daily regimen beginning one hour after sterile challenge, with vehicle/feeding controls.",
  "Survival and circulating TNF/IL-6/hepatic acute-phase measurements",
  "Glucose worsened and inhibition of glucose utilization improved survival without corresponding differences in the tested inflammatory-response measures.",
  ["Sterile high-dose LPS differs from chronic low-dose pump exposure, live bacterial infection and human feeding decisions.", "The result supports a tolerance-related interpretation, not a claim that every inflammatory mediator/pathogen measure is unchanged."], "primary-experiment", [0]);
observation("lps-nutrient-perturbation-input", "Nutrient utilization during a sterile inflammatory challenge", "orginfl-wang-lps-tolerance", "The source perturbs glucose availability/utilization after the same sterile LPS challenge, with defined timing and vehicle controls.");
observation("lps-tolerance-survival-output", "Survival can change without lower measured cytokines", "orginfl-wang-lps-tolerance", "In this LPS model, glucose worsened and 2DG improved survival without corresponding changes in measured TNF/IL-6/hepatic acute-phase responses. Better survival is not automatically stronger pathogen resistance or simply lower inflammatory amplitude.");
operating("lps-nutrient-perturbation-input", "lps-tolerance-survival-output", "orginfl-wang-lps-tolerance", "Post-challenge glucose-utilization perturbation changes survival in the bounded sterile preparation.", "Young male mouse sterile LPS model", "Glucose/2DG versus source controls starting one hour after challenge", "Survival with separate measured inflammatory responses", "No universal metabolic recommendation, bacterial-clearance inference or direct transfer to chronic low-grade inflammation.");
study("orginfl-wang-influenza", "wang2016-metabolic-tolerance", "Young male mice infected intranasally with influenza A/WSN/33",
  "Influenza-infected male mice received enteral supplementation or glucose-utilization perturbation beginning eight hours after infection; source experiments used distinct viral doses. Lung/BAL plaque assays and viral nucleoprotein measurements were evaluated at day six, alongside survival and inflammatory measures.",
  "Survival, lung/BAL viral load and selected antiviral/inflammatory measures",
  "Nutrition supported survival while 2DG removed the benefit or caused lethality; measured day-six viral burden did not explain the 2DG outcome.",
  ["Viral-dose groups are not one matched dose series with the sterile-LPS model.", "Unchanged measured viral burden does not prove every resistance mechanism is identical; no human dietary guidance follows."], "primary-experiment", [1]);
observation("influenza-nutrient-input", "Metabolic perturbation during influenza infection", "orginfl-wang-influenza", "The source applies nutritional supplementation/2DG after influenza infection under its own timing, dose groups and controls.");
observation("influenza-opposite-metabolic-dependence", "Metabolic tolerance depends on inflammatory context", "orginfl-wang-influenza", "2DG worsened influenza survival without a corresponding difference in measured day-six viral load; feeding had a beneficial survival effect. Its direction differs from the separately tested sterile-LPS preparation, preventing one universal metabolic-support sign.");
operating("influenza-nutrient-input", "influenza-opposite-metabolic-dependence", "orginfl-wang-influenza", "The tested nutrient-utilization conditions change the bounded influenza-survival outcome.", "Male mice in the source influenza model", "Feeding/glucose-utilization perturbations versus their matched controls", "Survival with separate day-six viral-load assays", "Different infection and sterile-challenge preparations do not define a universal numerical trade-off or common resource optimum.");

study("orginfl-alpert-acquisition", "alpert2019-immune-age", "Longitudinal Stanford healthy-adult blood immune monitoring",
  "135 adults were sampled across up to nine years in an influenza-vaccination cohort. PBMC/serum collection, flow/CyTOF and phospho-flow/gene-expression profiling used different available year panels; repeated samples do not form a randomized aging exposure.",
  "Cell-subset frequencies and source-specific cytokine-signaling/expression measurements",
  "Individuals differed in their cellular-frequency trajectories and rates of change.",
  ["Blood subset frequencies are not complete tissue immunity, dose thresholds, one universal decline metric or a direct lifespan intervention.", "Panel/batch variation led the authors to restrict analytical subsets and years; selection cannot be ignored.", "Stanford participants overlap the Furman2017 source rather than providing an independent cohort."], "primary-observation", [0]);
observation("immune-longitudinal-heterogeneity", "Longitudinal immune composition has heterogeneous trajectories", "orginfl-alpert-acquisition", "The monitored adults had different cell-subset-frequency trajectories over years. Such measurements supply more than a cross-sectional age comparison but do not directly reveal a unique organism-wide immune set point, activation threshold or irreversible loss of flexibility.");
study("orginfl-alpert-trajectory-model", "alpert2019-immune-age", "Computed immune-age trajectory from Stanford longitudinal immune measurements",
  "Selected cellular frequencies were scaled and entered into diffusion-map/pseudotime modeling, with older samples defining trajectory and remaining years mapped by nearest neighbors. Statistical models related rates, baseline values, cytokine-response scores and gene expression.",
  "Fitted trajectories, inferred convergence and IMM-AGE score",
  "The fitted analysis describes age-associated composition dynamics and response-score associations, conditional on model/feature selection.",
  ["Pseudotime is a constructed coordinate and not experimentally imposed time, a measured physical attractor potential or a causal cytokine threshold.", "The source notes that longitudinal analysis of some cytokine-response features was not technically applicable; cross-sectional mapping does not make them longitudinal dose-response measurements."], "computational-analysis", [1]);
observation("immune-age-model-boundary", "Immune-age convergence is model dependent", "orginfl-alpert-trajectory-model", "The fitted IMM-AGE/trajectory summarizes selected cellular-frequency dynamics and associations. Inferred attractor language is an analytical interpretation, not direct proof of inflammatory bistability, universal threshold drift or a causal architecture of the entire immune system.");
study("orginfl-alpert-framingham-projection", "alpert2019-immune-age", "Independent Framingham expression data with projected immune-age score",
  "A refined gene signature related to Stanford cell-derived IMM-AGE was projected onto Framingham whole-blood expression; mortality models adjusted for specified cardiovascular covariates. This external dataset uses an approximate expression score, not direct repeated cell-derived IMM-AGE.",
  "Expression-projected score and all-cause mortality association",
  "The projected score associated with survival after source-specified adjustment.",
  ["External data are independent of Stanford acquisition, but outcome/model association is not randomized immune rejuvenation or direct replication of the same cellular measurement.", "Residual confounding, feature selection and cell-composition effects limit causal interpretation."], "computational-analysis", [1]);
observation("immune-age-external-projection", "External outcome association differs from causal validation", "orginfl-alpert-framingham-projection", "The Framingham expression-projected IMM-AGE approximation associated with mortality under source adjustment. This supports a bounded external association and does not verify a whole-organism set-point mechanism or a reversible therapeutic target.");

study("orginfl-mannick-phase2b", "mannick2021-torc1-respiratory-trials", "Phase 2b randomized older-adult RTB101 dose-finding trial",
  "652 participants aged 65–85 with source risk criteria entered sequential parts in New Zealand/USA. RTB101 schedules, with or without everolimus, were tested over sixteen weeks with eight-week off-drug follow-up. Laboratory-confirmed RTIs were the primary endpoint.",
  "Participants with laboratory-confirmed RTI and selected clinical/safety endpoints",
  "The fixed-sequence multiplicity-controlled analysis stopped at the first nonsignificant combination comparison; a separately prespecified unadjusted pooled-parts analysis favored 10-mg once-daily RTB101.",
  ["A positive unadjusted exploratory comparison does not override the stopped gatekeeping analysis.", "Regimens, sites, risk groups and endpoint definitions differ from phase3; no universal improvement in all immune objectives is admitted."], "primary-experiment", [0]);
observation("torc1-phase2b-analysis-boundary", "Phase2b benefit depends on the prespecified analysis", "orginfl-mannick-phase2b", "A once-daily RTB101 group had fewer laboratory-confirmed RTIs in the prespecified unadjusted analysis, while the multiplicity-controlled fixed-sequence procedure stopped after the first comparison failed. The exploratory signal is not a blanket confirmatory gain in immune function.");
study("orginfl-mannick-phase3", "mannick2021-torc1-respiratory-trials", "Independent phase3 randomized older-adult RTB101 clinical trial",
  "1,024 adults aged at least65 in New Zealand/Australia were randomized to RTB101 10mg once daily or placebo for sixteen weeks, with four-week off-drug follow-up. Unlike phase2b, smokers/COPD were excluded and the primary endpoint was clinically symptomatic respiratory illness irrespective of laboratory confirmation.",
  "Clinically symptomatic respiratory illness under intention-to-treat analysis",
  "The primary clinical endpoint did not improve; formal testing of subsequent endpoints stopped under gatekeeping.",
  ["Changed population and ascertainment prevent treating phase2b and phase3 as identical assays; the negative primary result still limits broad efficacy claims.", "Nominal secondary or virus-specific trends are not confirmed clinical efficacy after gatekeeping failed."], "primary-experiment", [1]);
observation("torc1-phase3-null-clinical-endpoint", "Phase3 primary respiratory endpoint was not improved", "orginfl-mannick-phase3", "RTB101 did not reduce the phase3 primary clinically symptomatic respiratory-illness endpoint; the reported odds ratio was near unity with uncertainty spanning benefit and harm. Molecular-response or phase2b signals cannot substitute for this clinical outcome.");
study("orginfl-mannick-phase3-biomarker", "mannick2021-torc1-respiratory-trials", "Selected phase3 whole-blood biomarker sample",
  "Baseline/week16 RNA from180 treated and180 placebo participants was analyzed for twenty IFN-induced antiviral genes. Sampling first included eligible laboratory-confirmed cases then randomly filled noncases with paired blood, subject to available budget.",
  "Paired whole-blood antiviral gene-expression changes",
  "The study reports greater IFN-induced gene upregulation in the treated sample despite the separate null primary clinical endpoint.",
  ["This sample is selected and dependent on phase3 participants, not an independent trial or proof that each gene causes protection.", "Gene-expression induction is not pathogen clearance, clinical benefit, a quantified activation threshold or complete innate immune competence."], "primary-experiment", [2]);
observation("torc1-gene-clinical-dissociation", "Antiviral gene induction does not guarantee clinical benefit", "orginfl-mannick-phase3-biomarker", "The selected phase3 blood sample showed treatment-associated antiviral gene upregulation, while the independently defined primary trial endpoint was null. Endpoint types and sampling cannot be merged into one favorable immune-age score.");

const excludedDefaults = [
  "Catalogue Weight, Requirements coverage, Phase, TypeRole, Science IDs, ScientificStatus and SOMA object/process/pattern/property assignments are provenance or modeling choices, not measured causal laws.",
  "Catalogue Necessity, DependencyType, OntologicalRole, CausalDirections and InteractionModes do not supply universal necessary-parent, feedback-sign, historical-origin or simultaneous-composition semantics.",
  "Catalogue Quantization CarrierGroupId/CarrierTypeId and N_min/N_crit/N_sat provide no operational minimal cell count, organism count, critical concentration or saturation law.",
  "Unlinked generic Evidence entries are bibliographic leads only; repeated endpoints/panels and companion papers from one trial do not become independent replications."
];
export const CARD_SCOPES = [];
function card(index, originalName, slug, scope, findingIds, topics, parents, unresolved) {
  const findingClaims = findingIds.map((id) => findingIndex.get(id).claimId), studyIds = [...new Set(findingIds.map((id) => findingIndex.get(id).studyId))];
  const sourceIds = [...new Set(studyIds.map((id) => studyIndex.get(id).record.sourceId))], claimId = `D-org-infl-${slug}-scope`;
  const scientificCitations = sourceIds.flatMap((sourceId) => sourceIndex.get(sourceId).source.review.locators.map((locator) => citation(sourceId, locator, "limits")));
  claims.push({ id: claimId, kind: "review-finding", statement: scope, scope: `Reconstruction of original card 5.${index}; named source preparations and explicit limits only.`, status: "definition", citations: [citation("legacy-5", `/${index}`, "provenance"), ...scientificCitations], checkIds: [], limitations: [...excludedDefaults, ...unresolved, commonLimit] });
  node(slug, `${originalName}: reviewed scope`, "definition", scope, [claimId], [{ sourceId: "legacy-5", locator: `/${index}` }, ...scientificCitations.map(({ sourceId, locator }) => ({ sourceId, locator }))], [...excludedDefaults, ...unresolved], "definition");
  for (const findingId of findingIds) {
    const finding = findingIndex.get(findingId);
    relations.push({ id: `organismal:infl-${findingId}-interprets-${slug}`, source: `org:infl-${findingId}`, target: `org:infl-${slug}`, kind: "descriptive", role: "interpretation-dependency", assertion: "The source-local finding constrains interpretation of this catalogue concept; it is not a universal operating dependency.", claimIds: [claimId, finding.claimId, studyIndex.get(finding.studyId).methodId], contextIds: [finding.studyId] });
  }
  const qualify = ([topic, disposition, reason, selected]) => ({ topic, disposition, reason, claimIds: selected ? selected.map((id) => findingIndex.get(id)?.claimId ?? id) : [claimId, ...findingClaims] });
  CARD_SCOPES.push({ code: `5.${index}`, sourceIndex: index, originalName, scope, nodeIds: [`org:infl-${slug}`, ...findingIds.map((id) => `org:infl-${id}`), ...studyIds.map((id) => `org:infl-${id}-context`)], claimIds: [...new Set([claimId, ...findingClaims, ...studyIds.map((id) => studyIndex.get(id).methodId)])], assertions: topics.map(qualify), parentDispositions: parents.map(([parentCode, disposition, reason, selected]) => { const { claimIds } = qualify([parentCode, disposition, reason, selected]); return { parentCode, disposition, reason, claimIds }; }), excludedDefaults: [...excludedDefaults], unresolved });
}

card(9, "Organism-Scale Immune Defense Architecture", "immune-architecture-scope",
  "Organism-scale defense is represented as a scoped organizational description of interacting tissue, barrier, recognition, effector and regulatory preparations. Mouse gut/community perturbations, local muscle recruitment/repair, macrophage killing and distinct clinical intervention outcomes establish different aspects of coordination. They do not reconstruct a minimal complete defense object, a unique bounded ontological unit, every adaptive/innate mechanism or a universal necessary-parent architecture. Surveillance, inflammatory amplitude, tissue compatibility and recovery must retain separate operational readouts.",
  ["host-community-permeability-interaction", "inflammation-not-antibacterial-capacity", "early-inflammatory-cells-enable-repair", "cantos-cardiovascular-benefit", "cantos-infection-mortality-boundary", "torc1-phase3-null-clinical-endpoint"],
  [["Stable integration across tissues rather than coexistence of mechanisms", "qualified", "Cross-compartment perturbations support some coordination, but no admitted experiment establishes sufficiency/minimality of the entire immune architecture."],
   ["Barrier, innate recognition and systemic cytokine coupling", "supported", "The mouse recolonization and TNF/killing preparations test source-specific compartment and signaling relationships.", ["host-community-permeability-interaction", "inflammation-not-antibacterial-capacity"]],
   ["Myeloid and lymphoid specialization, transformed/infected-target surveillance and tolerance", "qualified", "This module measures selected myeloid and clinical outputs; it does not replace separately reviewed adaptive/NK preparations or prove one universal necessary sequence."],
   ["Effective defense preserves tissue compatibility and restoration", "qualified", "Early recruited cells support repair in one injury case, whereas clinical IL-1beta inhibition has endpoint-specific benefits and infection risk; preserving all objectives simultaneously is not established."],
   ["Persistent distributed defense object with bounded operational unity", "unresolved", "Object identity and boundary are modeling choices requiring an explicit organism/species/context; no single measured whole-system unit or origin sequence is supplied."],
   ["Ablation proves every named original parent necessary", "excluded", "Selective interventions identify bounded dependencies, not the entire inherited parent list or a minimal complete architecture."]],
  [["5.0", "unresolved", "Tissue organization supplies existing anatomy, but these immune cases do not manipulate the full morphogenesis history as an immediate necessary cause."],
   ["4.12", "qualified", "Cellular immunity describes some constituent responses; class membership is not an additional measured universal prerequisite."],
   ["4.3", "qualified", "Specific TNF/IL-1beta and recruitment routes are measured, with distinct carriers and no generic signaling weight."],
   ["4.23", "qualified", "Specified microbial/damage recognition contributes to selected cases; no one DAMP/PRR route is necessary for every defense."],
   ["4.24", "excluded", "Inflammasome involvement in selected contexts does not make inflammasome assembly necessary for every adaptive or barrier response."],
   ["4.25", "qualified", "Cytokine baseline/output are preparation-dependent measurements, not a single universal prerequisite or scalar operating point."],
   ["4.26", "excluded", "Senescence is not a necessary precondition for the existing young injury, infection or clinical defense preparations."],
   ["4.27", "excluded", "SASP is one possible tissue input; no evidence makes it necessary for organism-scale protection in general."],
   ["5.22", "qualified", "Localized inflammatory organization is observed in particular tissues but is not required for every protective function."],
   ["5.23", "excluded", "Gut dysfunction/translocation is not necessary for intact defense architecture; treating a failure state as its prerequisite reverses scope."],
   ["5.25", "unresolved", "Outcome-specific benefit/risk does not establish a single prior universal resilience-constraint trade-off envelope."],
   ["4.28", "qualified", "Defined myeloid state transitions contribute to muscle repair; their source-specific effect does not establish a universal macrophage binary."],
   ["4.29", "qualified", "Chronic/age-associated T-cell constraints are separate reviewed contexts and not required for normal defense in all ages."],
   ["4.30", "qualified", "NK surveillance is a separately scoped immune mode, without evidence that it is necessary for every organism/species protective architecture."],
   ["5.28", "unresolved", "Adipose immune remodeling is a contextual mammalian process; these data do not establish its necessity or general sign for every defense."],
   ["5.30", "unresolved", "A global surveillance-repair allocation budget remains unmeasured and cannot be used as a necessary or established enabling cause."]],
  ["A complete species-specific immune component/interface inventory, universal defense minima, evolutionary origin and independent scientific review remain open."]);

card(22, "Tissue Inflammatory Microenvironments", "tissue-niches-scope",
  "Tissue inflammatory organization is admitted through localized human adipose macrophage/damaged-adipocyte structures, depot-specific cellular abundance and mouse adipose macrophage/lipolysis perturbations. Spatial co-localization, measured function and hypothesized persistence mechanisms remain distinct. The sources do not establish that every niche is stabilized by transport limitation, matrix barriers, one scalar activation threshold, SASP or trained memory, nor that local histology proves an autonomous attractor.",
  ["spatial-adipose-damage-niches", "adipose-macrophage-abundance", "human-adipose-cell-composition", "old-atm-lipolysis-output", "nlrp3-lipolysis-output"],
  [["Inflammation is spatially partitioned into tissue domains", "supported", "Human crown-like structures and depot differences provide actual localization/heterogeneity measurements."],
   ["Cytokine composition, cell residence and functional state define the same niche variable", "qualified", "Histology, cell fractions and distinct functional assays have different acquisition boundaries; abundance is not equivalent to activation/function."],
   ["Transport, ECM, vascular access and metabolic constraints stabilize niches", "unresolved", "The selected localization studies do not directly perturb or measure a complete transport/ECM/vascular stabilization mechanism."],
   ["Local macrophage organization changes metabolic response", "supported", "Matched mouse co-cultures alter a bounded norepinephrine/lipolysis readout.", ["old-atm-lipolysis-output", "nlrp3-lipolysis-output"]],
   ["Persistence, activation threshold, resolution and systemic-response bias", "unresolved", "Static histology and finite co-cultures do not measure long-term attractor stability, dose thresholds or all response/clearance dynamics."],
   ["Every localized inflammatory pattern drives chronic pathology", "excluded", "Measured localization/function is not sufficient evidence for a universal chronic disease progression rule."]],
  [["4.27", "unresolved", "The admitted adipose structures do not isolate a SASP requirement; senescent and non-senescent injury sources are not interchangeable."],
   ["4.25", "qualified", "Preparation-dependent cytokine/transcript outputs are relevant, but a necessary shared basal cytokine condition is not isolated."],
   ["5.4", "unresolved", "No complete matrix/transport boundary manipulation establishes the original generic structural parent as necessary."],
   ["5.5", "qualified", "Local metabolic responses are measured; a generic organismal homeostasis weight or universal stabilization mechanism is not."],
   ["5.23", "excluded", "Gut barrier failure is not manipulated or required in the admitted human localization/mouse co-culture preparations."],
   ["5.26", "unresolved", "Niche localization is not an actual clearance/resolution-capacity assay; no universal signed parent relation follows."],
   ["4.28", "qualified", "Macrophage-associated structure and selected functional contrasts are supported locally; fixed polarization classes and universal necessity are not."],
   ["4.32", "unresolved", "No training/washout/rechallenge experiment establishes innate memory as the cause of these localized adipose structures."]],
  ["Direct niche transport/ECM perturbation, local concentration gradients, cell lineage/residence durations and source-independent longitudinal persistence remain unmeasured here."]);

card(23, "Gut Barrier Dysfunction and Microbial-Component Translocation", "gut-barrier-scope",
  "Gut barrier dysfunction and microbial exposure are reconstructed through distinct mouse tracer/Ussing permeability assays, Nod2-dependent plasma MDP activity, recolonization perturbations and source-bound endotoxin-activity measurements. Host age and community history modify outcomes, and anti-TNF microbiota change does not demonstrate permeability rescue. LPS, MDP, tracer permeability, intact bacterial translocation and clinical inflammatory disease are not interchangeable. Matrix remodeling, universal junction failure and a necessary chronic leak-to-aging progression remain unresolved.",
  ["host-community-permeability-interaction", "age-microbiota-conditional-inflammation", "anti-tnf-microbiota-not-permeability-rescue", "diet-endotoxin-activity", "antibiotics-associated-endotoxin-change"],
  [["Boundary integrity and systemic microbial-component exposure", "supported", "The mouse source measures tracer/Ussing flux and distinct plasma microbial-product reporter activity under defined preparations."],
   ["Any higher plasma endotoxin proves paracellular leak", "excluded", "LAL activity, MDP reporter and tracer flux are different assays; oral lipid handling and delivery route are not uniquely identified by one plasma readout."],
   ["Progressive ECM remodeling and junction stress form the complete mechanism", "unresolved", "The admitted primary material does not identify every matrix/junction change or sufficient causal chain for all contexts."],
   ["Community and host age influence barrier outcomes", "supported", "Crossed recolonization separates community age from recipient-age susceptibility.", ["host-community-permeability-interaction"]],
   ["Barrier restoration necessarily follows inflammatory suppression", "excluded", "The reported anti-TNF comparison altered microbiota without demonstrated FITC-dextran permeability improvement; its exact dose and duration remain unresolved.", ["anti-tnf-microbiota-not-permeability-rescue"]],
   ["Chronic permeability stabilizes all metabolic/systemic inflammatory disease", "qualified", "Source-bound coupling is supported but no universal necessary cause, all-species transfer or full feedback/hysteresis measurement is present."],
   ["Permeability protocol can be taken from the uncorrected main article", "excluded", "The 2018 correction changes FITC-dextran concentration and discloses shared experiments; dependence and unresolved volume rendering must remain explicit."]],
  [["5.4", "qualified", "The physical gut interface is relevant, but generic matrix integration is not independently isolated as a necessary source of measured flux."],
   ["4.7", "qualified", "An existing epithelial boundary is part of the preparation; the original generic coordination card supplies no universal causal coefficient."],
   ["4.6", "unresolved", "Specific epithelial stress contributions are not fully separated from host age, colonization and treatment history."],
   ["5.5", "unresolved", "A complete systemic homeostatic control mechanism is not identified by local permeability and cytokine assays."],
   ["5.26", "unresolved", "These studies do not establish inflammatory resolution capacity as a universal enabling parent of all barrier failure."],
   ["4.28", "qualified", "Macrophage functional effects and systemic TNF contribute in some mouse contexts, without proving that every gut leak requires the same myeloid state."]],
  ["Microbial molecule identity/transport route, direct junction/ECM mediation, complete dose-response and human longitudinal transfer require additional acquisitions."]);

card(24, "Chronic Low-Grade Inflammation", "chronic-inflammation-scope",
  "Chronic low-grade inflammation is retained as an operational family of repeated, assay-defined inflammatory elevations under declared tissue, cohort and exposure conditions. Older human high/low profiles, age/community-dependent mouse cytokines and intervention-specific responses supply evidence. No single universal inflammatory scalar, obligatory aging state, complete senescence-gut-memory integration or autonomous attractor is established. Reduced biomarkers, physical function, infection risk and metabolic outcomes remain separate endpoints.",
  ["older-inflammatory-heterogeneity", "inflammatory-module-inference", "age-microbiota-conditional-inflammation", "p16-clearance-bounded-benefits", "aged-dq-bounded-outcomes", "cantos-cardiovascular-benefit", "cantos-infection-mortality-boundary", "cantos-inflammation-not-diabetes-prevention"],
  [["Long-duration elevation differs from a transient acute episode", "supported", "Repeated human sampling and distinct prolonged mouse exposure/intervention protocols establish different time bounds; no universal duration cutoff is imposed."],
   ["Chronic inflammation occurs without obvious acute infection/injury", "qualified", "Selected cohorts/preparations lack overt acute infection, but occult exposures, metabolic disease, selection and comorbidity cannot all be excluded."],
   ["All older organisms possess one stabilized inflammatory state", "excluded", "Low/high older human profiles and germ-free/TNF-context mouse differences contradict uniform inevitable elevation."],
   ["Cytokine background, cell thresholds, vascular/repair bias and set points are one measured property", "excluded", "These endpoints require distinct assays; repeated cytokine measurements do not quantify all tissue thresholds, repair dynamics or a complete operating point."],
   ["Integrated SASP, gut inputs, metabolism and memory jointly hold the regime", "unresolved", "Different candidate mechanisms are tested in different preparations; their complete joint sufficiency and necessity are not reconstructed."],
   ["Reducing upstream causes restores all beneficial immune/metabolic functions", "excluded", "CANTOS lowers biomarkers with endpoint-specific cardiovascular benefit, infection risk and no incident-diabetes prevention; mouse clearance benefits do not prove every immune task improves."],
   ["Higher chronic inflammation necessarily causes all age-associated dysfunction", "qualified", "Association, local interventions and causal clinical contrasts have distinct scopes; no complete all-disease causal aging theory is admitted."]],
  [["4.25", "qualified", "Cytokine abundance is an actual source endpoint; one universal basal cytokine mechanism is not isolated."],
   ["4.27", "unresolved", "SASP is a candidate source in some tissues, but not a demonstrated necessary parent of every chronic inflammatory elevation."],
   ["5.22", "qualified", "Local tissue organization can contribute; a chronic blood profile is not proof that every tissue contains the same niche architecture."],
   ["5.23", "qualified", "Barrier/microbial coupling is supported in selected mice, without showing necessity in every older human or clinical condition."],
   ["5.9", "qualified", "An existing immune system is the context; treating an architectural class as a quantified necessary upstream cause would add no tested mechanism."],
   ["5.26", "unresolved", "Resolution failure is not interchangeable with repeated activation or a measured clearance deficit in every source."],
   ["5.27", "unresolved", "Specific immune-to-metabolic effects exist but no universally closed self-reinforcing organismal loop is measured."],
   ["4.30", "unresolved", "NK competence is not isolated as the causal modifier of these chronic-marker cohorts."],
   ["5.28", "qualified", "Adipose-associated local/secretion changes are source-specific and cannot supply a universal weight for the organism's inflammatory state."],
   ["5.29", "excluded", "Recurrent gut endotoxin is not established as necessary for every chronic inflammatory context; sterile/drug/other routes remain possible."],
   ["5.31", "unresolved", "Long duration and partial treatment response do not independently demonstrate hysteresis; using assumed hysteresis as a cause would be circular."],
   ["4.32", "unresolved", "Cellular exposure memory is not a demonstrated universal requirement for the blood/tissue profiles admitted here."]],
  ["A reproducible multi-analyte chronicity definition with assay units, tissue scope, longitudinal baselines and causal mediation remains to be specified per intended use."]);

card(25, "Immune Resilience vs Immune Constraint Trade-off", "immune-resilience-scope",
  "Immune resilience is operationally separated into pathogen control, tolerance of damage, inflammatory burden, tissue repair and safety endpoints under a named perturbation. Clinical IL-1beta inhibition, finite macrophage killing, metabolic tolerance and clinical RTB101 trials demonstrate that these responses can dissociate. Some interventions have benefit/risk tensions; others show no clinical benefit or support sequential repair. A universal resource-limited optimum, stable trade-off envelope or inevitable restriction of every immune mode remains an unestablished hypothesis.",
  ["inflammation-not-antibacterial-capacity", "cantos-cardiovascular-benefit", "cantos-infection-mortality-boundary", "lps-tolerance-survival-output", "influenza-opposite-metabolic-dependence", "torc1-phase2b-analysis-boundary", "torc1-phase3-null-clinical-endpoint", "torc1-gene-clinical-dissociation"],
  [["Resilience is not one scalar strong/weak immunity switch", "supported", "Cytokines, microbial killing, clinical infection and survival/tolerance change differently across named preparations."],
   ["Persistent activation entails tissue damage, energetic cost and regulatory restriction", "qualified", "Source-specific harm/benefit exists, but all energetic costs and a necessary compensatory restriction mechanism are not measured."],
   ["Every immune objective cannot be maximized at once under a fixed budget", "unresolved", "A Pareto frontier requires defined objective measures and controlled resource constraints; these studies do not identify a universal fixed budget or global frontier."],
   ["Lower inflammation necessarily weakens protection or always improves resilience", "excluded", "Macrophage killing can improve when a harmful TNF context is absent; clinical inhibition has separate efficacy and infection-risk outcomes. Neither universal direction follows."],
   ["Baseline thresholds, tolerance, effector deployment and repair are one co-tuned balance point", "unresolved", "The selected studies do not measure a common multidimensional optimum or all activation/recovery dose-response curves."],
   ["Molecular immune enhancement guarantees clinical benefit", "excluded", "Phase3 RTB101 gene induction coexists with a null primary clinical respiratory endpoint."],
   ["Chronological age implies universal clinical response loss", "excluded", "Heterogeneous source populations, distinct endpoint definitions and context-specific interventions preclude a deterministic age-response law."]],
  [["5.9", "qualified", "Existing immune organization supplies the bearer, not an independently tested universal trade-off law."],
   ["5.24", "qualified", "Inflammatory burden is one measured context in some sources; it does not make chronic low-grade inflammation a prerequisite of every tension or resilience response."],
   ["4.12", "qualified", "Cellular immune assays supply selected mechanisms without proving a universal organismal allocation coefficient."],
   ["5.26", "qualified", "Resolution and tolerance are distinguishable objectives, not an established universal enabling control envelope."],
   ["5.27", "unresolved", "Metabolic effects are context dependent; the global reciprocal-loop hypothesis cannot serve as a proven enabling parent."],
   ["4.30", "unresolved", "NK lifetime surveillance versus repair is not jointly manipulated in these admitted preparations."],
   ["5.31", "unresolved", "No measured hysteresis loop establishes a necessary history-dependent cause of every immune constraint."],
   ["5.30", "unresolved", "The proposed global surveillance/repair frontier is not measured; making it necessary would presuppose the conclusion."],
   ["5.32", "unresolved", "Longitudinal composition changes are not proof of a universal threshold-shift mechanism causing all resilience constraints."]],
  ["A defined perturbation/recovery test, distinct resistance/tolerance readouts and direct resource/frontier experiments are needed before a global trade-off becomes active graph semantics."]);

card(26, "Inflammation Resolution Capacity", "resolution-capacity-scope",
  "Resolution capacity is reconstructed through specified acute-exudate dynamics, apoptotic-cell uptake, inhibitor/add-back and timing-dependent aged-mouse interventions. A source-defined half-peak neutrophil interval is distinguished from cell uptake, particle traffic, tissue function and complete return to baseline. Active modifiability is supported locally; a universal organismal pro-resolving scalar, preservation of every defense function or full barrier-repair program is not established by marker reduction alone.",
  ["post-peak-pmn-resolution-output", "lipid-efferocytosis-output", "resolution-deficit-rescue-output", "aged-resolution-time-course", "aged-efferocytosis-modifiable", "aged-nprm-bounded-resolution-output"],
  [["Termination can be active and experimentally modifiable", "supported", "Timed mediator delivery and inhibitor/add-back change bounded exudate/uptake outputs rather than relying solely on passive decay."],
   ["Capacity is distinct from a single completed episode", "qualified", "A reusable capacity is an operational interpretation requiring repeated standardized challenges; the admitted finite experiments do not establish unlimited repeatability."],
   ["Lower marker values prove debris clearance", "excluded", "Uptake, residual neutrophils, cytokines and particle traffic are separately measured; none substitutes for all clearance/degradation mechanisms."],
   ["Resolution indices measure complete return to healthy baseline", "excluded", "The source half-peak interval is relative to the neutrophil maximum and can end above baseline; four-hour NPRM data are not full resolution curves."],
   ["Barrier repair and physiological tissue function are restored", "unresolved", "The selected peritonitis/uptake assays do not measure every barrier, tissue-mechanical and organ-functional endpoint."],
   ["Pro-resolution actions retain all antimicrobial competence", "unresolved", "Zymosan uptake and apoptotic-neutrophil clearance are not live pathogen killing or clinical infection protection; defense preservation needs matched assays."],
   ["Age-associated resolution deficits cannot be modified", "excluded", "Aged BMDM uptake and finite aged-mouse NPRM responses improve under defined perturbations."]],
  [["5.5", "qualified", "Restoration goals can be defined descriptively, but no universal homeostatic target/controller is identified by these assays."],
   ["5.9", "qualified", "Existing immune and tissue compartments are the experimental bearer; their abstract architecture supplies no universal scalar capacity."],
   ["4.6", "qualified", "Cell condition and apoptotic/debris inputs matter locally, without a universal stress-response weight."],
   ["4.3", "qualified", "Specified lipid/cell-signaling perturbations alter readouts; no complete necessary signaling network is inferred."],
   ["5.31", "unresolved", "Hysteresis is not independently established by residual inflammatory cells or partial response and cannot be assumed as a contextual regulator."]],
  ["Per-context capacity needs a repeatable challenge, assay-calibrated time course, efferocytosis/degradation separation, tissue recovery and defense controls; these do not yet close a universal organismal mechanism."]);

card(27, "Inflammation–Metabolic Dysregulation Feedback Loop", "immune-metabolic-loop-scope",
  "Immune-metabolic coupling is represented by source-specific directed effects and explicit contrary outcomes. Continuous LPS alters selected metabolism; macrophage/inflammasome and MAOA perturbations alter adipose lipolysis; nutritional state changes tolerance differently in sterile and viral challenge. CANTOS biomarker suppression does not prevent incident diabetes. These findings do not establish a single self-maintaining reciprocal organismal loop, a fixed sign across tissues, universal mitochondrial/adipokine mechanisms or superior efficacy of every combined intervention.",
  ["chronic-lps-metabolic-output", "cd14-protection-not-universal", "old-atm-lipolysis-output", "nlrp3-lipolysis-output", "maoa-lipolysis-rescue", "cantos-inflammation-not-diabetes-prevention", "lps-tolerance-survival-output", "influenza-opposite-metabolic-dependence"],
  [["Inflammatory perturbations can alter metabolic readouts", "supported", "LPS-pump and matched adipose/BMDM preparations establish bounded immune-to-metabolic effects."],
   ["Metabolic conditions alter immune-associated survival/tolerance", "supported", "Defined nutrient-utilization interventions modify sterile/infectious outcomes in different directions, without identifying a universal inflammatory amplification sign."],
   ["Every direction closes into one positive feedback loop in the same organism", "unresolved", "Different directed effects occur in different preparations; closure, loop gain and autonomous maintenance after input withdrawal are not measured."],
   ["Insulin sensitivity, mitochondrial efficiency, substrate partitioning and adipokines form one mechanism", "excluded", "Hepatic versus whole-body clamp results and lipolysis/secretion readouts differ; unmeasured mitochondrial/endocrine mechanisms cannot be filled by class labels."],
   ["Partial single-target response demonstrates feedback stability", "excluded", "Partial/null responses also allow redundant pathways, incomplete exposure, irreversible tissue change or inadequate follow-up; they do not uniquely establish feedback/hysteresis."],
   ["Combined inflammatory/metabolic modulation is always superior", "unresolved", "These acquisitions do not provide matched factorial treatment evidence for a universal combined-treatment rule."],
   ["Inflammatory biomarker reduction necessarily prevents metabolic disease", "excluded", "The CANTOS companion abstract reports no incident-diabetes prevention despite lower hsCRP/IL-6.", ["cantos-inflammation-not-diabetes-prevention"]]],
  [["5.24", "qualified", "Specific inflammatory exposure can affect metabolism, but chronic low-grade inflammation is not established as necessary for every metabolic disorder."],
   ["4.2", "qualified", "Existing cellular metabolism provides a bearer/readout, not a quantitatively verified global feedback law."],
   ["5.5", "unresolved", "No complete organismal homeostatic controller or universally required parent is identified by these finite contrasts."],
   ["5.28", "qualified", "Adipose macrophage/secretion cases provide local effects, without proving all organ-level metabolic disturbances depend on adipose remodeling."],
   ["5.29", "qualified", "LPS and microbial context contribute in selected models; they are not necessary for all inflammatory/metabolic coupling."],
   ["4.32", "unresolved", "Innate memory is not isolated as an enabling requirement for the source pump, co-culture or clinical metabolic outcomes."]],
  ["A proposed closed loop requires matched bidirectional interventions, measured shared state variables, temporally ordered feedback and alternative-model discrimination in one bounded preparation."]);

card(28, "Adipose Immune Remodeling and Inflammatory Adipokine Bias", "adipose-remodeling-scope",
  "Adipose immune remodeling is represented through depot/species-dependent macrophage abundance, localized damaged-adipocyte structures, finite macrophage/lipolysis contrasts and ex-vivo human adipose secretory changes. Fat mass, cell abundance, functional activation, cytokine transcripts and secreted adipokines are distinct measurements. A universal shift from passive storage into one inflammatory endocrine state, complete ECM/vascular causal sequence or sustained organism-wide positive feedback is not established.",
  ["adipose-macrophage-abundance", "human-adipose-cell-composition", "spatial-adipose-damage-niches", "old-atm-lipolysis-output", "maoa-lipolysis-rescue", "human-explant-secretory-change"],
  [["Adipose inflammation is not reducible to fat mass alone", "supported", "Depot/genotype exceptions and adipocyte-size/localization contrasts provide explicit departures from a single BMI/fat-mass variable."],
   ["Immune population shifts and functional states are identical", "excluded", "F4/80/CD68 abundance, local histology, lipolysis and secretion are separate endpoints with different preparation boundaries."],
   ["Adipose macrophages influence local metabolic function", "supported", "Defined co-culture, inflammasome and catecholamine-catabolism interventions alter source lipolytic readouts."],
   ["All adipokine secretion becomes uniformly inflammatory", "qualified", "A treated human explant changes selected secreted proteins; mouse transcript fractions do not establish every endocrine mediator, source or direction."],
   ["ECM, stromal and vascular remodeling causally stabilize this state", "unresolved", "The selected sources do not identify a complete intervention-tested matrix/vascular sequence or necessary chronic attractor."],
   ["Adipose moves from passive compartment to active inflammatory organ", "qualified", "Adipose already has physiological endocrine/immune functions; the measured changes do not establish a universal ontological conversion or one disease-only role."],
   ["Adipose output durably reinforces systemic inflammation in all cases", "unresolved", "A full matched tissue-to-blood-to-tissue feedback trajectory and long-term maintenance mechanism are not reconstructed."]],
  [["5.22", "qualified", "Localized adipose structures are measured, but not every remodeling process requires the same inflammatory niche geometry."],
   ["5.27", "unresolved", "Local effects do not prove a complete global reciprocal immune-metabolic loop or its sign."],
   ["5.5", "qualified", "Metabolic context and resources delimit the measured function; no generic homeostatic controller weight is admitted."],
   ["4.28", "qualified", "Macrophage abundance and particular functions matter locally; no universal polarization or necessary population threshold is established."]],
  ["Lineage-resolved cell histories, actual vascular/ECM interventions, complete secreted endocrine profiling and matched systemic feedback remain open."]);

card(29, "Metabolic Endotoxemia as a Gut-Derived Driver of Basal Immune Activation", "metabolic-endotoxemia-scope",
  "Metabolic endotoxemia is scoped to assay-defined plasma endotoxin activity and particular microbial/host preparations. Four-week dietary activity profiles, oral lipid/LPS challenge, gut-bypassing LPS infusion, CD14-duration contrasts and age/community-dependent permeability/MDP assays provide different evidence. Continuous infusion is not repeated spontaneous gut pulses; MDP is not LPS. No universal reactivation threshold, obligatory gut-derived origin of chronic inflammation or permanent baseline shift is inferred.",
  ["diet-endotoxin-activity", "chronic-lps-metabolic-output", "cd14-protection-not-universal", "antibiotics-associated-endotoxin-change", "host-community-permeability-interaction", "anti-tnf-microbiota-not-permeability-rescue"],
  [["Chronic microbial-component exposure can influence selected metabolic/inflammatory endpoints", "supported", "Controlled LPS infusion changes bounded endpoints while microbial/host experiments add a distinct potential source context."],
   ["All chronic endotoxin activity proves repeated gut-derived initiation events", "excluded", "Subcutaneous infusion bypasses the gut, and LAL activity/tracer flux do not directly record individual microbial translocation pulses."],
   ["Dysbiosis and barrier dysfunction are one necessary initiating mechanism", "qualified", "Community and host age interact in mouse recolonization; the exact molecular route and necessity across all conditions remain unresolved."],
   ["Repeated low-level pulses cross a measured immune threshold", "unresolved", "Neither observed plasma activity nor finite output establishes a complete activation dose-response threshold or pulse-resolved response."],
   ["Exposure integrates into stable trained innate memory", "unresolved", "The source preparations do not isolate washout/rechallenge memory or a sufficient chronic inflammatory storage mechanism."],
   ["Reducing microbial/endotoxin burden invariably restores baseline while retaining all defense", "excluded", "Broad antibiotic changes are abstract-bound; anti-TNF changes community without demonstrated permeability rescue, and defense/complete recovery are not jointly established."],
   ["CD14 is universally necessary for metabolic disease", "excluded", "Longer high-fat exposure yields metabolic abnormalities in CD14-mutant mice despite early protection."]],
  [["5.23", "qualified", "Gut barrier/community coupling supplies one source-specific route; the pump case is experimentally independent of a gut breach."],
   ["5.22", "unresolved", "Localized tissue inflammatory niches are not isolated as a universal enabling cause of LAL activity or repeated microbial flux."],
   ["5.24", "qualified", "Inflammation can be an outcome/context, but using chronic inflammation as proof of its own gut initiation would be circular."]],
  ["Pulse-resolved microbial molecule flux, assay recovery/interference analysis, source localization, defined threshold and matched host-defense controls remain open."]);

card(30, "Systemic Allocation Trade-off between Immune Surveillance and Repair", "surveillance-repair-scope",
  "Surveillance/repair allocation remains a proposed multi-objective hypothesis. CANTOS measures cardiovascular benefit with infection-risk/neutral-mortality outcomes; skin clearance can impair closure if performed during repair; early inflammatory monocytes and later macrophages can both support muscle regeneration. These show context and timing dependence rather than a universal inverse relationship. No shared conserved immune-resource budget, global optimal balance, or necessary loss of pathogen/tumor surveillance under every repair-promoting condition is established.",
  ["cantos-cardiovascular-benefit", "cantos-infection-mortality-boundary", "clearance-repair-cost", "early-inflammatory-cells-enable-repair", "late-local-macrophages-repair", "myogenesis-stage-dependent-output", "lipid-efferocytosis-output"],
  [["Surveillance, pathogen resistance, damage tolerance and repair are distinct objectives", "supported", "The sources measure different clinical, cellular and tissue outcomes and require explicit endpoint separation."],
   ["Surveillance and repair universally compete rather than cooperate", "excluded", "Early inflammatory recruitment is needed for the admitted muscle regeneration sequence; selected immune functions can support subsequent repair."],
   ["Some interventions create timing-dependent benefit/cost", "supported", "ATTAC clearance during wounding delays closure, whereas prior clearance with treatment suspension permits repair; CANTOS has distinct clinical benefit and infection risk."],
   ["A fixed resource budget creates one organism-wide trade-off frontier", "unresolved", "No source measures a common resource currency, controlled budget or joint surveillance/repair frontier across tissues."],
   ["Repair-biased allocation necessarily weakens infection/cancer clearance", "unresolved", "Resolution/repair experiments do not directly assay every live pathogen/tumor outcome; source-specific concerns cannot establish universal necessity."],
   ["Chronic load stabilizes one persistent allocation state", "unresolved", "Finite trajectories, drug schedules and endpoints do not identify a single stable whole-system allocation state or threshold landscape."],
   ["Regulatory attention is a directly measured causal resource", "excluded", "The original metaphor has no operational measurement here; an unspecified abstract resource cannot carry functional semantics."]],
  [["5.25", "unresolved", "A global resilience-constraint envelope is itself unestablished and cannot prove a surveillance/repair budget."],
   ["4.30", "unresolved", "NK surveillance has not been jointly measured against repair under a controlled common resource budget in the admitted sources."],
   ["5.26", "qualified", "Resolution and clearance can be distinct repair-related functions; they do not imply universal loss of protective competence."],
   ["5.24", "qualified", "Chronic inflammatory context may affect selected outcomes but is neither universally necessary nor sufficient for allocation tensions."],
   ["5.31", "unresolved", "No measured inflammatory hysteresis establishes a cause of persistent allocation constraints."],
   ["5.29", "unresolved", "Gut-derived repeated initiation is not identified as a universal causal modifier of surveillance versus repair."],
   ["5.32", "unresolved", "Longitudinal immune composition does not quantify a global set-point drift causing a fixed repair-surveillance frontier."]],
  ["Operational surveillance/repair objectives, resource measurements and matched factorial perturbations are required; no universal negative edge or causal weight is admitted."]);

card(31, "Inflammaging Regime Stability and Hysteresis", "inflammaging-hysteresis-scope",
  "Inflammaging hysteresis is retained as an explicitly unestablished dynamical hypothesis. Repeated older-human inflammatory profiles, finite cell-transplant dysfunction, partial anti-TNF response and fitted immune-age convergence do not prove bistability or asymmetric entry/exit thresholds. Verification requires a controlled driver and response, bidirectional exposure paths, adequate relaxation/time-scale controls, repeated state comparisons at the same driver and exclusion of ongoing input/irreversible damage. No universal threshold ordering or self-maintaining global feedback regime is admitted.",
  ["older-inflammatory-heterogeneity", "inflammatory-module-inference", "anti-tnf-microbiota-not-permeability-rescue", "senescent-transplant-effect", "immune-age-model-boundary", "resolution-deficit-rescue-output", "cd14-protection-not-universal"],
  [["Inflammatory states can show finite persistence/history dependence", "qualified", "Repeated human profiles and finite experimental effects delimit persistence, but do not uniquely identify its maintaining mechanism."],
   ["Persistence establishes autonomous self-maintaining feedback", "excluded", "Continued exposure, slow relaxation, tissue injury, selection and redundant pathways remain alternatives; no source establishes global autonomous maintenance."],
   ["Entry threshold is lower than exit threshold as a universal rule", "excluded", "No source measures the proposed threshold ordering under one defined control parameter; direction conventions cannot substitute for data."],
   ["Partial upstream mitigation proves hysteresis", "excluded", "The reported anti-TNF partial response is compatible with several nonhysteretic mechanisms and has no complete reversal sweep; conflicting dose/duration descriptions do not establish a verified regimen."],
   ["Fitted attractor/pseudotime is observed bistability", "excluded", "Alpert's convergence is a model interpretation of selected frequencies, not a controlled two-state same-input experiment."],
   ["SASP, metabolism, memory, tissue niches and repair form a necessary closed maintaining network", "unresolved", "The components occur in distinct preparations; full loop closure, sufficiency and necessary joint architecture are unmeasured."],
   ["A rigorous prospective hysteresis discriminator", "supported", "The reconstruction defines an explicit methodological requirement: specify driver/output/history, compare both paths at matched drive after adequate waiting, and control finite-rate/ongoing-input/irreversible-damage alternatives. This is a design contract, not an observed biological finding."],
   ["Resistance to reversal is absolute", "excluded", "Selected senolytic/clearance/resolution preparations are modifiable; neither guaranteed reversal nor permanent trapping is established."]],
  [["5.24", "qualified", "Chronicity supplies a candidate phenomenon, not evidence for its proposed hysteretic stability mechanism."],
   ["5.27", "unresolved", "The full reciprocal immune-metabolic loop is unestablished and cannot serve as proven feedback maintaining hysteresis."],
   ["4.32", "qualified", "Finite innate memory in separately reviewed preparations is not sufficient evidence for organismal bistability or common entry/exit thresholds."],
   ["5.26", "unresolved", "Delayed resolution and half-peak indices do not demonstrate hysteretic trapping."],
   ["5.29", "unresolved", "Continued gut input is an alternative persistence mechanism and must be controlled rather than assumed to prove autonomous memory."],
   ["5.30", "unresolved", "A global surveillance-repair allocation frontier is unmeasured and cannot stabilize a proven organismal attractor by assertion."],
   ["5.32", "unresolved", "Composition trajectories and modeled convergence are distinct from threshold shifts or measured hysteresis."],
   ["5.33", "unresolved", "Resolution failure may be a separate candidate explanation but using it as a proven maintaining cause would presuppose the very global regime under examination."]],
  ["No admitted preparation measures a full inflammaging hysteresis loop, same-drive alternative stable states, asymmetrical thresholds or a unique global maintaining mechanism."]);

card(32, "Age-Shifted Immune Set-Point Drift", "immune-setpoint-scope",
  "Age-linked immune change is represented by heterogeneous longitudinal blood composition, model-dependent immune-age summaries, source-specific cytokine/functional responses and clinical intervention outcomes. A set point must specify an observable, assay, compartment, baseline/recovery reference, time window and perturbation-response relation. Repeated marker differences or a composition trajectory do not establish one organism-wide immune operating point, lowered activation threshold, irreversible departure from an earlier regime or inevitable loss of every adaptive/innate function.",
  ["immune-longitudinal-heterogeneity", "immune-age-model-boundary", "immune-age-external-projection", "older-inflammatory-heterogeneity", "age-microbiota-conditional-inflammation", "torc1-phase3-null-clinical-endpoint", "torc1-gene-clinical-dissociation"],
  [["Aging is associated with changes in immune composition and selected responses", "supported", "Longitudinal blood monitoring and distinct functional/clinical assays provide source-specific measurements."],
   ["All changes form one common organismal set point", "excluded", "Blood cell frequencies, cytokine abundance, modeled scores and clinical protection are different variables with no common experimentally calibrated scalar."],
   ["Activation thresholds drift with age", "unresolved", "A threshold requires controlled dose-response and a defined output criterion; the admitted repeated profiles/pseudotime do not supply a universal threshold curve."],
   ["The system cannot return to its earlier regime", "unresolved", "Observation without a controlled recovery experiment does not prove irreversibility or exclude cohort/exposure/composition change."],
   ["Trained innate reprogramming, adaptive narrowing and chronic inflammation necessarily combine", "unresolved", "Those mechanisms require distinct matched studies; coexistence across separate publications does not establish a universal required bundle."],
   ["Immune-age score proves causal immune rejuvenation or all-function decline", "excluded", "The score is model derived and its external mortality association is not a causal manipulation; trial gene induction can coexist with a null clinical outcome."],
   ["Set-point use requires explicit operational coordinates", "supported", "The reconstruction supplies a design/measurement contract rather than pretending a universal baseline/threshold was directly observed."]],
  [["4.29", "qualified", "Adaptive composition/constraint is separately scoped; human longitudinal frequencies are not identical to universal T-cell exhaustion or loss of antigen flexibility."],
   ["4.32", "unresolved", "Selected innate-memory experiments do not establish the storage mechanism of every longitudinal aging profile."],
   ["5.24", "qualified", "Some older participants have higher inflammatory measures, but older low-profile cases prevent treating chronic inflammation as universally necessary."],
   ["5.29", "unresolved", "No universal recurrent gut microbial input is identified in the longitudinal human data or clinical immune trial."]],
  ["A per-tissue, per-assay set-point definition and controlled dose/recovery history are needed before threshold drift or irreversible regime change becomes an empirical graph claim."]);

card(33, "Resolution Failure Regime", "resolution-failure-scope",
  "Resolution failure is scoped to delayed inflammatory-cell decline, impaired apoptotic-cell uptake or incomplete recovery under declared challenge, compartment and observation windows. Aged peritonitis, inhibitor/add-back and anti-TNF counter-results supply different measured deficiencies/partial responses. No experiment establishes that these form one persistent whole-organism closure-failure state after all initiating inputs have been removed. Ongoing drivers, insufficient treatment/follow-up, reduced uptake, tissue injury and genuine hysteresis remain distinguishable explanations.",
  ["aged-resolution-time-course", "aged-efferocytosis-modifiable", "aged-nprm-bounded-resolution-output", "resolution-deficit-rescue-output", "anti-tnf-microbiota-not-permeability-rescue", "post-peak-pmn-resolution-output"],
  [["Inflammatory recovery can be delayed or incomplete within a stated window", "supported", "The sources measure finite neutrophil kinetics, uptake deficits or partial treatment response under defined conditions."],
   ["Failed return differs from higher initial recruitment alone", "qualified", "Peak amplitude and subsequent decline are distinguished, but half-peak indices and short endpoints do not quantify every return-to-baseline process."],
   ["All deficiencies are one organism-wide stable failure condition", "unresolved", "Separate tissue/cell/challenge measurements do not identify one global state or sufficient joint causal architecture."],
   ["Persistence remains after initiating triggers are removed", "unresolved", "Zymosan/persistent tissue particles and incompletely controlled drivers remain; full input removal is not verified by a finite anti-inflammatory response."],
   ["Local inflammatory niches, debris burden and re-entry threshold necessarily coincide", "unresolved", "Localization, degradation, renewed challenge and dose thresholds require separate measurements; none follows from marker persistence alone."],
   ["Resolution failure is irreversibly locked", "excluded", "Source inhibitor/add-back and aged-cell/NPRM interventions modify selected outputs, so permanence is not established."],
   ["Marker improvement proves restored closure and function", "excluded", "Reduced PMNs/cytokines, uptake, barrier flux and tissue recovery remain separate endpoints with explicit unknowns."],
   ["Failure can be distinguished from slow relaxation/ongoing drive", "supported", "The reconstruction requires predefined recovery bounds, trigger control and adequate time/course comparisons; this is an operational test requirement rather than an observed universal regime."]],
  [["5.26", "qualified", "Failure is defined relative to an explicit resolution assay, not inferred from an abstract capacity scalar or a universal inverse functional edge."],
   ["5.24", "qualified", "Persistent inflammatory markers can motivate a recovery test but do not establish failed resolution as their unique cause."],
   ["5.22", "unresolved", "Static niche localization is not evidence that a niche is necessary for every clearance/recovery failure."],
   ["4.27", "unresolved", "SASP is not isolated as a necessary or sufficient maintaining input in every admitted delayed-resolution preparation."]],
  ["Controlled trigger withdrawal, standardized recovery trajectories, direct degradation/clearance and renewed-challenge thresholds remain open before admitting a global persistent failure regime."]);

function comparison(id, candidate, alternative, findingIds, discriminator, limit) {
  const sourceIds = [...new Set(findingIds.map((findingId) => studyIndex.get(findingIndex.get(findingId).studyId).record.sourceId))];
  comparisons.push({ id, candidate, alternative, sourceIds, discriminator, result: "conditional-support", limit,
    assumptions: ["Preserve species, compartment, intervention, endpoint, duration and reading-extent boundaries.", "Shared trial/cohort/panel data are dependent; publication count is not independent replication count.", commonLimit], claimIds: findingIds.map((findingId) => findingIndex.get(findingId).claimId) });
}
comparison("organismal-infl-adipose-abundance-function", "Cell abundance, spatial localization and metabolic/secretion function require distinct measurements.", "More macrophages or larger fat mass uniformly defines one causal inflammatory adipose state.", ["adipose-macrophage-abundance", "spatial-adipose-damage-niches", "old-atm-lipolysis-output", "human-explant-secretory-change"], "Compare depot/genotype exceptions, spatial histology and independent function/secretion perturbations without converting association into causation.", "Cross-preparation contrasts delimit universality; they do not supply one quantitative transfer function.");
comparison("organismal-infl-gut-loop-partial-reversal", "Community and host conditions can influence inflammation/permeability, with distinct intervention responses.", "Any microbiota change or reduced TNF necessarily restores barrier function and proves reversal of a closed loop.", ["host-community-permeability-interaction", "anti-tnf-microbiota-not-permeability-rescue", "cd14-protection-not-universal"], "Cross host/community age, retain the anti-TNF null permeability observation, and compare early versus late CD14-mutant dietary response.", "Thevaranjan panels share corrected simultaneous datasets; no source independently supplies a full bidirectional hysteresis loop.");
comparison("organismal-infl-biomarker-clinical-separation", "Biomarker changes and clinical outcomes have endpoint-specific meanings.", "Lower inflammation or higher antiviral gene expression automatically restores global immune/metabolic health.", ["cantos-cardiovascular-benefit", "cantos-infection-mortality-boundary", "cantos-inflammation-not-diabetes-prevention", "torc1-phase3-null-clinical-endpoint", "torc1-gene-clinical-dissociation"], "Retain randomized clinical endpoints, safety/neutral outcomes, null diabetes prevention and the phase3 clinical/gene-expression dissociation.", "Ridker/Everett are one CANTOS trial; phase3 clinical and biomarker rows are also dependent, and the Everett acquisition is abstract-only.");
comparison("organismal-infl-immune-repair-context", "Immune cells can support sequential repair while some interventions have timing-specific costs.", "Surveillance/activation and tissue repair universally occupy opposite ends of a fixed allocation budget.", ["early-inflammatory-cells-enable-repair", "late-local-macrophages-repair", "myogenesis-stage-dependent-output", "clearance-repair-cost"], "Compare early/late depletion routes, distinct myogenic stages and clearance continuation versus suspension during wounds.", "No common resource currency or matched pathogen/tumor-surveillance versus repair frontier is measured.");
comparison("organismal-infl-tolerance-context-sign", "Metabolic perturbation has inflammatory-context-dependent effects on survival and tolerance.", "The same nutrient or inflammatory amplitude has one universal direction of effect on host resilience.", ["lps-tolerance-survival-output", "influenza-opposite-metabolic-dependence", "inflammation-not-antibacterial-capacity"], "Separate sterile LPS from influenza, assay pathogen burden where applicable, and distinguish inflammatory output from bacterial killing.", "Different preparations and doses preclude a numerical common rule; no human nutritional intervention is inferred.");
comparison("organismal-infl-persistence-hysteresis", "Finite persistence and modeled convergence require explicit alternative explanations and prospective dynamical tests.", "Chronic markers, partial non-reversal or an inferred attractor already prove inflammaging bistability/hysteresis.", ["older-inflammatory-heterogeneity", "anti-tnf-microbiota-not-permeability-rescue", "immune-age-model-boundary", "senescent-transplant-effect", "resolution-deficit-rescue-output"], "Require matched-driver bidirectional histories, adequate relaxation and control of ongoing triggers/irreversible damage rather than accepting persistence as the discriminator.", "No admitted source measures a complete global inflammaging hysteresis loop or universal entry/exit threshold ordering.");
comparison("organismal-infl-resolution-output-types", "Peak-relative dynamics, uptake, traffic and complete tissue recovery are separate resolution-related endpoints.", "Any lower inflammatory marker proves full resolution, permanent baseline restoration and preserved defense.", ["post-peak-pmn-resolution-output", "lipid-efferocytosis-output", "aged-resolution-time-course", "aged-efferocytosis-modifiable", "aged-nprm-bounded-resolution-output"], "Match species/dose/timing and ask which endpoints directly measure uptake, declining exudates, complete baseline recovery or live-pathogen killing.", "Short aged-NPRM outputs and half-peak intervals do not establish complete tissue restoration or clinical immune competence.");
comparison("organismal-infl-age-causal-inference", "Longitudinal acquisition, fitted immune-age models and external projected-score association are distinct evidence layers.", "Chronological age, innate memory, inflammatory marker elevation and a fitted immune-age score define one verified causal set-point drift.", ["immune-longitudinal-heterogeneity", "immune-age-model-boundary", "immune-age-external-projection", "older-inflammatory-heterogeneity", "inflammatory-module-inference"], "Separate direct repeated cellular measurements from pseudotime/model fitting and expression-projected outcome association, keeping low-inflammatory older cases.", "Furman and Alpert reuse Stanford data; Framingham is external but measures an approximate expression projection, not causal immune rejuvenation.");

export const ORGANISM_INFLAMMATION_RECORDS = { sources, entities, claims, relations, studies, comparisons, readiness };
