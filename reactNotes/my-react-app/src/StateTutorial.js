import React, {useState} from "react";

const StateTutorial = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        counter = counter + 1;
    };

    return (
        <div>
            {counter}
            <button onClick={increment}>increment</button></div>
    );
};

export default StateTutorial;