export class ModelPackError extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = "ModelPackError";
    this.code = code;
    this.details = Object.freeze({ ...details });
  }
}
