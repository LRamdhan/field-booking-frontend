class UnauthorizeError extends Error {
  constructor(message, code = 401) {
    super(message);
    this.name = 'UnauthorizeError';
    this.code = code
  }
}

export default UnauthorizeError