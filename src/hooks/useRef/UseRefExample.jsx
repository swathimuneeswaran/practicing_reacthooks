import React,{useEffect, useRef,useState} from 'react'

const UseRefExample = () => {
    const [inputValue,setInputValue]=useState("")
    var count=useRef(0)
    // const inputRef = useRef(null);


    useEffect(()=>{
        count.current=count.current+1;
    })

    // const handleClick=()=>{
    //     inputRef.current.focus();
    // }
  return (
    <>
     <div className="container">
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <h2>Render Count:{count.current}</h2>
        {/* <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button> */}
     </div>
    </>
  )
}

export default UseRefExample


//A reference object acts like a pointer or a variable that holds the memory address of the actual data.
//When you modify a property of a mutable reference object, you're essentially changing the data it points to in memory.

// const inputRef = useRef(null);

// return <input ref={inputRef} />;
// how u r saying it is referencing the dom element..what is ref..it is reference
// edit
// Show drafts
// volume_up

// You're absolutely right! In the code you provided:

// JavaScript
// const inputRef = useRef(null);

// return <input ref={inputRef} />;
// Use code with caution.
// content_copy
// useRef Hook: The useRef hook is a built-in React Hook that allows you to create a reference object.
// Reference Object: This reference object acts like a container that can hold a value. In this case, we're using it to store a reference to a DOM element.
// null as Initial Value: Initially, inputRef.current (the reference object's current property) is set to null because the DOM element hasn't been created yet.
// How useRef References the DOM Element:

// JSX Assignment: When you use ref={inputRef} within the input element, React assigns the inputRef object to a special attribute on the DOM element during the rendering process.
// DOM Element Creation: During rendering, the browser creates the actual <input> element on the webpage based on your JSX code.
// Reference Assignment after Mount: After the component mounts and the DOM element is created, React assigns the actual DOM element to inputRef.current. This means inputRef.current no longer holds null, but now points to the real <input> element on the webpage.
// Accessing the DOM Element:

// Once the component has mounted and the reference is set, you can access the DOM element through inputRef.current:

// JavaScript
// if (inputRef.current) {
//   inputRef.current.focus(); // Focus the input field
// }
// Use code with caution.
// content_copy
// Benefits of Using useRef for DOM References:

// Avoiding Unnecessary Re-Renders: Unlike state changes, modifying inputRef.current doesn't trigger a re-render of the component. This is because useRef is designed to hold reference values without affecting the rendering flow.
// Targeted DOM Manipulation: Having a reference to the DOM element allows you to perform specific actions on it directly, like focusing the input field, setting its value, or adding event listeners.
// In Summary:

// useRef provides a way to store references to DOM elements in a React component.
// By assigning the useRef object to the ref attribute of an element in JSX, you create a link between the component and the actual DOM element in the browser.
// This enables you to access and manipulate the DOM element later in your code.