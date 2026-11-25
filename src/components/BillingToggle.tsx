import type { Billing } from '../lib/pricing';
import './BillingToggle.css';

type Props = { value: Billing; onChange: (b: Billing) => void; note?: boolean };

/** Månedlig eller årlig betaling. Årlig giver 25 % rabat på abonnementerne. */
export function BillingToggle({ value, onChange, note = true }: Props) {
  return (
    <div className="bill">
      <span className="bill-label" id="bill-label">
        BILLING
      </span>
      <div className="bill-switch" role="radiogroup" aria-labelledby="bill-label">
        {(['monthly', 'yearly'] as const).map((b) => (
          <label key={b} className="bill-opt">
            <input type="radio" name="billing" value={b} checked={value === b} onChange={() => onChange(b)} />
            {b === 'monthly' ? 'Monthly' : 'Yearly'}
            {b === 'yearly' && <span className="bill-save">−25%</span>}
          </label>
        ))}
      </div>
      {note && <span className="bill-note">Pay for 12 months up front and save 25% on Advanced.</span>}
    </div>
  );
}
