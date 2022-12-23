import { MouseEvent as ReactMouseEvent } from "react";
import styles from "./index.module.scss";

interface SbtItemProps {
	tokenId: number;
	holder: string;
	consumer: string;
	onRevoke: (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function SbtItem({tokenId, holder, consumer, onRevoke}: SbtItemProps) {
 return (
	<div className={styles.sbtItem}>
		<div>
			<h3>Token: {tokenId}</h3>
			<p>Holder: {holder}</p>
			<p>Consumer: {consumer}</p>
		</div>
		<button onClick={onRevoke}>Revoke</button>
	</div>
 );
}

export default SbtItem;