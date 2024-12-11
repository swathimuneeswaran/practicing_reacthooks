// import React ,{useState}from 'react'

// const UseCallback = () => {
//     const [count,setCount]=useState(0)
//     const handleClick=()=>{
//         console.log("newly created")
//         alert("Button Clicked")
//     }
//   return (
//     <>
//     <ChildComponent onClick={handleClick}/>
//     <button onClick={()=>setCount(count+1)}>Increment</button>
//     <h2>count:{count}</h2>
//     </>
//   )
// }

// function ChildComponent({onClick})
// {
//     console.log("child created")
//     return(
//      <button onClick={onClick}>Click here</button>   
//     )
// }

// export default UseCallback



import React ,{useState,useCallback}from 'react'

const UseCallback = () => {
    const [count,setCount]=useState(0)
    const handleClick=useCallback(()=>{
        console.log("newly created")
        alert("Button Clicked")
    },[])
  return (
    <>
    <ChildComponent onClick={handleClick}/>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <h2>count:{count}</h2>
    </>
  )
}

const ChildComponent=React.memo(({onClick})=>
{
    console.log("child created")
    return(
     <button onClick={onClick}>Click here</button>   
    )
})

export default UseCallback