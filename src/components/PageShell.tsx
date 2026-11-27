import type { CSSProperties, ReactNode } from 'react';

const paper: CSSProperties = {
  backgroundColor: '#F2EADC',
  backgroundImage:
    'linear-gradient(rgba(13, 17, 22, 0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 17, 22, 0.032) 1px, transparent 1px)',
  backgroundSize: '24px 24px',
  color: '#0D1116',
  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
  fontSize: '17px',
  lineHeight: '1.55',
};

type Props = {
  /** Sidens titel i browserfanen. */
  title: string;
  description?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/** Det fine net bag alle sider, plus sidens titel og beskrivelse (React 19 løfter dem op i <head>). */
export function PageShell({ title, description, className, style, children }: Props) {
  return (
    <div className={className} style={{ ...paper, ...style }}>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {children}
    </div>
  );
}
