import { useState,useEffect } from "react";
// use fetch is used , so that an url is sent and using async,await it tries to fetch the data, and then we try to return result, err, loading.
function useFetch(url){
    const[data,setdata] = useState(null);
    const[err,seterror] = useState(null);
    const[loading,setloading] = useState(true);


    useEffect(()=> {
      const fetchData = async () => {
        

        try{
            const resp = await fetch(url);
            const result = await resp.json();
             setdata(result);
        }
        catch(err){
            seterror(err);
        }
        finally{
            setloading(false);
        }
        

    }  
    fetchData();
    
    },[url]);

    return{data,err,loading}

}
export default useFetch;    