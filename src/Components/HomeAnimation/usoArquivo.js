import React from 'react'

export default function useMedia(queries, values, defaultValue) {
    const match = () => values[queries.findIndex(q => matchMedia(q).matches)] || defaultValue
    const [value, setValue] = React.useState(match);;
    const handler = () => setValue(match);
    window.addEventListener('resize', handler, false);
    window.removeEventListener('resize', handler, false);
    return value
}