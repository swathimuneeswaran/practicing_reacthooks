import React,{useEffect,useState} from 'react'

const UseEffectNoDep = () => {
    const [count,setCount]=useState(0);


    //firstcase   
    //if there is no dependency list given means the useEffect will run on every render


    // useEffect(()=>{
    //     const interval=
    //         setInterval(()=>
    //             {
    //                 setCount((prevCount)=>prevCount+1)
    //     },2000)
        

    //     return ()=>{
    //         console.log("cleanup is running")
    //         clearInterval(interval)
    //     }
    // })

    //second case
    //if the given dependency list is an empty array means the useEffect will run only once
    useEffect(()=>{
        const interval=
            setTimeout(()=>
                {
                    setCount(count+1)
        },2000)
        
    },[]) 


    // useEffect(()=>{
    //     if(count>1)
    //         {
    //   setTimeout(()=>{
    //     alert(`count value is increased to ${count}`)
    //   },1000)
    // }
        
    // },[count]) 




  return (
   <>
   <h2>{count}</h2>

   <button onClick={()=>setCount(count+3)}>Click to change the count value </button>
   <p>THe Count value is changed to one{count}</p>
   </>
  )
}

export default UseEffectNoDep