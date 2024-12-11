import React, { useReducer } from 'react';

const initialState = {
  detailsArray: [],
  name: '',
  age: '',
};


function reducer(state, action) {
  switch (action.type) {
    case 'ChangeName':
      return { ...state, name: action.payload }; // Update name field in state
    case 'ChangeAge':
      return { ...state, age: action.payload }; // Update age field in state
    case 'AddDetails':
      return {
        ...state,
        detailsArray: [...state.detailsArray, { name: state.name, age: state.age }],
        name: '',
        age: '',
      }; // Add current name and age to detailsArray and reset name and age fields
    default:
      return state;
  }
}

const UseReducerHook = () => {
  const [details, dispatch] = useReducer(reducer, initialState);

  // Handler to update name state
  function handleChangeName(e) {
    dispatch({ type: 'ChangeName', payload: e.target.value });
  }

  // Handler to update age state
  function handleChangeAge(e) {
    dispatch({ type: 'ChangeAge', payload: e.target.value });
  }

  // Handler to add current details to array
  function handleAddDetails() {
    dispatch({ type: 'AddDetails' });
  }
  console.log(details.detailsArray)

  return (
    <>
      <div>UseReducerHook</div>
      <input type="text" value={details.name} onChange={handleChangeName} placeholder='Name' /><br />
      <input type="number" value={details.age} onChange={handleChangeAge} placeholder='Age' />
      <button onClick={handleAddDetails}>Add Details</button>

      <h2>Details Array:</h2>
      <ul>
        {details.detailsArray.map((item, index) => (
        
          <li key={index}>
            Name: {item.name}, Age: {item.age}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseReducerHook;
