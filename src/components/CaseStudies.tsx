import { useState, useEffect, useCallback, useRef } from 'react';
import { featuredCaseStudies } from '../data/content';
import '../caseStudies.css';

export function CaseStudies() {
  const [activeCS, setActiveCS] = useState<typeof featuredCaseStudies[number] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Swipe tracking inside modal
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const openModal = (cs: typeof featuredCaseStudies[number]) => {
    setActiveCS(cs);
    setCurrentIndex(0);
    requestAnimationFrame(() => setIsVisible(true));
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveCS(null);
      document.body.style.overflow = '';
    }, 350);
  }, []);

  const prev = useCallback(() => {
    if (!activeCS) return;
    setCurrentIndex((i) => (i - 1 + activeCS.images.length) % activeCS.images.length);
  }, [activeCS]);

  const next = useCallback(() => {
    if (!activeCS) return;
    setCurrentIndex((i) => (i + 1) % activeCS.images.length);
  }, [activeCS]);

  // Keyboard nav
  useEffect(() => {
    if (!activeCS) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeCS, closeModal, prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? next() : prev();
    }
  };

  return (
    <section id="case-studies" className="rm-section">
      <div className="rm-container">
        <h2 className="rm-heading rm-heading-lg" style={{ marginBottom: '2.5rem' }}>Case Studies</h2>
        <div className="case-studies-grid">
          {featuredCaseStudies.map((cs, i) => (
            <CaseStudyItem key={i} caseStudy={cs} onOpen={() => openModal(cs)} />
          ))}
        </div>
      </div>

      {/* Lightbox Modal (styled to match premium Gallery modal) */}
      {activeCS && (
        <div
          className={`rm-gallery-modal-overlay${isVisible ? ' rm-gallery-modal-overlay--visible' : ''}`}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCS.title} Case Study Gallery`}
        >
          <div className={`rm-gallery-modal${isVisible ? ' rm-gallery-modal--visible' : ''}`}>
            {/* Header */}
            <div className="rm-gallery-modal__header">
              <div>
                <p className="rm-eyebrow rm-eyebrow--light">{activeCS.client}</p>
                <h2 className="rm-gallery-modal__title">{activeCS.title}</h2>
              </div>
              <button className="rm-gallery-modal__close" onClick={closeModal} aria-label="Close gallery">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Carousel */}
            <div className="rm-gallery-modal__carousel" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <div className="rm-gallery-modal__image-wrap">
                {activeCS.images.map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`${activeCS.title} image ${idx + 1}`}
                    className={`rm-gallery-modal__image${idx === currentIndex ? ' rm-gallery-modal__image--active' : ''}`}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>

              {activeCS.images.length > 1 && (
                <>
                  <button className="rm-gallery-modal__nav rm-gallery-modal__nav--prev" onClick={prev} aria-label="Previous image">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                      <path d="M14 4L7 11l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="rm-gallery-modal__nav rm-gallery-modal__nav--next" onClick={next} aria-label="Next image">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                      <path d="M8 4l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Dots */}
            {activeCS.images.length > 1 && (
              <div className="rm-gallery-modal__dots">
                {activeCS.images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`rm-gallery-modal__dot${idx === currentIndex ? ' rm-gallery-modal__dot--active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Image ${idx + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Counter */}
            <p className="rm-gallery-modal__counter">
              {currentIndex + 1} / {activeCS.images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

interface CaseStudyItemProps {
  caseStudy: typeof featuredCaseStudies[number];
  onOpen: () => void;
}

function CaseStudyItem({ caseStudy, onOpen }: CaseStudyItemProps) {
  const { title, location, client, description, images } = caseStudy;
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? next() : prev();
    }
  };

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, images.length]);

  return (
    <div className="case-study-item" onClick={onOpen} style={{ cursor: 'pointer' }}>
      <h3 className="rm-heading rm-heading-sm">{title}</h3>
      <p className="case-study-meta"><strong>Location:</strong> {location}</p>
      <p className="case-study-meta"><strong>Client:</strong> {client}</p>
      <p className="case-study-desc">{description}</p>
      <div 
        className="case-study-carousel" 
        onTouchStart={onTouchStart} 
        onTouchEnd={onTouchEnd}
        onClick={(e) => {
          // Prevent opening modal when clicking slider arrows or indicators
          const target = e.target as HTMLElement;
          if (target.closest('.carousel-nav') || target.closest('.dot')) {
            e.stopPropagation();
          }
        }}
      >
        {images.length > 1 && (
          <button className="carousel-nav prev" onClick={prev} aria-label="Previous image">◀</button>
        )}
        <img 
          src={images[current]} 
          alt={`${title} image ${current + 1}`} 
          loading={current === 0 ? 'eager' : 'lazy'} 
          className="carousel-image" 
        />
        {images.length > 1 && (
          <button className="carousel-nav next" onClick={next} aria-label="Next image">▶</button>
        )}
        {images.length > 1 && (
          <div className="carousel-dots">
            {images.map((_, idx) => (
              <button 
                key={idx} 
                className={`dot ${idx === current ? 'active' : ''}`} 
                onClick={() => setCurrent(idx)} 
                aria-label={`Slide ${idx + 1}`} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
