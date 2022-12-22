import { ReactNode } from "react";
import styles from "./index.module.scss";

interface ListContainerProps {
	placeholder: string;
	title?: string;
	children?: ReactNode[];
}

function ListContainer({placeholder, title, children}: ListContainerProps) {
	if (children === undefined || children.length === 0) {
		return (
			<div className={styles.listContainer}>
				{title ? <h2>{title}</h2> : <></>}
				<p>{placeholder}</p>
			</div>
		);
	}
	return (
		<div className={styles.listContainer}>
			{title ? <h2>{title}</h2> : <></>}
			<ul>
				{children}
			</ul>
		</div>
	);
}

export default ListContainer;