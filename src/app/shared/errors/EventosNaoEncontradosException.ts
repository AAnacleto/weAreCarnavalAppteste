export class EventosNaoEncontradosException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EventosNaoEncontradosException';
  }
}
