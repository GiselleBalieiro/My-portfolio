export const inputClass =
  'w-full rounded-lg border border-border-primary bg-bg-secondary px-3 py-2 text-sm text-text-primary outline-none focus:border-brand-indigo transition-colors';

export const chipClass =
  'flex items-center gap-1 rounded-lg bg-bg-tertiary px-2 py-1 text-[12px] text-text-primary';

export const ghostButton =
  'flex items-center gap-1 rounded-lg border border-border-primary px-3 py-2 text-[12px] text-text-secondary hover:text-text-primary hover:border-brand-indigo transition-colors cursor-pointer';

export const primaryButton =
  'flex items-center gap-2 rounded-lg bg-brand-indigo px-4 py-2 text-sm text-white hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

export const feedbackClass = (type) =>
  `mb-4 rounded-lg px-3 py-2 text-[13px] ${
    type === 'error' ? 'bg-red-500/10 text-red-500' : 'bg-brand-indigo/10 text-brand-indigo'
  }`;
