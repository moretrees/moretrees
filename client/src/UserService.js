import axios from "axios";

const url = "/api/v1/users";

class UserService {
  // Delete Trees
  /**
   * signup
   * @param {*} credentials
   */
  static async signup(credentials) {
    try {
      const result = await axios.post(`${url}/signup`, credentials);
      const data = result.data;
      return data;
    } catch (error) {
      alert(error);
    }
  }

  /**
   * login
   * @param {*} credentials
   */
  static async login(credentials) {
    try {
      const result = await axios.post(`${url}/login`, credentials);
      const data = result.data;
      alert("login successful");
      return data;
    } catch (error) {
      alert(error);
    }
  }

  /**
   * logout
   */
  static async logout() {
    try {
      const result = await axios.post(`${url}/me/logoutall`);
      const data = result.data;
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default UserService;
