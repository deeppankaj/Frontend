const getTokenFromLocalStorage = localStorage?.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const axiosConfig = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};

export const baseUrl = "http://localhost:8000"