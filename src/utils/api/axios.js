import axios from "axios";

export default class Axios {
  constructor() {
    this.instance = axios.create({
      baseURL:
        "https://port-0-airbnb-practice-108dypx2aldzyvyjq.sel3.cloudtype.app/",
    });

    // this.instance.interceptors.request.use((request) => {
    //   const token = getCookie("token");
    //   if (token) {
    //     request.headers.Authorization = `Bearer ${token}`;
    //   }
    // });
  }

  get = async (url, option) => {
    const res = await this.instance.get(url, option);
    return res;
  };
  post = async (url, data, option) => {
    const res = await this.instance.post(url, data, option);
    return res;
  };
  put = async (url, data, option) => {
    const res = await this.instance.put(url, data);
    return res;
  };
  del = async (url, option) => {
    const res = await this.instance.delete(url, option);
    return res;
  };
  getToken = async (url, data) => {
    const res = await this.instance.get(url, data);
    return res;
  };
}
