import { useState } from 'react';
import { Link } from 'react-router';
import { BillingToggle } from '../components/BillingToggle';
import { PLANS, type Billing } from '../lib/pricing';
import { OrderButton, PlanHead } from './PlanHead';
import { PageShell } from '../components/PageShell';
import { SubpageHeader } from '../components/SubpageHeader';
import { SiteFooter } from '../components/SiteFooter';
import './plans.css';

export function PlansPage() {
  const [billing, setBilling] = useState<Billing>('yearly');

  return (
    <PageShell
      title="Plans & Pricing · MoldAid"
      description="Compare MoldAid plans, features and limits."
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
                  fontFamily: "'IBM Plex Mono',monospace",
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
                  fontFamily: "'Barlow Condensed',sans-serif",
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
                Compare the plans and limits currently available for the MoldAid product.
              </p>
              <p style={{ margin: '0', fontSize: '15px' }}>
                Prices are in euro (<b>€</b>), excluding VAT. Yearly prices are rounded down to whole euros.
              </p>
            </div>
          </div>
          <div style={{ marginBottom: '-24px' }}>
            <BillingToggle value={billing} onChange={setBilling} />
          </div>
          <div className="plan-scroll" role="region" aria-label="MoldAid plan comparison" tabIndex={0}>
            <div className="plans-table">
              <div className="plan-head" style={{ background: '#F4F1EA' }}></div>
              {PLANS.map((p, i) => (
                <PlanHead key={p.id} plan={p} billing={billing} last={i === PLANS.length - 1} />
              ))}
              <div className="plan-group">Limits</div>
              <div className="plan-feature">Molds</div>
              <div className="plan-value">1</div>
              <div className="plan-value">1</div>
              <div className="plan-value">5</div>
              <div className="plan-value">10</div>
              <div className="plan-value">By quote</div>
              <div className="plan-feature">Storage of job files</div>
              <div className="plan-value">No storage</div>
              <div className="plan-value">No storage</div>
              <div className="plan-value">1 month</div>
              <div className="plan-value">3 months</div>
              <div className="plan-value">By quote</div>
              <div className="plan-group">Mold build & shell</div>
              <div className="plan-feature">
                Mold build: STEP + STL files, shell settings, architecture, shrinkage and cavity options
              </div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">By quote</div>
              <div className="plan-group">Parting & cores</div>
              <div className="plan-feature">Parting direction and surface, parting details and cores</div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">–</div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">By quote</div>
              <div className="plan-group">Frame & assembly</div>
              <div className="plan-feature">Frame, chamfers, fuse mold pieces, locking pins, dowels and nut field</div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">–</div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">By quote</div>
              <div className="plan-group">Gating, runners & venting</div>
              <div className="plan-feature">
                Gate types and path, runner section, custom runner path, vents and vacuum
              </div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">–</div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">By quote</div>
              <div className="plan-group">Pins</div>
              <div className="plan-feature">Metal pins, guide pins and ejector pins</div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">–</div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">By quote</div>
              <div className="plan-group">Flow check & analysis</div>
              <div className="plan-feature">Flow check, thermal behavior, advisor, measurements and roughness</div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">–</div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">By quote</div>
              <div className="plan-group">Materials, printers & machines</div>
              <div className="plan-feature">
                Own materials and datasheets, own printers, printer compensation and molding machines
              </div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">–</div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">By quote</div>
              <div className="plan-group">Print & cost</div>
              <div className="plan-feature">Print setup and requests, cost estimates and resin prices</div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">–</div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">By quote</div>
              <div className="plan-group">Sharing & account</div>
              <div className="plan-feature">Design sharing, viewer-paid downloads and two-factor login</div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">–</div>
              <div className="plan-value" style={{ color: '#94592A', fontSize: '22px', fontWeight: '700' }}>
                ✓
              </div>
              <div className="plan-value">By quote</div>
              <div className="plan-group">Add-ons & discounts</div>
              <div className="plan-feature">
                Resins, frames, printers and accessories, IM materials, referrals and sharing discounts
              </div>
              <div className="plan-value">Not decided</div>
              <div className="plan-value">Not decided</div>
              <div className="plan-value">Not decided</div>
              <div className="plan-value">Not decided</div>
              <div className="plan-value">By quote</div>
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))',
              gap: '24px',
            }}
          >
            <div style={{ border: '1px solid #CFC8B8', borderRadius: '8px', background: '#FFFFFF', padding: '24px' }}>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '.1em',
                  color: '#94592A',
                  marginBottom: '8px',
                }}
              >
                PAY-PER-USE
              </div>
              <p style={{ margin: '0' }}>€149 per mold download. Pay-per-use includes no job-file storage.</p>
            </div>
            <div style={{ border: '1px solid #CFC8B8', borderRadius: '8px', background: '#FFFFFF', padding: '24px' }}>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '.1em',
                  color: '#94592A',
                  marginBottom: '8px',
                }}
              >
                ENTERPRISE
              </div>
              <p style={{ margin: '0' }}>
                Enterprise is quoted per customer. Price, limits and included features are agreed individually.
              </p>
            </div>
            <div style={{ border: '1px solid #CFC8B8', borderRadius: '8px', background: '#FFFFFF', padding: '24px' }}>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '.1em',
                  color: '#94592A',
                  marginBottom: '8px',
                }}
              >
                PLAN STATUS
              </div>
              <p style={{ margin: '0' }}>
                Several feature limits and Basic-plan inclusions are not decided yet. This overview reflects the current
                draft.
              </p>
            </div>
          </div>
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
            <p style={{ margin: '0', color: '#3A424F' }}>Want early access while plans are finalized?</p>
            <Link
              to="/waitlist"
              style={{
                background: '#355F84',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: '600',
                padding: '15px 24px',
                borderRadius: '8px',
              }}
            >
              Join the beta waitlist
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
