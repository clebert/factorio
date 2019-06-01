declare namespace FactorioData {
  /**
   * https://wiki.factorio.com/Prototype/Item
   */
  interface Item extends Prototype {
    readonly type: 'item';
    readonly icons: [IconData, ...IconData[]];
    readonly stack_size: ItemCountType;
    readonly flags: ItemPrototypeFlags;
    readonly place_result?: string;
    readonly placed_as_equipment_result?: string;
    readonly subgroup?: string;
    readonly place_as_tile?: PlaceAsTile;
    readonly stackable?: boolean;
    readonly primary_place_result_item?: boolean;
    readonly can_be_mod_opened?: boolean;
    readonly default_request_amount?: ItemCountType;
    readonly wire_count?: ItemCountType;
    readonly fuel_value?: Energy;
    readonly fuel_category?: string;
    readonly burnt_result?: string;
    readonly fuel_acceleration_multiplier?: number;
    readonly fuel_top_speed_multiplier?: number;
    readonly fuel_emissions_multiplier?: number;
    readonly fuel_glow_color?: Color;
    readonly dark_background_icons?: [DarkIconData, ...DarkIconData[]];

    readonly rocket_launch_products?: [
      ItemProductPrototype,
      ...ItemProductPrototype[]
    ];
  }
}
