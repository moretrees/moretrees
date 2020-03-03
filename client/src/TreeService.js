import axios from "axios";

const url = "/api/v1/trees";

class TreeService {
  // GET trees
  static async getTrees() {
    try {
      const res = await axios.get(url);
      const data = res.data;
      return data;
    } catch (error) {
      return error;
    }
  }

  // Create trees
  static createTree(data) {
    return axios.post(url, { data });
  }

  // Delete Trees
  static deleteTree(id) {
    return axios.delete(`${url}/${id}`);
  }
}

export default TreeService;
