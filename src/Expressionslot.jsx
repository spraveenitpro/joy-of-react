import { formatDate } from "./date-helpers.js";

const message = {
	content: "Just ate at “Les Corbeaux En Colère”. Wonderful little venue!",
	published: "2024-03-14T15:09:26.000Z",
	author: {
		avatarSrc: "https://sandpack-bundler.vercel.app/img/avatars/009.png",
		avatarDescription: "Cartoon bear",
		name: "Ben Thorn",
		handle: "benjaminthorn"
	}
};
const profileUrl = `/users/${message.author.handle}`;

function Expressionslot() {
	return (
		<>
			<article style={{ filter: "var(--shadow-elavation-high)" }}>
				<header>
					<img
						src={message.author.avatarSrc}
						alt={message.author.avatarDescription}
					/>
					<a href={profileUrl}>{message.author.name}</a>
				</header>
				<p>{message.content}</p>
				<footer>
					Posted{" "}
					<time dateTime={formatDate(message.published)}>
						{formatDate(message.published)}
					</time>
				</footer>
			</article>
		</>
	);
}

export default Expressionslot;
