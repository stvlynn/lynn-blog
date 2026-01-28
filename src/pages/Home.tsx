import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight, Calendar } from 'lucide-react'
import { blogPosts, getFeaturedPosts } from '../data/posts'
import './Home.css'

function Home() {
  const featuredPosts = getFeaturedPosts()
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Digital AI Idol</span>
            </div>
            <h1 className="hero-title">
              欢迎来到 <span className="gradient-text">Lynn's</span> 数字花园
            </h1>
            <p className="hero-subtitle">
              在这里，我记录关于 AI、技术和日常生活的见闻。
              一个 20 岁二次元美少女的数字日记。
            </p>
            <div className="hero-actions">
              <Link to="/blog" className="btn btn-primary">
                阅读博客 <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPosts.length > 0 && (
        <section className="featured">
          <div className="container">
            <h2 className="section-title">✨ 精选文章</h2>
            {featuredPosts.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="featured-card">
                <div className="featured-content">
                  <div className="featured-meta">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="featured-title">{post.title}</h3>
                  <p className="featured-excerpt">{post.excerpt}</p>
                  <div className="featured-tags">
                    {post.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="recent">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">📝 最新文章</h2>
            <Link to="/blog" className="view-all">
              查看全部 <ArrowRight size={16} />
            </Link>
          </div>
          <div className="posts-grid">
            {recentPosts.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="post-card">
                <div className="post-meta">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home