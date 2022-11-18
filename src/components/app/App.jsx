import "../../styles/index.css";
import Map from "../map/Map";
import Player from "../player/Player";

const App = () => {
    return (
        <>
            <main>
                <section>
                    <Map />
                    <Player />
                </section>
            </main>
        </>
    )
};

export default App;
