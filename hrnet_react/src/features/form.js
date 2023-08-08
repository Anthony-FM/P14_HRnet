import { createAction, createReducer } from '@reduxjs/toolkit'
import { mockDatas } from '../data/MOCK_DATA'

// State initial
const initialState = {      
  firstname: '',
  lastname: '',
  dateOfBirth: '' ,
  startDate: '' ,
  street: '',
  city: '',
  state: '',
  zipCode: '',
  department: '',
  datas: mockDatas,
  counterData: false,
  error: false
}

// Actions 
export const addFirstName = createAction(
    'add/firstname',
    (firstname) => ({
        payload : firstname
    })
)

export const addLastName = createAction(
    'add/lastname',
    (lastname) => ({
        payload : lastname
    })
)

export const addDateOfBirth = createAction(
    'add/dateOfBirth',
    (dateOfBirth) => ({
        payload : dateOfBirth
    })
)

export const addStartDate = createAction(
    'add/startDate',
    (startDate) => ({
        payload : startDate
    })
)

export const addStreet = createAction(
    'add/street',
    (street) => ({
        payload : street
    })
)

export const addCity = createAction(
    'add/city',
    (city) => ({
        payload : city
    })
)

export const addState = createAction(
    'add/state',
    (state) => ({
        payload : state
    })
)

export const addZipCode = createAction(
    'add/zipCode',
    (zipCode) => ({
        payload : zipCode
    })
)

export const addDepartment = createAction(
    'add/department',
    (department) => ({
        payload : department
    })
)

export const addDatas =createAction(
    'add/datas',
    (data) => ({
        payload : data
    })
)

export const toggleCounterData = createAction('toggle/counterData')

// Reducer

export default createReducer(initialState, (builder) => 
    builder
    .addCase(addFirstName, (draft, action) => {
        
        draft.firstname = action.payload
        return
    })
    .addCase(addLastName, (draft, action) => {
        
        draft.lastname = action.payload
        return
    })
    .addCase(addDateOfBirth, (draft, action) => {
        draft.dateOfBirth = action.payload.toString()
        return
    })
    .addCase(addStartDate, (draft, action) => {
        draft.startDate = action.payload.toString()
        return
    })
    .addCase(addStreet, (draft, action) => {
        draft.street = action.payload
        return
    })
    .addCase(addCity, (draft, action) => {
        draft.city = action.payload
        return
    })
    .addCase(addState, (draft, action) => {
        draft.state = action.payload
        return
    })
    .addCase(addZipCode, (draft, action) => {
        draft.zipCode = action.payload
        return
    })
    .addCase(addDepartment, (draft, action) => {
        draft.department = action.payload
        return
    })


    .addCase(addDatas, (draft, action) => {
        if(
            draft.firstname === '' &&
            draft.lastname === '' &&
            draft.dateOfBirth === '' &&
            draft.startDate === '' &&
            draft.street === '' &&
            draft.state === '' &&
            draft.zipCode === '' &&
            draft.department === '' &&
            draft.city === ''
        ){
            return
        } else {
            
            draft.datas = [...draft.datas, action.payload]
            draft.firstname = ''
            draft.lastname = ''
            draft.dateOfBirth = ''
            draft.startDate = ''
            draft.street = ''
            draft.state = ''
            draft.zipCode = ''
            draft.department = ''
            draft.city = ''
            draft.counterData = true
            return
        }
    })
    .addCase(toggleCounterData, (draft) => {
        draft.counterData = false
    })
)