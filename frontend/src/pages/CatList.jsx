import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, MapPin } from 'lucide-react'

const CatList = () => {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  useEffect(() => {
    // TODO: 从 API 获取猫咪数据
    setLoading(false)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">流浪猫求助信息</h1>
        <p className="text-gray-600">寻找需要帮助的流浪猫，或发布新的求助信息</p>
      </div>

      {/* 搜索和过滤 */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          {/* 搜索框 */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索猫咪信息..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* 状态过滤 */}
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">全部状态</option>
              <option value="pending">待救助</option>
              <option value="helping">救助中</option>
              <option value="adopted">已领养</option>
            </select>
          </div>

          {/* 发布按钮 */}
          <Link 
            to="/publish"
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            发布求助
          </Link>
        </div>
      </div>

      {/* 猫咪列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          // 加载状态
          <div className="col-span-full text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">加载中...</p>
          </div>
        ) : cats.length === 0 ? (
          // 空状态
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600 text-lg">暂无求助信息</p>
            <Link 
              to="/publish"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              发布第一条求助信息
            </Link>
          </div>
        ) : (
          // 猫咪卡片
          cats.map((cat) => (
            <div key={cat.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200">
                {cat.image ? (
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    暂无图片
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{cat.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {cat.location}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    cat.status === 'pending' ? 'bg-red-100 text-red-800' :
                    cat.status === 'helping' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {cat.status === 'pending' ? '待救助' :
                     cat.status === 'helping' ? '救助中' : '已解决'}
                  </span>
                  
                  <Link 
                    to={`/cats/${cat.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    查看详情
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default CatList 