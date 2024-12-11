import React from 'react'
import UseStateHook from './hooks/useState/UseStateHook'
import UseStateString from './hooks/useState/UseStateString'
import UseStateObj from './hooks/useState/UseStateObj'
import UseEffectNoDep from './hooks/useEffect/UseEffectNoDep'
import DemoProvider from './hooks/useContext/PracticeContext'
import UseRefExample from './hooks/useRef/UseRefExample'
import UseMemo from './hooks/useMemo/UseMemo'
import UseReducerHook from './hooks/useReducer/UseReducerHook'
import UseCallback from './hooks/useCallback/UseCallback'
import DisplayDatasUseFetch from './hooks/customhook/DisplayDatasUseFetch'
import UseRefUncontrolled from './hooks/useRef/UseRefUncontrolled'


const App = () => {
  return (
    <>
    
    {/* <UseStateHook />
    <UseStateString /> */}
    {/* <UseStateObj /> */}
    {/* <UseEffectNoDep /> */}
  
   {/* <UseRefExample /> */}
   <UseRefUncontrolled />
   <UseMemo />
   {/* <UseReducerHook /> */}
   {/* <UseCallback /> */}
   {/* <DisplayDatasUseFetch /> */}
    
    </>
  )
}

export default App