import Timer4mins from "../Components/Timer4mins"
import React, { useState } from 'react';

function Soft() {

     const [isTiming, setIsTiming] = useState(false);
     const imageURL = './src/assets/pic1.png';

    return(
        
        <div className="container">
        <div className="box2">
        <header className="title">
            <h1>
            Soft-Boiled
            </h1>
        </header>
        <div className="card">
        <img className={`card-image1 ${isTiming ? 'pulsing' : ''}`}  src={imageURL} alt="pic1"/>
        
        <Timer4mins setIsTiming={setIsTiming} />
        </div>
        </div>
        </div>
        
    );
}

export default Soft