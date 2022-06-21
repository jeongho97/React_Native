import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
axios.defaults.baseURL = "http://192.168.0.47:8000";
export const IMG_PATH = "http://192.168.0.47:8000"; //intellij에 static 폴더 안에 img 폴더를 만들고 imgae를 넣고 DB imag 컬럼에 img/images.jpg 처럼 경로를 넣어주자
const getToken = async () => {
  return await AsyncStorage.getItem("token");
};
export const customAxios = async (url, method, data) => {
  const token = await getToken();
  const response = await axios({
    url,
    method,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fileAxios = async (url, method, data) => {
  const token = await getToken();
  const response = await axios({
    url,
    method,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
