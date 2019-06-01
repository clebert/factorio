declare namespace FactorioApi {
  /**
   * https://lua-api.factorio.com/latest/LuaBootstrap.html
   */
  interface LuaBootstrap {
    on_nth_tick(
      this: void,
      tick?: number | number[],
      handler?: (this: void, event: NthTickEvent) => void
    ): void;
  }
}
