import axios from "axios";

export const baseUrl = "https://wqd-cloud-music.vercel.app/";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

// 拦截器
axiosInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err);
  }
);

export { axiosInstance };
