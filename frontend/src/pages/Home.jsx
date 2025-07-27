import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  MapPin, 
  AlertCircle, 
  Users, 
  UserPlus, 
  Store,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import AnimatedCatBackground from '../components/AnimatedCatBackground'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('所有区域')
  const [selectedStatus, setSelectedStatus] = useState('所有状态')
  const [selectedTime, setSelectedTime] = useState('不限时间')
  const [selectedDistance, setSelectedDistance] = useState('不限距离')
  const [sortBy, setSortBy] = useState('最新发布')

  // 模拟数据
  const stats = {
    totalRescued: 1234,
    monthlyNew: 89,
    volunteers: 567,
    urgent: 23
  }

  const urgentCases = [
    {
      id: 1,
      title: "急！朝阳区一只后腿受伤的小橘",
      description: "在望京SOHO附近发现，后腿疑似被车压伤，非常亲人但很害怕，急需送医！",
      location: "北京 · 朝阳区",
      distance: "2.3km",
      author: "爱猫人士-小王",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      time: "2小时前",
      status: "紧急求助",
      image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=1160&auto=format&fit=crop",
      urgent: true
    },
    {
      id: 2,
      title: "温柔三花找家，已驱虫免疫",
      description: "性格超好，粘人会踩奶。已完成体内外驱虫和疫苗，希望找一个不离不弃的家。",
      location: "上海 · 浦东新区",
      distance: "5.7km",
      author: "浦东救助站",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
      time: "1天前",
      status: "待领养",
      image: "https://images.unsplash.com/photo-1548546738-8509cb246ed3?q=80&w=1160&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "小区里怕人的小白，已送医",
      description: "感谢大家的关注！猫咪已经成功诱捕并送到医院检查，只是有点营养不良，目前在恢复中。",
      location: "深圳 · 南山区",
      distance: "8.1km",
      author: "志愿者-李华",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
      time: "3天前",
      status: "已救助",
      image: "https://images.unsplash.com/photo-1570824104453-508955ab713e?q=80&w=1170&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "疑似走失的暹罗，求主人",
      description: "非常干净，会用猫砂盆，感觉是和主人走散了。目前暂住在我家，希望主人看到能联系我。",
      location: "广州 · 天河区",
      distance: "12.5km",
      author: "热心市民张女士",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026707d",
      time: "5天前",
      status: "待领养",
      image: "https://images.unsplash.com/photo-1516283023470-02a425a85427?q=80&w=1170&auto=format&fit=crop"
    }
  ]

  const getStatusStyle = (status) => {
    switch (status) {
      case '紧急求助':
        return 'bg-red-100 text-red-800'
      case '待领养':
        return 'bg-blue-100 text-blue-800'
      case '已救助':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1574158622682-e40e69841006?q=80&w=2080&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* 动态小猫背景动画 */}
        <AnimatedCatBackground />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">每个生命都值得被温柔以待</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">一个连接爱心与生命的平台，为流浪的它们寻找一个温暖的家。</p>
          
          {/* 实时统计数据 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-400">{stats.totalRescued.toLocaleString()}</div>
              <div className="text-sm text-gray-300">累计救助</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400">{stats.monthlyNew}</div>
              <div className="text-sm text-gray-300">本月新增</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400">{stats.volunteers}</div>
              <div className="text-sm text-gray-300">活跃志愿者</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-400">{stats.urgent}</div>
              <div className="text-sm text-gray-300">紧急求助</div>
            </div>
          </div>
        </div>
      </section>

      {/* 志愿者专区 */}
      <section className="bg-blue-50 py-8 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 rounded-full p-4">
                  <Users className="text-white h-8 w-8" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-800">志愿者专区</h3>
                  <p className="text-blue-600">加入我们，一起帮助更多的毛孩子找到温暖的家</p>
                  <p className="text-sm text-blue-500 mt-1">当前有 <span className="font-bold">{stats.urgent}条紧急求助</span> 需要您的帮助</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2 font-semibold">
                  <UserPlus className="h-5 w-5" />
                  <span>成为志愿者</span>
                </button>
                <button className="bg-white text-blue-500 border-2 border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center space-x-2 font-semibold">
                  <Store className="h-5 w-5" />
                  <span>志愿者中心</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 搜索与筛选 */}
      <section className="bg-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          {/* 搜索栏 */}
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="搜索救助信息、地点、描述..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-20 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-1.5 rounded-md hover:bg-orange-600 transition">
                搜索
              </button>
            </div>
          </div>
          
          {/* 筛选器 */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
            <div className="md:col-span-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">区域</label>
                  <select 
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option>所有区域</option>
                    <option>北京</option>
                    <option>上海</option>
                    <option>广州</option>
                    <option>深圳</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">状态</label>
                  <select 
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option>所有状态</option>
                    <option>🚨 紧急求助</option>
                    <option>🏠 待领养</option>
                    <option>🏥 治疗中</option>
                    <option>✅ 已救助</option>
                    <option>🎉 已解决</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">发布时间</label>
                  <select 
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option>不限时间</option>
                    <option>今天</option>
                    <option>3天内</option>
                    <option>一周内</option>
                    <option>一个月内</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">距离</label>
                  <select 
                    value={selectedDistance}
                    onChange={(e) => setSelectedDistance(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option>不限距离</option>
                    <option>1公里内</option>
                    <option>5公里内</option>
                    <option>10公里内</option>
                    <option>20公里内</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">排序</label>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option>最新发布</option>
                    <option>最早发布</option>
                    <option>距离最近</option>
                    <option>紧急程度</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-5 md:mt-0">
              <button className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 transition font-semibold">
                筛选信息
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 紧急求助提醒横幅 */}
      <section className="container mx-auto px-4 py-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="text-red-500 h-6 w-6 mr-3 animate-pulse" />
            <div className="flex-1">
              <h3 className="text-red-800 font-semibold">🚨 当前有 {stats.urgent} 条紧急求助信息需要帮助</h3>
              <p className="text-red-600 text-sm">志愿者请优先关注标记为"紧急求助"的信息</p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition font-semibold">
              立即查看
            </button>
          </div>
        </div>
      </section>

      {/* 信息卡片列表 */}
      <section className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {urgentCases.map((item) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                item.urgent ? 'border-2 border-red-500 animate-pulse' : ''
              }`}
            >
              <Link to={`/cats/${item.id}`} className="block">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  {/* 紧急标识 */}
                  {item.urgent && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold animate-pulse">
                      🚨 紧急
                    </div>
                  )}
                  {/* 距离标识 */}
                  <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-md text-xs">
                    {item.distance}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-800 leading-tight">{item.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.location}
                  </div>
                  <div className="border-t pt-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={item.avatar} alt="用户头像" className="w-8 h-8 rounded-full mr-2" />
                      <span className="text-sm font-medium">{item.author}</span>
                    </div>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* 分页 */}
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex rounded-md shadow-sm -space-x-px">
            <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <ChevronLeft className="h-5 w-5" />
              <span className="ml-1">上一页</span>
            </button>
            <button className="relative z-10 inline-flex items-center px-4 py-2 border border-orange-500 bg-orange-50 text-sm font-medium text-orange-600">
              1
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="relative hidden md:inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
            </button>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              10
            </button>
            <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="mr-1">下一页</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Home 