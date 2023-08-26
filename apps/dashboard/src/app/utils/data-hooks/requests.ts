import axios, { AxiosError, AxiosHeaders, AxiosInstance } from 'axios';
import { LocalStorage } from '../enum';

const getAxiosRequest = (): AxiosInstance => {
  return axios.create({
    baseURL: 'https://api.letsrate.in',
  });
};

export const makeRequest = async (
  URL: string,
  method: any,
  validate = true,
  data?: any
) => {
  try {
    const headers: AxiosHeaders = new AxiosHeaders({});
    const token = localStorage.getItem(LocalStorage.token);
    if (validate) {
      headers.set('Authorization', ` JWT ${token}`);
    }
    const response = await getAxiosRequest().request({
      method,
      url: URL,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    const err = error as Error | AxiosError;
    let message = '';
    if (axios.isAxiosError(err) && err.response) {
      message = err.response.data['message'];
    } else {
      message = String(error);
    }
    throw message;
  }
};

export default makeRequest;
