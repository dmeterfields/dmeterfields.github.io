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
    description: 'Often, a restaurant wants thin slices or small cubes, or something special. We can cut your order down to a manageable size, minimizing the amount of work your kitchen needs to do.',
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
    description: 'Marination and brining can cost precious time and space in your kitchen. We can marinate your orders to increase the efficiency of your kitchen.',
    subservice: [
      { name: 'Custom Marinates', description: '' },
      { name: 'Brining', description: '' }
    ]
  },
  {
    name: 'Cooking',
    summary: '',
    description: 'A large number of guests is a good thing, but it can be a challenge to serve them on time. We can boil, fry, or bake your raws to decrease your turnaround time. Simply reheat, and then plate!',
    subservice: [
      { name: 'Boiling', description: '' },
      { name: 'Frying', description: '' },
      { name: 'Baking', description: '' }
    ]
  },
  {
    name: 'Processed Foods',
    summary: '',
    description: 'Some foods take a lot more than marinades and cooking. We offer these additional processes and machinery for the creation of products like sausages, tocino, and burger patties, that a typical restaurant kitchen does not have the capacity for, or would simply prefer not to handle.',
    subservice: [
      { name: 'Sausage', description: '' },
      { name: 'Tocino', description: '' },
      { name: 'Tapa', description: '' },
      { name: 'Longganisa', description: '' },
      { name: 'Burger Patty', description: '' }
    ]
  },
  {
    name: 'Ready to Heat Meals',
    summary: '',
    description: 'The natural conclusion to having all our preceding capacities is simply to have an entirely cooked meal, packaged, and ready to heat. We offer white-labeling of these meals, so you can focus on your brands and ideas, and we can execute.',
  }
];