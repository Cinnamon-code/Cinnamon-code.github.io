import Request from '@/request/request'
import { ElMessage } from 'element-ui/types/message'
import { FormItem } from 'element-ui'

export type GET_ALL_ARTICLES = Request

export type LOGIN = {
  username: string,
  password: string,
  $http: Request,
  $message: ElMessage,
  pwdInput: FormItem
}

export type REGISTER = {
  username: string,
  password: string,
  email: string,
  $http: Request,
  $message: ElMessage,
  switchCard: () => void,
  reset: () => void
}

export type LOGOUT = (event: string) => void

export type LIKE_OR_DISLIKE = {
  like: boolean,
  $http: Request,
  artId: string,
  $message: ElMessage,
  callback: (status: boolean) => void
}

export type IS_LIKE = {
  $http: Request,
  artId: string,
  callback: (status: boolean) => void
}

export type POST = {
  $http: Request,
  $message: ElMessage,
  cover: FormData,
  callback: (status: boolean) => void
}
