import ITEM_DATA from './shop-item.data';

const INITIAL_STATE = {
  items: ITEM_DATA
};

const shopItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopItemReducer;