import { useState, useEffect, useCallback, useRef } from 'react';
import { FadeIn } from './FadeIn';
import '../gallery.css';
import { portfolioProjects } from '../data/content';

type Project = (typeof portfolioProjects)[number];

export function Gallery() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Swipe tracking
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const openModal = (project: Project) => {
    setActiveProject(project);
    setActiveDayIndex(0);
    setCurrentImageIndex(0);
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

  const currentDay = activeProject?.days[activeDayIndex];
  const currentImages = currentDay?.images ?? [];

  const prevImage = useCallback(() => {
    if (currentImages.length <= 1) return;
    setCurrentImageIndex((i) => (i - 1 + currentImages.length) % currentImages.length);
  }, [currentImages.length]);

  const nextImage = useCallback(() => {
    if (currentImages.length <= 1) return;
    setCurrentImageIndex((i) => (i + 1) % currentImages.length);
  }, [currentImages.length]);

  const goToDay = useCallback((dayIndex: number) => {
    setActiveDayIndex(dayIndex);
    setCurrentImageIndex(0);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!activeProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeProject, closeModal, prevImage, nextImage]);

  // Touch / swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? nextImage() : prevImage();
    }
  };

  return (
    <>
      <section id="gallery" className="rm-section rm-section--cream-dark">
        <div className="rm-container">
          <FadeIn className="rm-gallery__intro">
            <p className="rm-eyebrow rm-eyebrow--light">Portfolio</p>
            <h2 className="rm-heading rm-heading-lg" style={{ marginTop: '1rem' }}>
              Moments composed with care
            </h2>
            <p style={{ marginTop: '1rem', color: 'var(--charcoal)', opacity: 0.9 }}>
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
            {/* Main Content */}
            <div className="rm-gallery-modal__main">
              {/* Image Display */}
              <div className="rm-gallery-modal__image-display">
                <img
                  src={currentImages[currentImageIndex]?.src}
                  alt={currentImages[currentImageIndex]?.alt}
                  className="rm-gallery-modal__main-image"
                />
              </div>

              {/* Top Bar - Progress/Counter */}
              <div className="rm-gallery-modal__top-bar">
                <button
                  className="rm-gallery-modal__close"
                  onClick={closeModal}
                  aria-label="Close gallery"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <div className="rm-gallery-modal__meta">
                  <span className="rm-gallery-modal__progress">
                    Day {activeDayIndex + 1} of {activeProject.days.length}
                  </span>
                  <span className="rm-gallery-modal__counter">
                    {currentImageIndex + 1} / {currentImages.length}
                  </span>
                </div>
              </div>

              {/* Bottom Vignette - Text and Day Buttons */}
              <div className="rm-gallery-modal__bottom-vignette">
                <div className="rm-gallery-modal__bottom-content">
                  <h2 className="rm-gallery-modal__title">{activeProject.title}</h2>
                  {activeProject.location && (
                    <p className="rm-gallery-modal__location">{activeProject.location}</p>
                  )}
                  {currentDay && (
                    <p className="rm-gallery-modal__day-name">{currentDay.title}</p>
                  )}

                  {/* Day Navigation Bar */}
                  {activeProject.days.length > 1 && (
                    <div className="rm-gallery-modal__day-nav">
                      {activeProject.days.map((day, idx) => (
                        <button
                          key={idx}
                          className={`rm-gallery-modal__day-btn${idx === activeDayIndex ? ' rm-gallery-modal__day-btn--active' : ''}`}
                          onClick={() => goToDay(idx)}
                          aria-label={`View ${day.label}`}
                          aria-current={idx === activeDayIndex ? 'true' : undefined}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Arrows */}
              {currentImages.length > 1 && (
                <>
                  <button className="rm-gallery-modal__nav rm-gallery-modal__nav--prev" onClick={prevImage} aria-label="Previous image">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="rm-gallery-modal__nav rm-gallery-modal__nav--next" onClick={nextImage} aria-label="Next image">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Touch handlers */}
            <div
              className="rm-gallery-modal__touch-area"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            />
          </div>
        </div>
      )}
    </>
  );
}
