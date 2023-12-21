import { AuthManager } from "./AuthManager";

const fetchWithAuthentication = () => {
  fetch(url, {
    headers: {
      Authentication: `Bearer ${AuthManager.token}`,
    },
  });
};
