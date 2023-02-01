import React from 'react';

const Dice = (props) => {

    const diceStyle = props.diceData.isPaused ? { backgroundColor: 'darkgreen' , color: 'white'} : { };

    return (
        <button onClick={props.onHeld} id={props.diceData.id} className='diceBtn' style={diceStyle}>{ props.diceData.value }</button>
    )
}

export default Dice;