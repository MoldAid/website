import { useState, type FormEvent } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { OnboardingLayout } from '../OnboardingLayout';
import { suggestedPlan, useOnboarding } from '../OnboardingContext';

export const COMPANY_SIZES = ['1–10', '11–50', '51–200', '201–1,000', '1,000+'];
export const INDUSTRIES = [
  'Medical devices',
  'Automotive',
  'Consumer products',
  'Electronics',
  'Industrial equipment',
  'Packaging',
  'Education & research',
  'Other',
];

export function CompanyStep() {
  const { data, update } = useOnboarding();
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState(data.companyName);
  const [companySize, setCompanySize] = useState(data.companySize);
  const [headcount, setHeadcount] = useState(data.headcount);
  const [industry, setIndustry] = useState(data.industry);
  const [tried, setTried] = useState(false);

  if (!data.verified) return <Navigate to={data.method ? '/signup/confirm' : '/signup'} replace />;

  const missing = !companyName.trim() || !companySize || !industry || headcount < 1;

  function submit(e: FormEvent) {
    e.preventDefault();
    setTried(true);
    if (missing) return;
    // Forslaget sættes kun, hvis brugeren ikke allerede valgte en plan på Plans-siden.
    update({
      companyName: companyName.trim(),
      companySize,
      headcount,
      industry,
      ...(data.planChosen ? {} : { plan: suggestedPlan(headcount) }),
    });
    navigate('/onboarding/plan');
  }

  const setCount = (n: number) => setHeadcount(Math.max(1, Math.min(999, Math.round(n) || 1)));

  return (
    <OnboardingLayout title="Your company" step={2}>
      <div className="ob-two wide-right">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', paddingTop: '8px' }}>
          <div className="ob-eyebrow">Step 2 of 4 · Company</div>
          <h1 className="ob-h1">
            Tell us about
            <br />
            your <em>company</em>.
          </h1>
          <p className="ob-lead">
            We use this to set up your workspace and suggest a plan that fits. You can change it later in settings.
          </p>
          <div
            style={{
              border: '1px solid #0D1116',
              borderRadius: '8px',
              background: '#FFFFFF',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              maxWidth: '460px',
            }}
          >
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '12px',
                letterSpacing: '0.1em',
                color: '#94592A',
              }}
            >
              WHY WE ASK
            </span>
            <span style={{ color: '#3A424F', fontSize: '16px' }}>
              Headcount sets how many people you can invite. Industry helps us pick sensible default materials and
              design rules.
            </span>
          </div>
        </div>

        <form className="ob-card" onSubmit={submit} noValidate>
          <div className="ob-strip">
            <span>Company details</span>
            <span>4 required fields</span>
          </div>
          <div className="ob-body" style={{ gap: '26px' }}>
            <div className="ob-field">
              <label htmlFor="co-name" className="ob-label">
                Company name
              </label>
              <input
                id="co-name"
                className="ob-input"
                autoComplete="organization"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                aria-invalid={tried && !companyName.trim()}
              />
            </div>
            <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
              <legend className="ob-label" style={{ padding: 0, marginBottom: '10px' }}>
                Company size <small>(employees)</small>
              </legend>
              <div className="ob-chips" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(96px, 1fr))' }}>
                {COMPANY_SIZES.map((s) => (
                  <label key={s} className="ob-chip">
                    <input
                      type="radio"
                      name="co-size"
                      value={s}
                      checked={companySize === s}
                      onChange={() => setCompanySize(s)}
                    />
                    {s}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="ob-field">
              <label htmlFor="co-head" className="ob-label">
                Headcount <small>(people who will use MoldAid)</small>
              </label>
              <div className="ob-stepper">
                <button type="button" aria-label="Fewer people" onClick={() => setCount(headcount - 1)}>
                  −
                </button>
                <input
                  id="co-head"
                  type="number"
                  min={1}
                  max={999}
                  value={headcount}
                  onChange={(e) => setCount(Number(e.target.value))}
                />
                <button type="button" aria-label="More people" onClick={() => setCount(headcount + 1)}>
                  +
                </button>
                <span className="ob-hint" style={{ marginLeft: '16px' }}>
                  You invite them after setup.
                </span>
              </div>
            </div>
            <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
              <legend className="ob-label" style={{ padding: 0, marginBottom: '10px' }}>
                Industry
              </legend>
              <div className="ob-chips" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
                {INDUSTRIES.map((s) => (
                  <label key={s} className="ob-chip" style={{ fontSize: '14px' }}>
                    <input
                      type="radio"
                      name="co-ind"
                      value={s}
                      checked={industry === s}
                      onChange={() => setIndustry(s)}
                    />
                    {s}
                  </label>
                ))}
              </div>
            </fieldset>
            {tried && missing && <span className="ob-error">Please fill in all four fields.</span>}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid #CFC8B8',
                paddingTop: '22px',
              }}
            >
              <Link className="ob-ghost" to="/signup/confirm">
                ← Back
              </Link>
              <button type="submit" className="ob-btn">
                Continue to plans
              </button>
            </div>
          </div>
        </form>
      </div>
    </OnboardingLayout>
  );
}
