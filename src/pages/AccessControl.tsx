import { MouseEvent as ReactMouseEvent } from "react";
import ListContainer from "../components/list-container";
import SbtItem from "../components/sbt-item";
import { useListSbts } from "../services/sbts";

interface AccessControlProps {
  wallet: string;
}

function AccessControl({wallet}: AccessControlProps) {
  const { data, error, isLoading, mutate } = useListSbts(wallet);

  function revokeToken(e: ReactMouseEvent<HTMLButtonElement, MouseEvent>, index: number) {
    e.preventDefault();
    if (data === undefined) {
      return;
    }

    //write({ recklesslySetUnpreparedArgs: [BigNumber.from(tokenId)] })
    mutate(data.filter((_, idx) => idx !== index), { revalidate: false });
  }

  if (isLoading || data === undefined) {
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
      {data && data.map((token, index) => (
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