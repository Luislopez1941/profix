import axios, { AxiosInstance, AxiosResponse } from 'axios';

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string = 'http://localhost:4000/api/') {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  private async request(method: string, url: string, data?: any): Promise<any> {
    const response: AxiosResponse<any> = await this.axiosInstance.request({
      method,
      url,
      data,
    });
    return response.data;
  }

  public get(path: string): Promise<any> {
    const url = `/${path}`;
    return this.request('GET', url);
  }

  public post(path: string, data: any): Promise<any> {
    const url = `/${path}`;
    return this.request('POST', url, data);
  }
  
  public put(path: string, data: any): Promise<any> {
    const url = `/${path}`;
    return this.request('PUT', url, data);
  }
}

export default new ApiService();
