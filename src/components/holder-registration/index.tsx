import { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LoadingComponent from "../../common/loading-commponent";
import { isHolderCheck } from "../../services/holders";
import PROTOCOL_ABI from "../../services/web3/protocol.abi";
import RegisterButton from "../register-button";
import styles from "./index.module.scss";

function RegisterForm() {
	const [holderName, setHolderName] = useState("");
	const { config } = usePrepareContractWrite({
		address: import.meta.env.VITE_PROTOCOL_ADDRESS,
		abi: PROTOCOL_ABI,
		functionName: "registerAsHolder",
		args: [holderName]
	});
	const { write } = useContractWrite(config);
	
	return (
		<form className={styles.registerFrom} onSubmit={e => {
			e.preventDefault();
			if (holderName.length === 0) {
				return;
			}
			write?.();
		}}>
			<input type="text" placeholder="Holder name" onChange={e => {
				e.preventDefault();
				setHolderName(e.currentTarget.value);
			}}/>
			<RegisterButton title={"Register as holder"}/>
		</form>
	)
}

function HolderRegistration({wallet}: {wallet: string}) {
	return <LoadingComponent 
		initializedUI={<></>} 
		loadingUI={<div><h2>Checking holder status...</h2></div>} 
		successUI={data => {
			if (data) {
				return (<div><h2>Already a feeder !</h2></div>);
			}
			return (<RegisterForm/>);
		}} 
		errorUI={_ => <div><h2>Feeder status check failed.</h2></div>} 
		dataFetcher={() => isHolderCheck(wallet)}/>;
}

export default HolderRegistration;