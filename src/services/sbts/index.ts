import useSWR from "swr";
import { listMockSbts } from "./sbts.mock";
import { listSbts } from "./sbts.service";

const isDev = import.meta.env.DEV;

const listSbtsFetcher = isDev 
	? listMockSbts
	: listSbts;

function useListSbts(wallet: string) {
	const { data, error, isLoading, mutate } = useSWR(wallet, listSbtsFetcher);
	return { data, error, isLoading, mutate };
}

export { useListSbts }