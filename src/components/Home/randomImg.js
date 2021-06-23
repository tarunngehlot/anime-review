function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[index] = r(item); });
    return images;
  }
  
  export const images = importAll(require.context('./RndmImg', false, /\.(png|jpe?g|svg)$/));