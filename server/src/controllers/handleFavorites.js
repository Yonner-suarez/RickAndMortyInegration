// let charFavorites = [];

// const favorites = (char) => {
//   if (Object.entries(char).length !== 0) {
//     charFavorites.push({
//       ide: char.ide,
//       name: char.name,
//       species: char.species,
//       gender: char.gender,
//       origin: char.origin,
//       image: char.image,
//       onClose: char.onClose,
//     });
//   }
//   return charFavorites;
// };
// const deleteFav = (id) => {
//   const find = charFavorites.find((char) => char.ide === id);

//   if (!find) throw new Error("Personaje no existe");

//   charFavorites = charFavorites.filter((char) => char.ide != id);
//   if (charFavorites) {
//     return charFavorites;
//   }
// };

// module.exports = {
//   favorites,
//   deleteFav,
// };
