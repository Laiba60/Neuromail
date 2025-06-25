import React, { useRef } from "react";
import { useEmailFormLogic } from "../utils/logic";
import { handleSend } from "../services/HandleSend";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


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
    
  } = useEmailFormLogic();
 
    
   

  const fileInputRef = useRef(null);
  const editorRef = useRef(null);
  const toRecipients = recipients.filter((r) => r.recipient_type === "to");

  return (
    <div className="absolute bottom-0 right-3 w-[43vw] hidden md:flex flex-col justify-between h-[80vh] text-[#192839] rounded-tl-2xl font-sans p-4 rounded-tr-2xl shadow-highRaised bg-white">
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
        <p className="text-[10px] text-[#40566D] mt-1">
          From SAEED &lt;saeed@neuromail.digital&gt;
        </p>
        <div className="relative border-b">
          <div className="flex items-center text-[14px] gap-2 py-2 mt-3">
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
          className="w-full border-b text-[16px] py-2 text-[#40566D] outline-none mt-2"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="flex-1 resize-none flex flex-col justify-between py-2 outline-none text-[14px] font-sans text-[#40566D] bg-white">
            {loading && (
              <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center z-10">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <div
              id="body"
              ref={editorRef}
              className="quill flex flex-col flex-1"
            >
              <div className="ql-toolbar ql-snow">
                <span className="ql-formats">
                  <button type="button" className="ql-bold">
                    <svg viewBox="0 0 18 18">
                      <path
                        className="ql-stroke"
                        d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                      ></path>
                      <path
                        className="ql-stroke"
                        d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                      ></path>
                    </svg>
                  </button>
                  <button type="button" className="ql-italic">
                    <svg viewBox="0 0 18 18">
                      <line
                        className="ql-stroke"
                        x1="7"
                        x2="13"
                        y1="4"
                        y2="4"
                      ></line>
                      <line
                        className="ql-stroke"
                        x1="5"
                        x2="11"
                        y1="14"
                        y2="14"
                      ></line>
                      <line
                        className="ql-stroke"
                        x1="8"
                        x2="10"
                        y1="14"
                        y2="4"
                      ></line>
                    </svg>
                  </button>
                  <button type="button" className="ql-underline">
                    <svg viewBox="0 0 18 18">
                      <path
                        className="ql-stroke"
                        d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                      ></path>{" "}
                      <rect
                        className="ql-fill"
                        height="1"
                        rx="0.5"
                        ry="0.5"
                        width="12"
                        x="3"
                        y="15"
                      ></rect>
                    </svg>
                  </button>
                  <button type="button" className="ql-strike">
                    <svg viewBox="0 0 18 18">
                      {" "}
                      <line
                        className="ql-stroke ql-thin"
                        x1="15.5"
                        x2="2.5"
                        y1="8.5"
                        y2="9.5"
                      ></line>{" "}
                      <path
                        className="ql-fill"
                        d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"
                      ></path>
                      <path
                        className="ql-fill"
                        d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"
                      ></path>{" "}
                    </svg>
                  </button>
                </span>
                <span className="ql-formats">
                  <button type="button" className="ql-list" value="ordered">
                    <svg viewBox="0 0 18 18">
                      {" "}
                      <line
                        className="ql-stroke"
                        x1="7"
                        x2="15"
                        y1="4"
                        y2="4"
                      ></line>
                      <line
                        className="ql-stroke"
                        x1="7"
                        x2="15"
                        y1="9"
                        y2="9"
                      ></line>
                      <line
                        className="ql-stroke"
                        x1="7"
                        x2="15"
                        y1="14"
                        y2="14"
                      ></line>
                      <line
                        className="ql-stroke ql-thin"
                        x1="2.5"
                        x2="4.5"
                        y1="5.5"
                        y2="5.5"
                      ></line>
                      <path
                        className="ql-fill"
                        d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                      ></path>
                      <path
                        className="ql-stroke ql-thin"
                        d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                      ></path>
                      <path
                        className="ql-stroke ql-thin"
                        d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                      ></path>
                    </svg>
                  </button>
                  <button type="button" className="ql-list" value="bullet">
                    <svg viewBox="0 0 18 18">
                      <line
                        className="ql-stroke"
                        x1="6"
                        x2="15"
                        y1="4"
                        y2="4"
                      ></line>
                      <line
                        className="ql-stroke"
                        x1="6"
                        x2="15"
                        y1="9"
                        y2="9"
                      ></line>
                      <line
                        className="ql-stroke"
                        x1="6"
                        x2="15"
                        y1="14"
                        y2="14"
                      ></line>
                      <line
                        className="ql-stroke"
                        x1="3"
                        x2="3"
                        y1="4"
                        y2="4"
                      ></line>
                      <line
                        className="ql-stroke"
                        x1="3"
                        x2="3"
                        y1="9"
                        y2="9"
                      ></line>
                      <line
                        className="ql-stroke"
                        x1="3"
                        x2="3"
                        y1="14"
                        y2="14"
                      ></line>
                    </svg>
                  </button>
                  <button type="button" className="ql-list" value="check">
                    <svg className="" viewBox="0 0 18 18">
                      <line
                        className="ql-stroke"
                        x1="9"
                        x2="15"
                        y1="4"
                        y2="4"
                      ></line>
                      <polyline
                        className="ql-stroke"
                        points="3 4 4 5 6 3"
                      ></polyline>
                      <line
                        className="ql-stroke"
                        x1="9"
                        x2="15"
                        y1="14"
                        y2="14"
                      ></line>
                      <polyline
                        className="ql-stroke"
                        points="3 14 4 15 6 13"
                      ></polyline>
                      <line
                        className="ql-stroke"
                        x1="9"
                        x2="15"
                        y1="9"
                        y2="9"
                      ></line>
                      <polyline
                        className="ql-stroke"
                        points="3 9 4 10 6 8"
                      ></polyline>
                    </svg>
                  </button>
                </span>
                <span className="ql-formats">
                  <span className="ql-align ql-picker ql-icon-picker">
                    <span
                      className="ql-picker-label"
                      tabIndex="0"
                      role="button"
                      aria-expanded="false"
                      aria-controls="ql-picker-options-0"
                    >
                      <svg viewBox="0 0 18 18">
                        <line
                          className="ql-stroke"
                          x1="3"
                          x2="15"
                          y1="9"
                          y2="9"
                        ></line>
                        <line
                          className="ql-stroke"
                          x1="3"
                          x2="13"
                          y1="14"
                          y2="14"
                        ></line>
                        <line
                          className="ql-stroke"
                          x1="3"
                          x2="9"
                          y1="4"
                          y2="4"
                        ></line>
                      </svg>
                    </span>
                    <span
                      className="ql-picker-options"
                      aria-hidden="true"
                      tabIndex="-1"
                      id="ql-picker-options-0"
                    >
                      <span
                        tabIndex="0"
                        role="button"
                        className="ql-picker-item ql-selected"
                      >
                        <svg viewBox="0 0 18 18">
                          <line
                            className="ql-stroke"
                            x1="3"
                            x2="15"
                            y1="9"
                            y2="9"
                          ></line>
                          <line
                            className="ql-stroke"
                            x1="3"
                            x2="13"
                            y1="14"
                            y2="14"
                          ></line>
                          <line
                            className="ql-stroke"
                            x1="3"
                            x2="9"
                            y1="4"
                            y2="4"
                          ></line>
                        </svg>
                      </span>
                      <span
                        tabIndex="0"
                        role="button"
                        className="ql-picker-item"
                        data-value="center"
                      >
                        <svg viewBox="0 0 18 18">
                          <line
                            className="ql-stroke"
                            x1="15"
                            x2="3"
                            y1="9"
                            y2="9"
                          ></line>
                          <line
                            className="ql-stroke"
                            x1="14"
                            x2="4"
                            y1="14"
                            y2="14"
                          ></line>
                          <line
                            className="ql-stroke"
                            x1="12"
                            x2="6"
                            y1="4"
                            y2="4"
                          ></line>
                        </svg>
                      </span>
                      <span
                        tabIndex="0"
                        role="button"
                        className="ql-picker-item"
                        data-value="right"
                      >
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1="15"
                            x2="3"
                            y1="9"
                            y2="9"
                          ></line>
                          <line
                            className="ql-stroke"
                            x1="15"
                            x2="5"
                            y1="14"
                            y2="14"
                          ></line>
                          <line
                            className="ql-stroke"
                            x1="15"
                            x2="9"
                            y1="4"
                            y2="4"
                          ></line>
                        </svg>
                      </span>
                      <span
                        tabIndex="0"
                        role="button"
                        className="ql-picker-item"
                        data-value="justify"
                      >
                        <svg viewBox="0 0 18 18">
                          <line
                            className="ql-stroke"
                            x1="15"
                            x2="3"
                            y1="9"
                            y2="9"
                          ></line>
                          <line
                            className="ql-stroke"
                            x1="15"
                            x2="3"
                            y1="14"
                            y2="14"
                          ></line>
                          <line
                            className="ql-stroke"
                            x1="15"
                            x2="3"
                            y1="4"
                            y2="4"
                          ></line>
                        </svg>
                      </span>
                    </span>
                  </span>
                  <select className="ql-align" style={{ display: "none" }}>
                    <option selected="selected"></option>
                    <option value="center"></option>
                    <option value="right"></option>
                    <option value="justify"></option>
                  </select>
                </span>
                <span className="ql-formats">
                  <button type="button" className="ql-blockquote">
                    <svg viewBox="0 0 18 18">
                      <rect
                        className="ql-fill ql-stroke"
                        height="3"
                        width="3"
                        x="4"
                        y="5"
                      ></rect>{" "}
                      <rect
                        className="ql-fill ql-stroke"
                        height="3"
                        width="3"
                        x="11"
                        y="5"
                      ></rect>{" "}
                      <path
                        className="ql-even ql-fill ql-stroke"
                        d="M7,8c0,4.031-3,5-3,5"
                      ></path>{" "}
                      <path
                        className="ql-even ql-fill ql-stroke"
                        d="M14,8c0,4.031-3,5-3,5"
                      ></path>
                    </svg>
                  </button>
                  <button type="button" className="ql-code-block">
                    <svg viewBox="0 0 18 18">
                      <polyline
                        className="ql-even ql-stroke"
                        points="5 7 3 9 5 11"
                      ></polyline>{" "}
                      <polyline
                        className="ql-even ql-stroke"
                        points="13 7 15 9 13 11"
                      ></polyline>{" "}
                      <line
                        className="ql-stroke"
                        x1="10"
                        x2="8"
                        y1="5"
                        y2="13"
                      ></line>
                    </svg>
                  </button>
                </span>
                <span className="ql-formats">
                  <button type="button" className="ql-link">
                    <svg viewBox="0 0 18 18">
                      <line
                        className="ql-stroke"
                        x1="7"
                        x2="11"
                        y1="7"
                        y2="11"
                      ></line>
                      <path
                        className="ql-even ql-stroke"
                        d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                      ></path>
                      <path
                        className="ql-even ql-stroke"
                        d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                      ></path>
                    </svg>
                  </button>
                </span>
                <span className="ql-formats">
                  <button type="button" className="ql-direction" value="rtl">
                    <svg viewBox="0 0 18 18">
                      <polygon
                        className="ql-stroke ql-fill"
                        points="3 11 5 9 3 7 3 11"
                      ></polygon>
                      <line
                        className="ql-stroke ql-fill"
                        x1="15"
                        x2="11"
                        y1="4"
                        y2="4"
                      ></line>{" "}
                      <path
                        className="ql-fill"
                        d="M11,3a3,3,0,0,0,0,6h1V3H11Z"
                      ></path>{" "}
                      <rect
                        className="ql-fill"
                        height="11"
                        width="1"
                        x="11"
                        y="4"
                      ></rect>{" "}
                      <rect
                        className="ql-fill"
                        height="11"
                        width="1"
                        x="13"
                        y="4"
                      ></rect>
                    </svg>
                    <svg viewBox="0 0 18 18">
                      <polygon
                        className="ql-stroke ql-fill"
                        points="15 12 13 10 15 8 15 12"
                      ></polygon>
                      <line
                        className="ql-stroke ql-fill"
                        x1="9"
                        x2="5"
                        y1="4"
                        y2="4"
                      ></line>
                      <path
                        className="ql-fill"
                        d="M5,3A3,3,0,0,0,5,9H6V3H5Z"
                      ></path>{" "}
                      <rect
                        className="ql-fill"
                        height="11"
                        width="1"
                        x="5"
                        y="4"
                      ></rect>{" "}
                      <rect
                        className="ql-fill"
                        height="11"
                        width="1"
                        x="7"
                        y="4"
                      ></rect>
                    </svg>
                  </button>
                </span>
              </div>
              <div className="ql-container ql-snow">
                <div
                  className="ql-editor ql-blank"
                  data-gramm="false"
                  contentEditable="true"
                >
                  <p>
                    <br />
                  </p>
                </div>
                <div
                  className="ql-clipboard"
                  contentEditable="true"
                  tabIndex="-1"
                ></div>
                <div className="ql-tooltip ql-hidden">
                  <a
                    className="ql-preview"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="about:blank"
                  ></a>
                  <input
                    type="text"
                    data-formula="e=mc^2"
                    data-link="https://quilljs.com"
                    data-video="Embed URL"
                  />
                  <a className="ql-action"></a>
                  <a className="ql-remove"></a>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
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

      <div className="flex flex-col gap-2 relative">
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
              className="flex items-center justify-between mr-1 h-[33px] w-[95px] pr-2 pl-3 py-2 bg-[#0E57CB] text-white  rounded-[200px] font-[500] text-[14px] shadow-md hover:bg-[#1765c1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a73e8] transition duration-150 cursor-pointer"
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
                  strokeWidth="0.5"
                ></line>
                <path d="M11 13.5L14.5 16.5L18 13.5H11Z" fill="white"></path>
              </svg>
            </button>
            <div
              onClick={() =>
                fileInputRef.current && fileInputRef.current.click()
              }
              style={{ position: "relative", display: "inline-block" }}
            >
              <span className="btn-small-circle">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <div
                className="font-sans text-[12px]"
                style={{
                  position: "absolute",
                  backgroundColor: "rgb(59, 59, 59)",
                  color: "rgb(255, 255, 255)",
                  padding: "3px 10px",
                  borderRadius: "4px",
                  visibility: "hidden",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  whiteSpace: "nowrap",
                  zIndex: 1000,
                  bottom: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                Attachments
              </div>
              <input
                type="file"
                ref={fileInputRef}
                multiple
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
            <span className="btn-small-circle">
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[21px] h-[21px]"
              >
                <path
                  d="M10.6271 10.3809H0.586914V0.912842H10.6271V10.3809Z"
                  stroke="#4A4A4A"
                ></path>
                <path
                  d="M3.67877 7.24388L4.43914 8.00425C4.4738 8.03899 4.51533 8.06612 4.56108 8.08391C4.60682 8.1017 4.65577 8.10976 4.7048 8.10756C4.75383 8.10537 4.80186 8.09298 4.84583 8.07118C4.8898 8.04938 4.92875 8.01865 4.96017 7.98095L6.68777 5.90811C6.7209 5.86826 6.7624 5.83619 6.80931 5.81418C6.85623 5.79217 6.90741 5.78076 6.95924 5.78076C7.01106 5.78076 7.06224 5.79217 7.10916 5.81418C7.15607 5.83619 7.19757 5.86826 7.2307 5.90811L9.90152 9.11339H1.31152L3.17962 7.24388C3.24582 7.1777 3.33559 7.14052 3.42919 7.14052C3.5228 7.14052 3.61257 7.1777 3.67877 7.24388Z"
                  fill="#4A4A4A"
                ></path>
              </svg>
            </span>
            <div style={{ position: "relative", display: "inline-block" }}>
              <span className="btn-small-circle">
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[21px] h-[21px]"
                >
                  <path
                    d="M12.6858 5.89697L12.2992 6.74072L11.4585 7.12425L12.2992 7.51084L12.6858 8.35152L13.0693 7.51084L13.9131 7.12425L13.0693 6.74072M9.61763 6.81743L8.85059 8.50493L7.16309 9.27197L8.85059 10.039L9.61763 11.7265L10.3847 10.039L12.0722 9.27197L10.3847 8.50493M12.6858 10.1924L12.2992 11.0331L11.4585 11.4197L12.2992 11.8032L12.6858 12.647L13.0693 11.8032L13.9131 11.4197L13.0693 11.0331"
                    fill="#4A4A4A"
                  ></path>
                  <path
                    d="M0.608398 7.5394H3.41642V6.39066H0.608398V7.5394ZM4.25883 7.5394H6.28706V6.39066H4.25883V7.5394ZM0.608398 9.83687H1.73161V8.68813H0.608398V9.83687ZM2.85482 9.83687H3.97803V8.68813H2.85482V9.83687ZM5.10124 9.83687H6.22445V8.68813H5.10124V9.83687ZM0.608398 5.24192H5.10124V4.09318H0.608398V5.24192ZM6.22445 5.24192H10.7173V4.09318H6.22445V5.24192ZM0.608398 0.646973V2.94445H10.7173V0.646973H0.608398Z"
                    fill="#4A4A4A"
                  ></path>
                </svg>
              </span>
              <div
                className="font-sans text-[12px]"
                style={{
                  position: "absolute",
                  backgroundColor: "rgb(59, 59, 59)",
                  color: "rgb(255, 255, 255)",
                  padding: "3px 10px",
                  borderRadius: "4px",
                  visibility: "hidden",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  whiteSpace: "nowrap",
                  zIndex: 1000,
                  bottom: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                Writting Styles
              </div>
            </div>
            <span className="btn-small-circle">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[21px] h-[21px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.37086 2.07378C7.57721 2.62408 7.32066 3.23218 6.79823 3.43198C6.27615 3.63166 5.6851 3.34771 5.47874 2.79742C5.2724 2.24712 5.52859 1.63915 6.05102 1.43935C6.57345 1.23954 7.1645 1.52349 7.37086 2.07378ZM8.1382 3.93943C8.33304 4.45901 8.89139 4.7281 9.38498 4.53933L9.3851 4.53966C9.42572 4.52413 9.46463 4.50597 9.50174 4.48547C9.543 4.52409 9.58296 4.56446 9.62166 4.60659C9.85441 4.83797 10.0343 5.1272 10.1612 5.47428C10.2882 5.81084 10.3517 6.19472 10.3517 6.62595C10.3517 6.66627 10.3511 6.70621 10.35 6.7458C9.84082 6.95318 9.59361 7.55274 9.79736 8.09609C9.82568 8.17162 9.86123 8.24213 9.90288 8.30707C9.81978 8.43459 9.72604 8.5526 9.62166 8.66109C9.39949 8.89248 9.13499 9.07127 8.82818 9.19749C8.53195 9.32369 8.20927 9.3868 7.86014 9.3868C7.73591 9.3868 7.61438 9.37881 7.49551 9.36283C7.51063 9.25089 7.49888 9.13264 7.45598 9.01821C7.32361 8.6652 6.94523 8.48324 6.61011 8.61141C6.48086 8.66083 6.37707 8.74911 6.30589 8.85917C6.22853 8.79809 6.15414 8.73206 6.08275 8.66109C5.86056 8.41918 5.686 8.12995 5.55905 7.79339C5.4321 7.44631 5.36862 7.05717 5.36862 6.62595C5.36862 6.49984 5.37405 6.37778 5.38492 6.25976C5.40474 6.25361 5.42448 6.24677 5.44414 6.23925C5.96622 6.03959 6.22229 5.43124 6.01593 4.88094C5.99885 4.83541 5.97915 4.79171 5.95709 4.74995C5.99713 4.69993 6.03901 4.65214 6.08275 4.60659C6.3155 4.36468 6.57998 4.18062 6.87622 4.05442C7.18304 3.9282 7.511 3.8651 7.86014 3.8651C7.94739 3.8651 8.03299 3.86904 8.11693 3.87693C8.12332 3.89783 8.13041 3.91868 8.1382 3.93943ZM2.86058 3.02541C3.01719 2.83779 3.18669 2.66016 3.36905 2.49256C3.92978 1.96668 4.591 1.56176 5.35275 1.27779C6.12506 0.993812 6.96086 0.851829 7.86014 0.851829C8.30923 0.851829 8.74028 0.88642 9.15329 0.955604C9.14685 1.09318 9.1678 1.23514 9.21959 1.37324C9.41441 1.89281 9.17248 2.46757 8.67889 2.65635C8.20502 2.83758 7.9631 3.37458 8.11693 3.87693C8.36889 3.90058 8.60599 3.95974 8.82818 4.05442C9.08156 4.15865 9.30609 4.30233 9.50174 4.48547C9.91556 4.25667 10.1046 3.73334 9.92566 3.25623C9.73071 2.73632 9.97276 2.1619 10.4664 1.97312C10.6854 1.88933 10.8549 1.72959 10.9587 1.53236C11.4767 1.78765 11.9409 2.10772 12.3512 2.49256C12.9119 3.00793 13.3457 3.61794 13.6525 4.32261C13.9699 5.01676 14.1286 5.78455 14.1286 6.62595C14.1286 7.15314 14.0647 7.65494 13.9369 8.13134C13.6704 7.94321 13.327 7.8854 13.0086 8.00716C12.4858 8.2071 11.8956 7.92325 11.6891 7.3726C11.4826 6.82194 11.739 6.21433 12.2614 6.01452C12.7838 5.81472 13.0402 5.20711 12.8337 4.65646C12.6272 4.1058 12.037 3.82195 11.5142 4.02189C10.9914 4.22182 10.7354 4.82929 10.9419 5.37995C11.1484 5.93061 10.8921 6.53821 10.3696 6.73803C10.3631 6.74055 10.3565 6.74314 10.35 6.7458C10.3392 7.12957 10.2763 7.47877 10.1612 7.79339C10.0912 7.97901 10.0051 8.15024 9.90288 8.30707C10.1646 8.71525 10.6661 8.90305 11.1168 8.73066C11.6393 8.53086 12.23 8.81495 12.4363 9.36524C12.549 9.66564 12.776 9.88676 13.0441 9.99309C12.84 10.2727 12.609 10.5333 12.3512 10.7751C11.8364 11.2483 11.237 11.6239 10.5527 11.902C10.6954 12.0508 10.8347 12.159 10.9706 12.2265C11.1504 12.3107 11.3514 12.3527 11.5736 12.3527C12.1238 12.3527 12.6369 12.1161 13.113 11.6428L14.7317 13.536C13.9382 14.472 12.8591 14.94 11.4943 14.94C10.9759 14.94 10.4945 14.8875 10.0501 14.7823C9.60579 14.6876 9.17203 14.5246 8.74884 14.2932C8.33623 14.0618 7.90245 13.741 7.44752 13.3309C7.10248 13.0277 6.72699 12.6671 6.32107 12.249C5.98791 12.1806 5.66513 12.089 5.35275 11.9741C4.591 11.6901 3.92978 11.2905 3.36905 10.7751C2.80832 10.2492 2.36926 9.63396 2.05188 8.92928C1.8791 8.53248 1.75499 8.11565 1.6795 7.67881C2.18919 7.4717 2.43661 6.87144 2.23276 6.32781C2.02641 5.77752 2.28192 5.16981 2.80469 4.96987C3.32747 4.76993 3.91832 5.05439 4.12452 5.60432C4.32297 6.13354 4.8781 6.41712 5.38492 6.25976C5.41119 5.97423 5.46922 5.71241 5.55905 5.47428C5.66101 5.19552 5.7937 4.95408 5.95709 4.74995C5.71242 4.28693 5.17633 4.06284 4.69681 4.24624C4.17402 4.44617 3.58366 4.16196 3.37732 3.61167C3.27771 3.34605 3.08847 3.14246 2.86058 3.02541ZM2.86058 3.02541C2.61636 2.89997 2.32774 2.87388 2.05749 2.97724C1.53506 3.17704 1.27922 3.78489 1.48543 4.33482C1.69163 4.88473 1.43558 5.49308 0.913145 5.69288C0.390714 5.89268 0.134657 6.50103 0.340864 7.05096C0.547071 7.60087 1.13804 7.88569 1.66047 7.68589L1.66061 7.68626C1.66694 7.68383 1.67325 7.68136 1.6795 7.67881C1.62094 7.3399 1.59166 6.98894 1.59166 6.62595C1.59166 5.78455 1.74507 5.01676 2.05188 4.32261C2.26603 3.84711 2.53561 3.41471 2.86058 3.02541ZM9.03789 11.0709C9.12388 11.0875 9.21452 11.0813 9.30136 11.0481C9.34852 11.0301 9.39129 11.0053 9.42912 10.9753C9.5992 10.8402 9.6689 10.5978 9.58517 10.3745C9.48283 10.1016 9.19005 9.96067 8.93077 10.0598C8.67151 10.159 8.54461 10.4604 8.64696 10.7334C8.71499 10.9148 8.86729 11.0379 9.03789 11.0709ZM8.78219 12.3486C8.6604 12.5595 8.63159 12.8274 8.72635 13.0801C8.8892 13.5144 9.35501 13.7382 9.76707 13.5806C10.1792 13.423 10.6451 13.647 10.8078 14.0811C10.9706 14.5151 11.4362 14.7393 11.8483 14.5817C12.2603 14.4241 12.4628 13.9448 12.2999 13.5104C12.1371 13.0761 11.6707 12.8525 11.2589 13.01C10.8471 13.1675 10.3813 12.9437 10.2185 12.5094C10.1577 12.3472 10.0546 12.2144 9.9279 12.1198C9.71524 11.9611 9.43593 11.9101 9.17772 12.0089C9.00538 12.0748 8.86975 12.197 8.78219 12.3486ZM13.0441 9.99309C13.2671 10.0815 13.5184 10.0906 13.7558 9.99981C14.2782 9.80001 14.5344 9.19202 14.3281 8.64173C14.2474 8.42658 14.108 8.25211 13.9369 8.13134C13.8633 8.40575 13.7685 8.67173 13.6525 8.92928C13.4868 9.30997 13.284 9.66459 13.0441 9.99309ZM10.9587 1.53236C11.0887 1.28521 11.1155 0.979194 11.007 0.69004C10.8121 0.170112 10.2543 -0.0984124 9.76039 0.0904914C9.39776 0.229179 9.17106 0.575614 9.15329 0.955604C9.57702 1.02659 9.98178 1.13398 10.3675 1.27779C10.5718 1.35395 10.7689 1.4388 10.9587 1.53236ZM6.30589 8.85917C6.1925 9.03451 6.16191 9.26514 6.24324 9.48202C6.37561 9.83501 6.21173 10.2244 5.8766 10.3525C5.54146 10.4807 5.1631 10.2987 5.03073 9.94573C4.89836 9.59273 4.51932 9.41102 4.18464 9.53902C3.84996 9.66701 3.68562 10.0565 3.81799 10.4095C3.95036 10.7625 4.32873 10.9445 4.66363 10.8164C4.99855 10.6883 5.37753 10.8706 5.50973 11.2231C5.64192 11.5757 6.02046 11.7581 6.3556 11.6299C6.69029 11.5019 6.85461 11.1124 6.72224 10.7594C6.58987 10.4064 6.75398 10.017 7.08911 9.88882C7.31561 9.80219 7.46397 9.59623 7.49551 9.36283C7.2803 9.3339 7.07388 9.27878 6.87622 9.19749C6.67085 9.10998 6.48074 8.99721 6.30589 8.85917Z"
                  fill="#4A4A4A"
                ></path>
              </svg>
            </span>
          </div>
          <div>
            <div style={{ position: "relative", display: "inline-block" }}>
              <span className="btn-small-circle">
                <svg
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[21px] h-[21px]"
                >
                  <path
                    d="M10.0083 2.12942H8.09181V1.4906C8.09181 1.09527 7.93476 0.716127 7.65522 0.436586C7.37568 0.157045 6.99654 0 6.60121 0H4.0459C3.65057 0 3.27143 0.157045 2.99189 0.436586C2.71235 0.716127 2.55531 1.09527 2.55531 1.4906V2.12942H0.638827C0.4694 2.12942 0.306911 2.19673 0.187108 2.31653C0.0673048 2.43633 0 2.59882 0 2.76825C0 2.93768 0.0673048 3.10017 0.187108 3.21997C0.306911 3.33977 0.4694 3.40708 0.638827 3.40708H0.851769V11.6471C0.851769 11.9295 0.963944 12.2003 1.16362 12.4C1.36329 12.5997 1.6341 12.7118 1.91648 12.7118H8.73064C9.01301 12.7118 9.28383 12.5997 9.4835 12.4C9.68317 12.2003 9.79535 11.9295 9.79535 11.6471V3.40708H10.0083C10.1777 3.40708 10.3402 3.33977 10.46 3.21997C10.5798 3.10017 10.6471 2.93768 10.6471 2.76825C10.6471 2.59882 10.5798 2.43633 10.46 2.31653C10.3402 2.19673 10.1777 2.12942 10.0083 2.12942ZM3.83296 1.4906C3.83296 1.43412 3.8554 1.37996 3.89533 1.34002C3.93527 1.30009 3.98943 1.27765 4.0459 1.27765H6.60121C6.65769 1.27765 6.71185 1.30009 6.75179 1.34002C6.79172 1.37996 6.81415 1.43412 6.81415 1.4906V2.12942H3.83296V1.4906ZM8.51769 11.4342H2.12942V3.40708H8.51769V11.4342ZM4.68473 5.11062V9.51769C4.68473 9.68712 4.61743 9.84961 4.49762 9.96941C4.37782 10.0892 4.21533 10.1565 4.0459 10.1565C3.87648 10.1565 3.71399 10.0892 3.59419 9.96941C3.47438 9.84961 3.40708 9.68712 3.40708 9.51769V5.11062C3.40708 4.94119 3.47438 4.7787 3.59419 4.6589C3.71399 4.53909 3.87648 4.47179 4.0459 4.47179C4.21533 4.47179 4.37782 4.53909 4.49762 4.6589C4.61743 4.7787 4.68473 4.94119 4.68473 5.11062ZM7.24004 5.11062V9.51769C7.24004 9.68712 7.17273 9.84961 7.05293 9.96941C6.93313 10.0892 6.77064 10.1565 6.60121 10.1565C6.43179 10.1565 6.2693 10.0892 6.14949 9.96941C6.02969 9.84961 5.96239 9.68712 5.96239 9.51769V5.11062C5.96239 4.94119 6.02969 4.7787 6.14949 4.6589C6.2693 4.53909 6.43179 4.47179 6.60121 4.47179C6.77064 4.47179 6.93313 4.53909 7.05293 4.6589C7.17273 4.7787 7.24004 4.94119 7.24004 5.11062Z"
                    fill="black"
                  ></path>
                </svg>
              </span>
              <div
                className="font-sans text-[12px]"
                style={{
                  position: "absolute",
                  backgroundColor: "rgb(59, 59, 59)",
                  color: "rgb(255, 255, 255)",
                  padding: "3px 10px",
                  borderRadius: "4px",
                  visibility: "hidden",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  whiteSpace: "nowrap",
                  zIndex: 1000,
                  bottom: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentEmail;
