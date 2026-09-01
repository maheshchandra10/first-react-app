import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function Like({ likes, onLike }) {
    const [disabled, setDisabled] = useState(false);

    function heartBehaviour() {
        setDisabled(true);
        onLike();
        setTimeout(() => {
            setDisabled(false);
        }, 1000);
    }

    return (
        <div className="flex flex-row p-3 pb-8 justify-end gap-1">
            <button onClick={heartBehaviour} disabled={disabled}>
                <FontAwesomeIcon icon={ disabled ? faSolidHeart : faRegularHeart } style={ disabled ? { color: 'red' } : { cursor: 'pointer' }} />
            </button>
            <p>{likes}</p>
        </div>
    );
}

// React generally does not immediately re-render the component in the middle of your function after every setState call.
// It schedules the updates.
// You should not think of this as React immediately stopping your function and re-rendering right here.
// Your function continues.
// Calling a state setter requests/schedules a state update. Don't rely on the component re-rendering synchronously at that exact line.
//a state variable inside the current render does not immediately change after calling its setter if there's more lines to execute in the current flow.

//Tip:
// Structure your state in a way that the component that NEEDS the state-value OWNS it. Don't try to "beat" React's rendering mechanism, or rely on a workaround.