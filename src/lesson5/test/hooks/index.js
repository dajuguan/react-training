import React, { useState, useEffect, useCallback, useMemo } from "react"

export function useFetch(url) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        if (!url) return;
        fetch(url)
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [url])

    return {
        loading,
        data,
        error
    }

}

export const useIterator = (items = [], initialValue = 0) => {
    const [i, setIndex] = useState(initialValue)

    const prev = useCallback(
        () => {
            if (i === 0) return setIndex(items.length - 1)
            setIndex(i - 1)
        },
        [i],
    )

    const next = useCallback(
        () => {
            if (i === items.length - 1) return setIndex(0)
            setIndex(i + 1)
        },
        [i],
    )
    const item = useMemo(() => items[i], [i])
    return [item || item[0], prev, next]
}