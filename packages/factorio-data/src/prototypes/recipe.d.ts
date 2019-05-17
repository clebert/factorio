declare namespace Factorio {
  interface RecipeData {
    readonly ingredients: IngredientPrototype[];
    readonly results: [ProductPrototype, ...ProductPrototype[]];
    readonly energy_required?: number;
    readonly emissions_multiplier?: number;
    readonly requester_paste_multiplier?: number;
    readonly overload_multiplier?: number;
    readonly enabled?: boolean;
    readonly hidden?: boolean;
    readonly hide_from_stats?: boolean;
    readonly allow_decomposition?: boolean;
    readonly allow_as_intermediate?: boolean;
    readonly allow_intermediates?: boolean;
    readonly always_show_made_in?: boolean;
    readonly show_amount_in_title?: boolean;
    readonly always_show_products?: boolean;
    readonly main_product?: string;
  }

  /**
   * https://wiki.factorio.com/Prototype/Recipe
   */
  interface Recipe extends Prototype, RecipeData {
    readonly type: 'recipe';

    readonly category?:
      | 'advanced-crafting'
      | 'basic-crafting'
      | 'centrifuging'
      | 'chemistry'
      | 'crafting'
      | 'crafting-with-fluid'
      | 'oil-processing'
      | 'rocket-building'
      | 'smelting';

    readonly subgroup?: string;
    readonly icons?: [IconData, ...IconData[]];

    readonly crafting_machine_tint?: {
      readonly primary?: Color;
      readonly secondary?: Color;
      readonly tertiary?: Color;
    };
  }
}
