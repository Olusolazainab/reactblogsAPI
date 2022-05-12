import {useState} from 'react'

const UseStateCounter = () =>
{
    const [ value, setValue ] = useState(0);

    const handleReset = () =>
    {
        setValue(0);
}
    const complexIncrease = () =>
    {
        setTimeout(() =>
        {
            // setValue(value + 1);
            setValue((prevState) =>
            {
                return prevState + 1;
            })
        }, 2000);
}
  return (
      <div>
          <section style={ { margin: "4rem 0" } }>
              <h1>Regular Counter</h1>
              <h1>{ value }</h1>
              <button onClick={ () => setValue(value-1) }>Decrease</button>
              <button onClick={ () => setValue(value+1) }>Increase</button>
              <button onClick={handleReset}>Reset</button>
          </section> 
      
          <section style={ { margin: "4rem 0" } }>
              <h1>More Complex Counter</h1>
              <h1>{ value }</h1>
              <button onClick={ complexIncrease }>Increase Later</button>
              
          </section> 
    </div>
  )
}

export default UseStateCounter;
