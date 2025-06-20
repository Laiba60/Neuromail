import React, { useState, useRef } from "react";
import { sendEmail } from "../Api/EmailApi";
const SentEmail = () => {
  const [subject, setSubject] = useState("");
  const [to, setTo] = useState("");
  const [ccVisible, setCcVisible] = useState(false);
  const [bccVisible, setBccVisible] = useState(false);
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState("");

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setLoading(true);

    setTimeout(() => {
      setAttachments((prev) => [...prev, ...files]);
      setLoading(false);
    }, 2000);
  };

  const removeAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSend = async () => {
    console.log("Send button clicked");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzgwNTg5OTAzLCJpYXQiOjE3NTAzNDk5MDMsImp0aSI6IjY1MDdhYzUzMDA0ODQxNDBiOTgyMTJiZWM0ZjVmMjA1IiwidXNlcl9pZCI6MTMzNn0.itRwu0AUG3uXs_D-L-lN1LiZ2Hbm0sG3XWtn18FDFj0";
    const mailboxId = "1215qHFMLKzSKWb";

    const recipients = [];

    if (to) {
      recipients.push({
        email: to,
        recipient_type: "to",
        name: to.split("@")[0],
      });
    }
    if (cc) {
      recipients.push({
        email: cc,
        recipient_type: "cc",
        name: cc.split("@")[0],
      });
    }
    if (bcc) {
      recipients.push({
        email: bcc,
        recipient_type: "bcc",
        name: bcc.split("@")[0],
      });
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
      console.log("Email sent successfully:", response);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <div className="absolute bottom-0 right-3 w-[43vw] hidden md:flex flex-col border border-black justify-between h-[80vh] text-[#192839] rounded-tl-2xl font-sans p-4 rounded-tr-2xl shadow-highRaised bg-white">
      <div className="relative flex-1 flex flex-col overflow-auto">
        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center z-20">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <h3 className="font-[600] text-[15px]">New Message</h3>
          <button className="text-gray-500 hover:text-gray-700">✖</button>
        </div>

        <p className="text-[10px] text-[#40566D] mt-1">
          From LAIBASAEED &lt;LaibaSaeed@neuromail.online&gt;
        </p>

        <div className="relative border-b">
          <div className="flex items-center text-[14px] gap-2 py-2 mt-3">
            <p className="font-[500] text-[14px] flex-nowrap">To</p>
            <input
              name="to"
              type="email"
              className="w-full outline-none text-[14px]"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <p className="text-[14px] text-[#747789] absolute right-1 bottom-1">
            {!ccVisible && (
              <span
                className="hover:border-b-[1.5px] hover:border-[#66697a] cursor-pointer mr-2"
                onClick={() => setCcVisible(true)}
              >
                Cc
              </span>
            )}
            {!bccVisible && (
              <span
                className="hover:border-b-[1.5px] hover:border-[#66697a] cursor-pointer"
                onClick={() => setBccVisible(true)}
              >
                Bcc
              </span>
            )}
          </p>
        </div>

        {ccVisible && (
          <div className="flex items-center gap-2 py-2 border-b mt-1">
            <p className="font-[500] text-[14px] flex-nowrap">Cc</p>
            <input
              name="cc"
              type="email"
              className="w-full outline-none text-[14px]"
              value={cc}
              onChange={(e) => setCc(e.target.value)}
            />
            <button
              onClick={() => {
                setCcVisible(false);
                setCc("");
              }}
              className="text-gray-500 text-xs hover:text-gray-700"
            >
              ✖
            </button>
          </div>
        )}

        {bccVisible && (
          <div className="flex items-center gap-2 py-2 border-b mt-1">
            <p className="font-[500] text-[14px] flex-nowrap">Bcc</p>
            <input
              name="bcc"
              type="email"
              className="w-full outline-none text-[14px]"
              value={bcc}
              onChange={(e) => setBcc(e.target.value)}
            />
            <button
              onClick={() => {
                setBccVisible(false);
                setBcc("");
              }}
              className="text-gray-500 text-xs hover:text-gray-700"
            >
              ✖
            </button>
          </div>
        )}

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full border-b text-[16px] py-2 text-[#40566D] outline-none mt-2"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <textarea
        placeholder="Write your text here"
        className="w-full mt-2 text-[14px] p-2  outline-none h-[150px] resize-none"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      {attachments.length > 0 && (
        <div className="mt-2 mb-2 text-sm text-gray-700 border-t pt-2">
          <p className="font-semibold mb-1">Attachments:</p>
          <ul className="list-disc ml-5 space-y-1">
            {attachments.map((file, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>{file.name}</span>
                <button
                  onClick={() => removeAttachment(index)}
                  className="ml-3 text-red-500 text-xs "
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col gap-2 relative">
        <div className="flex justify-between items-center pt-1 bg-white">
          <div className="flex items-center">
            <button
              onClick={handleSend}
              className="flex items-center justify-between mr-1 h-[33px] w-[95px] pr-2 pl-3 py-2 bg-[#0E57CB] text-white rounded-[200px] font-[500] text-[14px] shadow-md hover:bg-[#1765c1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a73e8] transition duration-150"
            >
              Send
              <svg
                width="18"
                height="30"
                viewBox="0 0 18 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[25px] h-[25px]"
              >
                <line
                  x1="0.25"
                  y1="0.724609"
                  x2="0.249999"
                  y2="29.2756"
                  stroke="#90A5BB"
                ></line>
                <path d="M11 13.5L14.5 16.5L18 13.5H11Z" fill="white" />
              </svg>
            </button>

            <input
              type="file"
              ref={fileInputRef}
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <div style={{ position: "relative", display: "inline-block" }}>
              <button
                onClick={() => fileInputRef.current.click()}
                className="ml-2 rounded-full bg-gray-200 hover:bg-gray-300"
                title="Add Attachment"
              >
                📎
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SentEmail;
