import ScopeItem from "../scope-item";
import styles from "./index.module.scss";

interface HolderItemProps {
	name: string;
	scopes: string[];
}

function HolderItem({name, scopes}: HolderItemProps) {
	return (
		<div className={styles.holderItem}>
			<p>{name}</p>
			<ul>
				{scopes.map((s, index) => (<li key={index}><ScopeItem name={s}/></li>))}
			</ul>
		</div>
	);
}

export default HolderItem;