// CSS
import './index.css'
// react-table
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
//hook
import { useMemo } from 'react'
// columns
import { COLUMNS } from '../../utils/table/colums'
// component
import GlobalFilter from '../GlobalFilter'

/**
 * Create a table with npm package component react-Table
 * 
 * @param { object } data
 * @returns {JSX.Element} the render create a react component Table 
 */
export default function Table({ data }){
    const columns = useMemo(() => COLUMNS, [])

    const { 
        getTableProps,
        getTableBodyProps, 
        headerGroups, 
        page, 
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        prepareRow,
        setPageSize,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data
    },
    useGlobalFilter,
    useSortBy,
    usePagination
    )

    const { globalFilter, pageIndex, pageSize } = state


    return <div className="container">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <div className='pagination'>  
            <div className="spanContainer">
                <span>
                    Page <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>
                <span>
                    Go to page: 
                    <input 
                        type='number' 
                        defaultValue={pageIndex + 1}
                        onChange={ e => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                        }}
                        className='goto'
                        title='go to'
                    />
                </span>
                <select 
                    value={pageSize} 
                    onChange={e => setPageSize(Number(e.target.value))} 
                    title='show page size'
                >
                    {[5, 10, 15, 20, 30, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize} >
                            Show {pageSize} 
                        </option>
                    ))}
                </select>
            </div>
            <div className="buttonContainer">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage} >Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage} >Next</button>
                <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>       

            </div>
        </div>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((columns) => (
                        <th {...columns.getHeaderProps(columns.getSortByToggleProps())}>
                            {columns.render("Headers")}
                            <span>
                                {columns.isSorted ? (columns.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                            </span>
                        </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <div className='pagination'>
            <div className="buttonContainer">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage} >Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage} >Next</button>
                <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>    

            </div>
            <div className="spanContainer">
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                    {' '}
                </span>
                <span>
                    | Go to page: {' '}
                    <input 
                        type='number' 
                        defaultValue={pageIndex + 1}
                        onChange={ e => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                        }}
                        className='goto'
                        title='go to'
                    />
                </span>
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} title='show page size'>
                    {[5, 10, 15, 20, 30, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize} >
                            Show {pageSize} 
                        </option>
                    ))}
                </select>
            </div>
            
        </div>
    </div>
}