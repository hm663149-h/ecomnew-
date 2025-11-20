import { createContext, useState } from "react";




export const Themecontext = createContext();



const ThemeProvider = (props)=>{

    const[theme,setTheme] = useState('light');

    return(
        <Themecontext.Provider value={{theme,setTheme}}>
            {props.children}
        </Themecontext.Provider>
    )
}
export default ThemeProvider;



	
// #ffdef0	(255,222,240)
// #ffafd0	(255,175,208)
// #ff76ad	(255,118,173)