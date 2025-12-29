import { useState, useEffect, createContext, useContext } from "react"
import { NotificationModal } from "./Modal";

export function Notification(){
    const [showButton, setShowButton]=useState(false);
    useEffect(()=>{
        let timer;
            if(showButton){
                console.log("Component Mounted(Portal)");
                console.log("Notification Modal opened");

                timer= setTimeout(() => {
                    setShowButton(false);
                }, 5000)
            }
            else {
                console.log("Component Updated (Portal)");
                console.log("Notification Modal Closed");
            }
            return ()=>clearTimeout(timer); 
        },[showButton]);

    // useEffect(()=>{
    //     if(!showButton){
    //         console.log("Component Updated(Portal");
    //         console.log("Notification Modal Closed");
    //     }
    // },[showButton]);

    return(
        <div>
            <button type="button" onClick={()=>setShowButton(!showButton)}>Show Notification</button>
            {
                showButton && <NotificationModal close={()=>setShowButton(false)} />
            }
        </div>
    )
}

export function Crash(){
    const [crashInfo, setCrashInfo]=useState(false);
    if(crashInfo){
            throw new Error("App crashed explictly");
        }
    return(
        <div>
            <button onClick={()=>setCrashInfo(true)}>Crash</button>
        </div>
    )
}


export const ThemeContext = createContext();

export function ThemeProvider({ children }){
    const [theme, setTheme]=useState("Dark");

    useEffect(()=>{
        if(theme=='light'){
            document.body.style.backgroundColor="white";
            document.body.style.color="black";
        }
        else{
            document.body.style.backgroundColor="#242424";
            document.body.style.color="rgba(255, 255, 255, 0.87)";
        }
    },[theme]);
    return (
        <ThemeContext.Provider  value={{setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}



export function ThemeButtons(){
    const {setTheme} = useContext(ThemeContext);
    return(
        <div>
            <button onClick={()=>setTheme("light")}>Light</button>
            <button onClick={()=>setTheme("dark")}>Dark</button>
        </div>
    );
}
