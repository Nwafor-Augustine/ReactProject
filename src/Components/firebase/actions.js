import firebase,{provider} from './firebase'


export let startLoginAccount = () => {
    return () => {
       return firebase.auth().signInWithPopup(provider)
    }
}



