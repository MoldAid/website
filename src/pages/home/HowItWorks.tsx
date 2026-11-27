import { YouTubeEmbed } from '../../components/YouTubeEmbed';
export function HowItWorks() {
  return (
    <>
      <section id="how" style={{ background: 'rgba(169, 149, 109, 0.12)', padding: '96px clamp(20px, 5vw, 80px)' }}>
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
            <span>02 · HOW IT WORKS</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '16px 48px',
            }}
          >
            <h2
              style={{
                margin: '0',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: 'clamp(44px, 6vw, 80px)',
                lineHeight: '0.95',
                maxWidth: '700px',
              }}
            >
              From STEP file to printable mold.
            </h2>
            <p style={{ margin: '0', fontSize: '19px', color: '#2A313C', maxWidth: '440px' }}>
              Watch co-founder and CEO Lasse G Staal walk you through the platform, then follow the four steps below.
            </p>
          </div>
          <figure
            style={{
              margin: '0',
              border: '1px solid #0D1116',
              borderRadius: '8px',
              padding: '10px',
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <YouTubeEmbed
              videoId="wGL-rpac7zM"
              title="Lasse G Staal shows Mold Studio"
              style={{
                position: 'relative',
                display: 'block',
                width: '100%',
                aspectRatio: '16 / 9',
                borderRadius: '4px',
                overflow: 'hidden',
                background: '#0B0F18',
                border: '0',
                padding: '0',
                margin: '0',
                cursor: 'pointer',
                font: 'inherit',
                color: 'inherit',
              }}
            >
              <img
                src="/assets/img/mold-frame.jpg"
                alt=""
                style={{
                  position: 'absolute',
                  inset: '0',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '50% 45%',
                }}
              />
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: '0',
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(11, 15, 24, 0.55) 0, rgba(11, 15, 24, 0) 220px), linear-gradient(180deg, rgba(11, 15, 24, 0.40) 0%, rgba(11, 15, 24, 0.55) 55%, rgba(11, 15, 24, 0.88) 100%)',
                }}
              ></span>
              <span
                style={{
                  position: 'absolute',
                  inset: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  className="vp-play"
                  aria-hidden="true"
                  style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    background: '#B97335',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 12px 32px rgba(11, 15, 24, 0.35)',
                  }}
                >
                  <svg width="34" height="34" viewBox="0 0 34 34">
                    <path d="M11 7.5v19l16-9.5z" fill="#0B0F18" />
                  </svg>
                </span>
              </span>
              <span
                className="vp-cap"
                style={{
                  position: 'absolute',
                  left: 'clamp(16px, 3vw, 32px)',
                  right: 'clamp(16px, 3vw, 32px)',
                  bottom: 'clamp(16px, 3vw, 28px)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  gap: '8px 24px',
                  textAlign: 'left',
                }}
              >
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '12px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#C5CCD8',
                    }}
                  >
                    Platform walkthrough
                  </span>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: '700',
                      fontSize: 'clamp(26px, 3vw, 40px)',
                      lineHeight: '1',
                      color: '#F4F1EA',
                    }}
                  >
                    Lasse G Staal shows Mold Studio
                  </span>
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    color: '#C5CCD8',
                  }}
                >
                  Co-founder & CEO
                </span>
              </span>
            </YouTubeEmbed>
            <figcaption
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '6px 16px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '12px',
                letterSpacing: '0.06em',
                color: '#5A6270',
              }}
            >
              <span>PLAYS FROM YOUTUBE</span>
              <span>Nothing loads from YouTube until you press play.</span>
            </figcaption>
          </figure>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #0D1116' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '24px 48px',
                padding: '32px 0',
                borderBottom: '1px solid #0D1116',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: '700',
                    fontSize: '88px',
                    lineHeight: '0.8',
                    color: '#94592A',
                    minWidth: '92px',
                  }}
                >
                  01
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: '600',
                      fontSize: '32px',
                      lineHeight: '1.05',
                    }}
                  >
                    Upload your part
                  </h3>
                  <p style={{ margin: '0', color: '#3A424F' }}>A STEP file straight from your own CAD tool.</p>
                </div>
              </div>
              <div
                className="shot"
                style={{
                  height: '260px',
                  border: '1px solid #0D1116',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: '#131722',
                  color: '#E8EBF0',
                  display: 'flex',
                  flexDirection: 'column',
                  fontSize: '13px',
                  lineHeight: '1.4',
                }}
              >
                <div
                  style={{
                    height: '30px',
                    flexShrink: '0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '0 12px',
                    background: '#0B0F18',
                    borderBottom: '1px solid #232B3A',
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3A4558' }}></span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3A4558' }}></span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3A4558' }}></span>
                  <span
                    style={{
                      marginLeft: '8px',
                      flex: '1',
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '12px',
                      color: '#A7B0BF',
                    }}
                  >
                    Mold Studio · Upload
                  </span>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '12px',
                      letterSpacing: '0.08em',
                      color: '#8E98A8',
                      border: '1px solid #3A4558',
                      borderRadius: '3px',
                      padding: '1px 6px',
                    }}
                  >
                    ILLUSTRATION
                  </span>
                </div>
                <div
                  style={{
                    flex: '1',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    minHeight: '0',
                  }}
                >
                  <div
                    style={{
                      flex: '1',
                      border: '1.5px dashed #3A4558',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      color: '#A7B0BF',
                    }}
                  >
                    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                      <path
                        d="M15 20V7M9.5 12.5L15 7l5.5 5.5M6 22v2.5h18V22"
                        fill="none"
                        stroke="#7FB0DC"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Drop your STEP file here</span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#8E98A8' }}>
                      .step · .stp
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      background: '#182130',
                      border: '1px solid #232B3A',
                      borderRadius: '6px',
                      padding: '10px 12px',
                    }}
                  >
                    <svg width="18" height="22" viewBox="0 0 18 22" aria-hidden="true" style={{ flexShrink: '0' }}>
                      <path
                        d="M2 1h9l5 5v15H2z"
                        fill="none"
                        stroke="#A7B0BF"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />
                      <path d="M11 1v5h5" fill="none" stroke="#A7B0BF" strokeWidth="1.4" strokeLinejoin="round" />
                    </svg>
                    <div style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '13px',
                          color: '#E8EBF0',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        housing_cover_v3.step
                      </span>
                      <span style={{ display: 'block', height: '4px', borderRadius: '2px', background: '#2A3345' }}>
                        <span
                          style={{
                            display: 'block',
                            width: '100%',
                            height: '4px',
                            borderRadius: '2px',
                            background: '#45B587',
                          }}
                        ></span>
                      </span>
                    </div>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '12px',
                        color: '#45B587',
                        flexShrink: '0',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style={{ flexShrink: '0' }}>
                        <circle cx="8" cy="8" r="7.25" fill="none" stroke="#45B587" strokeWidth="1.5" />
                        <path
                          d="M4.8 8.2l2.1 2.1 4.3-4.6"
                          fill="none"
                          stroke="#45B587"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Uploaded
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '24px 48px',
                padding: '32px 0',
                borderBottom: '1px solid #0D1116',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: '700',
                    fontSize: '88px',
                    lineHeight: '0.8',
                    color: '#94592A',
                    minWidth: '92px',
                  }}
                >
                  02
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: '600',
                      fontSize: '32px',
                      lineHeight: '1.05',
                    }}
                  >
                    Check and estimate
                  </h3>
                  <p style={{ margin: '0', color: '#3A424F' }}>
                    See whether the part can be molded and fits your printer, and get an instant estimate of what the
                    mold costs to print.
                  </p>
                </div>
              </div>
              <div
                className="shot"
                style={{
                  height: '260px',
                  border: '1px solid #0D1116',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: '#131722',
                  color: '#E8EBF0',
                  display: 'flex',
                  flexDirection: 'column',
                  fontSize: '13px',
                  lineHeight: '1.4',
                }}
              >
                <div
                  style={{
                    height: '30px',
                    flexShrink: '0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '0 12px',
                    background: '#0B0F18',
                    borderBottom: '1px solid #232B3A',
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3A4558' }}></span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3A4558' }}></span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3A4558' }}></span>
                  <span
                    style={{
                      marginLeft: '8px',
                      flex: '1',
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '12px',
                      color: '#A7B0BF',
                    }}
                  >
                    Mold Studio · Check
                  </span>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '12px',
                      letterSpacing: '0.08em',
                      color: '#8E98A8',
                      border: '1px solid #3A4558',
                      borderRadius: '3px',
                      padding: '1px 6px',
                    }}
                  >
                    ILLUSTRATION
                  </span>
                </div>
                <div style={{ flex: '1', padding: '12px 16px 16px', display: 'flex', gap: '16px', minHeight: '0' }}>
                  <div style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        padding: '9px 0',
                        borderBottom: '1px solid #232B3A',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style={{ flexShrink: '0' }}>
                        <circle cx="8" cy="8" r="7.25" fill="none" stroke="#45B587" strokeWidth="1.5" />
                        <path
                          d="M4.8 8.2l2.1 2.1 4.3-4.6"
                          fill="none"
                          stroke="#45B587"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', minWidth: '0' }}>
                        <span>Moldable as a two-part mold</span>
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#8E98A8' }}>
                          No undercuts found
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        padding: '9px 0',
                        borderBottom: '1px solid #232B3A',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style={{ flexShrink: '0' }}>
                        <circle cx="8" cy="8" r="7.25" fill="none" stroke="#45B587" strokeWidth="1.5" />
                        <path
                          d="M4.8 8.2l2.1 2.1 4.3-4.6"
                          fill="none"
                          stroke="#45B587"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', minWidth: '0' }}>
                        <span>Fits your printer</span>
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#8E98A8' }}>
                          Mold uses 72% of the build plate
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        padding: '9px 0',
                        borderBottom: '1px solid #232B3A',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style={{ flexShrink: '0' }}>
                        <circle cx="8" cy="8" r="7.25" fill="none" stroke="#D9B36A" strokeWidth="1.5" />
                        <path
                          d="M8 4.5v4.2M8 11v.3"
                          fill="none"
                          stroke="#D9B36A"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', minWidth: '0' }}>
                        <span>Thin wall near the clip</span>
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#8E98A8' }}>
                          0.8 mm · may fill slowly
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="shot-side"
                    style={{
                      width: '150px',
                      flexShrink: '0',
                      background: '#182130',
                      border: '1px solid #232B3A',
                      borderRadius: '6px',
                      padding: '14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '12px',
                        letterSpacing: '0.1em',
                        color: '#8E98A8',
                      }}
                    >
                      MOLD PRINT ESTIMATE
                    </span>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: '700',
                        fontSize: '44px',
                        lineHeight: '1',
                        color: '#F4F1EA',
                        marginTop: '6px',
                      }}
                    >
                      €38
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#A7B0BF' }}>
                      4.2 h print
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#A7B0BF' }}>
                      186 ml resin
                    </span>
                    <span
                      style={{
                        display: 'block',
                        marginTop: 'auto',
                        height: '4px',
                        borderRadius: '2px',
                        background: '#2A3345',
                      }}
                    >
                      <span
                        style={{
                          display: 'block',
                          width: '72%',
                          height: '4px',
                          borderRadius: '2px',
                          background: '#C98548',
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '24px 48px',
                padding: '32px 0',
                borderBottom: '1px solid #0D1116',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: '700',
                    fontSize: '88px',
                    lineHeight: '0.8',
                    color: '#94592A',
                    minWidth: '92px',
                  }}
                >
                  03
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: '600',
                      fontSize: '32px',
                      lineHeight: '1.05',
                    }}
                  >
                    Design the mold
                  </h3>
                  <p style={{ margin: '0', color: '#3A424F' }}>
                    Split line, gate, vents and frame, in minutes instead of hours.
                  </p>
                </div>
              </div>
              <div
                className="shot"
                style={{
                  height: '260px',
                  border: '1px solid #0D1116',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: '#131722',
                  color: '#E8EBF0',
                  display: 'flex',
                  flexDirection: 'column',
                  fontSize: '13px',
                  lineHeight: '1.4',
                }}
              >
                <div
                  style={{
                    height: '30px',
                    flexShrink: '0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '0 12px',
                    background: '#0B0F18',
                    borderBottom: '1px solid #232B3A',
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3A4558' }}></span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3A4558' }}></span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3A4558' }}></span>
                  <span
                    style={{
                      marginLeft: '8px',
                      flex: '1',
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '12px',
                      color: '#A7B0BF',
                    }}
                  >
                    Mold Studio · Mold design
                  </span>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '12px',
                      letterSpacing: '0.08em',
                      color: '#8E98A8',
                      border: '1px solid #3A4558',
                      borderRadius: '3px',
                      padding: '1px 6px',
                    }}
                  >
                    ILLUSTRATION
                  </span>
                </div>
                <div style={{ flex: '1', display: 'flex', minHeight: '0' }}>
                  <div style={{ flex: '1', minWidth: '0', background: '#182130', padding: '8px' }}>
                    <svg
                      viewBox="-10 0 330 200"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid meet"
                      role="img"
                      aria-label="Two-part mold with split line, gate and vents marked"
                    >
                      <rect x="64" y="36" width="176" height="146" rx="10" fill="#0B0F18" opacity="0.5" />
                      <path d="M60 40a10 10 0 0 1 10-10h160a10 10 0 0 1 10 10v58H60z" fill="#3F749F" />
                      <path d="M60 102h180v58a10 10 0 0 1-10 10H70a10 10 0 0 1-10-10z" fill="#B97335" />
                      <line
                        x1="44"
                        y1="100"
                        x2="256"
                        y2="100"
                        stroke="#7FD6A7"
                        strokeWidth="1.5"
                        strokeDasharray="5 4"
                      />
                      <rect
                        x="104"
                        y="72"
                        width="92"
                        height="56"
                        rx="14"
                        fill="#0D1116"
                        stroke="#F4F1EA"
                        strokeWidth="1.5"
                      />
                      <circle cx="150" cy="100" r="9" fill="none" stroke="#F4F1EA" strokeWidth="1.2" opacity="0.7" />
                      <path d="M144 30h12l-3 42h-6z" fill="#F4F1EA" />
                      <g stroke="#F4F1EA" strokeWidth="1.5" strokeLinecap="round">
                        <line x1="196" y1="88" x2="228" y2="88" />
                        <line x1="196" y1="112" x2="228" y2="112" />
                        <line x1="72" y1="88" x2="104" y2="88" />
                        <line x1="72" y1="112" x2="104" y2="112" />
                      </g>
                      <g fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#C5CCD8">
                        <line x1="156" y1="22" x2="180" y2="13" stroke="#8E98A8" strokeWidth="1" />
                        <text x="184" y="16">
                          Gate
                        </text>
                        <text x="260" y="103.5" fill="#7FD6A7">
                          Split line
                        </text>
                        <line x1="228" y1="112" x2="244" y2="126" stroke="#8E98A8" strokeWidth="1" />
                        <text x="246" y="134">
                          Vents
                        </text>
                        <text x="150" y="195" textAnchor="middle" fill="#8E98A8">
                          A-side / B-side
                        </text>
                      </g>
                    </svg>
                  </div>
                  <div
                    className="shot-side"
                    style={{
                      width: '150px',
                      flexShrink: '0',
                      padding: '10px 14px 14px',
                      display: 'flex',
                      flexDirection: 'column',
                      borderLeft: '1px solid #232B3A',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                        padding: '7px 0',
                        borderBottom: '1px solid #232B3A',
                      }}
                    >
                      <span>Split line</span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#45B587' }}>
                        Auto
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                        padding: '7px 0',
                        borderBottom: '1px solid #232B3A',
                      }}
                    >
                      <span>Gate</span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#45B587' }}>
                        Top
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                        padding: '7px 0',
                        borderBottom: '1px solid #232B3A',
                      }}
                    >
                      <span>Vents</span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#45B587' }}>
                        4
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                        padding: '7px 0',
                        borderBottom: '1px solid #232B3A',
                      }}
                    >
                      <span>Frame</span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#45B587' }}>
                        On
                      </span>
                    </div>
                    <span
                      style={{
                        marginTop: 'auto',
                        background: '#2F5899',
                        color: '#FFFFFF',
                        fontWeight: '600',
                        fontSize: '12px',
                        textAlign: 'center',
                        padding: '9px 10px',
                        borderRadius: '6px',
                      }}
                    >
                      Build the mold
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '24px 48px',
                padding: '32px 0',
                borderBottom: '1px solid #0D1116',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: '700',
                    fontSize: '88px',
                    lineHeight: '0.8',
                    color: '#94592A',
                    minWidth: '92px',
                  }}
                >
                  04
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: '600',
                      fontSize: '32px',
                      lineHeight: '1.05',
                    }}
                  >
                    Print and mold in-house
                  </h3>
                  <p style={{ margin: '0', color: '#3A424F' }}>
                    Download the mold as STEP and STL files for any printer, and run it on your own machine.
                  </p>
                </div>
              </div>
              <figure
                style={{
                  margin: '0',
                  border: '1px solid #0D1116',
                  borderRadius: '8px',
                  padding: '8px',
                  background: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <img
                  src="/assets/img/part-in-mold.jpg"
                  alt="Black molded fan part sitting in a blue printed mold cavity"
                  style={{ display: 'block', width: '100%', height: '260px', objectFit: 'cover' }}
                />
                <figcaption
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    color: '#5A6270',
                  }}
                >
                  DETAIL · MOLDED PART IN PRINTED CAVITY
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
