import { ChangeEvent as ReactChangeEvent, FormEvent as ReactFormEvent, MouseEvent as ReactMouseEvent, useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { useIsRegistered } from "../../services/registration";
import PROTOCOL_ABI from "../../services/web3/protocol.abi";
import RegisterButton from "../register-button";
import RegisterForm from "../register-form";
import styles from "./index.module.scss";

interface RegistrationProps {
	wallet: string;
}

function Registration({wallet}: RegistrationProps) {
	const [holderName, setHolderName] = useState("");
	const { data, error, isLoading } = useIsRegistered(wallet);
	const { config: feederConfig } = usePrepareContractWrite({
		address: import.meta.env.VITE_PROTOCOL_ADDRESS,
		abi: PROTOCOL_ABI,
		functionName: "registerAsFeeder"
	});
	const { config: holderConfig } = usePrepareContractWrite({
		address: import.meta.env.VITE_PROTOCOL_ADDRESS,
		abi: PROTOCOL_ABI,
		functionName: "registerAsHolder",
		args: [holderName]
	});
	const { write: registerFeeder } = useContractWrite(feederConfig);
	const { write: registerHolder } = useContractWrite(holderConfig);

	function onFeederRegistration(e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		registerFeeder?.();
	}

	function onHolderNameUpdate(e: ReactChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		e.preventDefault();
		setHolderName(e.currentTarget.value);
	}

	function onHolderRegistration(e: ReactFormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (holderName.length === 0) {
			return;
		}
		registerHolder?.();
	}

	const feederButton = getFeederRegistration(data?.[0], error, isLoading, onFeederRegistration);
	const holderButton = getHolderRegistration(data?.[1], error, isLoading, onHolderNameUpdate, onHolderRegistration);

	return (
		<div className={styles.registration}>
			{feederButton}
			{holderButton}
		</div>
	);
}

function getFeederRegistration(
	data: boolean | undefined, 
	error: any, 
	isLoading: boolean, 
	onClick: (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void
) {
	if (isLoading) {
		return (<div><h2>Checking feeder status...</h2></div>);
	}
	if (data === undefined || error) {
		return (<div><h2>Feeder status check failed.</h2></div>);
	}

	return data 
		? (<div><h2>Already a feeder !</h2></div>)
		: RegisterButton({ title: "Become a feeder", onClick });
		
}

function getHolderRegistration(
	data: boolean | undefined, 
	error: any, 
	isLoading: boolean, 
	onUpdate: (e: ReactChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
	onSubmit: (e: ReactFormEvent<HTMLFormElement>) => void
) {
	if (isLoading) {
		return (<div><h2>Checking holder status...</h2></div>);
	}
	if (data === undefined || error) {
		return (<div><h2>Holder status check failed.</h2></div>);
	}

	return data 
		? (<div><h2>Already a holder !</h2></div>)
		: RegisterForm({ buttonTitle: "Become a holder", onInputUpdate: onUpdate, onSubmit });
		
}

export default Registration;