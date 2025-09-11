import type { Service } from "$lib/models/service";

export const tollingServices: Service[] = [
  {
    name: 'Fabrication',
    summary: 'Carcass to primals',
    description: "The initial conversion of a carcass into the identifiable parts or *primals* like the Chuck, Ribeye, and Loin you know and love. These are perfect for supermarkets and meat shops.",
    industries: ["supermarket/meat shop"]
  },
  {
    name: 'Transformation',
    summary: 'Primals to cut meat',
    description: 'Often, a restaurant has a specific portioning of meat per dish. For large orders, we can cut your order down to easy-to-use portioned packs, minimizing the amount of work and waste for your kitchen.',
    industries: ["concessionaire", "convenienceStore", "hoReCa", "institution", "supermarket/meat shop"],
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
    description: "Our vacuum tumblers and injectors provide high quality marination, so that you can have the best flavor and consistency for your products.",
    industries: ["hoReCa", "supermarket/meat shop", "concessionaire", "institution"],
    subservice: [
      { name: 'Custom Marinates', description: '' },
      { name: 'Brining', description: '' }
    ]
  },
  {
    name: 'Parcooking',
    summary: '',
    description: 'Some recipes require multiple steps for cooking. This can be great for flavor and texture, but adds overhead to a kitchen. We offer parboiling, par-frying, parbaking, or any combination of these processes to reduce work, and to save you time and money.',
    industries: ["hoReCa", "concessionaire"],
    subservice: [
      { name: 'Boiling', description: '' },
      { name: 'Frying', description: '' },
      { name: 'Baking', description: '' }
    ]
  },
  {
    name: 'Processed Foods',
    summary: '',
    description: 'Some foods take a lot more than marinades and cooking. We offer these additional processes and machinery for the creation of products like sausages, longganisa, and beef patties, that a typical restaurant kitchen does not have the capacity for, or would simply prefer not to handle.',
    industries: ["supermarket/meat shop", "concessionaire", "convenienceStore", "institution", "hoReCa"],
    subservice: [
      { name: 'Sausage', description: '' },
      { name: 'Tocino', description: '' },
      { name: 'Tapa', description: '' },
      { name: 'Longganisa', description: '' },
      { name: 'Burger Patty', description: '' }
    ]
  },
  {
    // Higher level of done-ness. No addition
    name: 'Commissary',
    summary: '',
    description: "Scaling is one of the biggest challenges for a concept. We offer the production of ready-to-heat precursors to your dishes (or dishes in their entirety), so that your kitchen staff can do more. We also provide support to existing commissaries.",
    industries: ["concessionaire", "institution", "supermarket/meat shop", "hoReCa"]
  },
  {
    name: 'Ready to Heat Meals',
    summary: '',
    description: "The natural conclusion to having all our preceding capacities is simply to have an entirely cooked meal, packaged, and ready to heat. We offer development, customization, and white-labeling of these meals, so your supermarket, convenience store, or institution can offer meals with good value for money.",
    industries: ["concessionaire", "convenienceStore", "institution", "supermarket/meat shop"]
  },
  {
    name: 'Logistics',
    summary: '',
    description: 'The ultimate in no-headaches supply chain. A service we offer to only our most important partners, we take away every possible headache, and bring your order straight to your restaurant with our fleet of freezer vans.',
    industries: ["hoReCa"]
  }
];