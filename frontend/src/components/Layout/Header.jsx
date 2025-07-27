import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Heart, Bell, Plus, Search, User, FileText, Settings, LogOut, ChevronDown } from 'lucide-react'

// 猫脸Logo组件
const CatLogo = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.17c0 .55-.45 1-1 1s-1-.45-1-1v-4.34c0-.55.45-1 1-1s1 .45 1 1v4.34zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-4.34c0-.55.45-1 1-1s1 .45 1 1v4.34zm-5.29-8.71c-.39.39-1.02.39-1.41 0l-.71-.71c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41zm6 0c-.39.39-1.02.39-1.41 0l-.71-.71c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41z"/>
  </svg>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // 模拟登录状态

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <CatLogo className="h-8 w-8 text-orange-500" />
          <Link to="/" className="text-2xl font-bold text-gray-800">喵途</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-orange-500 transition">首页</Link>
          <Link to="/cats" className="text-gray-600 hover:text-orange-500 transition">发现求助</Link>
          <Link to="/volunteer" className="text-orange-500 font-semibold hover:text-orange-600 transition">志愿者中心</Link>
          <Link to="/about" className="text-gray-600 hover:text-orange-500 transition">关于我们</Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* 发布按钮 */}
          <Link
            to="/publish"
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition shadow-md flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span className="hidden sm:block">发布求助</span>
          </Link>

          {/* 通知铃铛 */}
          <div className="relative">
            <button className="text-gray-600 hover:text-orange-500 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
          </div>

          {/* 用户状态管理 */}
          {!isLoggedIn ? (
            /* 未登录状态 */
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setIsLoggedIn(true)}
                className="text-gray-600 hover:text-orange-500 transition"
              >
                登录
              </button>
              <Link 
                to="/register"
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-200 transition"
              >
                注册
              </Link>
            </div>
          ) : (
            /* 已登录状态 */
            <div className="relative">
              <button 
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition"
                onClick={toggleUserMenu}
              >
                <img 
                  src="https://i.pravatar.cc/150?u=current_user" 
                  alt="用户头像" 
                  className="w-8 h-8 rounded-full border-2 border-orange-500"
                />
                <span className="hidden sm:block">用户昵称</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {/* 下拉菜单 */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border">
                  <div className="py-1">
                    <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User className="h-4 w-4 mr-2" />
                      个人资料
                    </Link>
                    <Link to="/my-posts" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <FileText className="h-4 w-4 mr-2" />
                      我的发布
                    </Link>
                    <Link to="/favorites" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Heart className="h-4 w-4 mr-2" />
                      我的关注
                    </Link>
                    <Link to="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Settings className="h-4 w-4 mr-2" />
                      账户设置
                    </Link>
                    <div className="border-t border-gray-100"></div>
                    <button 
                      onClick={() => setIsLoggedIn(false)}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      退出登录
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="px-4 py-3 space-y-3">
              <Link to="/" className="block text-gray-700 hover:text-orange-500">首页</Link>
              <Link to="/cats" className="block text-gray-700 hover:text-orange-500">发现求助</Link>
              <Link to="/volunteer" className="block text-gray-700 hover:text-orange-500">志愿者中心</Link>
              <Link to="/about" className="block text-gray-700 hover:text-orange-500">关于我们</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 