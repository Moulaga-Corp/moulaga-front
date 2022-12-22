const mockHolders = [
  { name: "Holder1", scopes: ["scope1", "scope2", "scope3"] },
  { name: "Holder2", scopes: ["scope1", "scope2", "scope3"] },
  { name: "Holder3", scopes: ["scope1", "scope2", "scope3"] }
].concat(Array(27).fill({ name: "HolderX", scopes: ["scope1", "scope2", "scope3"] }));

interface Result {
	data?: typeof mockHolders;
	error?: Error;
	isLoading: boolean
}

function useGetHolders(): Result {
	return { data: mockHolders, error: undefined, isLoading: false };
}

function useGetHoldersError(): Result {
	return { error: new Error("Mock error"), isLoading: false };
}

function useGetHoldersLoading(): Result {
	return { isLoading: true };
}

export { useGetHolders, useGetHoldersError, useGetHoldersLoading };