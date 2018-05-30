import { COUNTER_INCREMENT } from "../constants";

// action creator (fabrique)
export const counterIncrement = (step = 1, index = 0) => ({
  type: COUNTER_INCREMENT,
  step,
  index,
});
