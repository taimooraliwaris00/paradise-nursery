import './PlantThumb.css';

// A small library of hand-drawn-style potted plant illustrations.
// Each variant draws different leaf silhouettes so every card in the
// catalog reads as a distinct plant instead of a repeated stock photo.
const LEAF_SETS = {
  spiky: [
    'M60 90 C 40 70, 35 40, 50 15 C 55 45, 58 70, 60 90 Z',
    'M60 90 C 80 68, 88 38, 78 12 C 68 40, 62 68, 60 90 Z',
    'M60 90 C 44 78, 30 58, 30 34 C 46 48, 56 66, 60 90 Z',
    'M60 90 C 76 80, 92 62, 94 38 C 76 50, 66 68, 60 90 Z',
  ],
  rounded: [
    'M60 90 C 34 84, 24 60, 34 38 C 48 46, 58 66, 60 90 Z',
    'M60 90 C 86 84, 96 60, 86 38 C 72 46, 62 66, 60 90 Z',
    'M60 90 C 40 70, 38 44, 56 26 C 60 48, 60 70, 60 90 Z',
    'M60 90 C 80 70, 82 44, 64 26 C 60 48, 60 70, 60 90 Z',
  ],
  trailing: [
    'M60 92 C 30 86, 12 70, 10 48 C 30 54, 46 66, 60 92 Z',
    'M60 92 C 90 86, 108 70, 110 48 C 90 54, 74 66, 60 92 Z',
    'M60 92 C 38 76, 26 54, 30 30 C 44 42, 54 64, 60 92 Z',
    'M60 92 C 82 76, 94 54, 90 30 C 76 42, 66 64, 60 92 Z',
    'M60 92 C 48 66, 46 40, 60 18 C 70 42, 68 66, 60 92 Z',
  ],
  fern: [
    'M60 92 L36 74 M60 92 L38 60 M60 92 L42 46 M60 92 L48 32 M60 92 L60 20',
    'M60 92 L84 74 M60 92 L82 60 M60 92 L78 46 M60 92 L72 32',
  ],
};

const POT_SHAPES = [
  'M34 92 L86 92 L80 118 L40 118 Z',
  'M30 92 L90 92 L84 116 Q60 122 36 116 Z',
  'M36 90 L84 90 L88 116 L32 116 Z',
];

export default function PlantThumb({ leafType = 'rounded', leafColor = '#3E7C59', potColor = '#C97C5D', variant = 0 }) {
  const leaves = LEAF_SETS[leafType] || LEAF_SETS.rounded;
  const pot = POT_SHAPES[variant % POT_SHAPES.length];
  const isFern = leafType === 'fern';

  return (
    <svg className="plant-thumb" viewBox="0 0 120 130" role="img" aria-label="Illustrated potted plant">
      <ellipse className="plant-thumb__shadow" cx="60" cy="120" rx="34" ry="6" />
      {isFern ? (
        <g stroke={leafColor} strokeWidth="4" strokeLinecap="round" fill="none">
          {leaves.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
      ) : (
        <g fill={leafColor}>
          {leaves.map((d, i) => (
            <path key={i} d={d} opacity={0.92 - i * 0.08} />
          ))}
        </g>
      )}
      <path className="plant-thumb__pot" d={pot} fill={potColor} />
      <rect x="34" y="86" width="52" height="7" rx="2" fill={potColor} opacity="0.85" />
    </svg>
  );
}
