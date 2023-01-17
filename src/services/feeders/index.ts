import { isMockFeeder } from "./feeders.mock";
import { isFeeder } from "./feeders.service";

// const isDev = import.meta.env.DEV;

// const isFeederCheck = isDev
// 	? isMockFeeder
// 	: isFeeder;

const isFeederCheck = isFeeder;

export { isFeederCheck }