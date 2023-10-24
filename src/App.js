import "./styles.css";

import Whitespaces from "./Whitespaces";
import Expressionslot from "./Expressionslot";
import FriendlyGreeting from "./FriendlyGreeting";
import RedButton from "./RedButton";
import ContactCard from "./ContactCard";
import MyButton from "./MyButton";

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




        </div>
    );
}
