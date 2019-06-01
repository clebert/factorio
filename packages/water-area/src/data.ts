/// <reference types="factorio-data" />

const testMode = false;

interface WaterAreaDescriptor {
  readonly name: string;
  readonly tint: FactorioData.Color;
  readonly order: string;
  readonly waterAmount: number;
}

function createColor(
  r: number,
  g: number,
  b: number,
  a: number = 100
): FactorioData.Color {
  return {r: r / 100, g: g / 100, b: b / 100, a: a / 100};
}

const shallowWaterAreaTint = createColor(0, 100, 100);
const waterAreaTint = createColor(0, 75, 100);
const deepWaterAreaTint = createColor(0, 50, 100);

// TODO: water-mud, water-green, deepwater-green
const waterAreaDescriptors: WaterAreaDescriptor[] = [
  {
    name: 'water-shallow',
    tint: shallowWaterAreaTint,
    order: 'a',
    waterAmount: 50
  },
  {
    name: 'water',
    tint: waterAreaTint,
    order: 'b',
    waterAmount: 100
  },
  {
    name: 'deepwater',
    tint: deepWaterAreaTint,
    order: 'c',
    waterAmount: 200
  }
];

const waterAreaTechnology: FactorioData.Technology = {
  type: 'technology',
  name: 'water-area',
  icons: [
    {
      icon: '__base__/graphics/technology/concrete.png',
      icon_size: 128,
      tint: deepWaterAreaTint
    }
  ],
  prerequisites: testMode ? [] : ['logistic-science-pack'],
  unit: {
    count: testMode ? 1 : 50,
    ingredients: [
      {type: 'item', name: 'automation-science-pack', amount: 1},
      {type: 'item', name: 'logistic-science-pack', amount: 1}
    ],
    time: testMode ? 1 : 30
  },
  effects: [
    {type: 'unlock-recipe', recipe: 'water-shallow'},
    {type: 'unlock-recipe', recipe: 'water'},
    {type: 'unlock-recipe', recipe: 'deepwater'}
  ],
  order: 'b-e'
};

data.extend([waterAreaTechnology]);

for (const waterAreaDescriptor of waterAreaDescriptors) {
  const {name, tint, order, waterAmount} = waterAreaDescriptor;

  const waterAreaRecipe: FactorioData.Recipe = {
    type: 'recipe',
    name,
    category: testMode ? 'crafting' : 'crafting-with-fluid',
    ingredients: testMode
      ? []
      : [{type: 'fluid', name: 'water', amount: waterAmount}],
    results: [{type: 'item', name, amount: testMode ? 1000 : 1}],
    energy_required: testMode ? 0.01 : waterAmount * 0.005,
    enabled: testMode
  };

  const waterAreaItem: FactorioData.Item = {
    type: 'item',
    name,
    order: `c-${order}`,
    icons: [
      {icon: '__base__/graphics/icons/concrete.png', icon_size: 32, tint}
    ],
    stack_size: testMode ? 1000 : 100,
    flags: [],
    subgroup: 'terrain',
    place_as_tile: {
      result: name,
      condition: ['consider-tile-transitions'],
      condition_size: 1
    }
  };

  data.extend([waterAreaRecipe, waterAreaItem]);
}
