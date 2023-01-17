import { MouseEvent as ReactMouseEvent, useState } from "react";
import LoadingComponent from "../common/loading-commponent";
import ListContainer from "../components/list-container";
import SbtItem from "../components/sbt-item";
import { listSbtsFetcher } from "../services/sbts";

interface AccessControlProps {
  wallet: string;
}

function AccessControl({wallet}: AccessControlProps) {
  const [tokens, setTokens] = useState<{tokenId: string; holder: string, consumer: string;}[]>([]);

  function revokeToken(e: ReactMouseEvent<HTMLButtonElement, MouseEvent>, index: number) {
    e.preventDefault();
    if (index < 0 || tokens.length <= index) {
      console.log("nope")
      return;
    }
    console.log("filtering")
    setTokens(tokens.filter((_, idx) => idx !== index));
  }

  return <LoadingComponent
    initializedUI={<></>}
    loadingUI={<ListContainer title="Access control list" placeholder="Retrieving granted sbts..."/>}
    successUI={_ => {
      return <ListContainer title="Access control list" placeholder={"No SBTs found !"}>
        {tokens.map((token, index) => (
          <li key={index}>
            <SbtItem 
              tokenId={token.tokenId} 
              holder={token.holder} 
              consumer={token.consumer}
              onRevoke={e => revokeToken(e, index)}/>
          </li>
        ))}
      </ListContainer>
    }}
    errorUI={err => <ListContainer title="Access control list" placeholder={err.message}/>}
    dataFetcher={() => listSbtsFetcher(wallet)}
    onSuccess={d => setTokens(d)} />;
}

export default AccessControl;