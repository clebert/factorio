declare namespace FactorioData {
  /**
   * https://wiki.factorio.com/Types/ItemIngredientPrototype
   */
  interface ItemIngredientPrototype {
    readonly type: 'item';
    readonly name: string;
    readonly amount: number;
    readonly catalyst_amount?: number;
  }
}
