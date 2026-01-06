import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setResponses(data));
    }, [url])

    return responses
}

export default useFetch