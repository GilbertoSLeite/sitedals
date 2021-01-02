import React from 'react'

export default function useMedia(queries, values, defaultValue) {
    const match = () => values[queries.findIndex(q => matchMedia(q).matches)] || defaultValue
    const [value, set] = React.useState(match)
    React.useEffect(() => {
        const handler = () => set(match)
        window.addEventListener('resize', handler)
        return () => window.removeEventListener(handler)
    }, [])
    return value
}