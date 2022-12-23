import { sbtContract } from "../web3/contracts";

interface SBT {
	tokenId: number;
	holder: string;
	consumer: string;
}

async function listSbts(wallet: string) {
	const [sbts]: [SBT[]] = await sbtContract.functions.getMintedSBTs(wallet);
	return sbts;
}

export { listSbts }