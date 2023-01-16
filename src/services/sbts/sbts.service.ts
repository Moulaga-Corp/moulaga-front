import { sbtContract } from "../web3/contracts";

interface SBT {
	tokenId: string;
	holder: string;
	consumer: string;
}

async function listSbts(wallet: string) {
	const sbts: SBT[] = await sbtContract.functions.getMintedSBTs(wallet)
		.then(payload => {
			const [data] = payload;
			return data.map((d: any) => ({...d, tokenId: d.tokenId.toString()}));
		})
		.catch(console.error);
	return sbts;
}

export { listSbts }