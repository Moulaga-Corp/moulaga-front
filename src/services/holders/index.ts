import useSWR from "swr";
import { getMockHolders } from "./holders.mock";

// change according to env
const fetcher = import.meta.env.DEV
	? getMockHolders
	: getMockHolders;

function useGetHolders() {
	const { data, error, isLoading } = useSWR("id", fetcher);
	return { data, error, isLoading };
}

export { useGetHolders }