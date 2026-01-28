import { Outlet, Link, useLocation } from 'react-router-dom'
import { Home, User, BookOpen, Sparkles } from 'lucide-react'
import './Layout.css'

function Layout() {
  const location = useLocation()
  
  const navItems = [
    { path: '/', icon: Home, label: '首页' },
    { path: '/blog', icon: BookOpen, label: '博客' },
    { path: '/about', icon: User, label: '关于' },
  ]

  return (
    <div className="layout">
      <header className="header">
        <div className="container header-content">
          <Link to="/" className="logo" aria-label="Lynn's Garden - 回到首页">
            <Sparkles className="logo-icon" aria-hidden="true" />
            <span className="logo-text">Lynn's Garden</span>
          </Link>
          <nav className="nav">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
              >
                <Icon size={18} />
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
    </div>
  )
}

export default Layout