export const selectCounters = (state) => state.counters;
export const selectCount = (state, index = 0) => selectCounters(state)[index];
