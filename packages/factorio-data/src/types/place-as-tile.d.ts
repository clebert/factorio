declare namespace FactorioData {
  /**
   * https://wiki.factorio.com/Types/PlaceAsTile
   */
  interface PlaceAsTile {
    readonly result: string;
    readonly condition: CollisionMask;
    readonly condition_size: number;
  }
}
