import React from 'react';
import Dice from './components/Dice';

export default function App() {

  const [diceData, setDiceDate] = React.useState(getRandomNumbers());
  const [tenzies, setTenzies] = React.useState({
    won: false,
    count: 0
  });

  React.useEffect(() => {
    console.log('Dice state changed');
  }, [])
  
  function getRandomNumbers() {
    //create an empty array to holds 10 numbers
    const numbers = [];
    //iterate 10 times to get 10 random number
    for (let i = 0; i < 10; i++) {
      const number = Math.ceil(Math.random() * 6);
      let randNumber = {};
      randNumber['value'] = number;
      randNumber['isPaused'] = false;
      randNumber['id'] = i + 1;
      //add random number generated into the array numbers
      numbers.push(randNumber);
    }
    //return a list of numbers
    return numbers;
  }
  
  function handleRoll() {
    setTenzies(prevTenzies => { return { ...prevTenzies, count: count + 1 } });

    setDiceDate(prevDiceData =>
      prevDiceData.map(data => {
        return !data.isPaused ?
          {...data, value: Math.ceil(Math.random() * 6)} :
          data
      }
      ))
  }
  
  function handleIsHeld(id) {
    setDiceDate(prevDiceData =>
      prevDiceData.map(data => {
        return data.id === id ?
        { ...data, isPaused: hold(data.isPaused) } :
        data
      }
    ))
  }

  const dices = diceData.map((data, index) =>
    <Dice onHeld={
      () =>
        handleIsHeld(data.id)}
        key={index}
        diceData={data}
    />);

  const hold = (param) => {
    return !param;
  }
  
  return (
    <div className='dicesBoard'>
      <h2>Click to play this game</h2>
      {dices}
      <button className='rollBtn' onClick={handleRoll}>{ tenzies.won ? 'Reset Game' : 'Roll' }</button>
    </div>
  )

}