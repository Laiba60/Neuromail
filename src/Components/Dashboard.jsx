import React from "react";
import { useState } from "react";
const Dashboard = () => {
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <div id="root">
      <div className="Toastify"></div>
      <div className="flex w-[100vw] relative bg-[#f6f8fc] h-dvh">
        <div className="absolute text-center w-full z-50 top-1"></div>
        <div className="bg-[#F1F5FA] rounded-br-2xl rounded-tr-2xl overflow-hidden flex-[0.2] desktop-view-table hidden md:flex flex-col justify-between">
          <div className="flex flex-col justify-center items-start md:items-center pt-3 gap-2">
            <span className="cursor-pointer">
              <img
                src="/logoName.svg"
                className="w-[150px] ml-9 md:mb-0 md:ml-0 mq1500:w-[200px] mq1500:mb-2"
              />
            </span>
            <button className="w-[85%] h-[36px] mq1500:h-[45px] bg-[#305EFF] hidden md:block hover:shadow-md shadow-slate-800 rounded-md text-white text-[14px] mq1500:text-[18px] font-sans font-[600] leading-[20px]">
              New Message
            </button>
            <div>
              <a href="/new-message">
                <button className="w-[224px] h-[32px] bg-[#305EFF] ml-5 md:hidden block hover:shadow-md shadow-slate-800 rounded-md text-white text-[14px] font-sans font-[600] leading-[20px]">
                  New Message
                </button>
              </a>
            </div>
            <svg
              width="318"
              height="2"
              viewBox="0 0 318 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="my-1 md:hidden block"
            >
              <path
                d="M-12 1L317 0.999971"
                stroke="#EEEEEE"
                strokeLinecap="round"
              ></path>
            </svg>
            <div className="flex flex-col items-left md:items-center gap-[3px] w-full md:pl-0 pl-5">
              <div className=" bg-[#FFFFFF] hover:bg-[#ffffff] cursor-pointer w-[72%] md:w-[85%] pl-2 pr-1 h-[32px] mq1500:h-[45px] rounded-md flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[20px] h-[21px] mq1500:w-[25px] mq1500:h-[27px]"
                  >
                    <path
                      opacity="0.4"
                      d="M13.492 4.17627H6.50866C3.47533 4.17627 1.66699 5.9846 1.66699 9.01794V14.3263C1.66699 17.3679 3.47533 19.1763 6.50866 19.1763H13.4837C16.517 19.1763 18.3253 17.3679 18.3253 14.3346V9.01794C18.3337 5.9846 16.5253 4.17627 13.492 4.17627Z"
                      fill="#305EFF"
                    ></path>
                    <path
                      d="M17.7503 11.0347H14.8503C14.0337 11.0347 13.3087 11.4847 12.942 12.218L12.242 13.6013C12.0753 13.9347 11.742 14.143 11.3753 14.143H8.64199C8.38366 14.143 8.01699 14.0847 7.77533 13.6013L7.07533 12.2263C6.70866 11.5013 5.97533 11.043 5.16699 11.043H2.25033C1.92533 11.043 1.66699 11.3013 1.66699 11.6263V14.343C1.66699 17.368 3.48366 19.1763 6.51699 19.1763H13.5003C16.3587 19.1763 18.117 17.6097 18.3337 14.8263V11.618C18.3337 11.3013 18.0753 11.0347 17.7503 11.0347Z"
                      fill="#305EFF"
                    ></path>
                    <path
                      d="M12.1079 6.23428C11.8662 5.99261 11.4662 5.99261 11.2245 6.23428L10.6245 6.83428V2.50928C10.6245 2.16761 10.3412 1.88428 9.99954 1.88428C9.65788 1.88428 9.37454 2.16761 9.37454 2.50928V6.83428L8.77454 6.23428C8.53288 5.99261 8.13288 5.99261 7.89121 6.23428C7.64954 6.47594 7.64954 6.87594 7.89121 7.11761L9.55788 8.78428C9.56621 8.79261 9.57454 8.79261 9.57454 8.80094C9.62454 8.85094 9.69121 8.89261 9.75788 8.92594C9.84121 8.95094 9.91621 8.96761 9.99954 8.96761C10.0829 8.96761 10.1579 8.95094 10.2329 8.91761C10.3079 8.88428 10.3745 8.84261 10.4412 8.78428L12.1079 7.11761C12.3495 6.87594 12.3495 6.47594 12.1079 6.23428Z"
                      fill="#305EFF"
                    ></path>
                  </svg>
                  <p className="text-[#192839] text-[14px] mq1500:text-[18px] font-sans font-[600] leading-[20px]">
                    Inbox
                  </p>
                </div>
                <div className="flex items-center gap-[6px]">
                  <span>
                    <img src="/refresh.svg" className="w-[20px] h-[20px]" />
                  </span>
                  <div className="bg-[#305EFF] flex justify-center items-center min-w-[15px] h-[28px] text-white text-[14px] font-sans font-[600] leading-[20px] rounded-md">
                    9
                  </div>
                </div>
              </div>
              <div className=" hover:bg-[#e4e7ea] cursor-pointer w-[72%] md:w-[85%] pl-2 pr-1 h-[32px] mq1500:h-[45px] mq1500:text-[18px] rounded-md flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[20px] h-[21px] mq1500:w-[25px] mq1500:h-[27px]"
                  >
                    <path
                      opacity="0.4"
                      d="M13.5578 5.5H8.44278C4.39111 5.5 4.39111 7.65417 4.39111 9.55167V11.1925C4.39111 11.3942 4.48278 11.5775 4.63861 11.6967C4.79445 11.8158 5.00528 11.8617 5.19778 11.8067C5.61028 11.6967 6.12361 11.6417 6.73778 11.6417C7.35195 11.6417 7.48028 11.715 7.84695 11.99L8.68111 12.87C9.27695 13.5117 10.1294 13.8783 11.0094 13.8783C11.8894 13.8783 12.7328 13.5117 13.3378 12.87L14.1719 11.99C14.5386 11.715 14.6669 11.6417 15.2811 11.6417C15.8953 11.6417 16.4086 11.6967 16.8211 11.8067C17.0136 11.8617 17.2153 11.8158 17.3803 11.6967C17.5361 11.5775 17.6278 11.385 17.6278 11.1925V9.55167C17.6094 7.65417 17.6094 5.5 13.5578 5.5Z"
                      fill="#40566D"
                    ></path>
                    <path
                      d="M13.09 4.53742C12.8516 4.77575 12.4575 4.77575 12.2191 4.53742L11.6233 3.94159V8.31408C11.6233 8.65325 11.3483 8.93742 11 8.93742C10.6516 8.93742 10.3766 8.66242 10.3766 8.31408V3.94159L9.78078 4.53742C9.54245 4.77575 9.14828 4.77575 8.90995 4.53742C8.67162 4.29908 8.67162 3.90492 8.90995 3.66659L10.56 2.01659C10.5691 2.00742 10.5691 2.00742 10.5783 2.00742C10.6333 1.96159 10.6883 1.91575 10.7616 1.88825C10.8441 1.85159 10.9175 1.83325 11 1.83325C11.0825 1.83325 11.1558 1.85159 11.2383 1.87909C11.3116 1.90659 11.385 1.95242 11.44 2.01659L13.09 3.66659C13.3283 3.90492 13.3283 4.29908 13.09 4.53742Z"
                      fill="#40566D"
                    ></path>
                    <path
                      d="M17.1325 10.5695C16.61 10.432 15.9958 10.3586 15.2625 10.3586C14.245 10.3586 13.8691 10.6061 13.3466 11.0003C13.3191 11.0186 13.2916 11.0461 13.2641 11.0736L12.3933 11.9995C11.66 12.7695 10.34 12.7786 9.60662 11.9903L8.73579 11.0736C8.70829 11.0461 8.68079 11.0186 8.65329 11.0003C8.13079 10.6061 7.75496 10.3586 6.73746 10.3586C6.00412 10.3586 5.38996 10.432 4.86746 10.5695C2.68579 11.1561 2.68579 12.8886 2.68579 14.4103V15.2628C2.68579 17.5636 2.68579 20.167 7.58996 20.167H14.41C17.6641 20.167 19.3141 18.517 19.3141 15.2628V14.4103C19.3141 12.8886 19.3141 11.1561 17.1325 10.5695ZM13.1358 16.867H8.86412C8.51579 16.867 8.23162 16.5828 8.23162 16.2253C8.23162 15.8678 8.51579 15.5836 8.86412 15.5836H13.1358C13.4841 15.5836 13.7683 15.8678 13.7683 16.2253C13.7683 16.5828 13.4841 16.867 13.1358 16.867Z"
                      fill="#40566D"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M13.7684 16.2249C13.7684 16.5824 13.4842 16.8666 13.1359 16.8666H8.86419C8.51586 16.8666 8.23169 16.5824 8.23169 16.2249C8.23169 15.8674 8.51586 15.5833 8.86419 15.5833H13.1359C13.4842 15.5833 13.7684 15.8674 13.7684 16.2249Z"
                      fill="#40566D"
                    ></path>
                  </svg>
                  <p className="text-[#40566D] text-[14px] mq1500:text-[18px] font-sans font-[600] leading-[20px]">
                    Drafts
                  </p>
                </div>
              </div>
              <div className=" hover:bg-[#e4e7ea] cursor-pointer w-[72%] md:w-[85%] pl-2 pr-1 h-[32px] mq1500:h-[45px] rounded-md flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[20px] h-[21px] mq1500:w-[25px] mq1500:h-[27px]"
                  >
                    <path
                      opacity="0.4"
                      d="M17.1476 8.2649L16.3717 11.5741C15.7067 14.432 14.3926 15.5878 11.9226 15.3503C11.5267 15.3187 11.0992 15.2474 10.6401 15.1366L9.31006 14.8199C6.00881 14.0362 4.98756 12.4053 5.76339 9.09615L6.53923 5.77907C6.69756 5.10615 6.88756 4.52032 7.12506 4.0374C8.05131 2.12157 9.62673 1.60699 12.2709 2.2324L13.593 2.54115C16.9101 3.31699 17.9234 4.95574 17.1476 8.2649Z"
                      fill="#40566D"
                    ></path>
                    <path
                      d="M11.9225 15.3505C11.4317 15.683 10.8142 15.9601 10.0621 16.2055L8.81128 16.6172C5.66836 17.6305 4.01378 16.7834 2.99253 13.6405L1.97919 10.5134C0.965859 7.37051 1.80503 5.70801 4.94794 4.69468L6.19878 4.28301C6.52336 4.1801 6.83211 4.09301 7.12503 4.0376C6.88753 4.52051 6.69753 5.10635 6.53919 5.77926L5.76336 9.09635C4.98753 12.4055 6.00878 14.0363 9.31003 14.8201L10.64 15.1368C11.0992 15.2476 11.5267 15.3188 11.9225 15.3505Z"
                      fill="#40566D"
                    ></path>
                    <path
                      d="M13.8463 8.32048C13.7988 8.32048 13.7513 8.31257 13.6959 8.30465L9.85633 7.3309C9.53967 7.25173 9.34967 6.92715 9.42883 6.61048C9.508 6.29382 9.83258 6.10382 10.1493 6.18298L13.9888 7.15673C14.3055 7.2359 14.4955 7.56048 14.4163 7.87715C14.353 8.1384 14.1076 8.32048 13.8463 8.32048Z"
                      fill="#40566D"
                    ></path>
                    <path
                      d="M11.5266 10.996C11.4791 10.996 11.4316 10.9881 11.3761 10.9802L9.0724 10.3944C8.75573 10.3152 8.56573 9.99063 8.6449 9.67396C8.72406 9.35729 9.04865 9.16729 9.36531 9.24646L11.6691 9.83229C11.9857 9.91146 12.1757 10.236 12.0966 10.5527C12.0332 10.8219 11.7957 10.996 11.5266 10.996Z"
                      fill="#40566D"
                    ></path>
                  </svg>
                  <p className="text-[#40566D] text-[14px] mq1500:text-[18px] font-sans font-[600] leading-[20px]">
                    Sent
                  </p>
                </div>
              </div>
              <div className=" hover:bg-[#e4e7ea] cursor-pointer w-[72%] md:w-[85%] pl-2 pr-1 h-[32px] mq1500:h-[45px] rounded-md flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[20px] h-[21px] mq1500:w-[25px] mq1500:h-[27px]"
                  >
                    <path
                      d="M12.1836 4.1245L13.2998 6.357C13.4502 6.66575 13.854 6.95867 14.1944 7.022L16.2132 7.3545C17.5036 7.56825 17.8044 8.50242 16.8782 9.43658L15.3027 11.012C15.0415 11.2733 14.8911 11.7878 14.9782 12.1599L15.4294 14.1074C15.7857 15.6433 14.9623 16.2449 13.6086 15.4374L11.7165 14.3133C11.3761 14.1074 10.8061 14.1074 10.4657 14.3133L8.57358 15.4374C7.21983 16.237 6.3965 15.6433 6.75275 14.1074L7.20401 12.1599C7.29109 11.7958 7.14067 11.2812 6.87942 11.012L5.30402 9.43658C4.37777 8.51033 4.6786 7.57617 5.96901 7.3545L7.98775 7.022C8.32817 6.96658 8.73192 6.66575 8.88234 6.357L9.99859 4.1245C10.5923 2.91325 11.574 2.91325 12.1836 4.1245Z"
                      fill="#40566D"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M6.33325 4.552H1.58325C1.25867 4.552 0.989502 4.28284 0.989502 3.95825C0.989502 3.63367 1.25867 3.3645 1.58325 3.3645H6.33325C6.65784 3.3645 6.927 3.63367 6.927 3.95825C6.927 4.28284 6.65784 4.552 6.33325 4.552Z"
                      fill="#40566D"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M3.95825 15.6355H1.58325C1.25867 15.6355 0.989502 15.3663 0.989502 15.0417C0.989502 14.7172 1.25867 14.448 1.58325 14.448H3.95825C4.28284 14.448 4.552 14.7172 4.552 15.0417C4.552 15.3663 4.28284 15.6355 3.95825 15.6355Z"
                      fill="#40566D"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M2.37492 10.0938H1.58325C1.25867 10.0938 0.989502 9.82458 0.989502 9.5C0.989502 9.17542 1.25867 8.90625 1.58325 8.90625H2.37492C2.6995 8.90625 2.96867 9.17542 2.96867 9.5C2.96867 9.82458 2.6995 10.0938 2.37492 10.0938Z"
                      fill="#40566D"
                    ></path>
                  </svg>
                  <p className="text-[#40566D] text-[14px] mq1500:text-[18px] font-sans font-[600] leading-[20px]">
                    Starred
                  </p>
                </div>
              </div>
              <div className=" hover:bg-[#e4e7ea] w-[72%] md:w-[85%] gap-2 mt-1 flex items-center cursor-pointer pl-2 pr-1 h-[32px] mq1500:h-[45px] rounded-md">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[19px] h-[19px] mq1500:w-[25px] mq1500:h-[27px]"
                >
                  <path
                    d="M15.8023 3.9225C14.5948 3.8025 13.3873 3.7125 12.1723 3.645V3.6375L12.0073 2.6625C11.8948 1.9725 11.7298 0.9375 9.97475 0.9375H8.00975C6.26225 0.9375 6.09725 1.9275 5.97725 2.655L5.81975 3.615C5.12225 3.66 4.42475 3.705 3.72725 3.7725L2.19725 3.9225C1.88225 3.9525 1.65725 4.23 1.68725 4.5375C1.71725 4.845 1.98725 5.07 2.30225 5.04L3.83225 4.89C7.76225 4.5 11.7223 4.65 15.6973 5.0475C15.7198 5.0475 15.7348 5.0475 15.7573 5.0475C16.0423 5.0475 16.2898 4.83 16.3198 4.5375C16.3423 4.23 16.1173 3.9525 15.8023 3.9225Z"
                    fill="#40566D"
                  ></path>
                  <path
                    opacity="0.3991"
                    d="M14.4228 6.105C14.2428 5.9175 13.9953 5.8125 13.7403 5.8125H4.2603C4.0053 5.8125 3.7503 5.9175 3.5778 6.105C3.4053 6.2925 3.3078 6.5475 3.3228 6.81L3.7878 14.505C3.8703 15.645 3.9753 17.07 6.5928 17.07H11.4078C14.0253 17.07 14.1303 15.6525 14.2128 14.505L14.6778 6.8175C14.6928 6.5475 14.5953 6.2925 14.4228 6.105Z"
                    fill="#40566D"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.18457 12.75C7.18457 12.4393 7.43641 12.1875 7.74707 12.1875H10.2446C10.5552 12.1875 10.8071 12.4393 10.8071 12.75C10.8071 13.0607 10.5552 13.3125 10.2446 13.3125H7.74707C7.43641 13.3125 7.18457 13.0607 7.18457 12.75Z"
                    fill="#40566D"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5625 9.75C6.5625 9.43934 6.81434 9.1875 7.125 9.1875H10.875C11.1857 9.1875 11.4375 9.43934 11.4375 9.75C11.4375 10.0607 11.1857 10.3125 10.875 10.3125H7.125C6.81434 10.3125 6.5625 10.0607 6.5625 9.75Z"
                    fill="#40566D"
                  ></path>
                </svg>
                <p className="text-[#40566D] text-[14px] mq1500:text-[18px] font-sans font-[600] leading-[20px]">
                  Delete
                </p>
              </div>
            </div>
            <svg
              width="318"
              height="2"
              viewBox="0 0 318 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 md:hidden block"
            >
              <path
                d="M-12 1L317 0.999971"
                stroke="#EEEEEE"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <div className="mx-4 flex flex-col gap-2 my-1">
            <div className="grup relative flex gap-4 bg-white p-1 rounded-md cursor-pointer hover:bg-[#e4e7ea]">
              <img className="w-[60px] md:h-12" src="classicMail.png" alt="" />
              <span className="text-[#333333]">
                <h1 className="text-[14px]">Classic Mail</h1>
                <p className="text-[8px] font-sans text-wrap">
                  Send personalized one-on-one messages with a traditional
                  touch.
                </p>
              </span>
            </div>
            <div className="flex md:gap-3 gap-4 md:bg-[#F1F5FA] bg-[#F8FAFC] p-1 rounded-md cursor-pointer hover:bg-[#e4e7ea]">
              <img className="w-[60px] md:h-14" src="gostMail.png" alt="" />
              <span className="text-[#333333]">
                <h1 className="text-[14px]">Ghost Mail</h1>
                <p className="text-[8px] font-sans text-wrap">
                  Deliver mysterious, time-limited, or secretive messages with a
                  spooky flair.
                </p>
              </span>
            </div>
            <div className="flex md:gap-[15px] gap-[18px] items-center md:bg-[#F1F5FA] bg-[#F8FAFC] p-1 rounded-md cursor-pointer hover:bg-[#e4e7ea]">
              <img className="w-[58px] md:h-14" src="bulkMail.png" alt="" />
              <span className="text-[#333333]">
                <h1 className="text-[14px]">Bulk Mail</h1>
                <p className="text-[8px] font-sans text-wrap">
                  Effortlessly distribute messages to a large audience at once.
                </p>
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <button className=" w-[250px] md:w-[85%] hover:shadow-md shadow-slate-500 h-[35px] md:h-[36px] mq1500:h-[45px] bg-[#6C849D1F] rounded-md text-[#192839] text-[14px] mq1500:text-[18px] font-sans font-[600] leading-[20px]">
              Subscribe
            </button>
            <div className="w-[75vw]  md:w-full h-[86px] bg-[#FFFFFF] rounded-tr-2xl rounded-tl-2xl flex flex-col justify-center items-center">
              <div className="flex justify-between w-[90%] md:w-[85%]">
                <p className="text-[#305EFF] text-[14px] mq1500:text-[18px] font-sans font-[600]">
                  Your Email Space
                </p>
                <p className="text-[#768EA7] text-[12px] mq1500:text-[16px] font-sans">
                  0/3 GB
                </p>
              </div>
              <progress
                value="0.00"
                max="100"
                className=" w-[90%] md:w-[85%] mt-2 h-[4px]"
              ></progress>
              <div className="flex justify-between w-[90%] md:w-[85%] mt-2">
                <p className="text-[#768EA7] text-[12px] mq1500:text-[14px] font-sans">
                  1/3
                </p>
                <p className="text-[#768EA7] text-[12px] mq1500:text-[14px] font-sans">
                  Already created emails
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-view-table hidden md:flex flex-col flex-[0.8] items-center max-h-[938px] overflow-auto ">
          <div className="w-[96%] h-[10%] py-4 mb-3 px-3 bg-white rounded-[12px] flex justify-between items-center">
            <div className="relative flex-1 hidden md:block">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[50%] left-[13px] translate-y-[-50%]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0781 14.0214C10.0517 14.8425 8.74968 15.3335 7.33301 15.3335C4.0193 15.3335 1.33301 12.6472 1.33301 9.3335C1.33301 6.01979 4.0193 3.3335 7.33301 3.3335C10.6467 3.3335 13.333 6.01979 13.333 9.3335C13.333 10.7502 12.842 12.0522 12.0209 13.0786L14.4711 15.5288C14.7314 15.7891 14.7314 16.2112 14.4711 16.4716C14.2107 16.7319 13.7886 16.7319 13.5283 16.4716L11.0781 14.0214ZM2.66634 9.3335C2.66634 6.75617 4.75568 4.66683 7.33301 4.66683C9.91034 4.66683 11.9997 6.75617 11.9997 9.3335C11.9997 10.5908 11.5024 11.732 10.6939 12.5711C10.6711 12.5887 10.6492 12.6079 10.6283 12.6288C10.6074 12.6497 10.5882 12.6716 10.5706 12.6944C9.7315 13.5029 8.59032 14.0002 7.33301 14.0002C4.75568 14.0002 2.66634 11.9108 2.66634 9.3335Z"
                  fill="#40566D"
                ></path>
              </svg>
              <input
                className="font-sans mq1100:w-[400px] h-[36px]  pl-9 pr-3 rounded-[4px] outline-none bg-[#6C849D1F]  placeholder:text-[#6C849D52] text-[#6c849d] text-[12px] "
                placeholder="Search messages"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-4 items-center">
              <div className="relative">
                <span className="cursor-pointer">
                  <img src="/icons.svg" />
                </span>
              </div>
              <div style={{ position: "relative", display: "inline-block" }}>
                <svg
                  width="28"
                  height="26"
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    opacity="0.4"
                    d="M0.666016 14.1736V11.8269C0.666016 10.4402 1.79935 9.29358 3.19935 9.29358C5.61268 9.29358 6.59935 7.58691 5.38602 5.49357C4.69268 4.29357 5.10602 2.73357 6.31935 2.04024L8.62602 0.720241C9.67935 0.0935741 11.0393 0.466908 11.666 1.52024L11.8127 1.77357C13.0127 3.86691 14.986 3.86691 16.1993 1.77357L16.346 1.52024C16.9727 0.466908 18.3327 0.0935741 19.386 0.720241L21.6927 2.04024C22.906 2.73357 23.3193 4.29357 22.626 5.49357C21.4127 7.58691 22.3994 9.29358 24.8127 9.29358C26.1994 9.29358 27.346 10.4269 27.346 11.8269V14.1736C27.346 15.5602 26.2127 16.7069 24.8127 16.7069C22.3994 16.7069 21.4127 18.4136 22.626 20.5069C23.3193 21.7202 22.906 23.2669 21.6927 23.9602L19.386 25.2802C18.3327 25.9069 16.9727 25.5336 16.346 24.4802L16.1993 24.2269C14.9993 22.1336 13.026 22.1336 11.8127 24.2269L11.666 24.4802C11.0393 25.5336 9.67935 25.9069 8.62602 25.2802L6.31935 23.9602C5.10602 23.2669 4.69268 21.7069 5.38602 20.5069C6.59935 18.4136 5.61268 16.7069 3.19935 16.7069C1.79935 16.7069 0.666016 15.5602 0.666016 14.1736Z"
                    fill="#768EA7"
                  ></path>
                  <path
                    d="M13.9993 17.3332C16.3926 17.3332 18.3327 15.3931 18.3327 12.9998C18.3327 10.6066 16.3926 8.6665 13.9993 8.6665C11.6061 8.6665 9.66602 10.6066 9.66602 12.9998C9.66602 15.3931 11.6061 17.3332 13.9993 17.3332Z"
                    fill="#768EA7"
                  ></path>
                </svg>
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
                  Setting
                </div>
              </div>
              <div className="relative flex items-center gap-2">
                <span className="flex flex-col">
                  <p className="text-[#40566D] text-[12px] font-[600] font-sans text-right leading-[18px]">
                    zeeshan
                  </p>
                  <p className="text-[#768EA7] text-[12px] font-sans">
                    zeeshan@neuromail.digital
                  </p>
                </span>
                <div className="relative">
                  <div className=" h-[35px] w-[35px] rounded-full cursor-pointer  overflow-hidden">
                    <p className="bg-[#EB417A] w-full h-full text-[white] flex justify-center items-center text-[17px] font-bold font-sans">
                      Z
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[96%] font-sans px-5 py-4 mb-3 rounded-xl bg-white desktop-view-table hidden md:flex justify-between items-center">
            <div className="flex items-center gap-3 relative">
              <input
                type="checkbox"
                id="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="w-5 h-5 appearance-none cursor-pointer rounded-md border-[2px] border-[#B1C1D2] focus:ring-blue-500 checked:bg-blue-500 checked:border-blue-500 relative"
              />
              <label for="checkbox" className="text-[14px]">
                Inbox
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-sans text-[14px] leading-[18px] text-[#000000]">
                1-10 of 25
              </p>
              <button
                disabled=""
                className="btn-circle-sm cursor-pointer disabled:cursor-not-allowed"
              >
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    d="M7.13395 11.91L6.07295 12.97L0.29395 7.193C0.200796 7.10043 0.126867 6.99036 0.0764193 6.86911C0.0259713 6.74786 0 6.61783 0 6.4865C0 6.35517 0.0259713 6.22514 0.0764193 6.10389C0.126867 5.98264 0.200796 5.87257 0.29395 5.78L6.07295 0L7.13295 1.06L1.70895 6.485L7.13395 11.91Z"
                    fill="#747474"
                  ></path>
                </svg>
              </button>
              <button className="btn-circle-sm cursor-pointer disabled:cursor-not-allowed">
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    d="M-0.000161171 1.05997L1.06084 -2.86102e-05L6.83984 5.77697C6.93299 5.86954 7.00692 5.97961 7.05737 6.10086C7.10782 6.22212 7.13379 6.35214 7.13379 6.48347C7.13379 6.6148 7.10782 6.74483 7.05737 6.86608C7.00692 6.98733 6.93299 7.0974 6.83984 7.18997L1.06084 12.97L0.000838757 11.91L5.42484 6.48497L-0.000161171 1.05997Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="text-[14px] flex items-center gap-3 text-[#40566D]">
              <p className="bg-[#305EFF17] px-1 cursor-pointer rounded-md flex justify-center items-center font-[600]">
                All
              </p>
              <p className=" px-1 cursor-pointer rounded-md flex justify-center items-center font-[600]">
                Read
              </p>
              <p className=" px-1 cursor-pointer rounded-md flex justify-center items-center font-[600]">
                Unread
              </p>
              <p className=" px-1 cursor-pointer rounded-md flex justify-center items-center font-[600]">
                Has File
              </p>
            </div>
          </div>
          <div className="h-full w-full overflow-auto flex flex-col items-center gap-1">
            <div className="md:w-[96%] cursor-pointer w-[92vw] my-[1px] z-0 px-1 h-[86px] md:h-[60px] rounded-[12px] md:rounded-xl flex justify-between items-center bg-white font-[600] text-black">
              <div className=" w-[96%] px-3 h-[60px] rounded-xl desktop-view-table hidden md:flex justify-between items-center">
                <div className="flex items-center flex-[0.4] gap-3">
                  <div className="relative overflow-hidden">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      className=" h-[28px] w-[28px] rounded-[8px] bg-[#D9D9D9] cursor-pointer appearance-none  focus:ring-black checked:bg-[#0000ff00] border font-sans text-[20px] checked:border-black flex items-center justify-center "
                    />
                  </div>
                  <div className="grid grid-cols-[10%_55%_35%] items-center w-[20vw] pr-2 gap-3 overflow-hidden">
                    <span className="cursor-pointer z-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                          stroke="#6C849D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="font-sans text-[12px] mq1100:text-[14px] leading-[20px] truncate"></div>
                    <div className="text-center capitalize bg-[#305EFF17] overflow-hidden flex items-center justify-center min-w-[40px] rounded-md text-[#305EFF] text-[12px] font-[600] font-sans  max-w-[50px] max-h-[18px]">
                      inbox
                    </div>
                  </div>
                </div>
                <p className="flex-[0.7] overflow-hidden whitespace-nowrap h-5 flex justify-start items-start font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Undelivered Mail Returned to Sender-<p>jjjjjj</p>
                </p>
                <p className=" w-[70px] text-end font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  09:58 AM
                </p>
              </div>
              <div className="mobile-view-table w-[92vw] h-[86px] overflow-hidden px-1 rounded-[12px] flex items-center  md:hidden font-sans">
                <span className="flex-[0.1]">
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="19.5"
                      cy="19.5"
                      r="19.5"
                      fill="#305EFF"
                    ></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.31152 15.0702C8.31152 13.456 9.62007 12.1475 11.2342 12.1475H27.3092C28.9234 12.1475 30.2319 13.456 30.2319 15.0702V23.8383C30.2319 25.4525 28.9234 26.761 27.3092 26.761H11.2342C9.62007 26.761 8.31152 25.4525 8.31152 23.8383V15.0702ZM15.6173 21.6464V15.1603H18.2547V16.7938C18.7312 15.8239 19.548 14.9901 20.9773 14.9901C22.5258 14.9901 23.819 15.943 23.819 18.1891V23.6683H21.0964V18.5635C21.0964 17.6957 20.637 17.2192 19.7862 17.2192C18.8843 17.2192 18.3398 17.7467 18.3398 18.9889V23.6683H17.4442V24.5691H14.5215V21.6464H15.6173Z"
                      fill="#F8FAFC"
                    ></path>
                  </svg>
                </span>
                <div className="flex flex-col w-full py-2 h-full items-start justify-center  ml-2">
                  <p className="font-[600] text-[22px] h-[42px] whitespace-nowrap  w-[50vw]  overflow-hidden"></p>
                  <p className="text-[14px] flex w-[50vw] h-[34px] overflow-hidden whitespace-nowrap">
                    Undelivered Mail Returned to Sender-<p>jjjjjj</p>
                  </p>
                  <p></p>
                </div>
                <div className="w-full flex flex-col justify-end items-end gap-2">
                  <span className="cursor-pointer z-10 mt-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke="#6C849D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p className="text-[14px]">09:58 AM</p>
                </div>
              </div>
            </div>
            <div className="md:w-[96%] cursor-pointer w-[92vw] my-[1px] z-0 px-1 h-[86px] md:h-[60px] rounded-[12px] md:rounded-xl flex justify-between items-center bg-white font-[600] text-black">
              <div className=" w-[96%] px-3 h-[60px] rounded-xl desktop-view-table hidden md:flex justify-between items-center">
                <div className="flex items-center flex-[0.4] gap-3">
                  <div className="relative overflow-hidden">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      className=" h-[28px] w-[28px] rounded-[8px] bg-[#D9D9D9] cursor-pointer appearance-none  focus:ring-black checked:bg-[#0000ff00] border font-sans text-[20px] checked:border-black flex items-center justify-center "
                    />
                  </div>
                  <div className="grid grid-cols-[10%_55%_35%] items-center w-[20vw] pr-2 gap-3 overflow-hidden">
                    <span className="cursor-pointer z-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                          stroke="#6C849D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="font-sans text-[12px] mq1100:text-[14px] leading-[20px] truncate"></div>
                    <div className="text-center capitalize bg-[#305EFF17] overflow-hidden flex items-center justify-center min-w-[40px] rounded-md text-[#305EFF] text-[12px] font-[600] font-sans  max-w-[50px] max-h-[18px]">
                      inbox
                    </div>
                  </div>
                </div>
                <p className="flex-[0.7] overflow-hidden whitespace-nowrap h-5 flex justify-start items-start font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Undelivered Mail Returned to Sender-
                  <p>this is the body of th email</p>
                </p>
                <p className=" w-[70px] text-end font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  09:58 AM
                </p>
              </div>
              <div className="mobile-view-table w-[92vw] h-[86px] overflow-hidden px-1 rounded-[12px] flex items-center  md:hidden font-sans">
                <span className="flex-[0.1]">
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="19.5"
                      cy="19.5"
                      r="19.5"
                      fill="#305EFF"
                    ></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.31152 15.0702C8.31152 13.456 9.62007 12.1475 11.2342 12.1475H27.3092C28.9234 12.1475 30.2319 13.456 30.2319 15.0702V23.8383C30.2319 25.4525 28.9234 26.761 27.3092 26.761H11.2342C9.62007 26.761 8.31152 25.4525 8.31152 23.8383V15.0702ZM15.6173 21.6464V15.1603H18.2547V16.7938C18.7312 15.8239 19.548 14.9901 20.9773 14.9901C22.5258 14.9901 23.819 15.943 23.819 18.1891V23.6683H21.0964V18.5635C21.0964 17.6957 20.637 17.2192 19.7862 17.2192C18.8843 17.2192 18.3398 17.7467 18.3398 18.9889V23.6683H17.4442V24.5691H14.5215V21.6464H15.6173Z"
                      fill="#F8FAFC"
                    ></path>
                  </svg>
                </span>

                <div className="flex flex-col w-full py-2 h-full items-start justify-center  ml-2">
                  <p className="font-[600] text-[22px] h-[42px] whitespace-nowrap  w-[50vw]  overflow-hidden"></p>
                  <p className="text-[14px] flex w-[50vw] h-[34px] overflow-hidden whitespace-nowrap">
                    Undelivered Mail Returned to Sender-
                    <p>this is the body of th email</p>
                  </p>
                  <p></p>
                </div>
                <div className="w-full flex flex-col justify-end items-end gap-2">
                  <span className="cursor-pointer z-10 mt-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke="#6C849D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p className="text-[14px]">09:58 AM</p>
                </div>
              </div>
            </div>
            <div className="md:w-[96%] cursor-pointer w-[92vw] my-[1px] z-0 px-1 h-[86px] md:h-[60px] rounded-[12px] md:rounded-xl flex justify-between items-center bg-white font-[600] text-black">
              <div className=" w-[96%] px-3 h-[60px] rounded-xl desktop-view-table hidden md:flex justify-between items-center">
                <div className="flex items-center flex-[0.4] gap-3">
                  <div className="relative overflow-hidden">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      className=" h-[28px] w-[28px] rounded-[8px] bg-[#D9D9D9] cursor-pointer appearance-none  focus:ring-black checked:bg-[#0000ff00] border font-sans text-[20px] checked:border-black flex items-center justify-center "
                    />
                  </div>
                  <div className="grid grid-cols-[10%_55%_35%] items-center w-[20vw] pr-2 gap-3 overflow-hidden">
                    <span className="cursor-pointer z-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                          stroke="#6C849D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="font-sans text-[12px] mq1100:text-[14px] leading-[20px] truncate"></div>
                    <div className="text-center capitalize bg-[#305EFF17] overflow-hidden flex items-center justify-center min-w-[40px] rounded-md text-[#305EFF] text-[12px] font-[600] font-sans  max-w-[50px] max-h-[18px]">
                      inbox
                    </div>
                  </div>
                </div>
                <p className="flex-[0.7] overflow-hidden whitespace-nowrap h-5 flex justify-start items-start font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Undelivered Mail Returned to Sender-No Content Available
                </p>
                <p className=" w-[70px] text-end font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  09:58 AM
                </p>
              </div>
              <div className="mobile-view-table w-[92vw] h-[86px] overflow-hidden px-1 rounded-[12px] flex items-center  md:hidden font-sans">
                <span className="flex-[0.1]">
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="19.5"
                      cy="19.5"
                      r="19.5"
                      fill="#305EFF"
                    ></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.31152 15.0702C8.31152 13.456 9.62007 12.1475 11.2342 12.1475H27.3092C28.9234 12.1475 30.2319 13.456 30.2319 15.0702V23.8383C30.2319 25.4525 28.9234 26.761 27.3092 26.761H11.2342C9.62007 26.761 8.31152 25.4525 8.31152 23.8383V15.0702ZM15.6173 21.6464V15.1603H18.2547V16.7938C18.7312 15.8239 19.548 14.9901 20.9773 14.9901C22.5258 14.9901 23.819 15.943 23.819 18.1891V23.6683H21.0964V18.5635C21.0964 17.6957 20.637 17.2192 19.7862 17.2192C18.8843 17.2192 18.3398 17.7467 18.3398 18.9889V23.6683H17.4442V24.5691H14.5215V21.6464H15.6173Z"
                      fill="#F8FAFC"
                    ></path>
                  </svg>
                </span>
                <div className="flex flex-col w-full py-2 h-full items-start justify-center  ml-2">
                  <p className="font-[600] text-[22px] h-[42px] whitespace-nowrap  w-[50vw]  overflow-hidden"></p>
                  <p className="text-[14px] flex w-[50vw] h-[34px] overflow-hidden whitespace-nowrap">
                    Undelivered Mail Returned to Sender-No Content Available
                  </p>
                  <p></p>
                </div>
                <div className="w-full flex flex-col justify-end items-end gap-2">
                  <span className="cursor-pointer z-10 mt-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke="#6C849D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p className="text-[14px]">09:58 AM</p>
                </div>
              </div>
            </div>
            <div className="md:w-[96%] cursor-pointer w-[92vw] my-[1px] z-0 px-1 h-[86px] md:h-[60px] rounded-[12px] md:rounded-xl flex justify-between items-center bg-[#F1F5FA] font-sans font-[500] text-[#383838]">
              <div className=" w-[96%] px-3 h-[60px] rounded-xl desktop-view-table hidden md:flex justify-between items-center">
                <div className="flex items-center flex-[0.4] gap-3">
                  <div className="relative overflow-hidden">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      className=" h-[28px] w-[28px] rounded-[8px] bg-[#D9D9D9] cursor-pointer appearance-none  focus:ring-black checked:bg-[#0000ff00] border font-sans text-[20px] checked:border-black flex items-center justify-center "
                    />
                  </div>
                  <div className="grid grid-cols-[10%_55%_35%] items-center w-[20vw] pr-2 gap-3 overflow-hidden">
                    <span className="cursor-pointer z-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                          stroke="#6C849D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="font-sans text-[12px] mq1100:text-[14px] leading-[20px] truncate"></div>
                    <div className="text-center capitalize bg-[#305EFF17] overflow-hidden flex items-center justify-center min-w-[40px] rounded-md text-[#305EFF] text-[12px] font-[600] font-sans  max-w-[50px] max-h-[18px]">
                      inbox
                    </div>
                  </div>
                </div>
                <p className="flex-[0.7] overflow-hidden whitespace-nowrap h-5 flex justify-start items-start font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Undelivered Mail Returned to Sender-<p>No content</p>
                </p>
                <p className=" w-[70px] text-end font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  09:58 AM
                </p>
              </div>
              <div className="mobile-view-table w-[92vw] h-[86px] overflow-hidden px-1 rounded-[12px] flex items-center  md:hidden font-sans">
                <span className="flex-[0.1]">
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="19.5"
                      cy="19.5"
                      r="19.5"
                      fill="#305EFF"
                    ></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.31152 15.0702C8.31152 13.456 9.62007 12.1475 11.2342 12.1475H27.3092C28.9234 12.1475 30.2319 13.456 30.2319 15.0702V23.8383C30.2319 25.4525 28.9234 26.761 27.3092 26.761H11.2342C9.62007 26.761 8.31152 25.4525 8.31152 23.8383V15.0702ZM15.6173 21.6464V15.1603H18.2547V16.7938C18.7312 15.8239 19.548 14.9901 20.9773 14.9901C22.5258 14.9901 23.819 15.943 23.819 18.1891V23.6683H21.0964V18.5635C21.0964 17.6957 20.637 17.2192 19.7862 17.2192C18.8843 17.2192 18.3398 17.7467 18.3398 18.9889V23.6683H17.4442V24.5691H14.5215V21.6464H15.6173Z"
                      fill="#F8FAFC"
                    ></path>
                  </svg>
                </span>
                <div className="flex flex-col w-full py-2 h-full items-start justify-center  ml-2">
                  <p className="font-[600] text-[22px] h-[42px] whitespace-nowrap  w-[50vw]  overflow-hidden"></p>
                  <p className="text-[14px] flex w-[50vw] h-[34px] overflow-hidden whitespace-nowrap">
                    Undelivered Mail Returned to Sender-<p>No content</p>
                  </p>
                  <p></p>
                </div>
                <div className="w-full flex flex-col justify-end items-end gap-2">
                  <span className="cursor-pointer z-10 mt-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke="#6C849D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p className="text-[14px]">09:58 AM</p>
                </div>
              </div>
            </div>
            <div className="md:w-[96%] cursor-pointer w-[92vw] my-[1px] z-0 px-1 h-[86px] md:h-[60px] rounded-[12px] md:rounded-xl flex justify-between items-center bg-white font-[600] text-black">
              <div className=" w-[96%] px-3 h-[60px] rounded-xl desktop-view-table hidden md:flex justify-between items-center">
                <div className="flex items-center flex-[0.4] gap-3">
                  <div className="relative overflow-hidden">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      className=" h-[28px] w-[28px] rounded-[8px] bg-[#D9D9D9] cursor-pointer appearance-none  focus:ring-black checked:bg-[#0000ff00] border font-sans text-[20px] checked:border-black flex items-center justify-center "
                    />
                  </div>
                  <div className="grid grid-cols-[10%_55%_35%] items-center w-[20vw] pr-2 gap-3 overflow-hidden">
                    <span className="cursor-pointer z-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                          stroke="#6C849D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="font-sans text-[12px] mq1100:text-[14px] leading-[20px] truncate"></div>
                    <div className="text-center capitalize bg-[#305EFF17] overflow-hidden flex items-center justify-center min-w-[40px] rounded-md text-[#305EFF] text-[12px] font-[600] font-sans  max-w-[50px] max-h-[18px]">
                      inbox
                    </div>
                  </div>
                </div>
                <p className="flex-[0.7] overflow-hidden whitespace-nowrap h-5 flex justify-start items-start font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Undelivered Mail Returned to Sender-No Content Available
                </p>
                <p className=" w-[70px] text-end font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  09:58 AM
                </p>
              </div>
              <div className="mobile-view-table w-[92vw] h-[86px] overflow-hidden px-1 rounded-[12px] flex items-center  md:hidden font-sans">
                <span className="flex-[0.1]">
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="19.5"
                      cy="19.5"
                      r="19.5"
                      fill="#305EFF"
                    ></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.31152 15.0702C8.31152 13.456 9.62007 12.1475 11.2342 12.1475H27.3092C28.9234 12.1475 30.2319 13.456 30.2319 15.0702V23.8383C30.2319 25.4525 28.9234 26.761 27.3092 26.761H11.2342C9.62007 26.761 8.31152 25.4525 8.31152 23.8383V15.0702ZM15.6173 21.6464V15.1603H18.2547V16.7938C18.7312 15.8239 19.548 14.9901 20.9773 14.9901C22.5258 14.9901 23.819 15.943 23.819 18.1891V23.6683H21.0964V18.5635C21.0964 17.6957 20.637 17.2192 19.7862 17.2192C18.8843 17.2192 18.3398 17.7467 18.3398 18.9889V23.6683H17.4442V24.5691H14.5215V21.6464H15.6173Z"
                      fill="#F8FAFC"
                    ></path>
                  </svg>
                </span>
                <div className="flex flex-col w-full py-2 h-full items-start justify-center  ml-2">
                  <p className="font-[600] text-[22px] h-[42px] whitespace-nowrap  w-[50vw]  overflow-hidden"></p>
                  <p className="text-[14px] flex w-[50vw] h-[34px] overflow-hidden whitespace-nowrap">
                    Undelivered Mail Returned to Sender-No Content Available
                  </p>
                  <p></p>
                </div>
                <div className="w-full flex flex-col justify-end items-end gap-2">
                  <span className="cursor-pointer z-10 mt-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke="#6C849D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p className="text-[14px]">09:58 AM</p>
                </div>
              </div>
            </div>
            <div className="md:w-[96%] cursor-pointer w-[92vw] my-[1px] z-0 px-1 h-[86px] md:h-[60px] rounded-[12px] md:rounded-xl flex justify-between items-center bg-white font-[600] text-black">
              <div className=" w-[96%] px-3 h-[60px] rounded-xl desktop-view-table hidden md:flex justify-between items-center">
                <div className="flex items-center flex-[0.4] gap-3">
                  <div className="relative overflow-hidden">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      className=" h-[28px] w-[28px] rounded-[8px] bg-[#D9D9D9] cursor-pointer appearance-none  focus:ring-black checked:bg-[#0000ff00] border font-sans text-[20px] checked:border-black flex items-center justify-center "
                    />
                  </div>
                  <div className="grid grid-cols-[10%_55%_35%] items-center w-[20vw] pr-2 gap-3 overflow-hidden">
                    <span className="cursor-pointer z-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                          stroke="#6C849D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="font-sans text-[12px] mq1100:text-[14px] leading-[20px] truncate"></div>
                    <div className="text-center capitalize bg-[#305EFF17] overflow-hidden flex items-center justify-center min-w-[40px] rounded-md text-[#305EFF] text-[12px] font-[600] font-sans  max-w-[50px] max-h-[18px]">
                      inbox
                    </div>
                  </div>
                </div>
                <p className="flex-[0.7] overflow-hidden whitespace-nowrap h-5 flex justify-start items-start font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Undelivered Mail Returned to Sender-No Content Available
                </p>
                <p className=" w-[70px] text-end font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Jun 22
                </p>
              </div>
              <div className="mobile-view-table w-[92vw] h-[86px] overflow-hidden px-1 rounded-[12px] flex items-center  md:hidden font-sans">
                <span className="flex-[0.1]">
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="19.5"
                      cy="19.5"
                      r="19.5"
                      fill="#305EFF"
                    ></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.31152 15.0702C8.31152 13.456 9.62007 12.1475 11.2342 12.1475H27.3092C28.9234 12.1475 30.2319 13.456 30.2319 15.0702V23.8383C30.2319 25.4525 28.9234 26.761 27.3092 26.761H11.2342C9.62007 26.761 8.31152 25.4525 8.31152 23.8383V15.0702ZM15.6173 21.6464V15.1603H18.2547V16.7938C18.7312 15.8239 19.548 14.9901 20.9773 14.9901C22.5258 14.9901 23.819 15.943 23.819 18.1891V23.6683H21.0964V18.5635C21.0964 17.6957 20.637 17.2192 19.7862 17.2192C18.8843 17.2192 18.3398 17.7467 18.3398 18.9889V23.6683H17.4442V24.5691H14.5215V21.6464H15.6173Z"
                      fill="#F8FAFC"
                    ></path>
                  </svg>
                </span>
                <div className="flex flex-col w-full py-2 h-full items-start justify-center  ml-2">
                  <p className="font-[600] text-[22px] h-[42px] whitespace-nowrap  w-[50vw]  overflow-hidden"></p>
                  <p className="text-[14px] flex w-[50vw] h-[34px] overflow-hidden whitespace-nowrap">
                    Undelivered Mail Returned to Sender-No Content Available
                  </p>
                  <p></p>
                </div>
                <div className="w-full flex flex-col justify-end items-end gap-2">
                  <span className="cursor-pointer z-10 mt-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke="#6C849D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div className="text-[14px]">Jun 22</div>
                </div>
              </div>
            </div>
            <div className="md:w-[96%] cursor-pointer w-[92vw] my-[1px] z-0 px-1 h-[86px] md:h-[60px] rounded-[12px] md:rounded-xl flex justify-between items-center bg-white font-[600] text-black">
              <div className=" w-[96%] px-3 h-[60px] rounded-xl desktop-view-table hidden md:flex justify-between items-center">
                <div className="flex items-center flex-[0.4] gap-3">
                  <div className="relative overflow-hidden">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      className=" h-[28px] w-[28px] rounded-[8px] bg-[#D9D9D9] cursor-pointer appearance-none  focus:ring-black checked:bg-[#0000ff00] border font-sans text-[20px] checked:border-black flex items-center justify-center "
                    />
                  </div>
                  <div className="grid grid-cols-[10%_55%_35%] items-center w-[20vw] pr-2 gap-3 overflow-hidden">
                    <span className="cursor-pointer z-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                          stroke="#6C849D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="font-sans text-[12px] mq1100:text-[14px] leading-[20px] truncate"></div>
                    <div className="text-center capitalize bg-[#305EFF17] overflow-hidden flex items-center justify-center min-w-[40px] rounded-md text-[#305EFF] text-[12px] font-[600] font-sans  max-w-[50px] max-h-[18px]">
                      inbox
                    </div>
                  </div>
                </div>
                <p className="flex-[0.7] overflow-hidden whitespace-nowrap h-5 flex justify-start items-start font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Undelivered Mail Returned to Sender-No Content Available
                </p>
                <p className=" w-[70px] text-end font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Jun 22
                </p>
              </div>
              <div className="mobile-view-table w-[92vw] h-[86px] overflow-hidden px-1 rounded-[12px] flex items-center  md:hidden font-sans">
                <span className="flex-[0.1]">
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="19.5"
                      cy="19.5"
                      r="19.5"
                      fill="#305EFF"
                    ></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.31152 15.0702C8.31152 13.456 9.62007 12.1475 11.2342 12.1475H27.3092C28.9234 12.1475 30.2319 13.456 30.2319 15.0702V23.8383C30.2319 25.4525 28.9234 26.761 27.3092 26.761H11.2342C9.62007 26.761 8.31152 25.4525 8.31152 23.8383V15.0702ZM15.6173 21.6464V15.1603H18.2547V16.7938C18.7312 15.8239 19.548 14.9901 20.9773 14.9901C22.5258 14.9901 23.819 15.943 23.819 18.1891V23.6683H21.0964V18.5635C21.0964 17.6957 20.637 17.2192 19.7862 17.2192C18.8843 17.2192 18.3398 17.7467 18.3398 18.9889V23.6683H17.4442V24.5691H14.5215V21.6464H15.6173Z"
                      fill="#F8FAFC"
                    ></path>
                  </svg>
                </span>
                <div className="flex flex-col w-full py-2 h-full items-start justify-center  ml-2">
                  <p className="font-[600] text-[22px] h-[42px] whitespace-nowrap  w-[50vw]  overflow-hidden"></p>
                  <p className="text-[14px] flex w-[50vw] h-[34px] overflow-hidden whitespace-nowrap">
                    Undelivered Mail Returned to Sender-No Content Available
                  </p>
                  <p></p>
                </div>
                <div className="w-full flex flex-col justify-end items-end gap-2">
                  <span className="cursor-pointer z-10 mt-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke="#6C849D"
                        strokeWidth="1.5"
                        strokLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p className="text-[14px]">Jun 22</p>
                </div>
              </div>
            </div>
            <div className="md:w-[96%] cursor-pointer w-[92vw] my-[1px] z-0 px-1 h-[86px] md:h-[60px] rounded-[12px] md:rounded-xl flex justify-between items-center bg-white font-[600] text-black">
              <div className=" w-[96%] px-3 h-[60px] rounded-xl desktop-view-table hidden md:flex justify-between items-center">
                <div className="flex items-center flex-[0.4] gap-3">
                  <div className="relative overflow-hidden">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      className=" h-[28px] w-[28px] rounded-[8px] bg-[#D9D9D9] cursor-pointer appearance-none  focus:ring-black checked:bg-[#0000ff00] border font-sans text-[20px] checked:border-black flex items-center justify-center "
                    />
                  </div>
                  <div className="grid grid-cols-[10%_55%_35%] items-center w-[20vw] pr-2 gap-3 overflow-hidden">
                    <span className="cursor-pointer z-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                          stroke="#6C849D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="font-sans text-[12px] mq1100:text-[14px] leading-[20px] truncate"></div>
                    <div className="text-center capitalize bg-[#305EFF17] overflow-hidden flex items-center justify-center min-w-[40px] rounded-md text-[#305EFF] text-[12px] font-[600] font-sans  max-w-[50px] max-h-[18px]">
                      inbox
                    </div>
                  </div>
                </div>
                <p className="flex-[0.7] overflow-hidden whitespace-nowrap h-5 flex justify-start items-start font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Undelivered Mail Returned to Sender-<p>this is the body</p>
                </p>
                <p className=" w-[70px] text-end font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Jun 22
                </p>
              </div>
              <div className="mobile-view-table w-[92vw] h-[86px] overflow-hidden px-1 rounded-[12px] flex items-center  md:hidden font-sans">
                <span className="flex-[0.1]">
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="19.5"
                      cy="19.5"
                      r="19.5"
                      fill="#305EFF"
                    ></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.31152 15.0702C8.31152 13.456 9.62007 12.1475 11.2342 12.1475H27.3092C28.9234 12.1475 30.2319 13.456 30.2319 15.0702V23.8383C30.2319 25.4525 28.9234 26.761 27.3092 26.761H11.2342C9.62007 26.761 8.31152 25.4525 8.31152 23.8383V15.0702ZM15.6173 21.6464V15.1603H18.2547V16.7938C18.7312 15.8239 19.548 14.9901 20.9773 14.9901C22.5258 14.9901 23.819 15.943 23.819 18.1891V23.6683H21.0964V18.5635C21.0964 17.6957 20.637 17.2192 19.7862 17.2192C18.8843 17.2192 18.3398 17.7467 18.3398 18.9889V23.6683H17.4442V24.5691H14.5215V21.6464H15.6173Z"
                      fill="#F8FAFC"
                    ></path>
                  </svg>
                </span>
                <div className="flex flex-col w-full py-2 h-full items-start justify-center  ml-2">
                  <p className="font-[600] text-[22px] h-[42px] whitespace-nowrap  w-[50vw]  overflow-hidden"></p>
                  <p className="text-[14px] flex w-[50vw] h-[34px] overflow-hidden whitespace-nowrap">
                    Undelivered Mail Returned to Sender-<p>this is the body</p>
                  </p>
                  <p></p>
                </div>
                <div className="w-full flex flex-col justify-end items-end gap-2">
                  <span className="cursor-pointer z-10 mt-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke="#6C849D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p className="text-[14px]">Jun 22</p>
                </div>
              </div>
            </div>
            <div className="md:w-[96%] cursor-pointer w-[92vw] my-[1px] z-0 px-1 h-[86px] md:h-[60px] rounded-[12px] md:rounded-xl flex justify-between items-center bg-white font-[600] text-black">
              <div className=" w-[96%] px-3 h-[60px] rounded-xl desktop-view-table hidden md:flex justify-between items-center">
                <div className="flex items-center flex-[0.4] gap-3">
                  <div className="relative overflow-hidden">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      className=" h-[28px] w-[28px] rounded-[8px] bg-[#D9D9D9] cursor-pointer appearance-none  focus:ring-black checked:bg-[#0000ff00] border font-sans text-[20px] checked:border-black flex items-center justify-center "
                    />
                  </div>
                  <div className="grid grid-cols-[10%_55%_35%] items-center w-[20vw] pr-2 gap-3 overflow-hidden">
                    <span className="cursor-pointer z-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                          stroke="#6C849D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="font-sans text-[12px] mq1100:text-[14px] leading-[20px] truncate"></div>
                    <div className="text-center capitalize bg-[#305EFF17] overflow-hidden flex items-center justify-center min-w-[40px] rounded-md text-[#305EFF] text-[12px] font-[600] font-sans  max-w-[50px] max-h-[18px]">
                      inbox
                    </div>
                  </div>
                </div>
                <p className="flex-[0.7] overflow-hidden whitespace-nowrap h-5 flex justify-start items-start font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Undelivered Mail Returned to Sender-No Content Available
                </p>
                <p className=" w-[70px] text-end font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Jun 22
                </p>
              </div>
              <div className="mobile-view-table w-[92vw] h-[86px] overflow-hidden px-1 rounded-[12px] flex items-center  md:hidden font-sans">
                <span className="flex-[0.1]">
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="19.5"
                      cy="19.5"
                      r="19.5"
                      fill="#305EFF"
                    ></circle>
                    <path
                      filRule="evenodd"
                      clipRule="evenodd"
                      d="M8.31152 15.0702C8.31152 13.456 9.62007 12.1475 11.2342 12.1475H27.3092C28.9234 12.1475 30.2319 13.456 30.2319 15.0702V23.8383C30.2319 25.4525 28.9234 26.761 27.3092 26.761H11.2342C9.62007 26.761 8.31152 25.4525 8.31152 23.8383V15.0702ZM15.6173 21.6464V15.1603H18.2547V16.7938C18.7312 15.8239 19.548 14.9901 20.9773 14.9901C22.5258 14.9901 23.819 15.943 23.819 18.1891V23.6683H21.0964V18.5635C21.0964 17.6957 20.637 17.2192 19.7862 17.2192C18.8843 17.2192 18.3398 17.7467 18.3398 18.9889V23.6683H17.4442V24.5691H14.5215V21.6464H15.6173Z"
                      fill="#F8FAFC"
                    ></path>
                  </svg>
                </span>
                <div className="flex flex-col w-full py-2 h-full items-start justify-center  ml-2">
                  <p className="font-[600] text-[22px] h-[42px] whitespace-nowrap  w-[50vw]  overflow-hidden"></p>
                  <p className="text-[14px] flex w-[50vw] h-[34px] overflow-hidden whitespace-nowrap">
                    Undelivered Mail Returned to Sender-No Content Available
                  </p>
                  <p></p>
                </div>
                <div className="w-full flex flex-col justify-end items-end gap-2">
                  <span className="cursor-pointer z-10 mt-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke="#6C849D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p className="text-[14px]">Jun 22</p>
                </div>
              </div>
            </div>
            <div className="md:w-[96%] cursor-pointer w-[92vw] my-[1px] z-0 px-1 h-[86px] md:h-[60px] rounded-[12px] md:rounded-xl flex justify-between items-center bg-white font-[600] text-black">
              <div className=" w-[96%] px-3 h-[60px] rounded-xl desktop-view-table hidden md:flex justify-between items-center">
                <div className="flex items-center flex-[0.4] gap-3">
                  <div className="relative overflow-hidden">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      className=" h-[28px] w-[28px] rounded-[8px] bg-[#D9D9D9] cursor-pointer appearance-none  focus:ring-black checked:bg-[#0000ff00] border font-sans text-[20px] checked:border-black flex items-center justify-center "
                    />
                  </div>
                  <div className="grid grid-cols-[10%_55%_35%] items-center w-[20vw] pr-2 gap-3 overflow-hidden">
                    <span className="cursor-pointer z-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                          stroke="#6C849D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="font-sans text-[12px] mq1100:text-[14px] leading-[20px] truncate"></div>
                    <div className="text-center capitalize bg-[#305EFF17] overflow-hidden flex items-center justify-center min-w-[40px] rounded-md text-[#305EFF] text-[12px] font-[600] font-sans  max-w-[50px] max-h-[18px]">
                      inbox
                    </div>
                  </div>
                </div>
                <p className="flex-[0.7] overflow-hidden whitespace-nowrap h-5 flex justify-start items-start font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Undelivered Mail Returned to Sender-No Content Available
                </p>
                <p className=" w-[70px] text-end font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                  Jun 22
                </p>
              </div>
              <div className="mobile-view-table w-[92vw] h-[86px] overflow-hidden px-1 rounded-[12px] flex items-center  md:hidden font-sans">
                <span className="flex-[0.1]">
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="19.5"
                      cy="19.5"
                      r="19.5"
                      fill="#305EFF"
                    ></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.31152 15.0702C8.31152 13.456 9.62007 12.1475 11.2342 12.1475H27.3092C28.9234 12.1475 30.2319 13.456 30.2319 15.0702V23.8383C30.2319 25.4525 28.9234 26.761 27.3092 26.761H11.2342C9.62007 26.761 8.31152 25.4525 8.31152 23.8383V15.0702ZM15.6173 21.6464V15.1603H18.2547V16.7938C18.7312 15.8239 19.548 14.9901 20.9773 14.9901C22.5258 14.9901 23.819 15.943 23.819 18.1891V23.6683H21.0964V18.5635C21.0964 17.6957 20.637 17.2192 19.7862 17.2192C18.8843 17.2192 18.3398 17.7467 18.3398 18.9889V23.6683H17.4442V24.5691H14.5215V21.6464H15.6173Z"
                      fill="#F8FAFC"
                    ></path>
                  </svg>
                </span>
                <div className="flex flex-col w-full py-2 h-full items-start justify-center  ml-2">
                  <p className="font-[600] text-[22px] h-[42px] whitespace-nowrap  w-[50vw]  overflow-hidden"></p>
                  <p className="text-[14px] flex w-[50vw] h-[34px] overflow-hidden whitespace-nowrap">
                    Undelivered Mail Returned to Sender-No Content Available
                  </p>
                  <p></p>
                </div>
                <div className="w-full flex flex-col justify-end items-end gap-2">
                  <span className="cursor-pointer z-10 mt-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke="#6C849D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p className="text-[14px]">Jun 22</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-view-table w-full flex flex-col items-center mt-3 md:hidden">
          <div className="flex justify-between items-center py-1 pl-4 pr-2 w-[92vw] h-[49px] mb-4 rounded-[99px] bg-[white] ">
            <div className="flex items-center">
              <span>
                <img src="/bar.svg" />
              </span>
              <input
                className="font-sans w-[200px] h-[36px] ml-3  outline-none placeholder:text-[#6C849D52] text-[#647b93] text-[12px] "
                placeholder="Search in neuromail"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center relative gap-3">
              <span className="cursor-pointer">
                <img src="/icons.svg" className="w-[17px] h-[17px]" />
              </span>
              <div className=" h-[35px] w-[35px] rounded-full cursor-pointer overflow-hidden">
                <p className="bg-[#EB417A] w-full h-full text-[white] flex justify-center items-center text-[17px] font-bold font-sans">
                  Z
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[96%] font-sans px-5 py-4 mb-3 rounded-xl bg-white desktop-view-table hidden md:flex justify-between items-center">
            <div className="flex items-center gap-3 relative">
              <input
                type="checkbox"
                id="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="w-5 h-5 appearance-none cursor-pointer rounded-md border-[2px] border-[#B1C1D2] focus:ring-blue-500 checked:bg-blue-500 checked:border-blue-500 relative"
              />
              <label for="checkbox" className="text-[14px]">
                Inbox
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-sans text-[14px] leading-[18px] text-[#000000]">
                1-10 of 25
              </p>
              <button
                disabled=""
                className="btn-circle-sm cursor-pointer disabled:cursor-not-allowed"
              >
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    d="M7.13395 11.91L6.07295 12.97L0.29395 7.193C0.200796 7.10043 0.126867 6.99036 0.0764193 6.86911C0.0259713 6.74786 0 6.61783 0 6.4865C0 6.35517 0.0259713 6.22514 0.0764193 6.10389C0.126867 5.98264 0.200796 5.87257 0.29395 5.78L6.07295 0L7.13295 1.06L1.70895 6.485L7.13395 11.91Z"
                    fill="#747474"
                  ></path>
                </svg>
              </button>
              <button className="btn-circle-sm cursor-pointer disabled:cursor-not-allowed">
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    d="M-0.000161171 1.05997L1.06084 -2.86102e-05L6.83984 5.77697C6.93299 5.86954 7.00692 5.97961 7.05737 6.10086C7.10782 6.22212 7.13379 6.35214 7.13379 6.48347C7.13379 6.6148 7.10782 6.74483 7.05737 6.86608C7.00692 6.98733 6.93299 7.0974 6.83984 7.18997L1.06084 12.97L0.000838757 11.91L5.42484 6.48497L-0.000161171 1.05997Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="text-[14px] flex items-center gap-3 text-[#40566D]">
              <p className="bg-[#305EFF17] px-1 cursor-pointer rounded-md flex justify-center items-center font-[600]">
                All
              </p>
              <p className=" px-1 cursor-pointer rounded-md flex justify-center items-center font-[600]">
                Read
              </p>
              <p className=" px-1 cursor-pointer rounded-md flex justify-center items-center font-[600]">
                Unread
              </p>
              <p className=" px-1 cursor-pointer rounded-md flex justify-center items-center font-[600]">
                Has File
              </p>
            </div>
          </div>
          <div className="h-full w-full overflow-auto flex flex-col items-center gap-1">
            <div className="md:w-[96%] cursor-pointer w-[92vw] my-[1px] z-0 px-1 h-[86px] md:h-[60px] rounded-[12px] md:rounded-xl flex justify-between items-center bg-white font-[600] text-black">
              <div className=" w-[96%] px-3 h-[60px] rounded-xl desktop-view-table hidden md:flex justify-between items-center">
                <div className="relative overflow-hidden">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    className=" h-[28px] w-[28px] rounded-[8px] bg-[#D9D9D9] cursor-pointer appearance-none  focus:ring-black checked:bg-[#0000ff00] border font-sans text-[20px] checked:border-black flex items-center justify-center "
                  />
                </div>
                <div className="grid grid-cols-[10%_55%_35%] items-center w-[20vw] pr-2 gap-3 overflow-hidden">
                  <span className="cursor-pointer z-10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke="#6C849D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div className="font-sans text-[12px] mq1100:text-[14px] leading-[20px] truncate"></div>
                  <div className="text-center capitalize bg-[#305EFF17] overflow-hidden flex items-center justify-center min-w-[40px] rounded-md text-[#305EFF] text-[12px] font-[600] font-sans  max-w-[50px] max-h-[18px]">
                    inbox
                  </div>
                </div>
              </div>
              <p className="flex-[0.7] overflow-hidden whitespace-nowrap h-5 flex justify-start items-start font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                Undelivered Mail Returned to Sender-<p>jjjjjj</p>
              </p>
              <p className=" w-[70px] text-end font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                09:58 AM
              </p>
            </div>
            <div className="mobile-view-table w-[92vw] h-[86px] overflow-hidden px-1 rounded-[12px] flex items-center  md:hidden font-sans">
              <span className="flex-[0.1]">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" fill="#305EFF"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.31152 15.0702C8.31152 13.456 9.62007 12.1475 11.2342 12.1475H27.3092C28.9234 12.1475 30.2319 13.456 30.2319 15.0702V23.8383C30.2319 25.4525 28.9234 26.761 27.3092 26.761H11.2342C9.62007 26.761 8.31152 25.4525 8.31152 23.8383V15.0702ZM15.6173 21.6464V15.1603H18.2547V16.7938C18.7312 15.8239 19.548 14.9901 20.9773 14.9901C22.5258 14.9901 23.819 15.943 23.819 18.1891V23.6683H21.0964V18.5635C21.0964 17.6957 20.637 17.2192 19.7862 17.2192C18.8843 17.2192 18.3398 17.7467 18.3398 18.9889V23.6683H17.4442V24.5691H14.5215V21.6464H15.6173Z"
                    fill="#F8FAFC"
                  ></path>
                </svg>
              </span>
              <div className="flex flex-col w-full py-2 h-full items-start justify-center  ml-2">
                <p className="font-[600] text-[22px] h-[42px] whitespace-nowrap  w-[50vw]  overflow-hidden"></p>
                <p className="text-[14px] flex w-[50vw] h-[34px] overflow-hidden whitespace-nowrap">
                  Undelivered Mail Returned to Sender-<p>jjjjjj</p>
                </p>
                <p></p>
              </div>
              <div className="w-full flex flex-col justify-end items-end gap-2">
                <span className="cursor-pointer z-10 mt-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                      stroke="#6C849D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <p className="text-[14px]">09:58 AM</p>
              </div>
            </div>
          </div>
          <div className="md:w-[96%] cursor-pointer w-[92vw] my-[1px] z-0 px-1 h-[86px] md:h-[60px] rounded-[12px] md:rounded-xl flex justify-between items-center bg-white font-[600] text-black">
            <div className=" w-[96%] px-3 h-[60px] rounded-xl desktop-view-table hidden md:flex justify-between items-center">
              <div className="flex items-center flex-[0.4] gap-3">
                <div className="relative overflow-hidden">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    className=" h-[28px] w-[28px] rounded-[8px] bg-[#D9D9D9] cursor-pointer appearance-none  focus:ring-black checked:bg-[#0000ff00] border font-sans text-[20px] checked:border-black flex items-center justify-center "
                  />
                </div>
                <div className="grid grid-cols-[10%_55%_35%] items-center w-[20vw] pr-2 gap-3 overflow-hidden">
                  <span className="cursor-pointer z-10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke="#6C849D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div className="font-sans text-[12px] mq1100:text-[14px] leading-[20px] truncate"></div>
                  <div className="text-center capitalize bg-[#305EFF17] overflow-hidden flex items-center justify-center min-w-[40px] rounded-md text-[#305EFF] text-[12px] font-[600] font-sans  max-w-[50px] max-h-[18px]">
                    inbox
                  </div>
                </div>
              </div>
              <p className="flex-[0.7] overflow-hidden whitespace-nowrap h-5 flex justify-start items-start font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                Undelivered Mail Returned to Sender-
                <p>this is the body of th email</p>
              </p>
              <p className=" w-[70px] text-end font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                09:58 AM
              </p>
            </div>
            <div className="mobile-view-table w-[92vw] h-[86px] overflow-hidden px-1 rounded-[12px] flex items-center  md:hidden font-sans">
              <span className="flex-[0.1]">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" fill="#305EFF"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.31152 15.0702C8.31152 13.456 9.62007 12.1475 11.2342 12.1475H27.3092C28.9234 12.1475 30.2319 13.456 30.2319 15.0702V23.8383C30.2319 25.4525 28.9234 26.761 27.3092 26.761H11.2342C9.62007 26.761 8.31152 25.4525 8.31152 23.8383V15.0702ZM15.6173 21.6464V15.1603H18.2547V16.7938C18.7312 15.8239 19.548 14.9901 20.9773 14.9901C22.5258 14.9901 23.819 15.943 23.819 18.1891V23.6683H21.0964V18.5635C21.0964 17.6957 20.637 17.2192 19.7862 17.2192C18.8843 17.2192 18.3398 17.7467 18.3398 18.9889V23.6683H17.4442V24.5691H14.5215V21.6464H15.6173Z"
                    fill="#F8FAFC"
                  ></path>
                </svg>
              </span>
              <div className="flex flex-col w-full py-2 h-full items-start justify-center  ml-2">
                <p className="font-[600] text-[22px] h-[42px] whitespace-nowrap  w-[50vw]  overflow-hidden"></p>
                <p className="text-[14px] flex w-[50vw] h-[34px] overflow-hidden whitespace-nowrap">
                  Undelivered Mail Returned to Sender-
                  <p>this is the body of th email</p>
                </p>
                <p></p>
              </div>
              <div className="w-full flex flex-col justify-end items-end gap-2">
                <span className="cursor-pointer z-10 mt-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                      stroke="#6C849D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <p className="text-[14px]">09:58 AM</p>
              </div>
            </div>
          </div>
          <div className="md:w-[96%] cursor-pointer w-[92vw] my-[1px] z-0 px-1 h-[86px] md:h-[60px] rounded-[12px] md:rounded-xl flex justify-between items-center bg-white font-[600] text-black">
            <div className=" w-[96%] px-3 h-[60px] rounded-xl desktop-view-table hidden md:flex justify-between items-center">
              <div className="flex items-center flex-[0.4] gap-3">
                <div className="relative overflow-hidden">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    className=" h-[28px] w-[28px] rounded-[8px] bg-[#D9D9D9] cursor-pointer appearance-none  focus:ring-black checked:bg-[#0000ff00] border font-sans text-[20px] checked:border-black flex items-center justify-center "
                  />
                </div>
                <div className="grid grid-cols-[10%_55%_35%] items-center w-[20vw] pr-2 gap-3 overflow-hidden">
                  <span className="cursor-pointer z-10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke="#6C849D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div className="font-sans text-[12px] mq1100:text-[14px] leading-[20px] truncate"></div>
                  <div className="text-center capitalize bg-[#305EFF17] overflow-hidden flex items-center justify-center min-w-[40px] rounded-md text-[#305EFF] text-[12px] font-[600] font-sans  max-w-[50px] max-h-[18px]">
                    inbox
                  </div>
                </div>
              </div>
              <p className="flex-[0.7] overflow-hidden whitespace-nowrap h-5 flex justify-start items-start font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                Undelivered Mail Returned to Sender-No Content Available
              </p>
              <p className=" w-[70px] text-end font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                09:58 AM
              </p>
            </div>
            <div className="mobile-view-table w-[92vw] h-[86px] overflow-hidden px-1 rounded-[12px] flex items-center  md:hidden font-sans">
              <span className="flex-[0.1]">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="19.5" cy="19.5" r="19.5" fill="#305EFF"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.31152 15.0702C8.31152 13.456 9.62007 12.1475 11.2342 12.1475H27.3092C28.9234 12.1475 30.2319 13.456 30.2319 15.0702V23.8383C30.2319 25.4525 28.9234 26.761 27.3092 26.761H11.2342C9.62007 26.761 8.31152 25.4525 8.31152 23.8383V15.0702ZM15.6173 21.6464V15.1603H18.2547V16.7938C18.7312 15.8239 19.548 14.9901 20.9773 14.9901C22.5258 14.9901 23.819 15.943 23.819 18.1891V23.6683H21.0964V18.5635C21.0964 17.6957 20.637 17.2192 19.7862 17.2192C18.8843 17.2192 18.3398 17.7467 18.3398 18.9889V23.6683H17.4442V24.5691H14.5215V21.6464H15.6173Z"
                    fill="#F8FAFC"
                  ></path>
                </svg>
              </span>
              <div className="flex flex-col w-full py-2 h-full items-start justify-center  ml-2">
                <p className="font-[600] text-[22px] h-[42px] whitespace-nowrap  w-[50vw]  overflow-hidden"></p>
                <p className="text-[14px] flex w-[50vw] h-[34px] overflow-hidden whitespace-nowrap">
                  Undelivered Mail Returned to Sender-No Content Available
                </p>
                <p></p>
              </div>
              <div className="w-full flex flex-col justify-end items-end gap-2">
                <span className="cursor-pointer z-10 mt-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                      stroke="#6C849D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <p className="text-[14px]">09:58 AM</p>
              </div>
            </div>
          </div>
          <div className="md:w-[96%] cursor-pointer w-[92vw] my-[1px] z-0 px-1 h-[86px] md:h-[60px] rounded-[12px] md:rounded-xl flex justify-between items-center bg-[#F1F5FA] font-sans font-[500] text-[#383838]">
            <div className=" w-[96%] px-3 h-[60px] rounded-xl desktop-view-table hidden md:flex justify-between items-center">
              <div className="flex items-center flex-[0.4] gap-3">
                <div className="relative overflow-hidden">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    className=" h-[28px] w-[28px] rounded-[8px] bg-[#D9D9D9] cursor-pointer appearance-none  focus:ring-black checked:bg-[#0000ff00] border font-sans text-[20px] checked:border-black flex items-center justify-center "
                  />
                </div>
                <div className="grid grid-cols-[10%_55%_35%] items-center w-[20vw] pr-2 gap-3 overflow-hidden">
                  <span className="cursor-pointer z-10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                        stroke="#6C849D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div className="font-sans text-[12px] mq1100:text-[14px] leading-[20px] truncate"></div>
                  <div className="text-center capitalize bg-[#305EFF17] overflow-hidden flex items-center justify-center min-w-[40px] rounded-md text-[#305EFF] text-[12px] font-[600] font-sans  max-w-[50px] max-h-[18px]">
                    inbox
                  </div>
                </div>
              </div>
              <p className="flex-[0.7] overflow-hidden whitespace-nowrap h-5 flex justify-start items-start font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                Undelivered Mail Returned to Sender-<p>No content</p>
              </p>
              <p className=" w-[70px] text-end font-sans text-[12px] mq1100:text-[14px] leading-[20px]">
                09:58 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
