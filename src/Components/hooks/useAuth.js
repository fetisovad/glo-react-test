import {useState, useEffect} from "react";

export function useAuth(authFirebase) {
    const [authentication, setAuthentication] = useState(null)

    const auth = authFirebase()
    const provider = new authFirebase.GoogleAuthProvider()

    const login = () => auth.signInWithPopup(provider)
    const logout = () => auth.signOut()
        .then()
        .catch(e => console.log(e))

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log(user)
            if(user) {
                setAuthentication(user)
            } else {
                setAuthentication(null)
            }
        })
    }, [auth])

    return  {authentication, login, logout}
}
