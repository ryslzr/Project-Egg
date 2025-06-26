import Timer6mins from "../Components/Timer6mins";
import React, { useState } from 'react';

function Medium() {
    const [isTiming, setIsTiming] = useState(false);
     const imageURL2 = './src/assets/pic2.png';

    return(
        <>
        <div className="container">
        <div className="box3">
        <header className="title">
            <h1>
            Medium-boiled
            </h1>
        </header>
        <div className="card">
        <img className={`card-image2 ${isTiming ? 'pulsing' : ''}`}  src={imageURL2} alt="pic2"/>
        <Timer6mins setIsTiming={setIsTiming} />
        </div>
        </div>
        </div>
        </>
    );
}

export default Medium