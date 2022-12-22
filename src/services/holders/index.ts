import useSWR from "swr";
import { getMockHolders } from "./holders.mock";
import { getHolders } from "./holders.service";

const fetcher = import.meta.env.DEV
	? getMockHolders
	: getHolders;

function useGetHolders() {
	const { data, error, isLoading } = useSWR("id", fetcher);
	return { data, error, isLoading }
}

export { useGetHolders }