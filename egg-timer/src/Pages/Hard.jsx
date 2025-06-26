import Timer12mins from "../Components/Timer12mins";
import React, { useState } from 'react';

function Hard() {
    const [isTiming, setIsTiming] = useState(false);
     const imageURL3 = './src/assets/pic3.png';

    return(
        <>
        <div className="container">
        <div className="box4">
        <header className="title">
            <h1>
            Hard-boiled
            </h1>
        </header>
        <div className="card">
        <img className={`card-image3 ${isTiming ? 'pulsing' : ''}`}  src={imageURL3} alt="pic3"/>
        <Timer12mins setIsTiming={setIsTiming} />
        </div>
        </div>
        </div>
        </>
    );
}

export default Hard