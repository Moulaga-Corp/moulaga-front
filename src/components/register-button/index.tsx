import { MouseEvent as ReactMouseEvent } from "react";
import styles from "./index.module.scss";

interface RegisterButtonProps {
	title: string;
	onClick?: (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function RegisterButton({title, onClick}: RegisterButtonProps) {
	return (
		<div className={styles.registerContainer}>
			<button onClick={onClick}>{title}</button>
		</div>
	);
}

export default RegisterButton;