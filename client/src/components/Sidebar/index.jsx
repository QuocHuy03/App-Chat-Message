import React from "react";

export default function Sidebar() {
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
              href="/users"
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
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
              <span className="sr-only"> Users </span>
            </a>
          </li>
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
                srcSet="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtf2wF_kxcFFzolCTNFJHUZgyMBf94fw1uBhmMnGO0Lz%3Ds96-c&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtf2wF_kxcFFzolCTNFJHUZgyMBf94fw1uBhmMnGO0Lz%3Ds96-c&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtf2wF_kxcFFzolCTNFJHUZgyMBf94fw1uBhmMnGO0Lz%3Ds96-c&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtf2wF_kxcFFzolCTNFJHUZgyMBf94fw1uBhmMnGO0Lz%3Ds96-c&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtf2wF_kxcFFzolCTNFJHUZgyMBf94fw1uBhmMnGO0Lz%3Ds96-c&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtf2wF_kxcFFzolCTNFJHUZgyMBf94fw1uBhmMnGO0Lz%3Ds96-c&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtf2wF_kxcFFzolCTNFJHUZgyMBf94fw1uBhmMnGO0Lz%3Ds96-c&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtf2wF_kxcFFzolCTNFJHUZgyMBf94fw1uBhmMnGO0Lz%3Ds96-c&w=3840&q=75 3840w"
                src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtf2wF_kxcFFzolCTNFJHUZgyMBf94fw1uBhmMnGO0Lz%3Ds96-c&w=3840&q=75"
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
