import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  console.log("User: ", user);

  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">Fit Buddy</Link>

        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleLogout}>Log out</button>
            </div>
          )}

          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
