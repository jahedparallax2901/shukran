// calculate discount percentage
import { useLocation } from "react-router-dom";

export const discountPercentage = (actualPrice, discountPrice) => {
  const totalDiscount = actualPrice - discountPrice;
  return Math.round((totalDiscount * 100) / actualPrice);
};

export const findByMatchingProperties = (arrOfObj, obj) => {
  return arrOfObj.filter(function (entry) {
    return Object.keys(obj).every(function (key) {
      return entry[key] === obj[key];
    });
  });
};

export const getLocalAuthData = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const calculateLeftTime = (expireDate) => {
  const day = new Date(expireDate);
  const nextDay = new Date(day);
  nextDay.setDate(day.getDate() + 1);
  const timeDifference = new Date(nextDay) - new Date();
  let timeLeft = {};

  if (timeDifference > 0) {
    timeLeft = {
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeDifference / (1000 * 60)) % 60),
      seconds: Math.floor((timeDifference / 1000) % 60),
    };
  }

  return timeLeft;
};

export const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

export const urlPramsToObj = (history) => {
  const search = history.location.search.substring(1);
  return JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
};

export const objToUrlPrams = (obj) => {
  const str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export const getId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
};

export const isDateGreaterThen = (date) => {
  const day = new Date(date);
  const nextDay = new Date(day);
  nextDay.setDate(day.getDate() + 1);

  const currentTime = new Date();
  const givenTime = new Date(nextDay);
  return currentTime.getTime() < givenTime.getTime();
};

export const arrayToUrlParams = (key, arr) => {
  const str = [];
  arr.map((item) => str.push(`${key}=${item}`));
  if (arr.length > 0) {
    return "&".concat(str.join("&"));
  } else {
    return str.join("&");
  }
};
