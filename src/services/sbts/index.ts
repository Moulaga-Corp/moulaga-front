import { listMockSbts } from "./sbts.mock";
import { listSbts } from "./sbts.service";

const isDev = import.meta.env.DEV;

const listSbtsFetcher = isDev 
	? listMockSbts
	: listSbts;

export { listSbtsFetcher }