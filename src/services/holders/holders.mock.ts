const mockHolders = [
  { name: "Holder1", scopes: ["scope1", "scope2", "scope3"] },
  { name: "Holder2", scopes: ["scope1", "scope2", "scope3"] },
  { name: "Holder3", scopes: ["scope1", "scope2", "scope3"] }
].concat(Array(27).fill({ name: "HolderX", scopes: ["scope1", "scope2", "scope3"] }));

const getMockHolders = () => new Promise(resolve => setTimeout(resolve, 5000)).then(() => mockHolders);

export { getMockHolders };