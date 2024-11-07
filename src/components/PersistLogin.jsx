import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRefreshTokenMutation } from "../store/features/auth/authApi";
import { useSelector } from "react-redux";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [persist, setPersist] = useState(false);
  const [refresh] = useRefreshTokenMutation();

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh().unwrap();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    // persist added here AFTER tutorial video
    // Avoids unwanted call to verifyRefreshToken
    !user?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);
  }, []);

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
    console.log(`aT: ${JSON.stringify(user?.accessToken)}`);
  }, [isLoading, user]);

  return (
    <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
  );
};

export default PersistLogin;
