export function Team() {
  return (
    <>
      <section id="team" style={{ background: 'rgba(169, 149, 109, 0.12)', padding: '96px clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '16px',
              borderTop: '2px solid #0D1116',
              paddingTop: '12px',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '13px',
              letterSpacing: '0.12em',
              color: '#5A6270',
            }}
          >
            <span>08 · TEAM</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2
              style={{
                margin: '0',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: 'clamp(44px, 6vw, 80px)',
                lineHeight: '0.95',
              }}
            >
              The people behind MoldAid.
            </h2>
            <p style={{ margin: '0', fontSize: '19px', color: '#2A313C', maxWidth: '620px' }}>
              A dedictated and very experienced team with one goal: putting mold design in the hands of the engineers
              who print and mold in-house.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '24px',
            }}
          >
            <div
              style={{
                border: '1px solid #0D1116',
                borderRadius: '8px',
                background: '#F4F1EA',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <svg
                viewBox="0 0 300 280"
                width="100%"
                height="280"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                aria-label="Portrait of Lasse G Staal to come"
                style={{ display: 'block', borderRadius: '4px' }}
              >
                <defs>
                  <linearGradient id="wall-lasse" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#F3F2EF" />
                    <stop offset="1" stopColor="#E4E2DD" />
                  </linearGradient>
                  <linearGradient id="shirt-lasse" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#B9D0EA" />
                    <stop offset="1" stopColor="#9DBADB" />
                  </linearGradient>
                </defs>
                <rect width="300" height="280" fill="url(#wall-lasse)" />
                <path d="M132 150h36v26h-36z" fill="#C7CBD1" />
                <path d="M58 280c2-58 32-96 92-102 60 6 90 44 92 102z" fill="url(#shirt-lasse)" />
                <path d="M128 176l22 22 22-22" fill="none" stroke="#8FAED2" strokeWidth="3" strokeLinejoin="round" />
                <ellipse cx="150" cy="112" rx="40" ry="48" fill="#CDD1D7" />
                <path d="M110 104c0-34 18-52 40-52s40 18 40 52c-8-14-22-22-40-22s-32 8-40 22z" fill="#B7BCC4" />
                <text
                  x="150"
                  y="266"
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="11"
                  letterSpacing="1.2"
                  fill="#3A4F6B"
                >
                  PHOTO TO COME
                </text>
              </svg>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '12px',
                  padding: '0 4px 4px',
                }}
              >
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: '600', fontSize: '26px' }}>
                  Lasse G Staal
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    color: '#355F84',
                    letterSpacing: '0.08em',
                  }}
                >
                  CEO
                </span>
              </div>
              <p style={{ margin: '0', padding: '0 4px', fontSize: '15px', lineHeight: '1.5', color: '#3A424F' }}>
                [Bio: 2–3 lines on background and experience, e.g. years in the field, earlier roles, and what they lead
                at MoldAid.]
              </p>
              <a
                href="#linkedin-lasse-g-staal"
                aria-label="Lasse G Staal on LinkedIn"
                style={{
                  marginTop: 'auto',
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 4px 4px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#355F84',
                  textDecoration: 'none',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '3px',
                    background: '#355F84',
                    color: '#FFFFFF',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                    fontWeight: '700',
                    fontSize: '11px',
                    letterSpacing: '0',
                    textTransform: 'none',
                  }}
                >
                  in
                </span>
                LinkedIn <span aria-hidden="true">→</span>
              </a>
            </div>
            <div
              style={{
                border: '1px solid #0D1116',
                borderRadius: '8px',
                background: '#F4F1EA',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <svg
                viewBox="0 0 300 280"
                width="100%"
                height="280"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                aria-label="Portrait of Mick Roed Mersebak to come"
                style={{ display: 'block', borderRadius: '4px' }}
              >
                <defs>
                  <linearGradient id="wall-mick" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#F3F2EF" />
                    <stop offset="1" stopColor="#E4E2DD" />
                  </linearGradient>
                  <linearGradient id="shirt-mick" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#B9D0EA" />
                    <stop offset="1" stopColor="#9DBADB" />
                  </linearGradient>
                </defs>
                <rect width="300" height="280" fill="url(#wall-mick)" />
                <path d="M132 150h36v26h-36z" fill="#C7CBD1" />
                <path d="M58 280c2-58 32-96 92-102 60 6 90 44 92 102z" fill="url(#shirt-mick)" />
                <path d="M128 176l22 22 22-22" fill="none" stroke="#8FAED2" strokeWidth="3" strokeLinejoin="round" />
                <ellipse cx="150" cy="112" rx="40" ry="48" fill="#CDD1D7" />
                <path d="M110 104c0-34 18-52 40-52s40 18 40 52c-8-14-22-22-40-22s-32 8-40 22z" fill="#B7BCC4" />
                <text
                  x="150"
                  y="266"
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="11"
                  letterSpacing="1.2"
                  fill="#3A4F6B"
                >
                  PHOTO TO COME
                </text>
              </svg>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '12px',
                  padding: '0 4px 4px',
                }}
              >
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: '600', fontSize: '26px' }}>
                  Mick Roed Mersebak
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    color: '#355F84',
                    letterSpacing: '0.08em',
                  }}
                >
                  CPO
                </span>
              </div>
              <p style={{ margin: '0', padding: '0 4px', fontSize: '15px', lineHeight: '1.5', color: '#3A424F' }}>
                [Bio: 2–3 lines on background and experience, e.g. years in the field, earlier roles, and what they lead
                at MoldAid.]
              </p>
              <a
                href="#linkedin-mick-roed-mersebak"
                aria-label="Mick Roed Mersebak on LinkedIn"
                style={{
                  marginTop: 'auto',
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 4px 4px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#355F84',
                  textDecoration: 'none',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '3px',
                    background: '#355F84',
                    color: '#FFFFFF',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                    fontWeight: '700',
                    fontSize: '11px',
                    letterSpacing: '0',
                    textTransform: 'none',
                  }}
                >
                  in
                </span>
                LinkedIn <span aria-hidden="true">→</span>
              </a>
            </div>
            <div
              style={{
                border: '1px solid #0D1116',
                borderRadius: '8px',
                background: '#F4F1EA',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <img
                src="/assets/img/team/hans-peter-vith.webp"
                alt="Hans Peter Vith, CTO of MoldAid"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '280px',
                  objectFit: 'cover',
                  objectPosition: '50% 22%',
                  borderRadius: '4px',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '12px',
                  padding: '0 4px 4px',
                }}
              >
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: '600', fontSize: '26px' }}>
                  Hans Peter Vith
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    color: '#355F84',
                    letterSpacing: '0.08em',
                  }}
                >
                  CTO
                </span>
              </div>
              <p style={{ margin: '0', padding: '0 4px', fontSize: '15px', lineHeight: '1.5', color: '#3A424F' }}>
                [Bio: 2–3 lines on background and experience, e.g. years in the field, earlier roles, and what they lead
                at MoldAid.]
              </p>
              <a
                href="#linkedin-hans-peter-vith"
                aria-label="Hans Peter Vith on LinkedIn"
                style={{
                  marginTop: 'auto',
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 4px 4px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#355F84',
                  textDecoration: 'none',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '3px',
                    background: '#355F84',
                    color: '#FFFFFF',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                    fontWeight: '700',
                    fontSize: '11px',
                    letterSpacing: '0',
                    textTransform: 'none',
                  }}
                >
                  in
                </span>
                LinkedIn <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '13px',
              color: '#5A6270',
            }}
          >
            <span>Developed with:</span>
            <span style={{ border: '1px dashed #5A6270', padding: '10px 22px' }}>[Partner]</span>
            <span style={{ border: '1px dashed #5A6270', padding: '10px 22px' }}>[Partner]</span>
            <span style={{ border: '1px dashed #5A6270', padding: '10px 22px' }}>[Partner]</span>
          </div>
        </div>
      </section>
    </>
  );
}
