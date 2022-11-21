
import Recipes from "../../components/recipes/Recipes";
import sword from "../../images/swc-sword.png";
import swordSvg from "../../images/sword.svg";
import firebaseInstance from "../../services/firebase/Firebase";

export default function Home() {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <button onClick={firebaseInstance.createAccount("beep", "beep")} >Click me!</button>
                </section>
                <img src={sword} alt="sword" width= "250" />
                <img src={swordSvg} alt="sword" width= "250" />
                <Recipes />
            </main>
        </>
    );
};
