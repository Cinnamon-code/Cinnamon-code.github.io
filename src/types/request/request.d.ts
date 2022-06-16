import { AxiosRequestConfig } from 'axios'
import Vue from 'vue'

export declare class Request {
  private _instance

  constructor(axiosConfig: AxiosRequestConfig);

  request(config: AxiosRequestConfig): Promise<unknown>;

  get(config: AxiosRequestConfig): Promise<import('axios').AxiosResponse<any, any>>;

  post(config: AxiosRequestConfig): Promise<import('axios').AxiosResponse<any, any>>;

  delete(config: AxiosRequestConfig): Promise<import('axios').AxiosResponse<any, any>>;

  put(config: AxiosRequestConfig): Promise<import('axios').AxiosResponse<any, any>>;
}

export function install(vue: typeof Vue): void

declare module 'vue/types/vue' {
  interface Vue {
    $http: Request
  }
}
