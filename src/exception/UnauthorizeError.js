class UnauthorizeError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizeError';
  }
}

export default UnauthorizeError