import React, { useState } from 'react';

const data = [
  {
    name: 'Counter 1',
    value: 0
  }, {
    name: 'Counter 2',
    value: 0
  }, {
    name: 'Counter 3',
    value: 0
  }
];

export default function List() {
  const [counter, setCounter] = useState(data);

  function handleOnButtonClick(index){
    const incrementCounter = [...counter];

    incrementCounter[index] = {
      ...incrementCounter[index],
      value: incrementCounter[index].value + 1
    };

    setCounter(incrementCounter);
  }

  return (
    <div>
      <ul>
        {
          counter.map((eachCounter, i) => {
            return (
              <React.Fragment key={`${eachCounter.name}-${i}`}>
                <li> { eachCounter?.name } - { eachCounter?.value } </li>
                <button onClick={ () => handleOnButtonClick(i)}> +1 </button>
              </React.Fragment>
            )
          })
        }
      </ul>
    </div>
  )
}