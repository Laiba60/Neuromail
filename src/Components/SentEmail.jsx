import React, { useState, useRef } from "react";
import { sendEmail } from "../Api/EmailApi";
import { toast } from "react-toastify";
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
  const [toList, setToList] = useState([]);
  const [toInput, setToInput] = useState("");

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length === 0) return;

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
  const handleSend = async () => {
    if (toInput.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(toInput.trim())) {
        toList.push(toInput.trim());
        setToInput("");
      } else {
        toast.error("Invalid To email address");
        return;
      }
    }

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzgwNTg5OTAzLCJpYXQiOjE3NTAzNDk5MDMsImp0aSI6IjY1MDdhYzUzMDA0ODQxNDBiOTgyMTJiZWM0ZjVmMjA1IiwidXNlcl9pZCI6MTMzNn0.itRwu0AUG3uXs_D-L-lN1LiZ2Hbm0sG3XWtn18FDFj0"; // Don't expose this in productio";
    const mailboxId = "1215qHFMLKzSKWb";
    const recipients = [];

    toList.forEach((email) => {
      recipients.push({
        email,
        recipient_type: "to",
        name: email.split("@")[0],
      });
    });

    if (cc && cc.length > 0) {
      cc.split(",").forEach((email) => {
        const trimmed = email.trim();
        if (trimmed) {
          recipients.push({
            email: trimmed,
            recipient_type: "cc",
            name: trimmed.split("@")[0],
          });
        }
      });
    }

    if (bcc && bcc.length > 0) {
      bcc.split(",").forEach((email) => {
        const trimmed = email.trim();
        if (trimmed) {
          recipients.push({
            email: trimmed,
            recipient_type: "bcc",
            name: trimmed.split("@")[0],
          });
        }
      });
    }

    if (recipients.length === 0) {
      toast.error("At least one recipient is required.");
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
    } catch (error) {
      toast.error(`Error: ${error.message || "Something went wrong"}`);
    }
  };

  const handleToKeyDown = (e) => {
    if (e.key === "Enter" && toInput.trim()) {
      e.preventDefault();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(toInput.trim())) {
        setToList([...toList, toInput.trim()]);
        setToInput("");
      } else {
        toast.error("Invalid email address");
      }
    }
  };
  const removeToEmail = (index) => {
    setToList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="absolute bottom-0 right-3 w-[43vw] hidden md:flex flex-col border border-black justify-between h-[80vh] text-[#192839] rounded-tl-2xl font-sans p-4 rounded-tr-2xl shadow-highRaised bg-white">
      <div className="relative flex-1 flex flex-col overflow-auto">
        <div className="flex justify-between items-center ">
          <h3 className="font-[600] text-[15px]">New Message</h3>
          <button className="text-gray-500 hover:text-gray-700">✖</button>
        </div>

        <p className="text-[10px] text-[#40566D] ">
          From LAIBASAEED &lt;LaibaSaeed@neuromail.online&gt;
        </p>

        <div className="relative border-b ">
          <div className="flex items-center text-[14px] gap-2 py-2">
            <p className="font-[500] text-[14px] flex-nowrap">To</p>
            <div className="flex flex-wrap gap-1 w-full px-2 py-1">
              {toList.map((email, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 bg-gray-200 text-sm px-2 py-[2px] rounded-full"
                >
                  <span className="bg-green-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs uppercase">
                    {email[0]}
                  </span>
                  {email.split("@")[0]}
                  <button
                    onClick={() => removeToEmail(index)}
                    className="text-gray-600 hover:gray-300 text-xs"
                  >
                    ✕
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={toInput}
                onChange={(e) => setToInput(e.target.value)}
                onKeyDown={handleToKeyDown}
                className="flex-grow outline-none text-[14px] min-w-[150px]"
                placeholder=""
              />
            </div>
            {/* <input
              name="to"
              type="email"
              className="w-full outline-none text-[14px]"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            /> */}
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
          className="w-full border-b text-[16px] border-black text-[#40566D] outline-none mt-[2px]"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="relative flex-2">
        <textarea
          placeholder=""
          className="w-full text-[14px] outline-none resize-none max-h-[200px] min-h-[120px] overflow-auto"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center z-10">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {attachments.length > 0 && (
        <div className="mt-2 mb-2 text-sm text-blue-700 ">
          <ul className="list-disc ml-5 space-y-3 mt-[4px]">
            {attachments.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between border border-gray-300 bg-gray-300"
              >
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
              <span
                className="btn-small-circle"
                onClick={() => fileInputRef.current.click()}
              >
                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[21px] h-[21px]"
                >
                  <path
                    d="M7.94317 2.66995L8.02903 9.80602C8.03955 10.6802 7.68359 11.5226 7.03945 12.1478C6.39531 12.7731 5.51577 13.1299 4.5943 13.1399C3.67284 13.1499 2.78493 12.8122 2.12592 12.2011C1.46691 11.59 1.09077 10.7555 1.08025 9.88128L1.00018 3.22664C0.992614 2.64332 1.22961 2.08103 1.65902 1.66349C2.08844 1.24595 2.6751 1.00734 3.28995 1.00017C3.9048 0.992993 4.49746 1.21784 4.93757 1.62524C5.37768 2.03264 5.62918 2.58922 5.63674 3.17254L5.70872 9.83503C5.71223 10.1264 5.59358 10.4072 5.37886 10.6156C5.16415 10.824 4.87097 10.943 4.56381 10.9463C4.25666 10.9497 3.96069 10.8371 3.74102 10.6334C3.52135 10.4297 3.39597 10.1515 3.39246 9.86012L3.31728 3.27144"
                    stroke="#4A4A4A"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SentEmail;
