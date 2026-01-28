import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Heart } from 'lucide-react'
import { getPostBySlug } from '../data/posts'
import './BlogPost.css'

function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <div className="not-found">
            <h2>文章未找到</h2>
            <p>抱歉，您访问的文章不存在。</p>
            <Link to="/blog" className="btn btn-primary">
              返回博客列表
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Convert markdown-style content to HTML-like paragraphs
  const renderContent = (content: string) => {
    const paragraphs = content.split('\n\n')
    return paragraphs.map((para, index) => {
      // Handle headers
      if (para.startsWith('**') && para.endsWith('**') && para.length < 100) {
        return <h3 key={index}>{para.replace(/\*\*/g, '')}</h3>
      }
      // Handle list items
      if (para.includes('\n- ')) {
        const items = para.split('\n').filter(line => line.trim().startsWith('-'))
        return (
          <ul key={index}>
            {items.map((item, i) => (
              <li key={i}>{item.replace('- ', '').replace(/\*\*/g, '')}</li>
            ))}
          </ul>
        )
      }
      // Regular paragraph with bold text support
      return (
        <p key={index}>
          {para.split('**').map((part, i) => 
            i % 2 === 1 ? <strong key={i}>{part}</strong> : part
          )}
        </p>
      )
    })
  }

  return (
    <div className="blog-post-page">
      <div className="container">
        <div className="post-container">
          <article className="post-article">
            {/* Post Header */}
            <header className="post-header">
              <Link to="/blog" className="back-link">
                <ArrowLeft size={18} />
                返回博客列表
              </Link>
              <h1 className="post-header-title">{post.title}</h1>
              <div className="post-header-meta">
                <span className="post-date">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <div className="post-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="post-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </header>

            {/* Post Content */}
            <div className="post-body">
              {renderContent(post.content)}
            </div>

            {/* Post Footer */}
            <footer className="post-footer">
              <div className="post-footer-note">
                <Heart size={16} />
                <span>感谢阅读！如果你喜欢这篇文章，欢迎分享给朋友。</span>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </div>
  )
}

export default BlogPost