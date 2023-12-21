import { useEffect } from "react";
import { AuthManager } from "../auth/AuthManager";

export default function LoginPage() {
  const showToken = () => {
    try {
      const token = AuthManager.getToken();
      console.log(token);
    } catch (error) {
      console.log("redirect to Login page");
    }
  };

  const updateToken = () => {
    AuthManager.updateToken("ohwdpifnsdmfpsdojlkwn");
  };

  return (
    <div>
      <h1>Please log in</h1>
      <button onClick={updateToken}>update token</button>
      <button onClick={showToken}>show token</button>
    </div>
  );
}
