import axios from "axios";

var apiClient = null;

class NaamrasClient {
  constructor() {
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
  }

  _getClient() {
    if (!apiClient) {
      apiClient = axios.create({
        baseURL: "http://naamras1-app-herokuapp.com/"
      });
    }
    return apiClient;
  }

  _config() {
    return {};
  }

  get(url, config) {
    return this._getClient().get(url, config);
  }

  post(url, data) {
    return this._getClient().post(url, data, this._config());
  }

  put(url, data) {
    return this._getClient().put(url, data, this._config());
  }
}

const jsClient = new NaamrasClient();
const get = jsClient.get;
const post = jsClient.post;
const put = jsClient.put;

module.exports = {
  get,
  post,
  put,
  NaamrasClient
};
