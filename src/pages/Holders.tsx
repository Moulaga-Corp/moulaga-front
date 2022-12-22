import HolderItem from "../components/holder-item";
import ListContainer from "../components/list-container";
import { useGetHolders } from "../services/holders";

function Holders() {
  const { data, error, isLoading } = useGetHolders();

  if (isLoading) {
    return (<ListContainer title="Holders" placeholder="Fetching data..."/>);
  }

  if (error) {
    return (<ListContainer title="Holders" placeholder={
      typeof error.message === "string"
        ? error.message
        : String(error)
    }/>);
  }

  return (
    <ListContainer title="Holders" placeholder={"No holders found !"}>
      {data?.map((holder, index) => (
        <li key={index}><HolderItem name={holder.name} scopes={holder.scopes}/></li>
      ))}
    </ListContainer>
  );
}

export default Holders;