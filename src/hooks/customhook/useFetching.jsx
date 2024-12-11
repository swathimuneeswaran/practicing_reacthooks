import React, { useState ,useEffect} from 'react'
import axios from "axios"

const useFetching = (url) => {

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");

    const fetchFromApi=async()=>{
        setLoading(true)
        try {
        const res=await axios(url);
        console.log(res)
        setData(res.data)
        setLoading(false)
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
      fetchFromApi()
    }, [url])
    

  return {data,loading,error}
}

export default useFetching