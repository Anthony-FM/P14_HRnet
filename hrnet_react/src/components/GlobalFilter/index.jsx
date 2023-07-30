// // action
// import { filterData } from "../../features/search"
// // hook
// import { useDispatch, useSelector } from "react-redux"
// //selector
// import { selectSearch } from "../../utils/redux/selector"

export default function GlobalFilter({filter, setFilter}){
    // const dispatch = useDispatch()
    // const filter = useSelector(selectSearch).filter
    return (
        <span>
            Search: {' '}
            <input value={filter || ''}
            onChange={e => setFilter(e.target.value)}
        />
        </span>
    )
}