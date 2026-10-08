import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { technologyNames } from "../data";

const technologyName = (technology) => technologyNames[technology] || technology;

export default function ProjectShowcaseModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const media = project.showcaseMedia || [];
  const activeMedia = media[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    dialog?.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog?.open) dialog.close();
      opener?.focus?.();
    };
  }, []);

  const changeSlide = (direction) => {
    setActiveIndex((current) => (current + direction + media.length) % media.length);
  };

  return (
    <dialog
      ref={dialogRef}
      className="project-showcase-dialog"
      aria-labelledby="project-showcase-title"
      aria-describedby="project-showcase-description"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="project-showcase-shell">
        <header className="project-showcase-header">
          <div>
            <p className="project-showcase-status">{project.status}</p>
            <h2 id="project-showcase-title">{project.name}</h2>
          </div>
          <button className="project-showcase-close" type="button" onClick={onClose}>
            <span>Close</span>
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="project-showcase-layout">
          <div className="project-showcase-summary" id="project-showcase-description">
            {project.summaries.map(({ summary }) => <p key={summary}>{summary}</p>)}
            <div className="project-showcase-stack">
              <h3>Built with</h3>
              <ul>
                {project.stack.map((technology) => (
                  <li key={technology}>{technologyName(technology)}</li>
                ))}
              </ul>
            </div>
          </div>

          {activeMedia && (
            <section className="project-showcase-carousel" aria-label={`${project.name} media gallery`}>
              <figure>
                <div className={`project-showcase-stage project-showcase-stage-${activeMedia.type}`}>
                  {activeMedia.type === "video" ? (
                    <video
                      key={activeMedia.src}
                      autoPlay
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      poster={activeMedia.poster}
                      aria-label={activeMedia.alt}
                    >
                      <source src={activeMedia.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={activeMedia.src}
                      width={activeMedia.width}
                      height={activeMedia.height}
                      alt={activeMedia.alt}
                      sizes="(max-width: 800px) 94vw, 68vw"
                      priority={activeIndex === 0}
                    />
                  )}
                </div>
                <figcaption>{activeMedia.caption}</figcaption>
              </figure>

              <div className="project-showcase-controls">
                <div className="project-showcase-buttons">
                  <button type="button" onClick={() => changeSlide(-1)} aria-label="Previous image">←</button>
                  <button type="button" onClick={() => changeSlide(1)} aria-label="Next image">→</button>
                </div>
                <p aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}</p>
              </div>

              <div className="project-showcase-picker" aria-label="Choose gallery item">
                {media.map((item, index) => (
                  <button
                    type="button"
                    key={item.src}
                    className={index === activeIndex ? "is-active" : ""}
                    aria-label={`View item ${index + 1}: ${item.caption}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.type === "video" ? (
                      <span className="project-showcase-video-label">5 sec<br />video</span>
                    ) : (
                      <Image src={item.src} width={120} height={84} alt="" sizes="120px" />
                    )}
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </dialog>
  );
}
