import { createContext, useState } from "react";


export const CreateContext=createContext()

export const  ContextProvider=({children})=>{
    const [flag,setFlag]=useState(false)

    const StateChangeTrue=()=>{
        setFlag(true)
    }

    const StateChangeFalse=()=>{
        setFlag(false)
    }
   

    return (
        <CreateContext.Provider   value={{flag,StateChangeTrue,StateChangeFalse}}>
            {children}
        </CreateContext.Provider>
    )



}