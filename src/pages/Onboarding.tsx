import { ReactNode } from "react";
import LoadingComponent from "../common/loading-commponent";
import Registration from "../components/registration";

interface OnboardingProps {
	wallet: string;
}

function Onboarding({wallet}: OnboardingProps) {
  return (<Registration wallet={wallet}/>);
	// return (
	// 	<>
	// 		<LoadingComponent 
	// 			initializedUI={<p>Init</p>} 
	// 			loadingUI={<p>Loading...</p>} 
	// 			successUI={data => <p>{data}</p>} 
	// 			errorUI={err => <p>{err.message}</p>} 
	// 			dataFetcher={() => new Promise<string>(resolve => setTimeout(() => resolve("1"), 5000))}/>
	// 		<LoadingComponent 
	// 			initializedUI={<p>Init</p>} 
	// 			loadingUI={<p>Loading...</p>} 
	// 			successUI={data => <p>{data}</p>} 
	// 			errorUI={err => <p>{err.message}</p>} 
	// 			dataFetcher={() => new Promise<string>(resolve => setTimeout(() => resolve("2"), 3000))}/>
	// 	</>
	// ); 
}

export default Onboarding;