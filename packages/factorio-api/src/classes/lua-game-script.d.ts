declare namespace FactorioApi {
  /**
   * https://lua-api.factorio.com/latest/LuaGameScript.html
   */
  interface LuaGameScript {
    print(this: void, message: LocalisedString, color?: Color): void;
  }
}
