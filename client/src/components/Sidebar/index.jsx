import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContextProvider";
import { useDispatch } from "react-redux";
import { logout } from "../../stores/authSlice";

export default function Sidebar() {
  const { isUser } = useContext(AppContext);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
  };
  return (
    <div className=" hidden  lg:fixed  lg:inset-y-0  lg:left-0  lg:z-40  lg:w-20  xl:px-6 lg:overflow-y-auto  lg:bg-white  lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between ">
      <nav className="mt-4 flex flex-col justify-between">
        <ul role="list" className="flex flex-col items-center space-y-1">
          <li>
            <a
              className="
  group
  flex
  gap-x-3
  rounded-md
  p-3
  text-sm
  leading-6
  font-semibold
  text-gray-500
  hover:text-black
  hover:bg-gray-100
   bg-gray-100 textblack"
              href="/conversations"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-6 w-6 shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only"> Chat </span>
            </a>
          </li>

          <li>
            <a
              onClick={handleLogout}
              className="
  group
  flex
  gap-x-3
  rounded-md
  p-3
  text-sm
  leading-6
  font-semibold
  text-gray-500
  hover:text-black
  hover:bg-gray-100
  "
              href="#"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only"> Logout </span>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="mt-4 flex flex-col justify-between items-center">
        <div className="cursor-pointer hover:opacity-75 transition">
          <div className="relative">
            <div className=" relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11 ">
              <img
                alt="Avatar"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                src={`https://ui-avatars.com/api/name=${
                  isUser ? isUser.username : "huydev"
                }`}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent",
                }}
              />
            </div>
            <span className=" absolute  block  rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3 " />
          </div>
        </div>
      </nav>
    </div>
  );
}
