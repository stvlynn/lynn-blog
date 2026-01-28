import './Loading.css'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
}

function Loading({ size = 'md', text }: LoadingProps) {
  const sizeMap = {
    sm: { width: 24, border: 2 },
    md: { width: 40, border: 3 },
    lg: { width: 60, border: 4 },
  }

  const { width, border } = sizeMap[size]

  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div 
        className="loading-spinner"
        style={{
          width: `${width}px`,
          height: `${width}px`,
          borderWidth: `${border}px`,
        }}
      />
      {text && <p className="loading-text">{text}</p>}
      <span className="sr-only">加载中...</span>
    </div>
  )
}

export default Loading