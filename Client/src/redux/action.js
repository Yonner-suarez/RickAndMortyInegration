import axios from "axios";
import Swal from "sweetalert2";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const RESET = "RESET";
export const USER = "USER";

export const addFav = (character) => {
  const endpoint = "/fav";

  try {
    return async (dispatch) => {
      const resp = await axios.post(endpoint, character);
      const { data } = resp;
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    };
  } catch (error) {
    return Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: error.message,
      confirmButtonColor: "black",
      background: "rgba(0, 0, 0, 0.715)",
      color: "#fff",
      iconColor: "rgba(172, 255, 47)",
      width: "400px",
    });
  }
};

// return (dispatch) => {
//    axios.post(endpoint, character).then(({ data }) => {
//     return dispatch({
//       type: ADD_FAV,
//       payload: data,
//     });
//   });
// };

export const removeFav = (id) => {
  const endpoint = `/fav/${id}`;
  try {
    return async (dispatch) => {
      const res = await axios.delete(endpoint);
      const { data } = res;
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    };
  } catch (error) {
    return Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: error.message,
      confirmButtonColor: "black",
      background: "rgba(0, 0, 0, 0.715)",
      color: "#fff",
      iconColor: "rgba(172, 255, 47)",
      width: "400px",
    });
  }
  // return (dispatch) => {
  //   axios.delete(endpoint).then(({ data }) => {
  //     return dispatch({
  //       type: REMOVE_FAV,
  //       payload: data,
  //     });
  //   });
  // };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};
export const getUser = (user) => {
  return {
    type: USER,
    payload: user,
  };
};
