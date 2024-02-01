import {Axios} from '@api'
const urlName = '/'
export default {
  /**
   * 接口
   * @param data 
   * @returns 
   */
  interface(data: any) {
    return Axios.PostBody(`${urlName}/login`, data).then((res: any) => {
      return res;
    });
  },
};
