import { useState, useEffect, useCallback, useRef } from 'react';
import { FadeIn } from './FadeIn';
import '../gallery.css';
import { portfolioProjects } from '../data/content';

type Project = (typeof portfolioProjects)[number];

export function Gallery() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Swipe tracking
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const openModal = (project: Project) => {
    setActiveProject(project);
    setCurrentIndex(0);
    // slight delay to allow mount before triggering animation
    requestAnimationFrame(() => setIsVisible(true));
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveProject(null);
      document.body.style.overflow = '';
    }, 350);
  }, []);

  const prev = useCallback(() => {
    if (!activeProject) return;
    setCurrentIndex((i) => (i - 1 + activeProject.images.length) % activeProject.images.length);
  }, [activeProject]);

  const next = useCallback(() => {
    if (!activeProject) return;
    setCurrentIndex((i) => (i + 1) % activeProject.images.length);
  }, [activeProject]);

  // Keyboard navigation
  useEffect(() => {
    if (!activeProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeProject, closeModal, prev, next]);

  // Touch / swipe handlers
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

  const images = activeProject?.images ?? [];

  return (
    <>
      <section id="gallery" className="rm-section rm-section--cream-dark">
        <div className="rm-container">
          <FadeIn className="rm-gallery__intro">
            <p className="rm-eyebrow">Portfolio</p>
            <h2 className="rm-heading rm-heading-lg" style={{ marginTop: '1rem' }}>
              Moments composed with care
            </h2>
            <p style={{ marginTop: '1rem', color: 'rgba(20,20,20,0.75)' }}>
              Explore our curated collection of signature events and celebrations.
            </p>
          </FadeIn>

          {/* Project Cards Grid */}
          <div className="rm-portfolio__grid">
            {portfolioProjects.map((project, i) => (
              <FadeIn key={project.title} delay={0.08 * i} className="rm-portfolio__card">
                <div className="rm-portfolio__cover">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                    className="rm-portfolio__cover-img"
                  />
                  <div className="rm-portfolio__cover-overlay" />
                </div>
                <div className="rm-portfolio__card-body">
                  <p className="rm-portfolio__card-subtitle">{project.subtitle}</p>
                  <h3 className="rm-portfolio__card-title">{project.title}</h3>
                  <button
                    className="rm-portfolio__view-btn"
                    onClick={() => openModal(project)}
                    aria-label={`View gallery for ${project.title}`}
                  >
                    View Gallery
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {activeProject && (
        <div
          className={`rm-gallery-modal-overlay${isVisible ? ' rm-gallery-modal-overlay--visible' : ''}`}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} Gallery`}
        >
          <div className={`rm-gallery-modal${isVisible ? ' rm-gallery-modal--visible' : ''}`}>
            {/* Modal Header */}
            <div className="rm-gallery-modal__header">
              <div>
                <p className="rm-eyebrow rm-eyebrow--light">Portfolio</p>
                <h2 className="rm-gallery-modal__title">{activeProject.title}</h2>
              </div>
              <button
                className="rm-gallery-modal__close"
                onClick={closeModal}
                aria-label="Close gallery"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Carousel */}
            <div
              className="rm-gallery-modal__carousel"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="rm-gallery-modal__image-wrap">
                {images.map((img, idx) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className={`rm-gallery-modal__image${idx === currentIndex ? ' rm-gallery-modal__image--active' : ''}`}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              {images.length > 1 && (
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

            {/* Dot Indicators */}
            {images.length > 1 && (
              <div className="rm-gallery-modal__dots" role="tablist" aria-label="Image navigation">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    role="tab"
                    aria-selected={idx === currentIndex}
                    aria-label={`Image ${idx + 1}`}
                    className={`rm-gallery-modal__dot${idx === currentIndex ? ' rm-gallery-modal__dot--active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
            )}

            {/* Counter */}
            <p className="rm-gallery-modal__counter">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
