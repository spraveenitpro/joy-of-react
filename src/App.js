import "./styles.css";

import Whitespaces from "./Whitespaces";
import Expressionslot from "./Expressionslot";
import FriendlyGreeting from "./FriendlyGreeting";

function RedButton({ children }) {
	return (
		<button
			style={{
				color: 'white',
				backgroundColor: 'red'
			}}
		>
			{children}
		</button>
	);
}

export default function App() {
	return (
		<div className="App">
			<h1>Joy of React exercises</h1>
			<Whitespaces />
			<Expressionslot />
			<FriendlyGreeting name="Praveen" />

			<RedButton>Don't click me</RedButton>
		</div>
	);
}
