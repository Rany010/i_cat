# 流浪猫咪求助信息网站 (i_cat)

一个为流浪猫提供信息发布、交流与帮助的平台，帮助每一只流浪猫找到温暖的家。

## 技术栈

- **前端**: React + Vite + Tailwind CSS
- **后端**: Node.js (Netlify Functions)
- **数据存储**: JSON 文件
- **部署**: Netlify

## 项目结构

```
i_cat/
├── netlify/                    # Netlify Functions（后端API）
│   └── functions/
│       ├── api/               # API 函数
│       │   ├── cats.js        # 猫咪信息相关API
│       │   ├── users.js       # 用户管理相关API
│       │   ├── comments.js    # 评论相关API
│       │   └── auth.js        # 认证相关API
│       ├── data/              # JSON数据文件
│       │   ├── cats.json      # 猫咪信息数据
│       │   ├── users.json     # 用户数据
│       │   └── comments.json  # 评论数据
│       └── utils/             # 工具函数
│           └── fileHandler.js # 文件操作工具
├── frontend/                   # 前端项目
│   ├── src/
│   │   ├── components/        # 组件
│   │   │   └── Layout/        # 布局组件
│   │   ├── pages/             # 页面组件
│   │   │   └── Auth/          # 认证相关页面
│   │   ├── api/               # API请求封装
│   │   └── utils/             # 工具函数
│   ├── public/
│   └── package.json
├── netlify.toml                # Netlify配置文件
├── package.json                # 项目依赖配置
└── README.md
```

## 功能模块

### 核心功能
- 🐱 **信息发布与管理**: 发布流浪猫求助信息
- 🔍 **信息浏览与检索**: 按条件搜索筛选信息
- 💬 **评论与互动**: 信息评论、回复功能
- 👤 **用户管理**: 注册、登录、个人资料管理
- 🛡️ **管理后台**: 信息审核、用户管理

### 页面路由
- `/` - 首页
- `/cats` - 猫咪信息列表
- `/cats/:id` - 猫咪详情页
- `/publish` - 发布求助信息
- `/login` - 用户登录
- `/register` - 用户注册
- `/profile` - 个人资料
- `/admin` - 管理后台

## 开发指南

### 环境要求
- Node.js >= 16
- npm >= 8

### 安装依赖

```bash
# 安装根目录依赖
npm install

# 安装前端依赖
npm run install-deps
```

### 本地开发

```bash
# 启动本地开发服务器（前后端同时启动）
npm run dev

# 或者使用 netlify dev
netlify dev
```

访问 `http://localhost:8888` 查看网站

### 构建部署

```bash
# 构建前端
npm run build
```

## API 接口

### 猫咪信息 API
- `GET /api/cats` - 获取猫咪信息列表
- `GET /api/cats/:id` - 获取猫咪详情
- `POST /api/cats` - 创建猫咪信息
- `PUT /api/cats/:id` - 更新猫咪信息
- `DELETE /api/cats/:id` - 删除猫咪信息

### 用户管理 API
- `GET /api/users` - 获取用户列表
- `POST /api/users` - 创建用户
- `PUT /api/users/:id` - 更新用户信息
- `DELETE /api/users/:id` - 删除用户

### 评论 API
- `GET /api/comments` - 获取评论列表
- `POST /api/comments` - 创建评论
- `PUT /api/comments/:id` - 更新评论
- `DELETE /api/comments/:id` - 删除评论

### 认证 API
- `POST /api/auth` - 用户认证（登录、注册、登出、找回密码）

## 数据结构

### 猫咪信息 (cats.json)
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "location": "string",
  "status": "pending|helping|adopted",
  "images": ["string"],
  "contactInfo": "string",
  "publisherId": "string",
  "publishDate": "string",
  "updateDate": "string"
}
```

### 用户信息 (users.json)
```json
{
  "id": "string",
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "user|volunteer|admin",
  "profile": {
    "nickname": "string",
    "avatar": "string",
    "phone": "string"
  },
  "createDate": "string",
  "updateDate": "string"
}
```

### 评论信息 (comments.json)
```json
{
  "id": "string",
  "catId": "string",
  "userId": "string",
  "content": "string",
  "createDate": "string"
}
```

## 部署

### Netlify 部署
1. 将代码推送到 GitHub
2. 在 Netlify 中连接 GitHub 仓库
3. 设置构建命令: `npm run build`
4. 设置发布目录: `frontend/dist`
5. 部署完成

## 开发计划

- [x] 项目框架搭建
- [ ] 用户认证系统
- [ ] 猫咪信息CRUD功能
- [ ] 评论系统
- [ ] 图片上传功能
- [ ] 搜索筛选功能
- [ ] 管理后台
- [ ] 移动端适配
- [ ] 数据库集成

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT License