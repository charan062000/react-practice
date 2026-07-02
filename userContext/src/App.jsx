import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/userContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="bg-pink-600 p-4 text-center text-white font-bold ">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
