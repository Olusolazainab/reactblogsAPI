import React from 'react'
import { Data } from '../../Data';


const UseStateArray = () =>
{
    const [ people, setPeople ] = React.useState(Data);

    const removeItem = (id) =>
    {
        let newPeople = people.filter((person) => person.id !== id);
         setPeople(newPeople);
    };
  return (
    <>
          { people.map((person) =>
          {
              const { id, name } = person;
              return (
                  <div key={id}>   
                      <h4>{ name } </h4>
                      <button onClick={()=> removeItem(id)}>delete</button>
                  </div>
              );
          }) } 
            <button onClick={()=>setPeople([])}>clear items</button>
    </>
  )
}

export default UseStateArray
