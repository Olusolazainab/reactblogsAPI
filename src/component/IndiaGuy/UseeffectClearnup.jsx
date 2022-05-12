import {useState, useEffect} from 'react'

const UseeffectClearnup = () =>
{
    const [ size, setSize ] = useState(window.innerWidth)
    
    const checkSize = () =>
    {
        setSize(window.innerWidth);
    }

    useEffect(() =>
    {
        console.log("useEffect")
        window.addEventListener("resize", checkSize);
        return () =>
        {
            console.log("clearup")
            window.removeEventListener("resize", checkSize);
        }
    })
  return (
    <>
          <h1>Window</h1>
          <h2>{ size }px</h2>
    </>
  )
}

export default UseeffectClearnup;
