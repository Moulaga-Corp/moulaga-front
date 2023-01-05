import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LoadingComponent from "../../common/loading-commponent";
import { isFeederCheck } from "../../services/feeders";
import PROTOCOL_ABI from "../../services/web3/protocol.abi";
import RegisterButton from "../register-button";

function FeederRegistration({wallet}: {wallet: string}) {
	const { config } = usePrepareContractWrite({
		address: import.meta.env.VITE_PROTOCOL_ADDRESS,
		abi: PROTOCOL_ABI,
		functionName: "registerAsFeeder"
	});
	const { write } = useContractWrite(config);

	return <LoadingComponent
		initializedUI={<></>}
		loadingUI={<div><h2>Checking feeder status...</h2></div>}
		successUI={data => {
			if (data) {
				return (<div><h2>Already a feeder !</h2></div>);
			}
			return (<RegisterButton title="Become a feeder" onClick={e => {
				e.preventDefault();
				write?.();
			}}/>);
		}}
		errorUI={_ => <div><h2>Feeder status check failed.</h2></div>}
		dataFetcher={() => isFeederCheck(wallet)} />;
}

export default FeederRegistration;