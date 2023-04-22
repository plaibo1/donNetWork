export const initialState = {
  tariffType: null,
}

export function reducer(state, action) {
  switch (action.type) {
    case "SET_TARIFF_TYPE":
      return {...state, tariffType: action.tariffType}
    default: 
      throw new Error("WRONG ACTION TYPE")
  }
}
