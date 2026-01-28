.blog {
  padding: 40px 0;
}

.blog-header {
  text-align: center;
  margin-bottom: 40px;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 12px;
}

.blog-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
}

/* Tags Section */
.tags-section {
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 32px;
  box-shadow: var(--shadow);
}

.tags-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.tags-header svg {
  color: var(--primary);
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag-item {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tag-item:hover {
  background: var(--primary);
  color: white;
}

/* Posts List */
.posts-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.blog-post-card {
  display: block;
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.blog-post-card:hover {
  transform: translateX(8px);
  box-shadow: var(--shadow-lg);
}

.post-card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post-card-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.post-card-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}

.post-card-excerpt {
  color: var(--text-secondary);
  line-height: 1.6;
}

.post-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.post-card-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.post-tag {
  background: var(--bg-secondary);
  color: var(--primary);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.read-more {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--primary);
  font-weight: 600;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .blog-title {
    font-size: 1.75rem;
  }
  
  .blog-post-card {
    padding: 20px;
  }
  
  .post-card-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}