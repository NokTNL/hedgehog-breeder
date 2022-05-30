import fetchClientThunk from "../../fetch/fetchClientThunk";

export default function addUserThunk({ imgUrl, newName }) {
  return async (dispatch, getState) => {
    try {
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
      return newUser;
    } catch (error) {
      alert(
        "Something wrong happened when breeding your new hedgehog...please try again."
      );
      throw error;
    }
  };
}
