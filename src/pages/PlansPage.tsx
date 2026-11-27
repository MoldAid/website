import { useState } from 'react';
import { Link } from 'react-router';
import { PageShell } from '../components/PageShell';
import { SubpageHeader } from '../components/SubpageHeader';
import { SiteFooter } from '../components/SiteFooter';
import { BillingToggle } from '../components/BillingToggle';
import { EXTRA_SEAT, INCLUDED, PLANS, STORAGE_NOTES, eur, type Billing, type Plan } from '../lib/pricing';
import { OrderButton, PlanHead } from './PlanHead';
import './plans.css';

const mono = "'IBM Plex Mono',monospace";
const barlow = "'Barlow Condensed',sans-serif";
const tag = { fontFamily: mono, fontSize: '12px', letterSpacing: '.1em', color: '#94592A' } as const;

const LIMITS: { label: string; key: keyof Plan['limits'] }[] = [
  { label: 'Molds', key: 'molds' },
  { label: 'Storage', key: 'storage' },
  { label: 'Seats', key: 'seats' },
];

export function PlansPage() {
  const [billing, setBilling] = useState<Billing>('yearly');

  return (
    <PageShell
      title="Plans & Pricing · MoldAid"
      description="Compare Mold Studio plans and limits. Every plan includes the full mold toolset."
      className="page-plans"
    >
      <SubpageHeader />
      <main style={{ padding: '56px clamp(20px,5vw,80px) 96px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div
            className="plans-intro"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1fr) minmax(280px,.8fr)',
              gap: '32px 64px',
              alignItems: 'end',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  fontFamily: mono,
                  fontSize: '13px',
                  letterSpacing: '.14em',
                  color: '#5A6270',
                  textTransform: 'uppercase',
                }}
              >
                <span style={{ width: '40px', height: '2px', background: '#B97335' }} aria-hidden="true"></span>Plans &
                pricing
              </div>
              <h1
                style={{
                  margin: '0',
                  fontFamily: barlow,
                  fontWeight: '700',
                  fontSize: 'clamp(52px,7vw,88px)',
                  lineHeight: '.88',
                }}
              >
                Choose how you <span style={{ color: '#94592A' }}>build</span>.
              </h1>
            </div>
            <div style={{ borderLeft: '1px solid #0D1116', paddingLeft: '24px', color: '#3A424F' }}>
              <p style={{ margin: '0 0 12px' }}>
                Every plan includes the full Mold Studio toolset. The plans differ only in how many molds you make, how long
                we keep your files and how many people use it.
              </p>
              <p style={{ margin: '0', fontSize: '15px' }}>
                Prices are in euro (<b>€</b>), excluding VAT. Yearly prices are rounded down to whole euros.
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '-24px' }}>
            <BillingToggle value={billing} onChange={setBilling} note={false} />
          </div>

          <div className="plan-scroll" role="region" aria-label="Mold Studio plan comparison" tabIndex={0}>
            <div className="plans-table">
              <div className="plan-head" style={{ background: '#F4F1EA' }}></div>
              {PLANS.map((p, i) => (
                <PlanHead key={p.id} plan={p} billing={billing} last={i === PLANS.length - 1} />
              ))}
              <div className="plan-group">Limits</div>
              {LIMITS.map((row) => [
                <div key={row.key} className="plan-feature">
                  {row.label}
                </div>,
                ...PLANS.map((p, i) => (
                  <div
                    key={`${row.key}-${p.id}`}
                    className="plan-value"
                    style={i === PLANS.length - 1 ? { borderRight: 0 } : undefined}
                  >
                    {p.limits[row.key]}
                    {row.key === 'storage' && (
                      <sup className="note-ref">
                        <a href={`#storage-note-${p.storageNote}`} aria-label={`See storage note ${p.storageNote}`}>
                          {p.storageNote}
                        </a>
                      </sup>
                    )}
                  </div>
                )),
              ])}
              <div className="plan-order" style={{ fontWeight: 600, alignItems: 'center' }}>
                Ready? Pick a plan.
              </div>
              {PLANS.map((p, i) => (
                <div key={p.id} className="plan-order" style={i === PLANS.length - 1 ? { borderRight: 0 } : undefined}>
                  <OrderButton plan={p} billing={billing} />
                </div>
              ))}
            </div>
          </div>

          <ol className="plan-notes" aria-label="Storage notes">
            {STORAGE_NOTES.map((note) => (
              <li key={note.n} id={`storage-note-${note.n}`}>
                <span className="plan-note-n">{note.n}</span>
                <span>
                  <strong>{note.plans}:</strong> {note.text}
                </span>
              </li>
            ))}
          </ol>

          <section aria-labelledby="included-h" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '16px',
                borderTop: '2px solid #0D1116',
                paddingTop: '12px',
                fontFamily: mono,
                fontSize: '13px',
                letterSpacing: '.12em',
                color: '#5A6270',
              }}
            >
              <span>INCLUDED IN EVERY PLAN</span>
            </div>
            <h2
              id="included-h"
              style={{
                margin: 0,
                fontFamily: barlow,
                fontWeight: 700,
                fontSize: 'clamp(40px,5vw,64px)',
                lineHeight: 0.95,
              }}
            >
              This is what you get.
            </h2>
            <ul className="included">
              {INCLUDED.map((f, i) => (
                <li key={f.title}>
                  <span style={{ fontFamily: mono, fontSize: '13px', color: '#94592A' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <strong>{f.title}</strong>
                  <span style={{ color: '#3A424F', fontSize: '15px' }}>{f.text}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="addons-h" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              style={{
                borderTop: '2px solid #0D1116',
                paddingTop: '12px',
                fontFamily: mono,
                fontSize: '13px',
                letterSpacing: '.12em',
                color: '#5A6270',
              }}
            >
              <span id="addons-h">ADD-ONS</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))',
                gap: '24px',
              }}
            >
              <div className="addon">
                <div style={tag}>EXTRA SEAT · ADVANCED</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <strong style={{ fontFamily: barlow, fontSize: '44px', lineHeight: 1 }}>{eur(EXTRA_SEAT)}</strong>
                  <span style={{ fontSize: '15px', color: '#5A6270' }}>per seat / month</span>
                </div>
                <p style={{ margin: 0, color: '#3A424F' }}>
                  Advanced includes one seat. Add a seat for each extra person who designs molds. Their own login, your
                  company's workspace and limits.
                </p>
              </div>
            </div>
          </section>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              borderTop: '1px solid #0D1116',
              paddingTop: '24px',
            }}
          >
            <p style={{ margin: '0', color: '#3A424F' }}>Ready to get started?</p>
            <Link
              to="/signup"
              style={{
                background: '#355F84',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: '600',
                padding: '15px 24px',
                borderRadius: '8px',
              }}
            >
              Try our studio
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
