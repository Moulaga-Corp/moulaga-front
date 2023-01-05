import LoadingComponent from "../common/loading-commponent";
import HolderItem from "../components/holder-item";
import ListContainer from "../components/list-container";
import { getHoldersFetcher } from "../services/holders";

function Holders() {
  return <LoadingComponent
    initializedUI={<></>}
    loadingUI={<ListContainer title="Holders" placeholder="Retrieving holders..."/>}
    successUI={data => {
      return <ListContainer title="Holders" placeholder={"No holders found !"}>
        {data.map((holder, index) => (
          <li key={index}><HolderItem name={holder.name} scopes={holder.scopes}/></li>
        ))}
      </ListContainer>;
    }}
    errorUI={err => <ListContainer title="Holders" placeholder={err.message}/>}
    dataFetcher={() => getHoldersFetcher()} />;
}

export default Holders;