import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)

    const [isLoading, setIsLoading] = useState(true) 

    const [error, setError] = useState(null)

    
    
    useEffect(()=>{
        const abortConst = new AbortController();
        setTimeout(()=> {
            // console.log('use effect ran')
            fetch(url, { signal: abortConst.signal})
            .then((res)=> {
                if(!res.ok){
                    throw Error(`Error connecting: ${res.status}`)
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })

            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch was aborted')
                } 
                else{
                setIsLoading(false)
                setError(err.message)
                }
                
            })
        }, 1000)

        return () => abortConst.abort();
    }, [url])

//    const fetchData = async () => {
//     const abortConst = new AbortController();

//        try {
//         const res = await fetch(url, { signal: abortConst.signal})
//         if(!res.ok){
//             throw Error(`Error connecting, Error ${res.status}`)
//         }

//         else {
//         const data = await res.json()

//         setData(data)
//         setIsLoading(false)
//         setError(false)
//             }
//        }
//        catch(err){
//         console.log(err.message)
//         setError(err.message)
//         setIsLoading(false)
//        }
//    }

//    useEffect(()=>{
//     setTimeout(()=> {
//         fetchData()
//         console.log('use effect ran')
       
//     }, 1000)

//     return () => abortConst.abort()
//    }, [url])

   return {data, isLoading, error}


}
 
export default useFetch;