import { BigNumber } from "ethers";
import { MouseEvent as ReactMouseEvent } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import ListContainer from "../components/list-container";
import SbtItem from "../components/sbt-item";
import { useListSbts } from "../services/sbts";
import SBT_ABI from "../services/web3/sbt.abi";

interface AccessControlProps {
  wallet: string;
}

function AccessControl({wallet}: AccessControlProps) {
  const { data, error, isLoading, mutate } = useListSbts(wallet);
  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_SBT_ADDRESS,
    abi: SBT_ABI,
    functionName: "burn",
  })
  const { write } = useContractWrite(config);

  function revokeToken(e: ReactMouseEvent<HTMLButtonElement, MouseEvent>, index: number) {
    e.preventDefault();
    if (data === undefined || write === undefined) {
      return;
    }

    write({ recklesslySetUnpreparedArgs: [BigNumber.from(data[index].tokenId)] })
    mutate(data.filter((_, idx) => idx !== index), { revalidate: false });
  }

  if (isLoading) {
    return (<ListContainer title="Access control list" placeholder="Fetching data..."/>);
  }

  if (error) {
    return (<ListContainer title="Access control list" placeholder={
      typeof error.message === "string"
        ? error.message
        : String(error)
    }/>);
  }

  return (
    <ListContainer title="Access control list" placeholder={"No SBTs found !"}>
      {data?.map((token, index) => (
        <li key={index}>
          <SbtItem 
            tokenId={token.tokenId} 
            holder={token.holder} 
            consumer={token.consumer}
            onRevoke={e => revokeToken(e, index)}/>
        </li>
      ))}
    </ListContainer>
  );
}

export default AccessControl;