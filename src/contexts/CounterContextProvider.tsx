import { createContext, useReducer } from "react";
import { useState } from "react";

export const CounterContext = createContext({} as any);



const reducer = (state: { count: number }, action) => {
    console.log(action);
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
            };
        case "DECREMENT":
            return {
                count: state.count - 1,
            };
        case "INCREASE":
            return {
                count: state.count + action.payload,
            };
        default:
            return state;
    }
};
const CounterContextProvider = ({children} : {children: React.ReactNode}) => {
    const [count, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <>
            <CounterContext.Provider value={{count, dispatch}}>{children}</CounterContext.Provider>
        </>
    )
}

export default CounterContextProvider