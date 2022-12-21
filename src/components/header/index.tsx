import { NavLink } from "react-router-dom";
import Navbar from "../navbar";
import styles from "./index.module.scss";

function Header() {
	return (
		<header className={styles.header}>
			<NavLink className={styles.appLogo} to={"/"}>Moulaga Protocol</NavLink>
			<Navbar/>
		</header>
	);
}

export default Header;