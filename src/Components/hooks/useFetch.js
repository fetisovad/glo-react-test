import { useEffect, useState } from "react";


export const useFetch = () => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)

    useEffect(  () => {
        (async () => {
            try {
                const json = await fetch('DB.json')
                const res = await json.json();
                setResponse(res)
            } catch (e) {
                setError(e)
            }
        })()
    }, [])

    return {response, error}
}