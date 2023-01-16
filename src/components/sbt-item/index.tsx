import { BigNumber } from "ethers";
import { MouseEvent as ReactMouseEvent } from "react";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import SBT_ABI from "../../services/web3/sbt.abi";
import styles from "./index.module.scss";

interface SbtItemProps {
	tokenId: number;
	holder: string;
	consumer: string;
	onRevoke: (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function SbtItem({tokenId, holder, consumer, onRevoke}: SbtItemProps) {
	const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_SBT_ADDRESS,
    abi: SBT_ABI,
    functionName: "burn",
		args: [BigNumber.from(tokenId)]
  })
  const { write } = useContractWrite(config);
	
	return (
	<div className={styles.sbtItem}>
		<div>
			<h3>Token: {tokenId}</h3>
			<p>Holder: {holder}</p>
			<p>Consumer: {consumer}</p>
		</div>
		<button onClick={e => {
			write?.(); 
			onRevoke(e);
		}}>Revoke</button>
	</div>
 );
}

export default SbtItem;