import { InjectedConnector } from "@wagmi/core";
import { NavLink } from "react-router-dom";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import Navbar from "../navbar";
import styles from "./index.module.scss";

function Header() {
	const { address, isConnected } = useAccount();
	const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
	
	return (
		<header className={styles.header}>
			<NavLink className={`${styles.appLogo} ${styles.headerItem}`} to={"/"}>Moulaga Protocol</NavLink>
			<Navbar className={styles.headerItem}/>
			{ address !== undefined && isConnected 
				? <button className={styles.headerItem} onClick={_ => disconnect()}>{address}</button>
				: <button className={styles.headerItem} onClick={_ => connect()}>Connect</button>
			}
		</header>
	);
}

export default Header;