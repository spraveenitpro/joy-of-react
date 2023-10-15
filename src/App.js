import "./styles.css";

import Whitespaces from "./Whitespaces";
import Expressionslot from "./Expressionslot";
import FriendlyGreeting from "./FriendlyGreeting";
import RedButton from "./RedButton";
import ContactCard from "./ContactCard";



export default function App() {
	return (
		<div className="App">
			<h1>Joy of React exercises</h1>
			<Whitespaces />
			<Expressionslot />
			<FriendlyGreeting name="Praveen" />

			<RedButton content="Dont click" />
			<ul>
				<ContactCard name="Sunita" job="Electrical Engineer" email="sunita.kumar@acme.co" />
				<ContactCard name="Raj" job="Computer Engineer" email="sunita.kumar@acme.co" />
				<ContactCard name="Kumar" job="Mechanical Engineer" email="sunita.kumar@acme.co" />
			</ul>
		</div>
	);
}
