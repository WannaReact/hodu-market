import axios, { AxiosRequestConfig } from 'axios';

const get = async (url: string, config?: AxiosRequestConfig) => {
  try {
    const { data } = await axios.get(`/api/${url}`, config);
    return data;
  } catch {
    return { success: false, message: 'GET 요청 실패!' };
  }
};

const post = async (
  url: string,
  bodyData: object,
  config?: AxiosRequestConfig
) => {
  try {
    const { data } = await axios.post(`/api/${url}`, bodyData, config);
    return data;
  } catch {
    return { success: false, message: 'POST 요청 실패!' };
  }
};

const put = async (
  url: string,
  bodyData: object,
  config?: AxiosRequestConfig
) => {
  try {
    const { data } = await axios.put(`/api/${url}`, bodyData, config);
    return data;
  } catch {
    return { success: false, message: 'PUT 요청 실패!' };
  }
};

const deleteMethod = async (url: string, config?: AxiosRequestConfig) => {
  try {
    const { data } = await axios.delete(`/api/${url}`, config);
    return data;
  } catch {
    return { success: false, message: 'DELETE 요청 실패!' };
  }
};

export default { get, post, put, delete: deleteMethod };
