const OriginJsonp = require("jsonp");

export default function jsonp(url, data, option) {
  url += `${url.indexOf("?") === -1 ? "?" : "&"}${params(data)}`;
  return new Promise((resolve, rejects) => {
    OriginJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        rejects(err);
      }
    });
  });
}

export const params = data => {
  let url = "";
  for (let key in data) {
    const value = data[key] !== undefined ? data[key] : "";
    url += `&${key}=${value}`;
  }

  return url ? url.substring(1) : "";
};
