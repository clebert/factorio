declare namespace FactorioData {
  /**
   * https://wiki.factorio.com/Types/FluidIngredientPrototype
   */
  interface FluidIngredientPrototype {
    readonly type: 'fluid';
    readonly name: string;
    readonly amount: number;
    readonly temperature?: number;
    readonly minimum_temperature?: number;
    readonly maximum_temperature?: number;
    readonly catalyst_amount?: number;
  }
}
