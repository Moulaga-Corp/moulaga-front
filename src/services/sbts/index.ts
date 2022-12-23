import useSWR from "swr";
import { listMockSbts } from "./sbts.mock";

function useListSbts(wallet: string) {
	const { data, error, isLoading } = useSWR(wallet, listMockSbts);
	return { data, error, isLoading };
}

export { useListSbts }