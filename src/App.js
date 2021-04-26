import React, { useState } from 'react';
import { Input, Button, Alert } from 'rsuite';
import './App.css';

const App = () => {

  const [ num, setNum ] = useState('');
  const [ prime, setPrime ] = useState(false);
  const [ showResult, setShowResult ] = useState(false);

  const handleInput = (input) => {
    setNum(input);
  }

  const handleReset = () => {
    setNum('');
    setShowResult(false);
  }

  const verifyPrime = () => {

    if (!isNaN(num) && num !== '' && num % 1 === 0) {
      if (isPrime(num)) {
        setPrime(true);
      }
      else {
        setPrime(false);
      }

      setShowResult(true);
    }

    else if (num === '') {
      Alert.warning('Please enter a number to proceed.');
      setShowResult(false);
      setPrime(false);
    }
      
    else if (num % 1 !== 0) {
      Alert.warning('Please enter an integer number.');
      setShowResult(false);
      setPrime(false);
    }

    else {
      Alert.error('Please enter a numeric value.');
      setShowResult(false);
      setPrime(false);
    }
  }

  const isPrime = (num) => {
    if (num <= 1)
      return false;

    for (let i = 2; i < num; i++)
      if (num % i === 0)
        return false;

    return true;
  }

  const displayResult = () => {
    if (showResult) {

      const result_val = num;

      return (
        <p id='result'>
          { prime ? num + ' is a prime number.' : num + ' is NOT a prime number.' }
        </p>
      )
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1> Prime Number Verifier </h1>

      </header>

      <div className="App App-body">

        <p>
          Please enter a number below.
        </p>

        <Input
          value={ num }
          className="App-input"
          onChange={ input => {
            handleInput(input);
            setShowResult(false);
          } }
        />

        <Button
          className="submit-button"
          onClick={ verifyPrime }
        >
          Verify
        </Button>

        { displayResult() }

        <Button
          className='reset-button'
          appearance='subtle'
          onClick={ handleReset }>

          Reset

        </Button>

      </div>

    </div >
  );
}

export default App;
