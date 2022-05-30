import fetchClientThunk from "../../fetch/fetchClientThunk";

export default function deleteUserThunk(userIndex) {
  return async (dispatch, getState) => {
    /**
     * Send request
     */
    try {
      await dispatch(
        fetchClientThunk({
          loadMsg: "Sending your request...",
          method: "DELETE",
          endpoint: `users/${userIndex}`,
          parseJson: false,
        })
      );
    } catch (error) {
      alert(
        "Something wrong happened when abandoning your hedgehog...please try again."
      );
      throw error;
    }
  };
}
