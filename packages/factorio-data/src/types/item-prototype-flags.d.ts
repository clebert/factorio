declare namespace FactorioData {
  type ItemPrototypeFlag =
    | 'hidden'
    | 'hide-from-bonus-gui'
    | 'hide-from-fuel-tooltip'
    | 'not-stackable'
    | 'can-extend-inventory'
    | 'primary-place-result'
    | 'mod-openable'
    | 'only-in-cursor';

  /**
   * https://wiki.factorio.com/Types/ItemPrototypeFlags
   */
  type ItemPrototypeFlags = ItemPrototypeFlag[];
}
