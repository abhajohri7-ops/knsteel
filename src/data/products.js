const imageSets = {
  proCat: ['/images/CRCoilsSheets.jpg','/images/HRCoilsSheets.jpg','/images/GIRectPipe.jpg'],
  // bars: ['/images/company-01.jpg', '/images/company-02.jpg', '/images/company-03.jpg', '/images/company-07.jpg', '/images/company-08.jpg'],
  pipes: ['/images/GIRoundPipe.jpg','/images/GIRectPipe.jpg'],
  //  '/images/company-04.jpg', '/images/company-05.jpg', '/images/company-06.jpg', '/images/company-09.jpg', '/images/company-15.jpg', '/images/company-16.jpg'],
  plates: ['/images/CR Sheet.jpg','/images/HR Mild Steel Plate.jpg','/images/Plain GI Sheet.jpg','/images/GICorrugatedSheet.jpg'],
    //'/images/company-02.jpg', '/images/company-03.jpg', '/images/company-04.jpg', '/images/company-11.jpg', '/images/company-12.jpg', '/images/company-13.jpg'],
  // beams: ['/images/company-03.jpg', '/images/company-05.jpg', '/images/company-06.jpg', '/images/company-14.jpg'],
  coils: ['/images/HR Coil.jpg','/images/GS Coil.jpg','/images/Special Quality Sheet.jpg'],
  //'/images/company-01.jpg', '/images/company-04.jpg', '/images/company-06.jpg', '/images/company-17.jpg', '/images/company-18.jpg'],
  wires: ['/images/MildSteelWire.jpg']

};

export const proCat = [ 
  {
    id: 'cr-coils-sheets',
    title: 'CR Coils and Sheets',
    slug: 'c-r-coils-sheets',
    category: 'Plates & Sheets',
    price: { display: 'Quote on request', value: 1 },
    images: imageSets.proCat,
    shortDescription: 'Cold Rolled coils and sheets for fabrication industries and shops .',
    longDescription:
      'A dependable round bar option for fabrication shops and structural buyers. Suitable for machining, supports, and custom cutting requirements with consistent stock availability.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Rectangle Sheet',
      Finish: 'cold Rolled',
      Length: 'Standard commercial lengths',
      Use: 'Fabrication, machining, support members',
    },
    y:0,
  },
  {
    id: 'hr-coils-sheets',
    title: 'HR Coils and Sheets',
    slug: 'h-r-coils-sheets',
    category: 'Plates & Sheets',
    price: { display: 'Quote on request', value: 2 },
    images: imageSets.proCat,
    shortDescription: 'Hot Rolled coils and sheets for fabrication industries and shops .',
    longDescription:
      'A dependable round bar option for fabrication shops and structural buyers. Suitable for machining, supports, and custom cutting requirements with consistent stock availability.',
    specs: {
     Material: 'Mild Steel',
      Shape: 'Rectangle Sheet',
      Finish: 'hot Rolled',
      Length: 'Standard commercial lengths',
      Use: 'Fabrication, machining, support members',
      
    },
    y:1,
   },
   {
    id: 'gi-coils-sheets',
    title: 'GI Coils and Sheets',
    slug: 'g-i-coils-sheets',
    category: 'Plates & Sheets',
    price: { display: 'Quote on request', value: 3 },
    images: imageSets.proCat,
    shortDescription: 'Galvanised iron coils and sheets for fabrication industries and shops .',
    longDescription:
    'A dependable round bar option for fabrication shops and structural buyers. Suitable for machining, supports, and custom cutting requirements with consistent stock availability.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Rectangle Sheet',
      Finish: 'coated',
      Length: 'Standard commercial lengths',
     Use: 'Fabrication, machining, support members',
     tags: ['Mild Steel', 'Bar', 'Hot Rolled', 'Round'],
       
     },
     y:2,
    }
   ];

export const products = [
  // {
  //   id: 'ms-round-bar',
  //   title: 'Mild Steel Round Bar',
  //   slug: 'mild-steel-round-bar',
  //   category: 'Bars & Rods',
  //   price: { display: 'Quote on request', value: 1 },
  //   images: imageSets.bars,
  //   shortDescription: 'General-purpose round bar for fabrication, support, and machining work.',
  //   longDescription:
  //     'A dependable round bar option for fabrication shops and structural buyers. Suitable for machining, supports, and custom cutting requirements with consistent stock availability.',
  //   specs: {
  //     Material: 'Mild Steel',
  //     Shape: 'Round Bar',
  //     Finish: 'Hot Rolled',
  //     Length: 'Standard commercial lengths',
  //     Use: 'Fabrication, machining, support members'
  //   },
  //   stockStatus: 'Ready stock',
  //   tags: ['Mild Steel', 'Bar', 'Hot Rolled', 'Round']
  // },
  // {
  //   id: 'ms-square-bar',
  //   title: 'Mild Steel Square Bar',
  //   slug: 'mild-steel-square-bar',
  //   category: 'Bars & Rods',
  //   price: { display: 'Quote on request', value: 2 },
  //   images: imageSets.bars,
  //   shortDescription: 'Square section bar for machining, frames, and general engineering.',
  //   longDescription:
  //     'Designed for engineering and fabrication applications where a square profile is preferred. Sourced for stable dimensions and practical workshop use.',
  //   specs: {
  //     Material: 'Mild Steel',
  //     Shape: 'Square Bar',
  //     Finish: 'Hot Rolled',
  //     Use: 'Frames, fabrication, general engineering'
  //   },
  //   stockStatus: 'Ready stock',
  //   tags: ['Mild Steel', 'Bar', 'Hot Rolled', 'Square']
  // },
  // {
  //   id: 'rustproof-ms-bar',
  //   title: 'Rustproof Mild Steel Round Bar',
  //   slug: 'rustproof-mild-steel-round-bar',
  //   category: 'Bars & Rods',
  //   price: { display: 'Quote on request', value: 3 },
  //   images: imageSets.bars,
  //   shortDescription: 'Round bar selected for improved surface protection and storage life.',
  //   longDescription:
  //     'A round bar variant used where reduced surface corrosion is important. Ideal for inventory holding, fabrication cycles, and project sites with staged dispatch.',
  //   specs: {
  //     Material: 'Mild Steel',
  //     Shape: 'Round Bar',
  //     Finish: 'Rustproof',
  //     Use: 'Fabrication, storage-friendly inventory'
  //   },
  //   stockStatus: 'Limited availability',
  //   tags: ['Mild Steel', 'Bar', 'Rustproof', 'Round']
  // },
  {
    id: 'gi-round-pipe',
    title: 'Galvanised Iron Round Pipe',
    slug: 'galvanised-iron-round-pipe',
    category: 'Pipes & Tubes',
    price: { display: 'Quote on request', value: 1 },
    images: imageSets.pipes,
    shortDescription: 'Corrosion-resistant round pipe for general utility and structural use.',
    longDescription:
      'Galvanised pipe for applications requiring improved corrosion protection and dependable service life. Commonly used in utility, support, and site infrastructure work.',
    specs: {
      Material: 'Galvanised',
      Shape: 'Round Pipe',
      Finish: 'Coated',
      Use: 'Utility lines, structural support, site work'
    },
    stockStatus: 'Ready stock',
    tags: ['Galvanised', 'Pipe', 'Coated', 'Round'],
    x : 0,
  },
  {
    id: 'gi-rectangular-pipe',
    title: 'Galvanised Iron Rectangular Pipe',
    slug: 'galvanised-iron-rectangular-pipe',
    category: 'Pipes & Tubes',
    price: { display: 'Quote on request', value:2 },
    images: imageSets.pipes,
    shortDescription: 'Rectangular pipe for frames, handrails, and fabricated structures.',
    longDescription:
      'Rectangular galvanised Pipe for builders and fabricators. Useful where a clean profile and durable coating are required for indoor or outdoor assemblies.',
    specs: {
      Material: 'Galvanised',
      Shape: 'Rectangular Pipe',
      Finish: 'Coated',
      Use: 'Frames, handrails, fabricated structures'
    },
    stockStatus: 'Ready stock',
    tags: ['Galvanised', 'Pipe', 'Coated', 'Rectangular'],
    x : 1,
  },
  // {
  //   id: 'gi-round-pipe',
  //   title: 'Galvanized Iron Round Pipe',
  //   slug: 'galvanized-iron-roundr-pipe',
  //   category: 'Pipes & Tubes',
  //   price: { display: 'Quote on request', value: 6 },
  //   images: imageSets.pipes,
  //   shortDescription: 'Round pipe for frames, handrails, and fabricated structures.',
  //   longDescription:
  //     'Round galvanized section for builders and fabricators. Useful where a clean profile and durable coating are required for indoor or outdoor assemblies.',
  //   specs: {
  //     Material: 'Galvanized',
  //     Shape: 'Round Pipe',
  //     Finish: 'Coated',
  //     Use: 'Frames, handrails, fabricated structures'
  //   },
  //   stockStatus: 'Ready stock',
  //   tags: ['Galvanized', 'Pipe', 'Coated', 'Round']
  // },
  // {
  //   id: 'ss-erw-pipe',
  //   title: 'Stainless Steel ERW Pipe',
  //   slug: 'stainless-steel-erw-pipe',
  //   category: 'Pipes & Tubes',
  //   price: { display: 'Quote on request', value: 6 },
  //   images: imageSets.pipes,
  //   shortDescription: 'ERW pipe for cleaner finish and corrosion-sensitive applications.',
  //   longDescription:
  //     'A stainless steel pipe option for buyers who need a polished appearance and reliable corrosion resistance. Suitable for industrial, architectural, and general fabrication use.',
  //   specs: {
  //     Material: 'Stainless Steel',
  //     Shape: 'ERW Pipe',
  //     Finish: 'Cold Rolled',
  //     Use: 'Industrial, architectural, fabrication'
  //   },
  //   stockStatus: 'On request',
  //   tags: ['Stainless Steel', 'Pipe', 'Cold Rolled', 'ERW']
  // },
  {
    id: 'Sheet-cold-rolled',
    title: 'Cold Rolled Sheet',
    slug: 'cold-rolled-Sheet',
    category: 'Plates & Sheets',
    price: { display: 'Quote on request', value: 3 },
    images: imageSets.plates,
    shortDescription: 'Cleaner surface plate for fabrication and finishing workflows.',
    longDescription:
      'Cold rolled Sheet with a consistent surface for downstream fabrication, forming, and finishing work. Appropriate for projects where dimensional stability matters.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Sheet',
      Finish: 'Cold Rolled',
      Use: 'Fabrication, forming, finishing'
    },
    stockStatus: 'Ready stock',
    tags: ['Mild Steel','Sheet', 'Cold Rolled'],
    x:0
  },
  {
    id: 'ms-plate-hot-rolled',
    title: 'Hot Rolled Mild Steel Plate',
    slug: 'hot-rolled-mild-steel-plate',
    category: 'Plates & Sheets',
    price: { display: 'Quote on request', value: 4 },
    images: imageSets.plates,
    shortDescription: 'General-purpose plate for heavy-duty fabrication and build work.',
    longDescription:
      'Hot rolled plate suited to structural jobs, build assemblies, and shop fabrication. A practical material choice when strength and availability matter more than a fine finish.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Plate',
      Finish: 'Hot Rolled',
      Use: 'Heavy-duty fabrication, build work'
    },
    stockStatus: 'Ready stock',
    tags: ['Mild Steel', 'Plate', 'Hot Rolled'],
    x:1
  },
  {
    id: 'gi-plain-sheet',
    title: 'Galvanised Iron Plain Sheet',
    slug: 'galvanised-iron-plain-sheet',
    category: 'Plates & Sheets',
    price: { display: 'Quote on request', value: 5 },
    images: imageSets.plates,
    shortDescription: 'Cut-to-size rectangle plain sheet for custom projects and stock planning.',
    longDescription:
      'Rectangle plain GIsheet supplied for custom builds and precise job requirements. Suitable for fabricators who want ready-to-use dimensions and predictable dispatch planning.',
    specs: {
      Material: 'Galvanised',
      Shape: 'Rectangle Sheet',
      Finish: 'Coated',
      Use: 'Custom builds, fabrication, dispatch planning'
    },
    stockStatus: 'On request',
    tags: ['Galvanised', 'Sheet','Coated', 'Rectangle'],
    x:2
  },
  {
    id: 'gi-corrugated-sheet',
    title: 'Galvanised Iron Corrugated Sheet',
    slug: 'galvanised-iron-corrugated-sheet',
    category: 'Plates & Sheets',
    price: { display: 'Quote on request', value: 6 },
    images: imageSets.plates,
    shortDescription: 'Cut-to-size rectangle corrugated sheet for custom projects and stock planning.',
    longDescription:
      'Rectangle corrugated GIsheet supplied for custom builds and precise job requirements. Suitable for fabricators who want ready-to-use dimensions and predictable dispatch planning.',
    specs: {
      Material: 'Galvanised',
      Shape: 'Rectangle Corrugated Sheet',
      Finish: 'Coated',
      Use: 'Custom builds, fabrication, dispatch planning'
    },
    stockStatus: 'On request',
    tags: ['Galvanised', 'Corrugated','Coated', 'Rectangle'],
    x:3
  },
  {
    id: 'ms-wire',
    title: 'Mild Steel Wire',
    slug: 'mild-steel-wire',
    category: 'Binding Steel',
    price: { display: 'Quote on request', value: 7 },
    images: imageSets.wires,
    shortDescription: 'Binding wire for framing, support, and load-bearing assemblies.',
    longDescription:
      'Wire  for infrastructure and industrial binding applications. Chosen for projects that need dependable structural profiles and bulk-order handling.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Wire',
      Finish: 'Rolled',
      Use: 'binding, support, framing, load-bearing assemblies'
    },
    stockStatus: 'Ready stock',
    tags: ['Mild Steel', 'Wire', 'Rolled', 'Structural'],
    x:0
  },
  // {
  //   id: 'ms-i-beam',
  //   title: 'I Shaped Mild Steel Beam',
  //   slug: 'i-shaped-mild-steel-beam',
  //   category: 'Structural Steel',
  //   price: { display: 'Quote on request', value: 11 },
  //   images: imageSets.beams,
  //   shortDescription: 'I-beam profile for heavier structural and construction requirements.',
  //   longDescription:
  //     'A structural beam solution for building and industrial buyers who need strong profile sections. Suited for framing, supports, and engineered assemblies.',
  //   specs: {
  //     Material: 'Mild Steel',
  //     Shape: 'I Beam',
  //     Finish: 'Hot Rolled',
  //     Use: 'Construction, supports, engineered assemblies'
  //   },
  //   stockStatus: 'On request',
  //   tags: ['Mild Steel', 'Beam', 'Hot Rolled', 'Structural']
  // },
  {
    id: 'hr-coils',
    title: 'HR & CR Coils and Sheets',
    slug: 'hr-cr-coils-and-sheets',
    category: 'Coils & Sheets',
    price: { display: 'Quote on request', value:8 },
    images: imageSets.coils,
    shortDescription: 'Hot rolled and cold rolled coils for processing, cutting, and manufacturing.',
    longDescription:
      'A broad coil offering for buyers needing sheet processing, coil cutting, and slitting support. Suitable for fabrication workflows, manufacturing, and large-volume orders.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Coil and Sheet',
      Finish: 'Hot Rolled / Cold Rolled',
      Use: 'Processing, cutting, manufacturing'
    },
    stockStatus: 'Ready stock',
    tags: ['Mild Steel', 'Coil', 'Sheet', 'Hot Rolled', 'Cold Rolled'],
    x:0,
  },
  {
    id: 'galvanised-steel',
    title: 'Galvanised Steel Coil',
    slug: 'galvanised-steel-coil',
    category: 'Coils & Sheets',
    price: { display: 'Quote on request', value: 9 },
    images: imageSets.coils,
    shortDescription: 'Coated coil for roofing, solar structures, and outdoor applications.',
    longDescription:
      'Galvanised coil for buyers seeking corrosion-resistant sheet supply with processing flexibility. Well suited to roofing, solar structures, and other weather-exposed builds.',
    specs: {
      Material: 'Galvanised',
      Shape: 'Coil',
      Finish: 'Coated',
      Use: 'Roofing, solar structures, outdoor applications'
    },
    stockStatus: 'Ready stock',
    tags: ['Galvanised', 'Coil', 'Coated'],
    x:1,
  },
  {
    id: 'special-quality-steel',
    title: 'Special Quality Steel',
    slug: 'special-quality-steel',
    category: 'Special Grades',
    price: { display: 'Quote on request', value: 10 },
    images: imageSets.coils,
    shortDescription: 'Special grades for demanding applications with tighter material control.',
    longDescription:
      'Special grade steel for critical applications where material consistency, wear resistance, and sourcing confidence matter. Best reviewed with project requirements before dispatch.',
    specs: {
      Material: 'Alloy Steel',
      Shape: 'Custom supply',
      Finish: 'Project dependent',
      Use: 'Critical applications, wear-sensitive work'
    },
    stockStatus: 'On request',
    tags: ['Alloy Steel', 'Special Grade', 'Custom Supply'],
    x:2,
  },
  // {
  //   id: 'gi-pipe-round',
  //   title: 'GI Round Pipe',
  //   slug: 'gi-round-pipe',
  //   category: 'Pipes & Tubes',
  //   price: { display: 'Quote on request', value: 15 },
  //   images: ['/images/company-09.jpg', '/images/company-10.jpg', '/images/company-15.jpg'],
  //   shortDescription: 'Galvanized round pipe for utility, structural, and general fabrication use.',
  //   longDescription:
  //     'A galvanized round pipe option for general purpose construction, utility, and fabrication work. Suitable for buyers who need corrosion protection and dependable stock availability.',
  //   specs: {
  //     Material: 'Galvanized Iron',
  //     Shape: 'Round Pipe',
  //     Finish: 'Coated',
  //     Use: 'Utility, fabrication, structural support'
  //   },
  //   stockStatus: 'Ready stock',
  //   tags: ['Galvanized', 'Pipe', 'Round']
  // },
  // {
  //   id: 'gi-pipe-regular',
  //   title: 'GI Pipe',
  //   slug: 'gi-pipe',
  //   category: 'Pipes & Tubes',
  //   price: { display: 'Quote on request', value: 16 },
  //   images: ['/images/company-09.jpg', '/images/company-10.jpg', '/images/company-16.jpg'],
  //   shortDescription: 'General galvanized pipe for everyday industrial and site applications.',
  //   longDescription:
  //     'Galvanized pipe supplied for site work, support frames, and general industrial handling. A practical stock item for fast dispatch and project requirements.',
  //   specs: {
  //     Material: 'Galvanized Iron',
  //     Shape: 'Pipe',
  //     Finish: 'Coated',
  //     Use: 'Site work, support frames, industrial use'
  //   },
  //   stockStatus: 'Ready stock',
  //   tags: ['Galvanized', 'Pipe', 'Industrial']
  // },
  // {
  //   id: 'round-ms-rod',
  //   title: 'Round Mild Steel Rod',
  //   slug: 'round-mild-steel-rod',
  //   category: 'Bars & Rods',
  //   price: { display: 'Quote on request', value: 17 },
  //   images: ['/images/company-07.jpg', '/images/company-08.jpg', '/images/company-01.jpg'],
  //   shortDescription: 'Round rod for fabrication, reinforcement, and machine shop usage.',
  //   longDescription:
  //     'Round mild steel rod offered for fabrication, reinforcement, and general workshop handling. Suitable for buyers seeking straightforward round section supply.',
  //   specs: {
  //     Material: 'Mild Steel',
  //     Shape: 'Rod',
  //     Finish: 'Hot Rolled',
  //     Use: 'Fabrication, reinforcement, workshop use'
  //   },
  //   stockStatus: 'Ready stock',
  //   tags: ['Mild Steel', 'Rod', 'Round']
  // },
  // {
  //   id: 'plain-gi-sheet',
  //   title: 'Plain Galvanized Iron Sheet',
  //   slug: 'plain-galvanized-iron-sheet',
  //   category: 'Plates & Sheets',
  //   price: { display: 'Quote on request', value: 18 },
  //   images: ['/images/company-17.jpg', '/images/company-18.jpg', '/images/company-11.jpg'],
  //   shortDescription: 'Plain galvanized sheet for roofing, fabrication, and weather-exposed work.',
  //   longDescription:
  //     'Plain galvanized iron sheet suited to roofing, general fabrication, and outdoor use where basic corrosion resistance matters. Reliable for industrial and site supply chains.',
  //   specs: {
  //     Material: 'Galvanized Iron',
  //     Shape: 'Sheet',
  //     Finish: 'Coated',
  //     Use: 'Roofing, fabrication, outdoor use'
  //   },
  //   stockStatus: 'Ready stock',
  //   tags: ['Galvanized', 'Sheet', 'Plain']
  // },
  // {
  //   id: 'mild-steel-binding-wire',
  //   title: 'Mild Steel Binding Wire',
  //   slug: 'mild-steel-binding-wire',
  //   category: 'Special Grades',
  //   price: { display: 'Quote on request', value: 19 },
  //   images: ['/images/company-18.jpg', '/images/company-17.jpg'],
  //   shortDescription: 'Binding wire for reinforcement tying and general site support.',
  //   longDescription:
  //     'Mild steel binding wire for construction sites, reinforcement work, and general packing or tying applications. Simple stock item with practical dispatch planning.',
  //   specs: {
  //     Material: 'Mild Steel',
  //     Shape: 'Wire',
  //     Finish: 'Plain',
  //     Use: 'Reinforcement tying, packing, site work'
  //   },
  //   stockStatus: 'Ready stock',
  //   tags: ['Mild Steel', 'Wire', 'Binding']
  // },
  // {
  //   id: 'ms-v-angle',
  //   title: 'MS V Angle',
  //   slug: 'ms-v-angle',
  //   category: 'Structural Steel',
  //   price: { display: 'Quote on request', value: 20 },
  //   images: ['/images/company-14.jpg', '/images/company-03.jpg', '/images/company-05.jpg'],
  //   shortDescription: 'Angle section for bracing, framing, and support applications.',
  //   longDescription:
  //     'MS V angle for bracing, frames, supports, and lightweight structural assemblies. Useful where a simple angle section is required for fabrication and site build-outs.',
  //   specs: {
  //     Material: 'Mild Steel',
  //     Shape: 'Angle',
  //     Finish: 'Hot Rolled',
  //     Use: 'Bracing, framing, support'
  //   },
  //   stockStatus: 'On request',
  //   tags: ['Mild Steel', 'Angle', 'Structural']
  // },
  // {
  //   id: 'corrugated-gi-sheet',
  //   title: 'Galvanized Iron Corrugated Sheet',
  //   slug: 'galvanized-iron-corrugated-sheet',
  //   category: 'Plates & Sheets',
  //   price: { display: 'Quote on request', value: 21 },
  //   images: ['/images/company-17.jpg', '/images/company-18.jpg', '/images/company-12.jpg'],
  //   shortDescription: 'Corrugated galvanized sheet for roofing and cladding work.',
  //   longDescription:
  //     'Corrugated galvanized iron sheet for roofing and weather protection. A common industrial and construction supply item with practical stock handling.',
  //   specs: {
  //     Material: 'Galvanized Iron',
  //     Shape: 'Corrugated Sheet',
  //     Finish: 'Coated',
  //     Use: 'Roofing, cladding, weather protection'
  //   },
  //   stockStatus: 'Ready stock',
  //   tags: ['Galvanized', 'Sheet', 'Corrugated']
  // },
  // {
  //   id: 'round-erw-pipes',
  //   title: 'Round ERW Pipes',
  //   slug: 'round-erw-pipes',
  //   category: 'Pipes & Tubes',
  //   price: { display: 'Quote on request', value: 22 },
  //   images: ['/images/company-15.jpg', '/images/company-16.jpg', '/images/company-09.jpg'],
  //   shortDescription: 'ERW pipe supply for fabrication and transport of fluids or structures.',
  //   longDescription:
  //     'Round ERW pipe for fabrication, site assemblies, and industrial support applications. Suitable for buyers wanting cleanly formed pipe supply with steady availability.',
  //   specs: {
  //     Material: 'Mild Steel',
  //     Shape: 'ERW Pipe',
  //     Finish: 'Hot Rolled',
  //     Use: 'Fabrication, support structures, site assemblies'
  //   },
  //   stockStatus: 'Ready stock',
  //   tags: ['ERW', 'Pipe', 'Round']
  // },
  // {
  //   id: 'cr-sheet',
  //   title: 'CR Sheet',
  //   slug: 'cr-sheet',
  //   category: 'Plates & Sheets',
  //   price: { display: 'Quote on request', value: 23 },
  //   images: ['/images/company-17.jpg', '/images/company-18.jpg', '/images/company-11.jpg'],
  //   shortDescription: 'Cold rolled sheet for finishing, fabrication, and formability.',
  //   longDescription:
  //     'Cold rolled sheet used in fabrication and finishing workflows where surface quality and consistent dimensions are important. A flexible supply option for industrial buyers.',
  //   specs: {
  //     Material: 'Mild Steel',
  //     Shape: 'Sheet',
  //     Finish: 'Cold Rolled',
  //     Use: 'Fabrication, finishing, formability'
  //   },
  //   stockStatus: 'Ready stock',
  //   tags: ['Cold Rolled', 'Sheet', 'CR']
  // },
  // {
  //   id: 'ms-beam-structural',
  //   title: 'MS Beam',
  //   slug: 'ms-beam',
  //   category: 'Structural Steel',
  //   price: { display: 'Quote on request', value: 24 },
  //   images: ['/images/company-14.jpg', '/images/company-03.jpg', '/images/company-06.jpg'],
  //   shortDescription: 'Beam section for load-bearing and framework applications.',
  //   longDescription:
  //     'MS beam for load-bearing frameworks, structural support, and heavier construction applications. Useful when a standard beam section is needed for quick project procurement.',
  //   specs: {
  //     Material: 'Mild Steel',
  //     Shape: 'Beam',
  //     Finish: 'Hot Rolled',
  //     Use: 'Load-bearing structures, frameworks'
  //   },
  //   stockStatus: 'On request',
  //   tags: ['Mild Steel', 'Beam', 'Structural']
  // },
  // {
  //   id: 'iron-pipe',
  //   title: 'Iron Pipe',
  //   slug: 'iron-pipe',
  //   category: 'Pipes & Tubes',
  //   price: { display: 'Quote on request', value: 25 },
  //   images: ['/images/company-16.jpg', '/images/company-15.jpg', '/images/company-10.jpg'],
  //   shortDescription: 'General iron pipe supply for broad industrial and utility use.',
  //   longDescription:
  //     'Iron pipe supplied for utility systems, industrial handling, and general structural requirements. A broad category item that supports site-level procurement needs.',
  //   specs: {
  //     Material: 'Iron',
  //     Shape: 'Pipe',
  //     Finish: 'Plain / Coated',
  //     Use: 'Utility, industrial, structural use'
  //   },
  //   stockStatus: 'Ready stock',
  //   tags: ['Iron', 'Pipe', 'Utility']
  // }
];

export const productsBySlug = Object.fromEntries(products.map((product) => [product.slug, product]));