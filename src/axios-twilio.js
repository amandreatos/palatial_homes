import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.twilio.com/2010-04-01/",
  headers: {
    Authorization: {
      "Token": "1e292c2cf1ea39706adaf564ab0af1bf"
    }
  },
  options: {
    crossDomain: true
  }
});

export default instance;
