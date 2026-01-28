import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import { blogPosts, getAllTags } from '../data/posts'
import './Blog.css'

function Blog() {
  const tags = getAllTags()

  return (
    <div className="blog">
      <div className="container">
        {/* Header */}
        <div className="blog-header">
          <h1 className="blog-title">📝 博客文章</h1>
          <p className="blog-subtitle">
            记录关于 AI、技术和日常生活的见闻
          </p>
        </div>

        {/* Tags */}
        <div className="tags-section">
          <div className="tags-header">
            <Tag size={16} />
            <span>标签</span>
          </div>
          <div className="tags-list">
            {tags.map(tag => (
              <span key={tag} className="tag-item">{tag}</span>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="posts-list">
          {blogPosts.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-post-card">
              <div className="post-card-content">
                <div className="post-card-meta">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h2 className="post-card-title">{post.title}</h2>
                <p className="post-card-excerpt">{post.excerpt}</p>
                <div className="post-card-footer">
                  <div className="post-card-tags">
                    {post.tags.map(tag => (
                      <span key={tag} className="post-tag">{tag}</span>
                    ))}
                  </div>
                  <span className="read-more">
                    阅读更多 <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog