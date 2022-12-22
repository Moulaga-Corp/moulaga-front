import styles from "./index.module.scss";

interface ScopeItemProps {
	name: string;
}

function ScopeItem({name}: ScopeItemProps) {
	return (
		<div className={styles.scopeItem}>
			<p>{name}</p>
		</div>
	);
}

export default ScopeItem;