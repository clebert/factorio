declare namespace Factorio {
  /**
   * https://lua-api.factorio.com/latest/Concepts.html#Modifier
   */
  type Modifier =
    | {
        readonly type: 'gun-speed';
        readonly ammo_category: string;
        readonly modifier: number;
      }
    | {
        readonly type: 'give-item';
        readonly item: string;
        readonly count?: number;
      }
    | {
        readonly type: 'turret-attack';
        readonly turret_id: string;
        readonly modifier: number;
      }
    | {
        readonly type: 'unlock-recipe';
        readonly recipe: string;
      }
    | {
        readonly type: 'nothing';
        readonly effect_description: LocalisedString;
      }
    | {
        readonly type:
          | 'inserter-stack-size-bonus'
          | 'stack-inserter-capacity-bonus'
          | 'laboratory-speed'
          | 'character-logistic-slots'
          | 'character-logistic-trash-slots'
          | 'maximum-following-robots-count'
          | 'worker-robot-speed'
          | 'worker-robot-storage'
          | 'ghost-time-to-live'
          | 'ammo-damage'
          | 'character-crafting-speed'
          | 'character-mining-speed'
          | 'character-running-speed'
          | 'character-build-distance'
          | 'character-item-drop-distance'
          | 'character-reach-distance'
          | 'character-resource-reach-distance'
          | 'character-item-pickup-distance'
          | 'character-loot-pickup-distance'
          | 'character-inventory-slots-bonus'
          | 'deconstruction-time-to-live'
          | 'character-health-bonus'
          | 'auto-character-logistic-trash-slots'
          | 'mining-drill-productivity-bonus'
          | 'train-braking-force-bonus'
          | 'zoom-to-world-enabled'
          | 'zoom-to-world-ghost-building-enabled'
          | 'zoom-to-world-blueprint-enabled'
          | 'zoom-to-world-deconstruction-planner-enabled'
          | 'zoom-to-world-selection-tool-enabled'
          | 'worker-robot-battery'
          | 'laboratory-productivity'
          | 'follower-robot-lifetime'
          | 'artillery-range';

        readonly modifier: number;
      };
}
