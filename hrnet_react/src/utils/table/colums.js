import { format } from 'date-fns'

/**
 * Creation of columns
 */
export const COLUMNS = [
    {
        Headers: "First Name",
        accessor: "firstname",
    }
    ,{
        Headers: "Last Name",
        accessor: "lastname",
    }

    ,{
        Headers: "Date Of Birth",
        accessor: "dateOfBirth",
        Cell: ({value}) => {  return value ? format(new Date(value), 'MM/dd/yyyy') : new Date("undefined").toISOString},
    }

    ,{
        Headers: "Start Date",
        accessor: "startDate",
        Cell: ({value}) => { return value ? format(new Date(value), 'MM/dd/yyyy') : new Date("undefined").toISOString},
    }

    ,{
        Headers: "Street",
        accessor: "street",
    }
    ,{
        Headers: "City",
        accessor: "city",
    }
    ,{
        Headers: "State",
        accessor: "state",
    }
    ,{
        Headers: "ZipCode",
        accessor: "zipCode",
    }
    ,{
        Headers: "Department",
        accessor: "department",
    }
]