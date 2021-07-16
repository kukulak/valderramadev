import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4}
  
]


console.log(COLLECTION_ID_MAP)

var tester;

COLLECTION_ID_MAP.find(tester => tester.id === 3);

console.log(tester)




const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

// export const selectCollection = collectionUrlParam =>
//   createSelector( [selectCollections], collections => 
//       collections.find(
//         collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//         )
//   );

  export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
  
  // export const selectCollection = collectionUrlParam =>
  //   createSelector(
  //     [selectCollections],
  //     collections => collections[collectionUrlParam]
  //   );