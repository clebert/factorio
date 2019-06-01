declare namespace FactorioApi {
  /**
   * https://lua-api.factorio.com/latest/Concepts.html#NthTickEvent
   */
  interface NthTickEvent {
    readonly tick: number;
    readonly nth_tick: number;
  }
}
