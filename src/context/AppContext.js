const { createContext, useState } = require("react");


export let AppContext = createContext(false);

export default function AppContextProvider(props) {
    const [isSideOpen, setIsSideOpen] = useState(true);

    function toggleSideBar() {
        setIsSideOpen(!isSideOpen);
    }

    return <AppContext.Provider value={{ isSideOpen, toggleSideBar }}>
        {props.children}
    </AppContext.Provider>
}