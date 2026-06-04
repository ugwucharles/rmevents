import { useState, useEffect, useCallback, useRef } from 'react';
import { featuredCaseStudies } from '../data/content';
import '../caseStudies.css';

export function CaseStudies() {
  return (
    <section id="case-studies" className="rm-section">
      <div className="rm-container">
        <h2 className="rm-heading rm-heading-lg">Case Studies</h2>
        <div className="case-studies-grid">
          {featuredCaseStudies.map((cs, i) => (
            <CaseStudyItem key={i} caseStudy={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyItem({ caseStudy }: { caseStudy: typeof featuredCaseStudies[number] }) {
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
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="case-study-item">
      <h3 className="rm-heading rm-heading-sm">{title}</h3>
      <p className="case-study-meta"><strong>Location:</strong> {location}</p>
      <p className="case-study-meta"><strong>Client:</strong> {client}</p>
      <p className="case-study-desc">{description}</p>
      <div className="case-study-carousel" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <button className="carousel-nav prev" onClick={prev} aria-label="Previous image">◀</button>
        <img src={images[current]} alt={`${title} image ${current + 1}`} loading={current === 0 ? 'eager' : 'lazy'} className="carousel-image" />
        <button className="carousel-nav next" onClick={next} aria-label="Next image">▶</button>
        <div className="carousel-dots">
          {images.map((_, idx) => (
            <button key={idx} className={`dot ${idx === current ? 'active' : ''}`} onClick={() => setCurrent(idx)} aria-label={`Slide ${idx + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
