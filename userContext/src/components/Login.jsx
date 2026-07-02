import { useState } from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

export default function Login() {
  const { setUser } = useContext(UserContext);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let handleLogin = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      Login
      <div>
        <form>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
