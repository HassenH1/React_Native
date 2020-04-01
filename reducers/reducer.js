import { url } from '../ngrok/index'

const initialState = {
  user: "",
  loading: false,
  auth: false
}

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADDING":
      const addUser = fetch(`${url}/signup`, {
        method: "POST",
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(action.payload)
      })
      console.log(action.payload, "<-------------what is this payload?")
      return {
        ...state,
        user: action.payload
      }
    case "LOADING":
      return {
        ...state,
        loading: action.payload
      }
    case "GET_USER": 
      console.log(action.payload, "<-------------getting user")
      return {
        ...state,
        user: action.payload
      }
    case "AUTH":
      return {
        ...state,
        auth: action.payload
      }
  }
  return state
}