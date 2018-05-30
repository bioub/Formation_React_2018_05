import { COUNTER_INCREMENT } from "../constants";


export const counter = (state = 0, {type, step}) => {
  switch (type) {
    case COUNTER_INCREMENT:
      return state + step;
  }

  return state;
};


// fonction pure
// - prédictive (toujours le meme résultat si les memes params)
// - ne modifie pas ses params
export const counters = (state = [], {type, step, index}) => {
  switch (type) {
    case COUNTER_INCREMENT:
      return [
        ...state.slice(0, index),
        counter(state[index], {type, step}),
        ...state.slice(index + 1),
      ];
  }

  return state;
};

