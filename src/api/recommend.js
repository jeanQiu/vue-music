// import $ from "axios";
import { commonParams, options } from "api/config";
import jsonp from "libs/js/jsonp";

export const getRecommend = () => {
  const url =
    "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";

  const data = Object.assign({}, commonParams, {
    platform: "h5",
    needNewCode: 1,
    uin: 0
  });
  return jsonp(url, data, options);
};
