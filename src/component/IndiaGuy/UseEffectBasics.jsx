import React from 'react'
import { useState , useEffect} from 'react'

const UseEffectBasics = () =>
{
    const [ value, setValue ] = useState(0);
    useEffect(() =>
    {
        if (value > 1)
        {
            document.title = `New Message (${value})`;
        }
       
    }, [value]);

    const handleClick = () =>
    {
        setValue(value + 1)
    }
  return (
      <>
          <h1>Use Effect Basics</h1>
          <h2>{ value }</h2>
          <button onClick={handleClick}> Click Me</button>
    </>
    )
}

export default UseEffectBasics
