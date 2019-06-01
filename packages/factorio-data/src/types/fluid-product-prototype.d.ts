declare namespace FactorioData {
  /**
   * https://wiki.factorio.com/Types/FluidProductPrototype
   */
  type FluidProductPrototype =
    | {
        readonly type: 'fluid';
        readonly name: string;
        readonly probability?: number;
        readonly amount: number;
        readonly temperature?: number;
        readonly catalyst_amount?: number;
      }
    | {
        readonly type: 'fluid';
        readonly name: string;
        readonly probability?: number;
        readonly amount_min: MaterialAmountType;
        readonly amount_max: MaterialAmountType;
        readonly temperature?: number;
        readonly catalyst_amount?: number;
      };
}
