declare namespace Factorio {
  /**
   * https://wiki.factorio.com/Types/IconData
   */
  interface IconData {
    readonly icon: FileName;
    readonly icon_size: SpriteSizeType;
    readonly tint?: Color;
  }
}
