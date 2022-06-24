import actionTypes from './action-types'
import mutationTypes from '@/store/mutation-types'
import * as payloadTypes from '@/store/payload-types'
import serverConfig from '@/config/server.config'
import { Article } from '@/models'
import { ActionContext } from 'vuex'
import { State } from '@/store/index'
import md5 from 'md5'
import { formatDate } from '@/utils'

export default {
  // 获取所有文章，并commit
  async [actionTypes.GET_ALL_ARTICLES]({ commit }: ActionContext<State, State>, $http: payloadTypes.GET_ALL_ARTICLES) {
    const articles = await $http.get({ url: '/article/get_all' }).then(({ data }) =>
        (data.articles as Article[])
            .filter(v => !v.deleted)
            // 默认排序
            .sort((a, b) => +new Date(b.updated) - +new Date(a.updated))
            .map(v => ({
              ...v, coverUrl: `${ serverConfig.SERVER_URL }${ v.coverUrl }`,
              updated: formatDate(v.updated), created: formatDate(v.created),
            })))
    commit(mutationTypes.GOT_ALL_ARTICLES, articles)
  },
  // 登录
  [actionTypes.LOGIN](_: ActionContext<State, State>, payload: payloadTypes.LOGIN) {
    const { username, password, $http, $message, pwdInput } = payload
    $http.post({
      url: '/user/login',
      data: { username, password: md5(md5(md5(password))) },
    }).then(({ data }) => {
      if (data.status) { // 登录成功
        // userInfo { username: string, email: string, root: boolean, isLogin: boolean }
        const userInfo = { ...data.userInfo, isLogin: true }
        localStorage.setItem('cinnamon-token', data.token)
        localStorage.setItem('cinnamon-info', JSON.stringify(userInfo)) // 将用户信息保存
      } else pwdInput.resetField() // 登录失败
      $message({
        type: data.status ? 'success' : 'error', message: data.msg,
        onClose() { data.status && location.reload() }, duration: 1500,
      })
    })
  },
  // 注册
  [actionTypes.REGISTER](_: ActionContext<State, State>, payload: payloadTypes.REGISTER) {
    const { username, password, email, $http, $message, switchCard, reset } = payload
    $http.post({
      url: '/user/register',
      data: { username, email, password: md5(md5(md5(password))) },
    }).then(({ data }) => {
      $message({ type: data.status ? 'success' : 'error', message: data.msg, duration: 1500 })
      if (data.status) {
        switchCard()
        reset()
      }
    })
  },
  // 登出
  [actionTypes.LOGOUT](_: ActionContext<State, State>, $emit: payloadTypes.LOGOUT) {
    location.reload()
    localStorage.removeItem('cinnamon-token')
    localStorage.removeItem('cinnamon-info')
    setTimeout(() => $emit('logout'), 500)
  },
  // 喜欢 or 不喜欢
  [actionTypes.LIKE_OR_DISLIKE]({ state }: ActionContext<State, State>, payload: payloadTypes.LIKE_OR_DISLIKE) {
    const { $http, artId, $message, like, callback } = payload
    const userInfo = JSON.parse(localStorage.getItem('cinnamon-info') as string)
    if (userInfo) {
      $http.post({
        url: `/like/${ like ? 'dislike' : 'like' }`,
        data: { userId: userInfo._id, artId },
      }).then(({ data }) => {
        callback(data.status)
        state.articles.forEach(art => {
          if (art._id === artId) (art as Article).likes += data.status ? 1 : -1
        })
      })
    } else $message.error('只有登录才能喜欢这篇文章哦～')
  },
  // 是否喜欢
  [actionTypes.IS_LIKE](_: ActionContext<State, State>, payload: payloadTypes.IS_LIKE) {
    const { $http, artId, callback } = payload
    const userInfo = JSON.parse(localStorage.getItem('cinnamon-info') as string)
    if (userInfo) $http.get({ url: '/like/get', params: { userId: userInfo._id, artId } })
        .then(({ data }) => callback(data.status))
  },
  // post
  [actionTypes.POST]({ commit }: ActionContext<State, State>, payload: payloadTypes.POST) {
    const { $http, $message, cover, callback } = payload
    $http.post({
      url: '/post/upload', data: cover,
    }).then(({ data }) => {
      $message({ type: data.status ? 'success' : 'error', message: data.msg, duration: 1500 })
      callback(data.status)
      if (data.status) commit(mutationTypes.POSTED)
    })
  },
}
