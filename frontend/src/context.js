import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext()



const AppProvider = ({ children }) => {

const [todos, setTodos] = useState([]);  
   
return (
   <AppContext.Provider 
      value={{
        todos,
        setTodos,
      }}>
       {children}
   </AppContext.Provider>
)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }