
import { useState } from 'react';
const UseStateBasics = () =>
{
    const [ text, setText ] = useState("Welcome");

    const handleClick = () =>
    {
        if (text === "Welcome")
        {
            setText("Goodbye")
        } else
        {
            setText("Welcome")
        }
        
    }
  return (
    <div>
          <h1>{ text }</h1>
          <button onClick={handleClick}>Change</button>
    </div>
  )
}

export default UseStateBasics;
