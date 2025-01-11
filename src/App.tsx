import "./App.scss";
import { auth } from "./firebase";
import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import ErrorFallback from "./utils/ErrorFallBack";
import Sidebar from "./components/sidebar/Sidebar";
import { login, logout } from "./features/userSlice";
import { ErrorBoundary } from "react-error-boundary";
import { useAppDispatch, useAppSelector } from "./app/hooks";

function App() {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      <div className="App">
        {user ? (
          <>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Sidebar />
            </ErrorBoundary>
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
