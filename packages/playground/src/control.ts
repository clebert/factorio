script.on_nth_tick(50, ({tick, nth_tick}) => {
  game.print(`tick: ${tick}, nth_tick: ${nth_tick}`);
});
