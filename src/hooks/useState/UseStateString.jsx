import React,{useState} from 'react'

const UseStateString = () => {
    const [name,setName]=useState("")
    const [save,setSave]=useState([])
    
    const handleSubmit=(e)=>{
      e.preventDefault();
     setSave(()=>[...save,name])
      setName("")
    }
  return (
    <>
     <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
     <button type="submit" onClick={handleSubmit}>submit</button>
     <h3>
       {save.map(ele=>(
        <li>{ele}</li>
       ))}
     </h3>
    </>
  )
}

export default UseStateString