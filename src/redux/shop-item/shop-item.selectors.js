import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';



const selectItem = state => state.item;

export const selectItems = createSelector(
  [selectItem],
  item => item.items
);


export const selectCollectionId = createSelector(
  [selectItems],
  items => Object.keys(items).map(key => items[key])
  );
  
  
export const selectItemsForPreview = createSelector(
  [selectCollectionId],
  items => Object.keys(items).map(key => items[key])
  );



export const selectCollectionItem = memoize((itemUrlParam) =>
  createSelector(
  [selectItems],
  (items) => items[itemUrlParam]
  )
  );
      
console.log("shopItems.selectors")
