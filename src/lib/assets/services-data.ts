import type { Service } from "$lib/models/service";

export const tollingServices: Service[] = [
  {
    name: 'Fabrication',
    summary: 'Carcass to primals',
    description:
      'The initial conversion of a carcass into the identifiable parts or *primals* you know and love. Chuck, Ribeye, Loin, etc...'
  },
  {
    name: 'Transformation',
    summary: 'Primals to cut meat',
    description: `Maybe a primal is too much to handle; maybe you want thin slices or small cubes. That's where Transformation comes in.`,
    subservice: [
      {
        name: 'Cutting',
        description: `A rough cut cube, about an inch on the side. Useful for hearty stews.`
      },
      {
        name: 'Slicing',
        description: `Thin slices down to 2mm, best for sukiyaki, hotpot, and korean bbq.`
      },
      { name: 'Dicing', description: `Smaller cuts--either small cubes, or strips.` },
      { name: 'Grinding', description: `Necessary for sausages, meatballs, and burger patties.` }
    ]
  },
  {
    name: 'Marination',
    summary: '',
    description: '',
    subservice: [
      { name: 'Custom Marinates', description: '' },
      { name: 'Brining', description: '' }
    ]
  },
  {
    name: 'Cooking',
    summary: '',
    description: '',
    subservice: [
      { name: 'Boiling', description: '' },
      { name: 'Frying', description: '' },
      { name: 'Baking', description: '' }
    ]
  },
  {
    name: 'Processed Foods',
    summary: '',
    description: '',
    subservice: [
      { name: 'Sausage', description: '' },
      { name: 'Tocino', description: '' },
      { name: 'Tapa', description: '' },
      { name: 'Longganisa', description: '' },
      { name: 'Burger Patty', description: '' }
    ]
  },
  {
    name: 'Ready to Heat Meal',
    summary: '',
    description: '',
  }
];