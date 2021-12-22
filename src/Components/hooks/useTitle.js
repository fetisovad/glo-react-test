import { useEffect } from "react";

const useTitle = openItem => {
    useEffect(() => {
        document.title = openItem ? openItem.name : `MY BURGERS`
    }, [openItem])
}

export default useTitle;