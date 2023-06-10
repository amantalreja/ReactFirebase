import firebaseConfig from "./config";
import {React,Component} from React
import { initializeApp } from "firebase/app";
class HomePage extends Component{

    constructor(){
        super();
        this.state={
            database:null
        }
    }
    doLogin=async (email, password) => {
        try {
          this.setState({ isLoading: true })
          await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
          const errorCode = error.code
          if (errorCode === 'auth/user-not-found') {
            // register the user
            this.doRegister(email, password)
          } else {
            const errorMessage = error.message
            this.setState({
              errorMessage
            })
          }
        } finally {
          this.setState({
            isLoading: false
          })
        }
      }
    async initializer(){
        this.setState({
            database: await firebase.initializeApp(firebaseConfig)
        })
    }

}