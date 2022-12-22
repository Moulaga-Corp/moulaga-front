import { protocolContract } from "../web3/contracts";

async function getHolders() {
	const [holders]: [{wallet: `0x${string}`, name: string}[]] = await protocolContract
		.functions
		.listHolders();

	return Promise.all(holders.map(async holder => {
		const [scopes]: [string[]] = await protocolContract.functions.getScopesFromHolder(holder.wallet);
		return { name: holder.name, scopes };
	}));
}

export { getHolders };