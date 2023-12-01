import { useState } from 'react'
import SortingBlock from './components/SortingBlock'

function App() {
  const [unsortedArray, setUnsortedArray] = useState([3, 7, 4, 6, 9, 13, 6, 8])
  const [sortedArray, setSortedArray] = useState([])

  const bubbleSort = (inputArray) => {
    const newArray = [...inputArray];
    let a, b;

    for (let i = 0; i < newArray.length; i++) {
      for (let j = i; j < newArray.length; j++) {
        a = newArray[j];
        b = newArray[j + 1];
        if (a > b) {
          newArray[j] = b;
          newArray[j + 1] = a;
        }
      }
    }
    setSortedArray(newArray);
  }

  const selectionSort = (inputArray) => {
    const newArray = [...inputArray];
    let smallestIndex, smallestValue;

    for (let i = 0; i < newArray.length; i++) {
      smallestIndex = i;
      smallestValue = newArray[i];

      for (let j = i; j < newArray.length; j++) {
        if (newArray[j] < smallestValue) {
          smallestIndex = j;
          smallestValue = newArray[j];
        }
      }
      [newArray[i], newArray[smallestIndex]] = [newArray[smallestIndex], newArray[i]];
    }
    setSortedArray(newArray)
  }

  const resetArray = () => {
    setSortedArray([...unsortedArray])
  }

  return (
    <>
      <h1>Sorting algorithms</h1>
      <SortingBlock
        unsortedArray={unsortedArray}
        bubbleSort={bubbleSort}
        selectionSort={selectionSort}
        sortedArray={sortedArray}
      />
      <button onClick={resetArray}>Reset sorted</button>
    </>
  )
}

export default App
