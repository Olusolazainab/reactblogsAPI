
import { useState } from "react"


const Create = () =>
{
  const [ title, setTitle ] = useState("")
  const [ body,  setBody ] = useState("")
  const [ author, setAuthor ] = useState("mario")
  const [ ispending, setIsPending ] = useState(false)
  
  const handleSubmit = (e) =>
  {
   
    e.prevent.Default();
    const blog = { title, body, author };
    
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then((res) =>
    {
     res.json()
      .then((json)=>console.log(json));
      setIsPending(false)
    })
  }
  return (   
    <div className='create'>
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text"
          required
          value={ title }
          onChange={(e)=> setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea required
          value={ body }
          onChange={(e)=> setBody(e.target.value)}
        ></textarea>
        <label>Blog author</label>
        <select
          value={ author }
        onChange={(e)=> setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!ispending && <button>Add Blog</button> }
        { ispending && <button disabled>Adding blog...</button> }
      </form>
    </div>
  )
}

export default Create
