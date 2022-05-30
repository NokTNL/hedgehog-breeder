import fetchClientThunk from "../../fetch/fetchClientThunk";

export default function addUserThunk({ imgUrl, newName }) {
  return async (dispatch, getState) => {
    try {
      /**
       * Send request
       */
      const newUser = await dispatch(
        fetchClientThunk({
          loadMsg: "Breeding your new hedgehog...",
          method: "POST",
          endpoint: `users`,
          data: {
            avatar: imgUrl,
            first_name: newName,
          },
        })
      );
      /**
       * Validate data format
       */
      for (const property of ["first_name", "avatar", "id"]) {
        const value = newUser[property];
        if (value === undefined || typeof value !== "string") {
          throw new Error(
            `addUserThunk: new user has invalid property ${property} of value ${value}`
          );
        }
      }
      return newUser;
    } catch (error) {
      alert(
        "Something wrong happened when breeding your new hedgehog...please try again."
      );
      throw error;
    }
  };
}
