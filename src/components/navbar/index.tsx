import { NavLink } from "react-router-dom";
import { useAccount } from "wagmi";
import styles from "./index.module.scss";

function navbarItems(isConnected: boolean): readonly { name: string; url: string; }[] {
	let items = [{
		name: "Home",
		url: "/"
	}, {
		name: "Holders",
		url: "/holders"
	}];

	if (isConnected) {
		items.push({ name: "Access Control", url: "/access-control" });
	}

	return Object.freeze(items);
}

interface NavbarProps {
	className: string;
}

function Navbar({className}: NavbarProps) {
	const { address, isConnected } = useAccount();
	const menuItems = navbarItems(address !== undefined && isConnected);
	return (
		<nav className={`${styles.navbar} ${className}`}>
			<ul>
				{menuItems.map((item, index) => (<li key={index} >
					<NavLink 
						className={({ isActive }) => isActive ? styles.activeNav : "" } 
						key={index} 
						to={item.url} end
					>{item.name}</NavLink>
				</li>))}
			</ul>
		</nav>
	);
}

export default Navbar;