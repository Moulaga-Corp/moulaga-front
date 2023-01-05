import useSWR from "swr";
import { getMockHolders, isMockHolder } from "./holders.mock";
import { getHolders, isHolder } from "./holders.service";

const isDev = import.meta.env.DEV;
const getHolderFetcher = isDev
	? getMockHolders
	: getHolders;

function useGetHolders() {
	const { data, error, isLoading } = useSWR("id", getHolderFetcher);
	return { data, error, isLoading };
}

const isHolderCheck = isDev ? isMockHolder : isHolder

export { 
	useGetHolders,
	isHolderCheck
}