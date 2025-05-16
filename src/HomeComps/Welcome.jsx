import "./Welcome.css";
import PlayBtn from "./PlayBtn";

export default function Welcome() {
  return (
    <>
      <section className="welcome">
        <p> Welcome to Whack-A-Mole!</p>
        <p>Whack the mole to earn points</p>
        <p>How many can you get?</p>
        <PlayBtn />
      </section>
    </>
  );
}
