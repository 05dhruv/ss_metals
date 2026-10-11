export interface SupplierLine {
  slug: string;
  name: string;
  shortTitle: string;
  headline: string;
  lead: string;
  aboutTitle: string;
  aboutDesc: string;
  bullets: string[];
  specs: { label: string; value: string }[];
}

export const SUPPLIER_LINES: SupplierLine[] = [
  {
    slug: 'coil',
    name: 'Steel Coil',
    shortTitle: 'Steel Coil',
    headline: 'Premium stainless steel coil',
    lead: 'Cold-rolled and hot-rolled coils for stamping, spinning, and industrial fabrication.',
    aboutTitle: 'About Steel Coil',
    aboutDesc:
      'SS Metals stocks and supplies stainless steel coils with consistent thickness, clean edges, and reliable mechanical properties for kitchenware, utensils, and industrial fabrication across India and export markets.',
    bullets: [
      'Available grades: JSLU, J4, 304, 316, 410, 430 and custom export grades on request.',
      'Widths and thicknesses tailored for patta/patti splitting and circle cutting.',
      'Surface finishes including 2B, BA, and matte as per application.',
      'Mill test certificates and dimensional checks before dispatch.',
    ],
    specs: [
      { label: 'Grades Available', value: 'AISI 304, 316, 201, 410, 430, JSLU, J4' },
      { label: 'Thickness Range', value: '0.25 mm to 3.5 mm' },
      { label: 'Width Range', value: '20 mm to 1250 mm (Slit & Custom Coils)' },
      { label: 'Surface Finish', value: '2B, BA (Bright Annealed), No. 4, Matte, Mirror' },
      { label: 'Edge Type', value: 'Mill Edge / Slit Edge (Burr-free)' },
      { label: 'Packaging', value: 'Eye-to-Sky / Eye-to-Wall moisture barrier wrapping' },
    ],
  },
  {
    slug: 'sheet',
    name: 'Stainless Steel Sheet',
    shortTitle: 'Sheet',
    headline: 'Prime stainless steel sheets',
    lead: 'Precision-sheared flat stainless steel sheets for deep drawing, kitchenware, and architectural fabrication.',
    aboutTitle: 'About Stainless Steel Sheet',
    aboutDesc:
      'SS Metals provides high-precision sheared stainless steel sheets with superior flatness, tight dimensional tolerances, and scratch-resistant surfaces tailored for kitchenware, hotelware, and industrial manufacturing.',
    bullets: [
      'Prime quality sheets in standard dimensions (8x4, 6x3, 2x1 meters) and custom slit sizes.',
      'High-grade deep drawing capability with zero surface micro-fractures.',
      'Protected with laser PVC coating or standard protective film upon request.',
      'Direct ex-stock dispatch from our Moradabad warehousing facility.',
    ],
    specs: [
      { label: 'Grades Available', value: 'AISI 304, 304L, 316, 201, 410, 430, JSLU' },
      { label: 'Thickness Range', value: '0.30 mm to 6.0 mm' },
      { label: 'Standard Dimensions', value: '1000x2000 mm, 1250x2500 mm, 1219x2438 mm (4x8 ft)' },
      { label: 'Finish Variants', value: '2B, BA, Satin, Hairline, Mirror, 2D' },
      { label: 'Surface Protection', value: 'PE / Laser PVC Protective Film' },
      { label: 'Compliance', value: 'ASTM A240 / ASME SA240 Standards' },
    ],
  },
  {
    slug: 'circle',
    name: 'Stainless Steel Circle',
    shortTitle: 'Circle',
    headline: 'High-draw stainless steel circles',
    lead: 'Circular blanks produced on heavy rotary circle shearers designed for flawless deep draw utensils.',
    aboutTitle: 'About Stainless Steel Circles',
    aboutDesc:
      'We are premier stockists and processors of stainless steel circles (patta/circles). Engineered specifically for utensil manufacturers, our circles offer uniform grain structure and zero burr edges, significantly reducing press rejection rates.',
    bullets: [
      'Die-cut and rotary sheared circles across all standard cookware diameters.',
      'Optimized ductility for high-depth hydraulic and mechanical press drawing.',
      'Ready stock availability in JSLU, J4, 201, and 304 food-grade alloys.',
      'Precision edge deburring ensuring smooth feeding into automated draw presses.',
    ],
    specs: [
      { label: 'Grades Available', value: 'AISI 304, 201, JSLU, J4, 430, 410' },
      { label: 'Diameter Range', value: '100 mm to 900 mm (Custom dies available)' },
      { label: 'Thickness Range', value: '0.35 mm to 2.5 mm' },
      { label: 'Drawing Depth', value: 'Deep Draw (DD) & Extra Deep Draw (EDD)' },
      { label: 'Edge Finish', value: 'Smooth Rotary Sheared / Deburred' },
      { label: 'Applications', value: 'Pots, Kalvat Utensils, Bowls, Ice Buckets, Cookware' },
    ],
  },
  {
    slug: 'blank',
    name: 'Stainless Steel Blank',
    shortTitle: 'Blank',
    headline: 'Precision stainless steel blanks (Farma)',
    lead: 'Custom-sheared rectangular, circular, and geometric blanks ready for immediate production line forming.',
    aboutTitle: 'About Stainless Steel Blanks (Farma)',
    aboutDesc:
      'SS Metals supplies precision-cut blanks (farma) tailored to your exact component specifications. Eliminating in-house scrap and secondary shearing costs, our blanks streamline your production flow from day one.',
    bullets: [
      'Tailored dimensions matching customer stamping dies and pressing tools.',
      'Tight tolerance cutting (+/- 0.2 mm) minimizing material wastage.',
      'Available in cold-rolled and bright-annealed high-yield steel formulations.',
      'Direct bulk palletization for quick unloading and press feeding.',
    ],
    specs: [
      { label: 'Grades Available', value: 'AISI 304, 316, 201, JSLU, J4, 410' },
      { label: 'Geometry', value: 'Rectangular, Square, Tapered, Polygonal, Pre-notched' },
      { label: 'Thickness', value: '0.4 mm to 4.0 mm' },
      { label: 'Tolerance', value: '±0.25 mm Precision Sheared' },
      { label: 'Batch Volume', value: 'Prototype to Multi-ton production batches' },
      { label: 'Traceability', value: 'Heat number and mill batch tracking' },
    ],
  },
  {
    slug: 'wire',
    name: 'Stainless Steel Wire',
    shortTitle: 'Wire',
    headline: 'Drawn stainless steel wire & coils',
    lead: 'Bright annealed and hard drawn stainless steel wire for handles, cutlery, mesh, and hardware fabrication.',
    aboutTitle: 'About Stainless Steel Wire',
    aboutDesc:
      'We supply top-grade stainless steel wire with uniform tensile strength, immaculate surface brightness, and superior corrosion resistance. Ideal for utensil handles, racks, fasteners, and precision wire-forming.',
    bullets: [
      'Available in soft annealed, quarter-hard, half-hard, and full-hard tempers.',
      'Bright clean surface free from pitting, scale, and drawing lubricant residue.',
      'Excellent weldability for bucket handles, pot ears, and kitchenware assemblies.',
      'Supplied in spools, coils, or straight-cut lengths as per customer requirements.',
    ],
    specs: [
      { label: 'Grades Available', value: 'AISI 304, 304L, 316, 201, 202, 410, 430' },
      { label: 'Diameter Range', value: '0.50 mm to 8.00 mm' },
      { label: 'Surface Finish', value: 'Bright (BA), Matte / Dull, Soap-drawn' },
      { label: 'Temper Options', value: 'Soft Annealed, 1/4 Hard, 1/2 Hard, Spring Hard' },
      { label: 'Form of Supply', value: 'Continuous Coils, Spools, Cut Straight Rods' },
      { label: 'Applications', value: 'Bucket Handles, Wire Racks, Fasteners, Springs, Mesh' },
    ],
  },
  {
    slug: 'rod',
    name: 'Stainless Steel Rod',
    shortTitle: 'Rod',
    headline: 'Round & hexagonal stainless steel rods',
    lead: 'Bright drawn and centerless ground stainless steel solid rods for precision machining and hardware.',
    aboutTitle: 'About Stainless Steel Rod',
    aboutDesc:
      'SS Metals supplies precision round, hex, and square stainless steel solid rods. Featuring exceptional machinability, straightness, and corrosion endurance, our rods meet the strictest demands of engineering and hardware turnery.',
    bullets: [
      'High-precision centerless ground rods with h8 and h9 diameter tolerances.',
      'Available in ferritic, austenitic, and martensitic stainless steel grades.',
      '100% ultrasonically tested ensuring crack-free internal structure.',
      'Ready stock in Moradabad for fast transport across UP, Delhi NCR, and nationwide.',
    ],
    specs: [
      { label: 'Grades Available', value: 'AISI 304, 304L, 316, 316L, 202, 410, 420, 430' },
      { label: 'Diameter Range', value: '3.0 mm to 75.0 mm' },
      { label: 'Shape Profiles', value: 'Round Bar, Hexagonal Bar, Square Bar' },
      { label: 'Surface Condition', value: 'Cold Drawn, Centerless Ground, Polished' },
      { label: 'Standard Length', value: '3 Meters, 6 Meters, or Cut-to-length' },
      { label: 'Tolerance Class', value: 'ISO h8, h9, h11 Machining Tolerances' },
    ],
  },
  {
    slug: 'pipe',
    name: 'Stainless Steel Pipe',
    shortTitle: 'Pipe',
    headline: 'Ornamental & industrial stainless steel pipes',
    lead: 'Welded and seamless stainless steel tubes and pipes for railings, furniture, and fluid conveyance.',
    aboutTitle: 'About Stainless Steel Pipe',
    aboutDesc:
      'We stock a comprehensive range of stainless steel round, square, and rectangular pipes and tubes. Manufactured to international structural and sanitary standards, our pipes offer flawless mirror or satin polish finishes.',
    bullets: [
      'Round, square, and rectangular hollow sections with consistent wall gauge.',
      'High-frequency TIG/Laser welded seams with 100% eddy current testing.',
      'Mirror finish (600 grit) and hairline satin polish for premier architectural appeal.',
      'Wide ready inventory supporting immediate truckload loading and logistics.',
    ],
    specs: [
      { label: 'Grades Available', value: 'AISI 304, 201, 316, 304L, JSLU' },
      { label: 'Outer Diameter (Round)', value: '9.5 mm to 114.3 mm (3/8" to 4.5")' },
      { label: 'Square / Rectangular', value: '12x12 mm up to 100x50 mm' },
      { label: 'Wall Thickness', value: '0.6 mm to 3.0 mm' },
      { label: 'Surface Finish', value: 'Mirror Polish (600G), Hairline Satin, Mill Finish' },
      { label: 'Standards', value: 'ASTM A554 (Ornamental), ASTM A312 (Industrial)' },
    ],
  },
];
