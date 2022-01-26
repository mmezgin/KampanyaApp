const initial_data = {
  data: {
    time: null,
    name: 'noname',
    date: null
  }
}
const Date_Reducer = (state = initial_data, action) => {
  switch (action.type) {
    case 'setDate':
      return { ...state, data: action.payload, error: '' }

    default:
      return state
  }
}
export default Date_Reducer
