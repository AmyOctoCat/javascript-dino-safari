import React from 'react';

const TOKEN_RE = /(`[^`]+`|\*[^*]+\*|\*\*[^*]+\*\*)/;

function parseToken(raw, i) {
  if (raw.startsWith('**') && raw.endsWith('**')) {
    return (
      <strong key={i} className="font-bold text-white">
        {raw.slice(2, -2)}
      </strong>
    );
  }
  if (raw.startsWith('`') && raw.endsWith('`')) {
    return (
      <code key={i} className="bg-slate-700/60 text-secondary px-1.5 py-0.5 rounded font-mono text-[0.9em]">
        {raw.slice(1, -1)}
      </code>
    );
  }
  if (raw.startsWith('*') && raw.endsWith('*')) {
    return (
      <em key={i} className="italic text-gray-100">
        {raw.slice(1, -1)}
      </em>
    );
  }
  return raw;
}

export function InlineMarkdown({ text }) {
  if (!text) return null;
  const parts = text.split(TOKEN_RE);
  return <>{parts.map((part, i) => (part.match(TOKEN_RE) ? parseToken(part, i) : part))}</>;
}
