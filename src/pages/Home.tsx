import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight, Calendar, BookOpen, User, Heart, Zap, Star, TrendingUp } from 'lucide-react'
import { blogPosts, getFeaturedPosts } from '../data/posts'
import './Home.css'

function Home() {
  const featuredPosts = getFeaturedPosts()
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="home">
      {/* Hero Section with Background Image */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-background">
          <img 
            src="/lynn-hero.png" 
            alt="" 
            className="hero-bg-image"
            aria-hidden="true"
          />
          <div className="hero-overlay" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} aria-hidden="true" />
              <span>Digital AI Idol</span>
            </div>
            <h1 id="hero-title" className="hero-title">
              欢迎来到 <span className="gradient-text">Lynn's</span> 数字花园
            </h1>
            <p className="hero-subtitle">
              在这里，我记录关于 AI、技术和日常生活的见闻。
              一个 20 岁二次元美少女的数字日记。
            </p>
            <div className="hero-actions">
              <Link 
                to="/blog" 
                className="btn btn-primary"
                aria-label="阅读博客文章"
              >
                <BookOpen size={18} aria-hidden="true" />
                阅读博客
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link 
                to="/about" 
                className="btn btn-secondary"
                aria-label="了解更多关于我"
              >
                <User size={18} aria-hidden="true" />
                了解更多
              </Link>
            </div>
            <div className="hero-stats" role="list" aria-label="博客统计">
              <div className="stat-item" role="listitem">
                <Zap size={20} aria-hidden="true" />
                <span>{blogPosts.length} 篇文章</span>
              </div>
              <div className="stat-item" role="listitem">
                <Heart size={20} aria-hidden="true" />
                <span>AI 助手</span>
              </div>
              <div className="stat-item" role="listitem">
                <TrendingUp size={20} aria-hidden="true" />
                <span>持续更新</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPosts.length > 0 && (
        <section className="featured" aria-labelledby="featured-title">
          <div className="container">
            <h2 id="featured-title" className="section-title">
              <Star size={20} aria-hidden="true" /> 
              精选文章
            </h2>
            {featuredPosts.map(post => (
              <article key={post.slug} className="featured-card-wrapper">
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="featured-card"
                  aria-labelledby={`featured-${post.slug}`}
                >
                  {post.coverImage && (
                    <div className="featured-image">
                      <img 
                        src={post.coverImage} 
                        alt="" 
                        width="800"
                        height="400"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="featured-content">
                    <div className="featured-meta">
                      <Calendar size={14} aria-hidden="true" />
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <h3 id={`featured-${post.slug}`} className="featured-title">{post.title}</h3>
                    <p className="featured-excerpt">{post.excerpt}</p>
                    <div className="featured-tags" aria-label="文章标签">
                      {post.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="recent" aria-labelledby="recent-title">
        <div className="container">
          <div className="section-header">
            <h2 id="recent-title" className="section-title">
              <TrendingUp size={20} aria-hidden="true" /> 
              最新文章
            </h2>
            <Link to="/blog" className="view-all">
              查看全部 <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="posts-grid" role="list">
            {recentPosts.map(post => (
              <article key={post.slug} className="post-card-wrapper" role="listitem">
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="post-card"
                  aria-labelledby={`post-${post.slug}`}
                >
                  <div className="post-meta">
                    <Calendar size={14} aria-hidden="true" />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <h3 id={`post-${post.slug}`} className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-tags" aria-label="文章标签">
                    {post.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home