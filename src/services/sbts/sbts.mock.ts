interface SBT {
	tokenId: string;
	holder: string;
	consumer: string;
}

const mockSbts = [{
	tokenId: "1",
	holder: "holder1",
	consumer: "consumer1"
}, {
	tokenId: "2",
	holder: "holder2",
	consumer: "consumer2"
}, {
	tokenId: "3",
	holder: "holder3",
	consumer: "consumer3"
}].concat(Array(27).fill({
	tokenId: "0",
	holder: "holderX",
	consumer: "consumerX"
}));

const listMockSbts = (wallet: string) => new Promise<typeof mockSbts>(resolve => setTimeout(() => resolve(mockSbts), 5000));

export { listMockSbts }