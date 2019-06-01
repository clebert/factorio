declare namespace FactorioData {
  /**
   * https://wiki.factorio.com/Types/ItemProductPrototype
   */
  type ItemProductPrototype =
    | {
        readonly type: 'item';
        readonly name: string;
        readonly probability?: number;
        readonly amount: number;
        readonly catalyst_amount?: number;
      }
    | {
        readonly type: 'item';
        readonly name: string;
        readonly probability?: number;
        readonly amount_min: number;
        readonly amount_max: number;
        readonly catalyst_amount?: number;
      };
}
