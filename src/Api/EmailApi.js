import axios from "axios";

export const sendEmail = async ({ token, mailboxId, emailData }) => {
  const formData = new FormData();

  formData.append("subject", emailData.subject);
  formData.append("body", emailData.body);
  formData.append("email_type", emailData.email_type);
  formData.append("recipients", JSON.stringify(emailData.recipients));

  if (emailData.attachments && emailData.attachments.length > 0) {
    emailData.attachments.forEach((file) => {
      formData.append("attachments", file);
    });
  }

  const response = await axios.post(
    `https://dev.api.neuromail.space/api/mailbox/${mailboxId}/emails/`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
