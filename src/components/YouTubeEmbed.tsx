import { useState, type CSSProperties, type ReactNode } from 'react';

type Props = {
  videoId: string;
  /** Titel til iframen og til knappens skærmlæser-tekst. */
  title: string;
  /** Plakatens ramme; afspilleren overtager den samme ramme ved klik. */
  style: CSSProperties;
  /** Plakatens indhold: billede, afspilknap og tekst. */
  children: ReactNode;
};

/** Intet hentes fra YouTube, før der trykkes på afspil (youtube-nocookie). */
export function YouTubeEmbed({ videoId, title, style, children }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div style={{ ...style, cursor: 'auto' }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="video-poster"
      aria-label={`Play video: ${title}`}
      style={style}
      onClick={() => setPlaying(true)}
    >
      {children}
    </button>
  );
}
