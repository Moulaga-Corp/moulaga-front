import { ReactNode } from "react";
import styles from "./index.module.scss";

interface ListContainerProps {
	placeholder: string;
	children?: ReactNode[];
}

function ListContainer({placeholder, children}: ListContainerProps) {
	if (children === undefined || children.length === 0) {
		return (<div className={styles.listContainer}><p>{placeholder}</p></div>);
	}
	return (
		<div className={styles.listContainer}>
			<ul>
				{children}
			</ul>
		</div>
	);
}

export default ListContainer;