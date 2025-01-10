import "./App.scss";
import Chat from "./components/chat/Chat";
import { useAppSelector } from "./app/hooks";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  const user = useAppSelector((state) => state.user);

  return (
    <>
      <div className="App">
        {user ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </div>
    </>
  );
}

export default App;
