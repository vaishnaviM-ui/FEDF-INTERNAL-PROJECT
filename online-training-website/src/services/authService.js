const authService = {

  saveUser(user) {
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );
  },

  getUser() {
    return JSON.parse(
      localStorage.getItem("user")
    );
  },

  logout() {

    localStorage.removeItem("user");

    localStorage.removeItem(
      "isLoggedIn"
    );
  },

  isLoggedIn() {

    return (
      localStorage.getItem(
        "isLoggedIn"
      ) === "true"
    );
  }
};

export default authService;