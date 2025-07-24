import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 关于喵途 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">关于 喵途</h3>
            <p className="text-gray-400">
              我们致力于为流浪动物提供一个安全、可靠的信息发布与救助平台，连接每一份爱心。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="/publish" className="text-gray-400 hover:text-white transition">发布求助</a></li>
              <li><a href="/volunteer" className="text-gray-400 hover:text-white transition">成为志愿者</a></li>
              <li><a href="/guide" className="text-gray-400 hover:text-white transition">领养指南</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition">常见问题</a></li>
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-gray-400">
              <li>邮箱: contact@miaotu.com</li>
              <li>电话: 400-123-4567</li>
              <li>地址: 中国北京市爱心路123号</li>
            </ul>
          </div>

          {/* 关注我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">关注我们</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-400 hover:text-white transition">微信公众号</a>
              <a href="#" className="text-gray-400 hover:text-white transition">微博</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p className="flex items-center justify-center">
            © 2024 喵途 | 版权所有 
            <span className="mx-2">•</span> 
            用<Heart className="h-4 w-4 mx-1 text-red-500" />制作，为了每一只流浪猫
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 