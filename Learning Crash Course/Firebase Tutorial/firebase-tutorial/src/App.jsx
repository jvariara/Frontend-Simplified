import React from "react";
import "./App.css";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .then(({ user }) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function register() {
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((data) => {
        setUser(data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <div className="App">
      <nav>
        <div className="nav__container">
          <h1 className="nav__logo">Frontend Simplified</h1>
          <ul className="nav__links">
            {loading ? (
              <>
                <li className="nav__list">
                  <div className="skeleton btn__skeleton"></div>
                </li>
                <li className="nav__list">
                  <div className="skeleton user__skeleton"></div>
                </li>
              </>
            ) : (
              <>
                {user.email ? (
                  <>
                    <li className="nav__list">
                      <button className="btn__user" onClick={logout}>
                        {user.email[0].toUpperCase()}
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav__list">
                      <button className="btn btn--login" onClick={login}>
                        Login
                      </button>
                    </li>
                    <li className="nav__list">
                      <button className="btn btn--register" onClick={register}>
                        Register
                      </button>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
