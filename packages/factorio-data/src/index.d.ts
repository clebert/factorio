/// <reference path="./concepts/index.d.ts" />
/// <reference path="./prototype.d.ts" />
/// <reference path="./prototypes/index.d.ts" />
/// <reference path="./types/index.d.ts" />

/**
 * https://github.com/wube/factorio-data/blob/master/core/lualib/dataloader.lua
 */
declare namespace data {
  function extend(otherData: object[]): void;
}
