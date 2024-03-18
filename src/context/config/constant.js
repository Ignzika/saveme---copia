export const URLBASE =`https://backend-backup-3tm8.onrender.com`
const URLBACK = `/api/v1`
  
   // "http://localhost:3000
  // "https://backend-backup-3tm8.onrender.com";
  //  https://backend-backup-3tm8.onrender.com
  // /users/history/:id


export const ENDPOINTPRODUCTS = {
  history: URLBASE + URLBACK + `/store/users/history`,//get
  allFavorites: URLBASE + URLBACK + `/user/favorites`, //post
  singleUserFav: URLBASE + URLBACK + `/favorite/like`,//get
}

export const ENDPOINT = {
  login: URLBASE + URLBACK + `/login/user/login`,
  registarUsuario: URLBASE + URLBACK + `/user`,
  user: URLBASE + URLBACK + `/admin`,
  products: URLBASE + URLBACK + `/store/products`,
  validarGogle: URLBASE + URLBACK + `/google/user/login`,
};

export const ADMINENDPOINT = {
  users: URLBASE + URLBACK + `/admin`,
  products: URLBASE + URLBACK + `/store/admin`,
  deleteUser: URLBASE + URLBACK + `/user`,
  CProduct: URLBASE + URLBACK + `/store/admin/products`,
  UDProduct: URLBASE + URLBACK + `/store/admin/product`,
  
}

export const USEREDNPOINT = {
  addres: URLBASE + URLBACK + `/user/address`,
  cart: URLBASE + URLBACK + `/store/user/cart`,
  order: URLBASE + URLBACK + `/store/user/order`
}