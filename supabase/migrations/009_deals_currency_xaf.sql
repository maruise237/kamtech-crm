-- Make FCFA (ISO code XAF) the CRM default currency.
ALTER TABLE deals ALTER COLUMN currency SET DEFAULT 'XAF';

-- Existing installs created deals in USD by default. Convert untouched
-- default values to the new CRM default so dashboards stay consistent.
UPDATE deals
SET currency = 'XAF'
WHERE currency IS NULL OR currency = '' OR currency = 'USD';
