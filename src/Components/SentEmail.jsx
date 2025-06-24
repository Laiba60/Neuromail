import React, { useRef } from "react";
import { useEmailFormLogic } from "../utils/logic";
import { handleSend } from "../services/HandleSend";

const SentEmail = ({ setShowEmailsent }) => {
  const {
    inputValue,
    setInputValue,
    recipients,
    cc,
    setCc,
    bcc,
    setBcc,
    subject,
    setSubject,
    ccVisible,
    setCcVisible,
    bccVisible,
    setBccVisible,
    handleKeyDown,
    removeRecipient,
    attachments,
    handleFileChange,
    removeAttachment,
    loading,
    body,
    setBody,
  } = useEmailFormLogic();

  const fileInputRef = useRef(null);

  const toRecipients = recipients.filter((r) => r.recipient_type === "to");

  return (
    <div className=" fixed z-90  bottom-0 right-3 w-[43vw] hidden md:flex flex-col rounded-[10px] justify-between h-[80vh] text-[#192839] rounded-tl-2xl font-sans p-4 rounded-tr-2xl shadow-highRaised bg-white">
      <div className="relative flex-1 flex flex-col overflow-auto">
        <div className="flex justify-between items-center">
          <h3 className="font-[600] text-[15px]">New Message</h3>
          <button
            onClick={() => setShowEmailsent(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>

        <p className="text-[10px] text-[#40566D]">
          From LAIBASAEED &lt;LaibaSaeed@neuromail.online&gt;
        </p>

        <div className="relative border-b">
          <div className="flex items-center text-[14px] gap-2 py-2">
            <p className="font-[500] text-[14px] flex-nowrap">To</p>
            <div className="flex flex-wrap gap-1 w-full px-2 py-1">
              {toRecipients.map((r, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 bg-gray-200 text-sm px-2 py-[2px] rounded-full"
                >
                  <span className="bg-green-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs uppercase">
                    {r.email[0]}
                  </span>
                  {r.name}
                  <button
                    onClick={() => removeRecipient(index)}
                    className="text-gray-600 hover:gray-300 text-xs"
                  >
                    ✕
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow outline-none text-[14px] min-w-[150px]"
                placeholder=""
              />
            </div>
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
                  className="ml-3 text-red-500 text-xs"
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-between items-center pt-1 bg-white">
        <div className="flex items-center">
          <button
            onClick={() =>
              handleSend({
                inputValue,
                setInputValue,
                recipients,
                cc,
                bcc,
                subject,
                body,
                attachments,
                token:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzgwNTg5OTAzLCJpYXQiOjE3NTAzNDk5MDMsImp0aSI6IjY1MDdhYzUzMDA0ODQxNDBiOTgyMTJiZWM0ZjVmMjA1IiwidXNlcl9pZCI6MTMzNn0.itRwu0AUG3uXs_D-L-lN1LiZ2Hbm0sG3XWtn18FDFj0",
                mailboxId: "1215qHFMLKzSKWb",
              })
            }
            className="flex items-center justify-between mr-1 h-[33px] w-[95px] pr-2 pl-3 py-2 bg-[#0E57CB] text-white rounded-[200px] font-[500] text-[14px]"
          >
            Send
          </button>

          <input
            type="file"
            ref={fileInputRef}
            multiple
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <span onClick={() => fileInputRef.current.click()}>📎</span>
        </div>
      </div>
    </div>
  );
};

export default SentEmail;
