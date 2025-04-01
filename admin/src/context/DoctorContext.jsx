import { createContext } from "react";

export const DoctorsContext = createContext()

const DoctorContextProvider = (props) => {

    const value = {
    }

    return(

        <DoctorContextProvider value={value}>
             {props.children}
        </DoctorContextProvider>
    )
}

export default DoctorContextProvider