const digitOnly = (text: string) =>
  (text || '').replace(/\D/g, '').replace(/\D/g, '');

export { digitOnly };
