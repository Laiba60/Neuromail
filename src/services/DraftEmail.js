// src/services/DraftEmail.js
import axios from "axios";

const DraftEmail = async ({ mailboxId, token, search = "", page = 1 }) => {
  try {
    const response = await axios.get(
      `https://dev.api.neuromail.space/api/mailbox/${mailboxId}/emails/`,
      {
        params: {
          email_type: "draft",
          is_seen: false,
          is_starred: false,
          search,
          page,
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching draft emails:", error);
    throw error;
  }
};

export default DraftEmail;
