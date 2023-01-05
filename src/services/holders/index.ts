import { getMockHolders, isMockHolder } from "./holders.mock";
import { getHolders, isHolder } from "./holders.service";

const isDev = import.meta.env.DEV;
const getHoldersFetcher = isDev
	? getMockHolders
	: getHolders;

const isHolderCheck = isDev ? isMockHolder : isHolder

export { 
	getHoldersFetcher,
	isHolderCheck
}