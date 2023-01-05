import styles from "./index.module.scss";
import HolderRegistration from "../holder-registration";
import FeederRegistration from "../feeder-registration";

interface RegistrationProps {
	wallet: string;
}

function Registration({wallet}: RegistrationProps) {
	return (
		<div className={styles.registration}>
			<FeederRegistration wallet={wallet}/>
			<HolderRegistration wallet={wallet}/>
		</div>
	);
}

export default Registration;