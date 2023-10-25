import "./styles.css";

import Whitespaces from "./Whitespaces";
import Expressionslot from "./Expressionslot";
import FriendlyGreeting from "./FriendlyGreeting";
import RedButton from "./RedButton";
import ContactCard from "./ContactCard";
import MyButton from "./MyButton";
import Avatar from "./Avatar";

const data = [
	{
		id: 'sunita-abc123',
		name: 'Sunita Kumar',
		job: 'Electrical Engineer',
		email: 'sunita.kumar@acme.co',
	},
	{
		id: 'henderson-def456',
		name: 'Henderson G. Sterling II',
		job: 'Receptionist',
		email: 'henderson-the-second@acme.co',
	},
	{
		id: 'aio-ghi789',
		name: 'Aoi Kobayashi',
		job: 'President',
		email: 'kobayashi.aoi@acme.co',
	},
]

const data1 = [
	{
		id: '001',
		alt: "person with curly hair and a black T-shirt"
	},
	{
		id: '002',
		alt: "person wearing a hijab and glasses"
	},
	{
		id: '003',
		alt: "person with short hair wearing a blue hoodie"
	},
	{
		id: '004',
		alt: "person with a pink mohawk and a raised eyebrow"
	},
];

export default function App() {
	return (
		<div className="App">
			<h1>Joy of React exercises</h1>
			<Whitespaces />
			<Expressionslot />
			<FriendlyGreeting name="Praveen" />

			<RedButton content="Dont click" />

			<MyButton status="cancel" > Cancel </MyButton>
			<MyButton status="confirm"> Confirm </MyButton>



			<ul>
				{
					data.map((contact) => {
						return <ContactCard key={contact.id} name={contact.name} job={contact.job} email={contact.email} />
					})
				}
			</ul>

			<ul>
				{
					data.map((contact) => (
						<ContactCard key={contact.id} name={contact.name} job={contact.job} email={contact.email} />
					))
				}
			</ul>

			{
				data1.map(({ id, alt }) => {
					<Avatar key={id} src={`https://sandpack-bundler.vercel.app/img/avatars/${id}.png`} alt={alt} />
				})
			}

			<div className="avatar-set">

				{data1.map(({ id, alt }) => (
					<Avatar
						key={id}
						src={`https://sandpack-bundler.vercel.app/img/avatars/${id}.png`}
						alt={alt}
					/>
				)
				)}


			</div>




		</div>
	);
}
