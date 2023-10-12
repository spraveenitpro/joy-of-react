import "./styles.css";

import Whitespaces from "./Whitespaces";
import Expressionslot from "./Expressionslot";
import FriendlyGreeting from "./FriendlyGreeting";

export default function App() {
	return (
		<div className="App">
			<h1>Joy of React exercises</h1>
			<Whitespaces />
			<Expressionslot />
			<FriendlyGreeting />
		</div>
	);
}
