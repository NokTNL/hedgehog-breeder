import fetchClientThunk from "../../fetch/fetchClientThunk";

export default async function deleteUserThunk(userIndex: number) {
  /**
   * Send request
   */
  try {
    await fetchClientThunk({
      loadMsg: "Sending your request...",
      method: "DELETE",
      endpoint: `users/${userIndex}`,
      parseJson: false,
    });
  } catch (error) {
    alert(
      "Something wrong happened when abandoning your hedgehog...please try again."
    );
    throw error;
  }
}
