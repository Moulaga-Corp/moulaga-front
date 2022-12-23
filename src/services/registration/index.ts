import useSWR from "swr";
import { isMockFeeder } from "../feeders/feeders.mock";
import { isFeeder } from "../feeders/feeders.service";
import { isMockHolder } from "../holders/holders.mock";
import { isHolder } from "../holders/holders.service";

const isDev = import.meta.env.DEV;

const isFeederFetcher = isDev
	? isMockFeeder
	: isFeeder;
	
const isHolderFetcher = isDev
	? isMockHolder
	: isHolder;

async function isRegisteredFetcher(wallet: string) {
	return Promise.all([
		isFeederFetcher(wallet),
		isHolderFetcher(wallet)
	]);
}

function useIsRegistered(wallet: string) {
	const { data, error, isLoading } = useSWR(wallet, isRegisteredFetcher);
	return { data, error, isLoading };
}

export { useIsRegistered };