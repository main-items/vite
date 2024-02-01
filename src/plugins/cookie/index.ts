export const docCookies = {
  /**
   * 读取cookie
   * @param sKey 指定cookie名
   * @returns 
   */
  getItem: function (sKey: string) {
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            `(?:(?:^|.*;)\\s*${
              encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&')
            }\\s*\\=\\s*([^;]*).*$)|^.*$`,
          ), '$1',
        ),
      ) || null
    );
  },
  /**
   * 写入Cookie
   * @param sKey 指定cookie名
   * @param sValue 指定cookie值
   * @param vEnd 过期时间 默认会话结束过期
   * @param sPath 路径级作用域 默认当前
   * @param sDomain 域名级作用域 默认当前
   * @param bSecure 是否只允许https 默认false
   * @returns 
   */
  setItem: function (
    sKey: string,
    sValue: string,
    vEnd?: string|number|Date|null,
    sPath?: string|null,
    sDomain?: string|null,
    bSecure?: any
  ) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) return false;
    let sExpires = '';
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires =
            vEnd === Infinity
              ? `; expires=Fri, 31 Dec 9999 23:59:59 GMT`
              : `; max-age=${vEnd}`;
          break;
        case String:
          sExpires = `; expires=${vEnd}`;
          break;
        case Date:
          sExpires = `; expires=${vEnd.toString()}`;
          break;
      }
    }
    document.cookie =`${
        encodeURIComponent(sKey)
      }=${
        encodeURIComponent(sValue)
      }${sExpires}${
        sDomain ? `; domain=${sDomain}` : ''
      }${
        sPath ? `; path=${sPath}` : ''
      }${
        bSecure ? `; secure` : ''
      }`
    return true;
  },
  /**
   * 删除cookie
   * @param sKey 指定cookie名
   * @param sPath 路径级作用域 默认当前
   * @param sDomain 域名级作用域 默认当前
   * @returns 
   */
  removeItem: function (
    sKey: string,
    sPath: string,
    sDomain: string
  ) {
    if (!sKey || !this.hasItem(sKey)) return false;
    document.cookie = `${
        encodeURIComponent(sKey)
      }=; expires=Thu, 01 Jan 1970 00:00:00 GMT${
        sDomain ? `; domain=${sDomain}` : ''
      }${
        sPath ? `; path=${sPath}` : ''
      }`
    return true;
  },
  /**
   * 检查是否存在
   * @param sKey 指定cookie名
   * @returns 
   */
  hasItem: function (sKey: string) {
    return new RegExp(`(?:^|;\\s*)${
      encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&')
    }\\s*\\=`).test(document.cookie);
  },
  /**
   * 返回当前路径所有可读 cookie 的数组
   * @returns 
   */
  keys: function () {
    const aKeys = document.cookie
      .replace(
        /((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,
        ''
      ).split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
    }
    return aKeys;
  },
}

export default docCookies