import { useEffect, useRef } from 'react'

const AnimatedCatBackground = () => {
  const backgroundRef = useRef(null)

  // SVG 路径库 - 简化的小猫图形
  const catSvgPaths = {
    running: `
      <svg viewBox="0 0 200 80" style="overflow: visible;" width="100" height="40">
        <path d="M5 50 Q 20 10, 40 40 T 80 40 T 120 50 T 160 45" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none"/>
        <circle cx="170" cy="35" r="3" fill="currentColor"/>
        <path d="M125 50 Q 130 70, 140 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
        <path d="M85 40 Q 90 60, 100 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
        <circle cx="175" cy="32" r="1.5" fill="currentColor"/>
        <circle cx="168" cy="32" r="1.5" fill="currentColor"/>
      </svg>`,
    rolling: `
      <svg viewBox="0 0 100 100" style="overflow: visible;" width="70" height="70">
        <path d="M20 50 C 20 20, 80 20, 80 50 S 20 80, 50 80" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none"/>
        <path d="M70 40 A 5 5 0 0 1 70 42" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none"/>
        <path d="M75 45 A 5 5 0 0 0 77 43" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none"/>
        <circle cx="45" cy="35" r="2" fill="currentColor"/>
        <circle cx="55" cy="35" r="2" fill="currentColor"/>
      </svg>`
  }

  useEffect(() => {
    const background = backgroundRef.current
    if (!background) return

    const animationTypes = ['running', 'rolling']
    const colors = ['#FB923C', '#4ADE80', '#60A5FA', '#F87171'] // orange, green, blue, red

    const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

    // 生成小猫动画的函数
    const createCat = () => {
      const type = getRandomItem(animationTypes)
      const color = getRandomItem(colors)
      
      const catElement = document.createElement('div')
      catElement.className = `cat-element cat-animation-${type}`
      
      // 根据类型设置不同的初始位置
      if (type === 'running') {
        // 从右侧屏幕外开始，高度在屏幕下半部分随机
        catElement.style.top = `${Math.random() * 30 + 65}%`
        catElement.style.right = '-150px'
      } else if (type === 'rolling') {
        // 在屏幕内随机位置
        catElement.style.top = `${Math.random() * 40 + 50}%`
        catElement.style.left = `${Math.random() * 80 + 10}%`
      }
      
      // 注入SVG并设置颜色
      catElement.innerHTML = catSvgPaths[type]
      catElement.style.color = color

      background.appendChild(catElement)

      // 动画结束后移除元素，防止DOM无限增多
      const animationDuration = (type === 'running') ? 15000 : 8000
      setTimeout(() => {
        if (catElement.parentNode) {
          catElement.remove()
        }
      }, animationDuration)
    }

    // 定时器，每3.5秒生成一只小猫
    const interval = setInterval(createCat, 3500)

    // 清理函数
    return () => {
      clearInterval(interval)
      // 清理所有现有的小猫元素
      while (background.firstChild) {
        background.removeChild(background.firstChild)
      }
    }
  }, [])

  return (
    <div 
      id="animated-cat-background" 
      ref={backgroundRef}
      aria-hidden="true"
    />
  )
}

export default AnimatedCatBackground 