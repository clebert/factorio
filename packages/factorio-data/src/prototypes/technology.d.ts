declare namespace FactorioData {
  interface Unit {
    readonly count?: number;
    readonly count_formula?: string;
    readonly time: number;
    readonly ingredients: IngredientPrototype[];
  }

  interface TechnologyData {
    readonly upgrade?: boolean;
    readonly enabled?: boolean;
    readonly hidden?: boolean;
    readonly visible_when_disabled?: boolean;
    readonly unit: Unit;
    readonly max_level?: number | string;
    readonly prerequisites: string[];
    readonly effects: [Modifier, ...Modifier[]];
  }

  /**
   * https://wiki.factorio.com/Prototype/Technology
   */
  interface Technology extends Prototype, TechnologyData {
    readonly type: 'technology';
    readonly icons: [IconData, ...IconData[]];
  }
}
