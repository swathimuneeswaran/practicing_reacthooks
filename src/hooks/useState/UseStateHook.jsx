import React,{useContext, useState} from 'react'
import  DemoContext  from '../useContext/PracticeContext';

const UseStateHook = () => {

    const [count,setCount]=useState(0);
    const [date,setDate]=useState(0);
    const {age,setAge}=useContext(DemoContext)

    const handleCount=()=>{
        setCount((prevCount)=>prevCount+1)
    }
    // const [state, setState] = useState(() => {
    //   //Lazy Initialization:The function will only run once, during the initial render.
    //   return expensiveComputation();
    // });

    const handleSubmit=()=>{
      console.log(age,date);
      setDate("")
      setAge("")
    }
    

  return (
   <>
     <div className="div">
        <h1>{count}</h1>
        <button onClick={handleCount}>Increment</button>
        <button onClick={()=>{setCount((prevCount)=>prevCount-1)}}>decrement</button>
     </div>

     <input type="date" placeholder='Date' value={date} onChange={(e)=>setDate(e.target.value)}/><br />
     <input type="number" placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)}/><br />
     <button onClick={handleSubmit}>Submit</button><br />
   </>
  )
}

export default UseStateHook