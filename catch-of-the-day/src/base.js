import Rebase from "re-base"
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDu0twABsmA-pc7R12uF3eK7Z2hmGWLe5A",
  authDomain: "cotd-robphoenix.firebaseapp.com",
  databaseURL: "https://cotd-robphoenix.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
