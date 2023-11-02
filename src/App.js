import "./styles.css";

import Whitespaces from "./Whitespaces";
import Expressionslot from "./Expressionslot";
import FriendlyGreeting from "./FriendlyGreeting";
import RedButton from "./RedButton";
import ContactCard from "./ContactCard";
import MyButton from "./MyButton";
import Avatar from "./Avatar";
import ProfileCard from './ProfileCard';
import Graph from "./Graph";
import Counter from "./Counter";

const userProfiles = [
	{
		id: 'penelope-june-p1oer6',
		imageSrc: 'https://sandpack-bundler.vercel.app/img/sparkly-cat.png',
		imageAlt: 'A cat with illustrated groovy glasses and sparkles/rainbows',
		name: 'Penelope “bric-a-brac” June',
		joinDate: 'January 21st, 2022',
		badges: [
			{
				slug: 'ping-pong',
				label: '🏓  Athletic',
			},
			{
				slug: 'photographer',
				label: '📸 Photographer',
			},
			{
				slug: 'olympic-medalist',
				label: '🏅 Olympic Medalist',
			},
		]
	},
	{
		id: 'baron-montgomerie-9si39d',
		imageSrc: 'https://sandpack-bundler.vercel.app/img/fancy-cat.png',
		imageAlt: 'A very distinguished gentleman cat, with top hat and monocle',
		name: 'Baron Montgomerie of Eglinton III',
		joinDate: 'August 3rd, 1924',
		badges: []
	},
	{
		id: 'joan-clawmaker-5xch41',
		imageSrc: 'https://sandpack-bundler.vercel.app/img/punk-cat.png',
		imageAlt: 'A punk rock cat with earrings and a pink mohawk',
		name: 'Joan Clawmaker',
		joinDate: 'October 15th, 2019',
		badges: [
			{
				slug: 'notable',
				label: '⭐️ Notable',
			},
			{
				slug: 'musician',
				label: '🎸 Musician',
			},
		]
	},
]

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
		<main className="App">
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
						return <ContactCard name={contact.name} job={contact.job} email={contact.email} key={contact.id} />
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

			{userProfiles.map(profile => (
				<ProfileCard
					key={profile.id}
					profile={profile}

				/>
			))}


			<Graph
				from={0}
				to={40} />

			<Counter />

		</main>
	);
}
