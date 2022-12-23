import Registration from "../components/registration";

interface OnboardingProps {
	wallet: string;
}

function Onboarding({wallet}: OnboardingProps) {
  return (<Registration wallet={wallet}/>);
}

export default Onboarding;