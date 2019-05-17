declare namespace Factorio {
  /**
   * https://wiki.factorio.com/Prototype
   */
  interface Prototype {
    readonly type: string;
    readonly name: string;
    readonly order?: Order;
    readonly localised_name?: LocalisedString;
    readonly localised_description?: LocalisedString;
  }
}
