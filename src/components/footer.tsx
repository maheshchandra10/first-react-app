import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareTwitter, faSquareInstagram, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";


export default function Footer(props: { socialCounts: number }) {

    const allSocials = [<FontAwesomeIcon key="twitter" style={{ color: 'gray' }} size="xl" icon={faSquareTwitter} />,
    <FontAwesomeIcon key="facebook" style={{ color: 'gray' }} size="xl" icon={faSquareFacebook} />,
    <FontAwesomeIcon key="instagram" style={{ color: 'gray' }} size="xl" icon={faSquareInstagram} />,
    <FontAwesomeIcon key="github" style={{ color: 'gray' }} size="xl" icon={faSquareGithub} />];

    const socialsToShow = allSocials.slice(0, props.socialCounts);
    const [selectedSocial, setSelectedSocial] = useState('');

    function socialClicked(social) {
        setSelectedSocial(social);
        switch (social) {
            case 'twitter':
                window.open('https://x.com', '_blank');
                break;
            case 'facebook':
                window.open('https://facebook.com', '_blank');
                break;
            case 'instagram':
                window.open('https://instagram.com', '_blank');
                break;
            case 'github':
                window.open('https://github.com', '_blank');
                break;
        }
    }

    return (
        <div className="py-3 flex flex-row items-center justify-center gap-4" style={{ backgroundColor: 'darkgray' }}>
            {socialsToShow.map((social, index) => (
                <button key={social.key} onClick={() => socialClicked(social.key)} style={{ cursor: 'pointer', backgroundColor: selectedSocial === social.key ? 'blue' : '' }}>
                    {social}
                </button>
            ))}
        </div>
    );
}

//while using map(), try not to have key as 'index' since arrays can be manipulated and a different item can come at the place of another indexed item. 
// Use a unique identifier which is actually present in the array.