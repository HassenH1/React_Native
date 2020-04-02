import { url } from '../ngrok/index'

const initialState = {
  user: "",
  loading: false,
  auth: false
}

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADDING":

        fetch(`${url}/signup`, {
          method: "POST",
          headers: {
            'Content-Type': 'Application/json'
          },
          body: JSON.stringify(action.payload)
        })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result, "<--------result")
          if(result.errors){
            result.errors.map((elem) => {
              console.log(elem, "<========does this work")
              console.log(elem.msg)
              console.log(elem.param)
            })
          }
        })
        .catch((err) => {
          console.log(err, "<----------------the catch method?")
        })

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

// errors: Array(2)
// 0: {value: "h", msg: "Invalid value", param: "username", location: "body"}
// 1: {value: "h", msg: "Invalid value", param: "password", location: "body"