import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  MapPin, 
  Clock, 
  Heart, 
  MessageCircle, 
  Share2, 
  Shield, 
  Star, 
  CheckCircle, 
  Users, 
  Medical,
  Home,
  Edit,
  Flag,
  UserPlus,
  Navigation,
  Plus,
  ChevronRight
} from 'lucide-react'

// 猫脸Logo组件（与Header保持一致）
const CatLogo = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.17c0 .55-.45 1-1 1s-1-.45-1-1v-4.34c0-.55.45-1 1-1s1 .45 1 1v4.34zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-4.34c0-.55.45-1 1-1s1 .45 1 1v4.34zm-5.29-8.71c-.39.39-1.02.39-1.41 0l-.71-.71c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41zm6 0c-.39.39-1.02.39-1.41 0l-.71-.71c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41z"/>
  </svg>
)

const CatDetail = () => {
  const { id } = useParams()
  const [cat, setCat] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showProgressForm, setShowProgressForm] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState([])

  // 模拟数据
  const mockCatData = {
    id: 1,
    title: "急！朝阳区一只后腿受伤的小橘",
    description: "今天中午在望京SOHO楼下发现的这只小橘猫，看起来也就两三个月大。右后腿有明显外伤，走路一瘸一拐的，不敢让人靠近，但只要你蹲下不动，它就会试探性地过来蹭你，非常亲人。",
    fullDescription: "已经给它喂了些猫粮和干净的水，它都吃了。因为我家里已经有两只猫了，实在没办法再带它回家。希望附近有经验的救助人或者好心人能帮帮它，尽快带它去医院检查治疗！",
    images: [
      "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=1160&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548546738-8509cb246ed3?q=80&w=1160&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570824104453-508955ab713e?q=80&w=1170&auto=format&fit=crop"
    ],
    location: "北京市朝阳区望京SOHO T3塔楼下",
    distance: "2.3km",
    publishTime: "2024年7月24日 11:30",
    tags: [
      { type: "urgent", label: "紧急求助", color: "bg-red-100 text-red-600" },
      { type: "adopt", label: "待领养", color: "bg-blue-100 text-blue-600" },
      { type: "verified", label: "已验证", color: "bg-yellow-100 text-yellow-600" }
    ],
    publisher: {
      id: 1,
      name: "爱猫人士-小王",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      joinYear: "2023",
      reputation: "trusted",
      reputationLabel: "可信用户",
      publishCount: 12,
      successCount: 8,
      verified: true
    },
    progress: {
      percentage: 60,
      timeline: [
        {
          id: 1,
          status: "completed",
          icon: CheckCircle,
          title: "信息发布",
          time: "2024-07-24 11:30",
          updater: "爱猫人士-小王",
          type: "publisher"
        },
        {
          id: 2,
          status: "completed",
          icon: Users,
          title: "志愿者响应",
          time: "2024-07-24 13:15",
          updater: "志愿者-李华",
          type: "volunteer"
        },
        {
          id: 3,
          status: "current",
          icon: Medical,
          title: "已送医检查",
          time: "2024-07-24 14:30",
          updater: "志愿者-李华",
          type: "volunteer"
        },
        {
          id: 4,
          status: "pending",
          icon: Home,
          title: "寻找领养家庭",
          time: null,
          updater: null,
          type: "pending"
        },
        {
          id: 5,
          status: "pending",
          icon: Heart,
          title: "成功领养",
          time: null,
          updater: null,
          type: "pending"
        }
      ]
    }
  }

  const mockComments = [
    {
      id: 1,
      user: {
        name: "志愿者-李华",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d"
      },
      content: "我在望京附近，可以过去看看！楼主还在现场吗？",
      time: "30分钟前",
      likes: 15
    },
    {
      id: 2,
      user: {
        name: "爱猫人士-小王",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        isAuthor: true
      },
      content: "回复 @志愿者-李华: 在的在的！太感谢了！我私信你电话！",
      time: "25分钟前",
      likes: 8
    }
  ]

  useEffect(() => {
    // 模拟API调用
    setTimeout(() => {
      setCat(mockCatData)
      setComments(mockComments)
      setLoading(false)
    }, 500)
  }, [id])

  const handleImageChange = (index) => {
    setCurrentImageIndex(index)
  }

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        user: {
          name: "当前用户",
          avatar: "https://i.pravatar.cc/150?u=current_user"
        },
        content: newComment,
        time: "刚刚",
        likes: 0
      }
      setComments([comment, ...comments])
      setNewComment('')
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (!cat) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">未找到相关信息</h1>
        <Link to="/cats" className="text-orange-500 hover:text-orange-600">返回列表</Link>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* 面包屑导航 */}
          <nav className="text-sm mb-6 text-gray-500">
            <div className="flex items-center space-x-2">
              <Link to="/" className="hover:text-orange-500">首页</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/cats" className="hover:text-orange-500">发现求助</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-700">详情</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
            {/* 左侧内容区 */}
            <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-lg shadow-md">
              {/* 标题和标签 */}
              <div className="mb-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {cat.tags.map((tag, index) => (
                    <span key={index} className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}>
                      {tag.type === 'verified' && <Shield className="inline h-3 w-3 mr-1" />}
                      {tag.label}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{cat.title}</h1>
                <div className="flex items-center text-gray-500 mt-2 space-x-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    发布于 {cat.publishTime}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    距离您 {cat.distance}
                  </div>
                </div>
              </div>

              {/* 图片画廊 */}
              <div className="mb-6">
                <img 
                  src={cat.images[currentImageIndex]} 
                  alt={cat.title}
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-2">
                  {cat.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${cat.title} 图片 ${index + 1}`}
                      className={`w-full h-24 object-cover rounded-md cursor-pointer transition-opacity ${
                        currentImageIndex === index 
                          ? 'border-2 border-orange-500 opacity-100' 
                          : 'opacity-70 hover:opacity-100'
                      }`}
                      onClick={() => handleImageChange(index)}
                    />
                  ))}
                </div>
              </div>

              {/* 详细描述 */}
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">详细情况</h3>
                <p className="mb-4">{cat.description}</p>
                <p className="mb-6">{cat.fullDescription}</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">关键信息</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>发现地点:</strong> {cat.location}</li>
                  <li><strong>健康状况:</strong> 右后腿疑似骨折或严重外伤，精神状态尚可，比较瘦弱。</li>
                  <li><strong>性格特点:</strong> 亲人，会主动靠近，但因受伤比较警惕。</li>
                </ul>
              </div>

              <div className="border-t my-8"></div>

              {/* 评论互动区 */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">评论与交流 ({comments.length})</h3>
                
                {/* 发表评论 */}
                <div className="flex items-start space-x-4 mb-6">
                  <img 
                    src="https://i.pravatar.cc/150?u=current_user" 
                    alt="当前用户头像"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition" 
                      rows="3" 
                      placeholder="发表你的看法..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button 
                      onClick={handleCommentSubmit}
                      className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition font-semibold"
                    >
                      发表评论
                    </button>
                  </div>
                </div>

                {/* 评论列表 */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex items-start space-x-4">
                      <img 
                        src={comment.user.avatar} 
                        alt={`${comment.user.name}头像`}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <p className="font-semibold text-gray-900">
                            {comment.user.name}
                            {comment.user.isAuthor && (
                              <span className="text-xs font-normal text-gray-500 ml-2">(楼主)</span>
                            )}
                          </p>
                          <p className="text-sm text-gray-600 mb-2">{comment.content}</p>
                        </div>
                        <div className="text-xs text-gray-500 mt-1 flex items-center space-x-4">
                          <span>{comment.time}</span>
                          <button className="font-semibold hover:text-orange-500">回复</button>
                          <button className="font-semibold hover:text-orange-500 flex items-center">
                            <Heart className="h-3 w-3 mr-1" />
                            {comment.likes}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 右侧信息栏 */}
            <div className="lg:col-span-1 space-y-6">
              {/* 发布者信息 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">发布者</h3>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img 
                      src={cat.publisher.avatar} 
                      alt={`${cat.publisher.name}头像`}
                      className="w-16 h-16 rounded-full"
                    />
                    {cat.publisher.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg">{cat.publisher.name}</p>
                    <p className="text-sm text-gray-500">{cat.publisher.joinYear}年加入</p>
                    <div className="mt-1">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        cat.publisher.reputation === 'trusted' 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Star className="h-3 w-3 mr-1" />
                        {cat.publisher.reputationLabel}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 flex space-x-3">
                      <span>发布：{cat.publisher.publishCount}次</span>
                      <span>成功救助：{cat.publisher.successCount}次</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition flex items-center justify-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>联系发布者</span>
                  </button>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition flex items-center justify-center space-x-1">
                      <UserPlus className="h-4 w-4" />
                      <span>关注</span>
                    </button>
                    <button className="bg-red-100 text-red-600 font-bold py-2 px-4 rounded-lg hover:bg-red-200 transition flex items-center justify-center">
                      <Flag className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 行动号召 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">帮助它</h3>
                <div className="space-y-3">
                  <button className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition flex items-center justify-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>申请领养</span>
                  </button>
                  <button className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition flex items-center justify-center space-x-2">
                    <Medical className="h-5 w-5" />
                    <span>我来救助</span>
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition flex items-center justify-center space-x-2">
                    <Share2 className="h-5 w-5" />
                    <span>分享信息</span>
                  </button>
                </div>
              </div>
              
              {/* 救助进展 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold border-b pb-2">救助进展</h3>
                  <button 
                    onClick={() => setShowProgressForm(!showProgressForm)}
                    className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-200 transition flex items-center space-x-1"
                  >
                    <Edit className="h-3 w-3" />
                    <span>更新进展</span>
                  </button>
                </div>
                
                {/* 进度条 */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>救助进度</span>
                    <span>{cat.progress.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-300"
                      style={{ width: `${cat.progress.percentage}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* 时间线 */}
                <div className="space-y-4">
                  {cat.progress.timeline.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={item.id} className="relative flex items-start">
                        {index < cat.progress.timeline.length - 1 && (
                          <div className="absolute left-3 top-8 w-0.5 h-8 bg-gray-200"></div>
                        )}
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${
                          item.status === 'completed' ? 'bg-green-500' :
                          item.status === 'current' ? 'bg-blue-500' :
                          'bg-gray-400'
                        }`}>
                          <Icon className="h-3 w-3" />
                        </div>
                        <div className="ml-4 flex-1">
                          <p className={`font-semibold text-sm ${
                            item.status === 'pending' ? 'text-gray-400' : 'text-gray-900'
                          }`}>
                            {item.title}
                          </p>
                          {item.time && (
                            <p className="text-xs text-gray-500">{item.time}</p>
                          )}
                          {item.updater && (
                            <p className="text-xs text-gray-600">更新者：{item.updater}</p>
                          )}
                          {item.status === 'current' && (
                            <p className="text-xs text-blue-600 mt-1">当前状态</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
                
                {/* 进展更新表单 */}
                {showProgressForm && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">更新救助进展</h4>
                    <select className="w-full p-2 border border-gray-300 rounded-md text-sm mb-2">
                      <option>选择当前状态</option>
                      <option>志愿者响应</option>
                      <option>已送医检查</option>
                      <option>康复中</option>
                      <option>寻找领养家庭</option>
                      <option>成功领养</option>
                    </select>
                    <textarea 
                      className="w-full p-2 border border-gray-300 rounded-md text-sm mb-2" 
                      rows="2" 
                      placeholder="添加进展说明..."
                    />
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-500 text-white py-1 px-3 rounded text-sm hover:bg-blue-600 transition">
                        提交更新
                      </button>
                      <button 
                        onClick={() => setShowProgressForm(false)}
                        className="bg-gray-200 text-gray-700 py-1 px-3 rounded text-sm hover:bg-gray-300 transition"
                      >
                        取消
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 地图位置 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">大致位置</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=600&h=400&auto=format&fit=crop" 
                    alt="地图位置示意图"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-600 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {cat.location}
                </div>
                <button className="w-full mt-3 bg-blue-100 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-200 transition flex items-center justify-center space-x-2">
                  <Navigation className="h-4 w-4" />
                  <span>导航到此位置</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CatDetail 