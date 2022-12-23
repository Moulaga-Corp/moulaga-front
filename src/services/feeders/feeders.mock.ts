const isMockFeeder = (wallet: string) => new Promise<boolean>(resolve => setTimeout(() => resolve(true), 3000));

export { isMockFeeder };