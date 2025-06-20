import axios from "axios";
const API_BASE_URL = "https://dev.api.neuromail.space/api";
export const sendEmail = async ({ token, mailboxId, emailData }) => {
  try {
    const formData = new FormData();
    formData.append("email_type", emailData.email_type);
    formData.append("body", emailData.body);
    formData.append("subject", emailData.subject);
    formData.append("recipients", JSON.stringify(emailData.recipients));
    if (emailData.attachments && emailData.attachments.length > 0) {
      emailData.attachments.forEach((file) => {
        formData.append("attachments", file);
      });
    }
    const response = await axios.post(
      `${API_BASE_URL}/mailbox/${mailboxId}/emails/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
