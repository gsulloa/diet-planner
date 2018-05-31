const RESET_MEAL = "RESET_MEAL"

const initialState = {
  data: {
    breakfast: [1, 2, 3],
    lunch: [4, 5, 6],
  },
}

export default function meals(state = initialState, action) {
  switch (action.type) {
    case RESET_MEAL:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.meal]: action.payload.foods,
        },
      }
    default:
      return state
  }
}

export function resetMeal({ meal, foods }) {
  return {
    type: RESET_MEAL,
    payload: {
      meal,
      foods,
    },
  }
}
