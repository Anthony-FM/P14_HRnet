import React from "react";

/**
 * @param { string } filter
 * @param { string} setFilter
 * @returns {React.JSX.input} - Search Input
 */
export default function GlobalFilter({filter, setFilter}){
    return (
        <span>
            Search: {' '}
            <input 
                value={filter || ''}
                onChange={e => setFilter(e.target.value)}
                title="search"
            />
        </span>
    )
}