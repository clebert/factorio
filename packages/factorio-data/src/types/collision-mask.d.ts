declare namespace Factorio {
  type Layer =
    | 'ground-tile'
    | 'water-tile'
    | 'resource-layer'
    | 'doodad-layer'
    | 'floor-layer'
    | 'item-layer'
    | 'ghost-layer'
    | 'object-layer'
    | 'player-layer'
    | 'train-layer'
    | 'layer-11'
    | 'layer-12'
    | 'layer-13'
    | 'layer-14'
    | 'layer-15';

  type CollisionOption =
    | 'not-colliding-with-itself'
    | 'consider-tile-transitions'
    | 'colliding-with-tiles-only';

  /**
   * https://wiki.factorio.com/Types/CollisionMask
   */
  type CollisionMask = (Layer | CollisionOption)[];
}
