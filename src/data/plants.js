// Paradise Nursery catalog data.
// Each category holds 6+ unique plants with name, price, description,
// and the props used to render a distinct illustrated thumbnail.

export const categories = [
  {
    id: 'air-purifying',
    name: 'Air-Purifying Plants',
    blurb: 'Green filters for your rooms — proven to clear everyday toxins from the air.',
    plants: [
      { id: 'ap-1', name: 'Snake Plant', price: 24.99, description: 'Tall, sculptural leaves that thrive on neglect and scrub the air overnight.', leafType: 'spiky', leafColor: '#2F6B45', potColor: '#C97C5D', variant: 0 },
      { id: 'ap-2', name: 'Peace Lily', price: 29.99, description: 'Glossy leaves and white blooms; tells you exactly when it needs water.', leafType: 'rounded', leafColor: '#3E7C59', potColor: '#B5674A', variant: 1 },
      { id: 'ap-3', name: 'Spider Plant', price: 18.5, description: 'Fast-growing arching leaves that send out baby "spiderettes" to share.', leafType: 'trailing', leafColor: '#4C8B5A', potColor: '#C97C5D', variant: 2 },
      { id: 'ap-4', name: 'Areca Palm', price: 34.0, description: 'Feathery fronds that bring a breezy, tropical feel to any bright room.', leafType: 'fern', leafColor: '#2F6B45', potColor: '#A85D3E', variant: 0 },
      { id: 'ap-5', name: 'Rubber Plant', price: 27.75, description: 'Broad, deep-green leaves with a glossy shine and an easygoing nature.', leafType: 'rounded', leafColor: '#1F5138', potColor: '#C97C5D', variant: 2 },
      { id: 'ap-6', name: 'Boston Fern', price: 21.25, description: 'Lush, feathery fronds that love a steamy bathroom or shaded porch.', leafType: 'fern', leafColor: '#3E7C59', potColor: '#B5674A', variant: 1 },
    ],
  },
  {
    id: 'aromatic',
    name: 'Aromatic Fragrant Plants',
    blurb: 'Living plants that scent a room naturally, no candles required.',
    plants: [
      { id: 'ar-1', name: 'Lavender', price: 16.99, description: 'Silvery stems and calming purple blooms with a soft, soothing scent.', leafType: 'spiky', leafColor: '#6C7A5A', potColor: '#C97C5D', variant: 1 },
      { id: 'ar-2', name: 'Jasmine Vine', price: 22.5, description: 'A climbing vine that opens sweet-smelling white flowers at dusk.', leafType: 'trailing', leafColor: '#3E7C59', potColor: '#A85D3E', variant: 0 },
      { id: 'ar-3', name: 'Rosemary', price: 12.99, description: 'Woody, needle-like leaves with a sharp pine-and-citrus fragrance.', leafType: 'fern', leafColor: '#4C8B5A', potColor: '#C97C5D', variant: 2 },
      { id: 'ar-4', name: 'Eucalyptus', price: 19.75, description: 'Rounded silvery-blue leaves with a cool, spa-like aroma.', leafType: 'rounded', leafColor: '#7FA98C', potColor: '#B5674A', variant: 0 },
      { id: 'ar-5', name: 'Mint', price: 9.99, description: 'Fast, easy, and unmistakably fresh — great on a sunny windowsill.', leafType: 'rounded', leafColor: '#2F6B45', potColor: '#C97C5D', variant: 1 },
      { id: 'ar-6', name: 'Gardenia', price: 26.0, description: 'Creamy, velvety blooms with one of the richest scents in the shop.', leafType: 'rounded', leafColor: '#1F5138', potColor: '#A85D3E', variant: 2 },
    ],
  },
  {
    id: 'low-maintenance',
    name: 'Low-Maintenance Plants',
    blurb: 'Forgiving, hardy plants for busy schedules and first-time plant parents.',
    plants: [
      { id: 'lm-1', name: 'ZZ Plant', price: 25.5, description: 'Waxy, dark-green leaves that tolerate low light and long dry spells.', leafType: 'rounded', leafColor: '#1F5138', potColor: '#C97C5D', variant: 0 },
      { id: 'lm-2', name: 'Pothos', price: 14.99, description: 'A trailing vine with heart-shaped leaves, nearly impossible to kill.', leafType: 'trailing', leafColor: '#4C8B5A', potColor: '#B5674A', variant: 1 },
      { id: 'lm-3', name: 'Aloe Vera', price: 17.25, description: 'Thick, spiky succulent leaves that store their own water supply.', leafType: 'spiky', leafColor: '#7FA98C', potColor: '#C97C5D', variant: 2 },
      { id: 'lm-4', name: 'Cast Iron Plant', price: 23.0, description: 'True to its name — dark, leathery leaves built to survive almost anything.', leafType: 'rounded', leafColor: '#2F6B45', potColor: '#A85D3E', variant: 0 },
      { id: 'lm-5', name: 'Jade Plant', price: 15.5, description: 'Plump, coin-shaped leaves on a miniature tree-like trunk.', leafType: 'rounded', leafColor: '#3E7C59', potColor: '#C97C5D', variant: 1 },
      { id: 'lm-6', name: 'Ponytail Palm', price: 32.0, description: 'A sculptural swollen trunk topped with cascading, curly leaves.', leafType: 'trailing', leafColor: '#6C7A5A', potColor: '#B5674A', variant: 2 },
    ],
  },
];

export const allPlants = categories.flatMap((c) => c.plants.map((p) => ({ ...p, categoryId: c.id, categoryName: c.name })));
