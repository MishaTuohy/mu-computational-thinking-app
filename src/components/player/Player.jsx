import "../../styles/index.css";

const Player = () => {
    return (
        <>
            <div className="player-info">
                <div>
                    <label htmlFor="player-name">Your Name</label>
                    <input id="player-name" maxLength="10" type="text" />
                </div>
                <div>
                    <button id="player-color">Change Color</button>
                </div>
            </div>
        </>
    )
};

export default Player;
