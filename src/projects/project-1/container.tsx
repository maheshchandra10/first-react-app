import Image from "./image";
import Details from "./details";
import Footer from "./footer";
import "./container.css";
import { useEffect, useState } from "react";
import Like from "./like";

export default function Container() {
    const name: string = 'Avril Lavigne';
    const designation: string = 'Singer';
    const email: string = 'avrillavigne@rocknroll.com';
    const showInterests: boolean = true;

    const [likes, setLikes] = useState(0);

    function buttonClicked(whichButton?) {
        console.log('button clicked: ', whichButton);
    }

    function setLikesHandler() {
        setLikes(likes => likes + 1);
    }

    return (
        <>
            <main className="flex flex-col main-container m-4" style={{ backgroundColor: 'lightgray' }}>
                <Image />
                <Details name={name} designation={designation} buttonClickedProp={buttonClicked} showInterests={showInterests}>
                    <div className="flex flex-col items-center">
                        <p style={{ fontSize: '12px', fontWeight: 'lighter' }}>{email}</p>
                    </div>
                </Details>
                <Like likes={likes} onLike={setLikesHandler} />
                <Footer socialCounts={4} />
            </main>
        </>
    );
}


//A prop name cannot be 'key' or 'children'. Both of these are reserved by React. It will give an error!



/*const [count, setCount] = useState(0);

function handleClick() {
    setCount(count + 1);
    console.log(count);
}
*/
//console log will return 0, not 1.
//because we are still executing the function created during Render #1. The new Render hasn't rendered yet.
// React has not gone back in time and changed the count variable inside that already-running function.
//Render#1 function still sees old snapshot.
//You should not think:
// "setCount immediately modifies the count variable."
// Instead:
// "count is the state value given to this particular render. setCount asks React to create a future render with a new state value."