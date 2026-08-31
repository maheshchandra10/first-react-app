import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Details({ name, designation, age = '41', buttonClickedProp, showInterests, children }) {

    return (
        <div className="flex flex-col pt-3  gap-5">
            <div className="flex flex-col gap-1">
                <div className="flex flex-col items-center">
                    <h1 style={{ fontSize: '1.60rem', fontWeight: 'bold' }}>{name}, {age}</h1>
                    <p style={{ color: 'green' }}>{designation}</p>
                </div>
                {children}
            </div>
            <div className="flex flex-row gap-5 justify-center">
                <button onClick={() => buttonClickedProp('email')} className="bg-white hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-1 px-3 border border-gray-500 hover:border-transparent rounded">
                    <div className="flex flex-row items-center gap-1">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>Email</p>
                    </div>
                </button>
                <button onClick={() => buttonClickedProp('LinkedIn')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                    <div className="flex flex-row items-center gap-1">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <p>LinkedIn</p>
                    </div>
                </button>
            </div>
            <div className="flex flex-col px-8">
                <h2 style={{ fontWeight: 'bold' }}>About</h2>
                <p style={{ fontSize: '13.5px' }}>I am a singer with hell lotta coolness.. And guess what! I am an actress too. Let's rock and roll together! 🤘</p>
            </div>
            <div className="flex flex-col px-8">
                {
                    showInterests &&
                    <>
                        <h2 style={{ fontWeight: 'bold' }}>Interests</h2>
                        <p style={{ fontSize: '13.5px' }}>Acting, Singing, Partying</p>
                    </>
                }
            </div>
        </div>
    );
}

//dont change a prop in the child component coming from a parent component. Treat is as read-only.
//It wont give any errors, but still.. for a better practice.