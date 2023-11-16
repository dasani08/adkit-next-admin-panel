import axios from 'axios';

class Http {
  constructor(opt = {}) {
    this.opt = Object.assign(this._getDefaultOption(), opt);
    this.request = axios.create(this.opt);
  }

  _getDefaultOption() {
    return {
      timeout: 30000,
    };
  }

  _reset() {
    this.request = axios.create(this._getDefaultOption());
  }

  _create(opt) {
    return axios.create(Object.assign(this.opt, opt));
  }

  setHeader(key, value) {
    this.request.defaults.headers.common[key] = value;
    return this;
  }

  removeHeader(key) {
    this.request.defaults.headers.common[key] = undefined;
    return this;
  }

  // call api endpoint
  api(
    path,
    method = 'get',
    params = {},
    opts = {},
    host = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
  ) {
    return new window.Promise((resolve, reject) => {
      if (!path) {
        // path is required
        return reject(new Error('Used: api(path, method, params)'));
      }

      if (!/^http/.test(path)) {
        // add '/' to path if missing
        if (path[0] !== '/') {
          path = '/' + path;
        }
        path = host + path;
      }

      // support shorthand api(path, params)
      // method will default to get
      if (arguments.length === 2 && String(method) === '[object Object]') {
        params = method;
        method = 'get';
      }

      method = method.toLowerCase();
      if (['get', 'post', 'put', 'delete'].indexOf(method) === -1) {
        return reject(
          new Error(
            `ERR: ${method} not allowed, only allow get, post, put, delete`,
          ),
        );
      }

      if (method === 'get') {
        params = { params };
      }

      // Axios support a delete method which accepts only 2 parameters: url & config
      // If you wanna send body with delete method, you can use config.data
      if (method === 'delete') {
        params = { data: params };
      }

      /*eslint no-unexpected-multiline: 0*/
      this.request[method](path, params, opts).then(resolve).catch(reject);
    });
  }

  get(path, params = {}) {
    return this.api(path, 'get', params).then((res) => res.data);
  }

  post(path, data = {}) {
    return this.api(path, 'post', data).then((res) => res.data);
  }

  put(path, data = {}, opts = {}) {
    return this.api(path, 'put', data, opts).then((res) => res.data);
  }

  delete(path, data = {}) {
    return this.api(path, 'delete', data).then((res) => res.data);
  }

  // Wrapper of axios's helper
  all(requests) {
    return axios.all(requests);
  }

  // Wrapper of axios's helper
  spread(cb) {
    return axios.spread(cb);
  }
}

const HTTP_AUTHENTICATION_ERROR_CODE = 401;
const handleAuthenticationError = (error) => {
  if (error.response.status === HTTP_AUTHENTICATION_ERROR_CODE) {
    window.location.href = '/logout';
  }
  return Promise.reject(error);
};

const HTTP_INTERNAL_SERVER_ERROR_CODE = 500;
const HTTP_GATEWAY_TIMEOUT_ERROR_CODE = 504;
const handleInternalServerError = (error) => {
  if (
    error.response.status === HTTP_INTERNAL_SERVER_ERROR_CODE ||
    error.response.status === HTTP_GATEWAY_TIMEOUT_ERROR_CODE
  ) {
    // TODO: Handle internal server error
  }

  return Promise.reject(error);
};

const handleBusinessError = (error) => {
  // Other error codes like 403, 404, 407
  return Promise.reject(error.response.data);
};

const http = new Http();
/**
 * Setup http client
 */
http.setHeader('x-api-key', process.env.REACT_APP_API_KEY);
// http.request.interceptors.request.use((config) => {
//   config.headers['Authorization'] = getStoredAccessToken();
//   return config;
// });

/**
 * TODO: Refactoring
 */
http.request.interceptors.response.use(undefined, handleAuthenticationError);
http.request.interceptors.response.use(undefined, handleInternalServerError);
http.request.interceptors.response.use(undefined, handleBusinessError);

export { Http };
export default http;
