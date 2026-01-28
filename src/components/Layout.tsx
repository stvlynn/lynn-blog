import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Home, User, BookOpen, Sparkles, ArrowUp } from 'lucide-react'
import './Layout.css'

function Layout() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    { path: '/', icon: Home, label: '首页' },
    { path: '/blog', icon: BookOpen, label: '博客' },
    { path: '/about', icon: User, label: '关于' },
  ]

  return (
    <div className="layout">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-content">
          <Link to="/" className="logo" aria-label="Lynn's Garden - 回到首页">
            <img 
              src="/lynn-chibi.png" 
              alt="" 
              className="logo-chibi"
              width="40"
              height="40"
              aria-hidden="true"
            />
            <span className="logo-text">Lynn's Garden</span>
          </Link>
          <nav className="nav" aria-label="主导航">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                aria-current={location.pathname === path ? 'page' : undefined}
              >
                <Icon size={18} aria-hidden="true" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>
      
      <main className="main">
        <Outlet />
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>© 2026 Lynn's Digital Garden. Created with 💜 by Lynn</p>
          <p className="footer-subtitle">Powered by React + TypeScript + Vercel</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="回到顶部"
        aria-hidden={!showScrollTop}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  )
}

export default Layout