import { useNavigate } from "react-router-dom"



function Home(){

    const navigate = useNavigate();
    const imageURL = './src/assets/pic1.png';
    const imageURL2 = './src/assets/pic2.png';
    const imageURL3 = './src/assets/pic3.png';

    return(
        <>
    <div className="container">
     <div className="box-card">
         <header> 
            <h1>
                Egg Timer
            </h1>
        </header>

        <div className="box">
  <div className="card">
    <img className="card-image1" src={imageURL} onClick={() => navigate("Soft")} alt="pic1" />
    <h2 className="title">Soft<br />4~mins</h2>
  </div>
  <div className="card">
    <img className="card-image2" src={imageURL2} onClick={() => navigate("Medium")} alt="pic2" />
    <h2 className="title">Medium<br /> 6~mins</h2>
  </div>
  <div className="card">
    <img className="card-image3" src={imageURL3} onClick={() => navigate("Hard")} alt="pic3" />
    <h2 className="title">Hard<br /> 12~mins</h2>
  </div>
</div>
</div>
</div>

        </>
    );
}

export default Home