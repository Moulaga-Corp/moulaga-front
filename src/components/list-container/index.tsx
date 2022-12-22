import { ReactHTMLElement } from "react";

interface ListContainerProps {
	placeholder: string;
	children?: ReactHTMLElement<HTMLUListElement>[];
}

function ListContainer({placeholder, children}: ListContainerProps) {
	if (children === undefined || children.length === 0) {
		return (<div><p>{placeholder}</p></div>);
	}
	return (
		<div>
			<ul>
				{children}
			</ul>
		</div>
	);
}

export default ListContainer;