import  {createContext,useState} from "react";


 const DemoContext=createContext()

export const DemoProvider=({ children })=>{

    const [age,setAge]=useState(0)

    return (
    <DemoContext.Provider value={{age,setAge}}>
        {children}
    </DemoContext.Provider>
    );
};

export default DemoContext;












// import {createContext,useState} from "react";

// const detailsContext=createContext()//it takes default value..provide value or make it to null

// export const detailsProvider=(children)=>{
//    const [value,setValue]=useState("");

//   return (
//      <detailsContext.Provider value={{value,setValue}}>
//          {children}
//      <detailsContext.Provider />
// }

// export default detailsProvider;


// in main.js
// <detailsProvider>
// <App />
// <detailsProvider/>

// in children we can access the value by useContext earlier we have used detailsContext.Consumer but in later version

// const {value,setValue}=useContext(detailsContext)
// <label>Value<label />
// <input type="text" value={value}onChange={(e)=>setValue(e.target.value)} />

