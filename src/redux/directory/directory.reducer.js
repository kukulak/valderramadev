const INITIAL_STATE = {
    sections: [
      {
        title: 'luka',
        imageUrl: 'http://morrisart.com.mx/images/LUKA-B.png',
        id: 1,
        linkUrl: 'colecciones/luka'
      },
      {
        title: 'sili',
        imageUrl: 'http://morrisart.com.mx/images/SILI-B.png',
        id: 2,
        linkUrl: 'colecciones/sili'
      },
      {
        title: 'luka mexika',
        imageUrl: 'http://morrisart.com.mx/images/LUKAMEXIKA-B.png',
        id: 3,
        linkUrl: 'colecciones/lukamexika'
      },
      {
        title: 'sili mexika',
        imageUrl: 'http://morrisart.com.mx/images/SILIMEXICA-B.png',
        size: 'large',
        id: 4,
        linkUrl: 'colecciones/silimexika'
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;