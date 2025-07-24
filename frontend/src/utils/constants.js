// 猫咪状态
export const CAT_STATUS = {
  PENDING: 'pending',
  HELPING: 'helping',
  ADOPTED: 'adopted'
}

// 猫咪状态显示文本
export const CAT_STATUS_TEXT = {
  [CAT_STATUS.PENDING]: '待救助',
  [CAT_STATUS.HELPING]: '救助中',
  [CAT_STATUS.ADOPTED]: '已领养'
}

// 用户角色
export const USER_ROLES = {
  USER: 'user',
  VOLUNTEER: 'volunteer',
  ADMIN: 'admin'
}

// 本地存储键名
export const STORAGE_KEYS = {
  TOKEN: 'auth_token',
  USER: 'user_info'
} 