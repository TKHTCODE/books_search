import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default function({
    $firebase,
    store,
    route,
    redirect
}){
    const auth = getAuth($firebase)
    if(!store.getters['auth/getLoggedIn']){
        onAuthStateChanged(auth, user => {
            if(user){
                store.dispatch('auth/addUserInfo', user)
            }
        })
    }
    const isAuthenticated = store.getters['auth/getLoggedIn']
    if(!isAuthenticated && !route.path.match(/\/auth\//)){
        redirect('/auth/UserLogin')
    }
    
}