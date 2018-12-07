import { get, post, put, setToken } from "../JoyscoreClient";
import { AsyncStorage } from "react-native";

var user = {};

const SessionAction = {
  loginUser: "login_user",
  showProfile: "show_profile"
};

const getUser = () => {
  return user;
};

const signUp = params => {
  return post("/user/signup/api", params);
};

const signIn = params => {
  return new Promise((resolve, reject) => {
    post("/user/login/api", params)
      .then(response => {
        if (response && response.data) {
          user = response.data;
        }
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports = {
  signUp,
  signIn,
  getUser
};
