import useSWR from "swr";
import { getMockHolders } from "./holders.mock";
import { getHolders } from "./holders.service";

const isDev = import.meta.env.DEV;
const getHolderFetcher = isDev
	? getMockHolders
	: getHolders;

function useGetHolders() {
	const { data, error, isLoading } = useSWR("id", getHolderFetcher);
	return { data, error, isLoading };
}

export { useGetHolders }