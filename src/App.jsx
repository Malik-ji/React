
import './App.css'
import UserContextProvider from './assets/context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';
function App() {

  return (
    <>
    <UserContextProvider >
      <h1 className='from-green-900'>Example of Context API </h1>
    <div>Login Here !</div>
    <Login/>
    <Profile/>
    </UserContextProvider>

    </>
  )
}

export default App
