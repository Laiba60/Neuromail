import { useState } from "react";
import { toast } from "react-toastify";

export const useEmailFormLogic = () => {
  const [subject, setSubject] = useState("");

  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [ccVisible, setCcVisible] = useState(false);
  const [bccVisible, setBccVisible] = useState(false);
  
  const [recipients, setRecipients] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [activeRecipientType] = useState("to");

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const validFiles = files.filter((file) => allowedTypes.includes(file.type));
    if (validFiles.length !== files.length) {
      toast.error("Only PDF or Word documents are allowed");
      return;
    }

    setLoading(true);
    setAttachments((prev) => [...prev, ...validFiles]);
    setLoading(false);
  };

  const removeAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const addRecipient = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error("Invalid email address");
      return;
    }

    setRecipients((prev) => [
      ...prev,
      {
        email: email.trim(),
        name: email.trim().split("@")[0],
        recipient_type: activeRecipientType,
      },
    ]);
    setInputValue("");
  };


  const handleKeyDown = (e) => {
    if (e.key === " " && inputValue.trim()) {
      e.preventDefault();
      addRecipient(inputValue);
    }
  };
  
  const removeRecipient = (index) => {
    setRecipients((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    subject,
    setSubject,

    attachments,
    setAttachments,
    loading,
    body,
    setBody,
    cc,
    setCc,
    bcc,
    setBcc,
    recipients,
    ccVisible,
     setCcVisible,
     bccVisible,
       setBccVisible,
    setRecipients,
    inputValue,
    setInputValue,
    handleFileChange,
    removeAttachment,
    handleKeyDown,
    removeRecipient,
  };
};
