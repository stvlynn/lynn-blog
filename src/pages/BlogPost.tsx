import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Heart, Share2 } from 'lucide-react'
import { getPostBySlug } from '../data/posts'
import MarkdownRenderer from '../components/MarkdownRenderer'
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (err) {
        console.log('分享取消')
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('链接已复制到剪贴板！')
    }
  }

  return (
    <div className="blog-post-page">
      <div className="container">
        <div className="post-container">
          <article className="post-article">
            {/* Cover Image */}
            {post.coverImage && (
              <div className="post-cover">
                <img src={post.coverImage} alt={post.title} />
              </div>
            )}

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
              <MarkdownRenderer content={post.content} />
            </div>

            {/* Post Footer */}
            <footer className="post-footer">
              <div className="post-footer-content">
                <div className="post-footer-note">
                  <Heart size={16} />
                  <span>感谢阅读！如果你喜欢这篇文章，欢迎分享给朋友。</span>
                </div>
                <button className="share-btn" onClick={handleShare}>
                  <Share2 size={16} />
                  分享文章
                </button>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </div>
  )
}

export default BlogPost