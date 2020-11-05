//set data layer
//we need to track the basket
import react, {createContext, useContext, useReducer} from  "react";


//this is the data layer
export const StateContext = createContext();
//build a provider
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//this is how we can use it inside the component
export const useStateValue = () =>useContext(StateContext);