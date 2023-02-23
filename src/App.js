import "./App.css";
import view from "./images/icon-view.svg";
import avatar from "./images/image-avatar.png";
import cube from "./images/image-equilibrium.jpg";
import symbol from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";

function App() {
  return (
    <main>
      <div className="nft-container">
        <div className="nft-img">
          <img className="active" src={view} alt="icon" />
          <img className="static" src={cube} alt="cube" />
        </div>

        <div className="nft-heading">
          <h2>Equilibrium #3429</h2>
        </div>

        <div className="nft-text">
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </div>
        <section>
          <div className="eth-icon">
            <img src={symbol} alt="symbol" />
          </div>
          <div className="etherium">
            <p>0.041 ETH</p>
          </div>

          <div className="clock-icon">
            <img src={clock} alt="clock icon" />
          </div>
          <div className="time-left">
            <p>3 days left</p>
          </div>
        </section>
        <div className="line"></div>

        <div className="creator">
          <div className="creator-img">
            <img src={avatar} alt="profile pic" />
          </div>

          <div className="creator-name">
            <p>
              Creation of
              <span className="name-white">Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
