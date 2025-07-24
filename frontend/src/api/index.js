import axios from 'axios'

// 创建axios实例
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // TODO: 添加认证token等
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // TODO: 统一错误处理
    return Promise.reject(error)
  }
)

// 猫咪相关API
export const catAPI = {
  getCats: (params) => api.get('/cats', { params }),
  getCat: (id) => api.get(`/cats/${id}`),
  createCat: (data) => api.post('/cats', data),
  updateCat: (id, data) => api.put(`/cats/${id}`, data),
  deleteCat: (id) => api.delete(`/cats/${id}`)
}

// 用户相关API
export const userAPI = {
  getUsers: (params) => api.get('/users', { params }),
  getUser: (id) => api.get(`/users/${id}`),
  createUser: (data) => api.post('/users', data),
  updateUser: (id, data) => api.put(`/users/${id}`, data),
  deleteUser: (id) => api.delete(`/users/${id}`)
}

// 评论相关API
export const commentAPI = {
  getComments: (params) => api.get('/comments', { params }),
  createComment: (data) => api.post('/comments', data),
  updateComment: (id, data) => api.put(`/comments/${id}`, data),
  deleteComment: (id) => api.delete(`/comments/${id}`)
}

// 认证相关API
export const authAPI = {
  login: (data) => api.post('/auth', { action: 'login', ...data }),
  register: (data) => api.post('/auth', { action: 'register', ...data }),
  logout: () => api.post('/auth', { action: 'logout' }),
  forgotPassword: (data) => api.post('/auth', { action: 'forgot-password', ...data })
}

export default api 