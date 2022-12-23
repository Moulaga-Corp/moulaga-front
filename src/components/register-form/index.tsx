import { ChangeEvent as ReactChangeEvent, FormEvent as ReactFormEvent } from "react";
import RegisterButton from "../register-button";
import styles from "./index.module.scss";

interface RegisterFormProps {
	buttonTitle: string;
	onInputUpdate: (e: ReactChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onSubmit: (e: ReactFormEvent<HTMLFormElement>) => void;
}

function RegisterForm({buttonTitle, onInputUpdate, onSubmit}: RegisterFormProps) {
	return (
		<form className={styles.registerFrom} onSubmit={onSubmit}>
			<input type="text" onChange={onInputUpdate}/>
			<RegisterButton title={buttonTitle}/>
		</form>
	)
}

export default RegisterForm;