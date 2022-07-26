import "./dice.css";

const Dice = () => {
  function getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  }

  const num = getRandomNumber();

  return <p class="dice">Your dice roll: {num}</p>;
};

export default Dice;
