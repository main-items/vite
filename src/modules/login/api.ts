import {Axios} from '@api'
import configConst from '@config'
const urlName = '/upms-server'
export default {
  /**
   * 登录
   * @param data 
   * @returns 
   */
  postLogin(data: any) {
    return Axios.PostBody(`${urlName}/login`, data).then((res: any) => {
      const {
        tokenKey,
        userInfoKey
      } = configConst
      localStorage.setItem(tokenKey, res[tokenKey]);
      localStorage.setItem(userInfoKey, res[userInfoKey]);
      return res;
    });
  },
};
