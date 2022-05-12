import { useState } from "react"

const UseStateObject = () =>
{
    // const [ people, setPeople ] = useState({
    //     name: "Olaide", 
    //     age: 29,
    //     message: "Success"
    // })
    
    // OR
    const [ name, setPeople ] = useState("Olaide");
    const [ age, setAge ] = useState(29);
    const [ message, setMessage ] = useState("Success");

    // const changeMessage = () =>
    // {
    //     setPeople({...people, message: "Excellent"});
    // }

    const changeMessage = () =>
    {
        setMessage("Excellent");
    }
  return (
    // <div>
    //       <h2>{ people.name }</h2>
    //       <h2>{ people.age }</h2>
    //       <h2>{ people.message }</h2>
    //       <button onClick={changeMessage}>Change Message</button>
    // </div>
      
      <>
          <h2>{ name }</h2>
          <h2>{ age }</h2>
          <h2>{ message }</h2>
          <button onClick={changeMessage}>Change Message</button>
      </>
  )
}

export default UseStateObject;
