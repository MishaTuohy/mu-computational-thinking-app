import "../../styles/index.css";

const Player = () => {
    return (
        <>
            <div class="player-info">
                <div>
                    <label for="player-name">Your Name</label>
                    <input id="player-name" maxlength="10" type="text" />
                </div>
                <div>
                    <button id="player-color">Change Color</button>
                </div>
            </div>
        </>
    )
};

export default Player;
