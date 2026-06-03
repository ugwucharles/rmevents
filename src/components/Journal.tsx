import { useState } from 'react'
import { FadeIn } from './FadeIn'

interface BlogPost {
  title: string;
  summary: string;
  date: string;
  readTime: string;
  link?: string;
  body?: string;
}

// Helper to convert simple markdown to beautiful HTML safely
function renderMarkdownToHtml(markdown: string): string {
  if (!markdown) return '';
  
  // 1. Escape HTML first to prevent XSS
  let html = markdown
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
    
  // 2. Headings
  html = html.replace(/^### (.*$)/gim, '<h4>$1</h4>');
  html = html.replace(/^## (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^# (.*$)/gim, '<h2>$1</h2>');
  
  // 3. Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');
  
  // 4. Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: var(--gold); text-decoration: underline; font-weight: 500;">$1</a>');
  
  // 5. Unordered list items
  html = html.replace(/^\s*[-*]\s+(.*)$/gim, '<li>$1</li>');
  
  // Group adjacent <li> tags inside <ul> tags
  html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');
  // Merge multiple adjacent <ul> tags
  html = html.replace(/<\/ul>\s*<ul>/g, '');

  // 6. Split blocks by double newlines to wrap in paragraphs
  const blocks = html.split(/\r?\n\r?\n/);
  const formattedBlocks = blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<h2>') || trimmed.startsWith('<h3>') || trimmed.startsWith('<h4>') || trimmed.startsWith('<ul>') || trimmed.startsWith('<li>')) {
      return trimmed;
    }
    return `<p style="margin-bottom: 1.5rem; line-height: 1.8; color: rgba(20,20,20,0.8); font-size: 1.05rem;">${trimmed.replace(/\r?\n/g, '<br />')}</p>`;
  });
  
  return formattedBlocks.filter(b => b).join('\n');
}

// Dynamically load blog JSONs using Vite
const blogModules = import.meta.glob<{ default: BlogPost }>('/src/content/blog/*.json', { eager: true });

// Sort alphabetically in reverse order by key (filename) to get newest first (due to YYYY-MM-DD prefix)
const sortedPaths = Object.keys(blogModules).sort().reverse();
const blogPosts: BlogPost[] = sortedPaths.map((path) => {
  const mod = blogModules[path];
  return mod.default || mod;
});

export function Journal() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Disable body scroll when modal is open
  if (typeof document !== 'undefined') {
    if (activePost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  return (
    <section id="journal" className="rm-section rm-section--cream-dark" style={{ borderTop: '1px solid rgba(20,20,20,0.05)' }}>
      <div className="rm-container">
        <FadeIn className="rm-gallery__intro" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <p className="rm-eyebrow">Journal & Insights</p>
          <h2 className="rm-heading rm-heading-lg" style={{ marginTop: '1rem' }}>
            Latest from the RM Blog
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgba(20,20,20,0.75)', maxWidth: '36rem', marginInline: 'auto' }}>
            Thoughts, trends, and expert advice on corporate events and destination planning.
          </p>
        </FadeIn>

        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {blogPosts.map((post, i) => (
            <FadeIn key={post.title} delay={0.05 * i}>
              <article className="rm-blog-card" style={{
                background: 'var(--cream)',
                borderRadius: '12px',
                padding: '2.5rem 2rem',
                boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                border: '1px solid rgba(20,20,20,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="rm-heading" style={{ fontSize: '1.5rem', color: 'var(--charcoal)', marginBottom: '1rem', lineHeight: 1.25 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'rgba(20,20,20,0.7)', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {post.summary}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => setActivePost(post)}
                    className="rm-btn rm-blog-btn"
                    style={{
                      border: '1px solid var(--gold)',
                      color: 'var(--gold)',
                      width: '100%',
                      fontSize: '0.65rem',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '999px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.35s ease',
                      background: 'transparent',
                      cursor: 'pointer'
                    }}
                  >
                    Read Full Article
                  </button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Luxury Blog Reader Modal */}
      {activePost && (
        <div className="rm-modal-overlay" onClick={() => setActivePost(null)}>
          <div className="rm-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="rm-modal-close" onClick={() => setActivePost(null)} aria-label="Close article">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="rm-modal-content">
              <header className="rm-modal-header">
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  <span>{activePost.date}</span>
                  <span>•</span>
                  <span>{activePost.readTime}</span>
                </div>
                <h2 className="rm-heading" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--charcoal)', lineHeight: 1.2 }}>
                  {activePost.title}
                </h2>
                <div style={{ width: '3.5rem', height: '2px', background: 'var(--gold)', margin: '1.75rem 0' }}></div>
              </header>
              <article 
                className="rm-modal-body"
                dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(
                  (activePost.body && activePost.body.trim()) ? activePost.body : activePost.summary
                ) }} 
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
