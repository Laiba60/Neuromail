import { sendEmail } from "../api/EmailApi";
import { toast } from "react-toastify";

export const handleSend = async ({
  recipients = [],
  inputValue = "",
  setInputValue = () => {},
  cc = "",
  bcc = "",
  subject = "",
  body = "",
  attachments = [],
  token,
  mailboxId,
}) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (inputValue && emailRegex.test(inputValue.trim())) {
    recipients.push({
      email: inputValue.trim(),
      name: inputValue.trim().split("@")[0],
      recipient_type: "to",
    });
    setInputValue("");
  }

  if (cc && emailRegex.test(cc.trim())) {
    recipients.push({
      email: cc.trim(),
      name: cc.trim().split("@")[0],
      recipient_type: "cc",
    });
  }

  if (bcc && emailRegex.test(bcc.trim())) {
    recipients.push({
      email: bcc.trim(),
      name: bcc.trim().split("@")[0],
      recipient_type: "bcc",
    });
  }

  if (recipients.length === 0) {
    toast.error("At least one recipient is required.");
    return;
  }
  const plainTextBody = body.replace(/<[^>]*>/g, "").trim();

  if (!plainTextBody || attachments.length === 0) {
    toast.error(
      "Cannot send an empty email. Please write a message or attach a file."
    );
    return;
  }

  const emailData = {
    body: body || "No content",
    subject: subject || "No Subject",
    email_type: "sent",
    recipients,
    attachments,
  };

  try {
    const response = await sendEmail({ token, mailboxId, emailData });
    toast.success("Email sent successfully");
    return response;
  } catch (error) {
    toast.error(`Error: ${error.message || "Something went wrong"}`);
    throw error;
  }
};
