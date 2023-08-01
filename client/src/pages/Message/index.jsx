import React, { useEffect } from "react";
import Layout from "../../components/Layout";

export default function Message() {
  return (
    <Layout>
      <div className="lg:pl-80 h-full" style={{ height: "100vh" }}>
        {/* <div className=" px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center  items-center bg-gray-100 ">
          <div className="text-center items-center flex flex-col">
            <h3 className=" mt-2 text-2xl font-semibold text-gray-900 ">
              Select a chat or start a new converstation
            </h3>
          </div>
        </div> */}
        <div className="h-full flex flex-col">
          <div className="bg-white w-full  flex  border-b-[1px]  sm:px-4  py-3  px-4  lg:px-6  justify-between  items-center  shadow-sm">
            <div className="flex gap-3 items-center">
              <a
                className=" lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer "
                href="/conversations"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height={32}
                  width={32}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <div className="relative">
                <div className=" relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11 ">
                  <img
                    alt="Avatar"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    sizes="100vw"
                    srcSet="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTteL4tQvYv_Vrf8SvgND7zo_-AKrPmpWksHiaOqrGtev7w%3Ds96-c&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTteL4tQvYv_Vrf8SvgND7zo_-AKrPmpWksHiaOqrGtev7w%3Ds96-c&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTteL4tQvYv_Vrf8SvgND7zo_-AKrPmpWksHiaOqrGtev7w%3Ds96-c&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTteL4tQvYv_Vrf8SvgND7zo_-AKrPmpWksHiaOqrGtev7w%3Ds96-c&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTteL4tQvYv_Vrf8SvgND7zo_-AKrPmpWksHiaOqrGtev7w%3Ds96-c&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTteL4tQvYv_Vrf8SvgND7zo_-AKrPmpWksHiaOqrGtev7w%3Ds96-c&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTteL4tQvYv_Vrf8SvgND7zo_-AKrPmpWksHiaOqrGtev7w%3Ds96-c&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTteL4tQvYv_Vrf8SvgND7zo_-AKrPmpWksHiaOqrGtev7w%3Ds96-c&w=3840&q=75 3840w"
                    src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTteL4tQvYv_Vrf8SvgND7zo_-AKrPmpWksHiaOqrGtev7w%3Ds96-c&w=3840&q=75"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: 0,
                      color: "transparent",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div>Bảo Đinh Gia</div>
                <div className=" text-sm  font-light text-neutral-500 ">
                  Offline
                </div>
              </div>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className=" text-sky-500  cursor-pointer  hover:text-sky-600  transition"
              height={32}
              width={32}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="flex gap-3 p-4 justify-end">
              <div className="order-2">
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
              <div className="flex flex-col gap-2  items-end">
                <div className=" flex items-center gap-1">
                  <div className="text-sm text-gray-500">Quoc Huy Le</div>
                  <div className="text-xs text-gray-400">10:26 PM</div>
                </div>
                <div className="text-sm w-fit overflow-hidden bg-sky-500 text-white rounded-full py-2 px-3">
                  <div>123</div>
                </div>
              </div>
            </div>

            {/* <div className="flex gap-3 p-4">
              <div className>
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
              <div className="flex flex-col gap-2 ">
                <div className=" flex items-center gap-1">
                  <div className="text-sm text-gray-500">Quoc Huy Le</div>
                  <div className="text-xs text-gray-400">10:26 PM</div>
                </div>
                <div className="text-sm w-fit overflow-hidden bg-gray-100 rounded-full py-2 px-3">
                  <div>123</div>
                </div>
              </div>
            </div> */}

            <div className="pt-24" />
          </div>

          <div className=" py-4  px-4  bg-white  border-t  flex  items-center  gap-2  lg:gap-4  w-full ">
            <button>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-sky-500"
                height={30}
                width={30}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <form className="flex items-center gap-2 lg:gap-4 w-full">
              <div className="relative w-full ">
                <input
                  id="message"
                  autoComplete="message"
                  placeholder="Write a message"
                  className=" text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none "
                  name="message"
                />
              </div>
              <button
                type="submit"
                className=" rounded-full  p-2  bg-sky-500  cursor-pointer  hover:bg-sky-600  transition "
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="text-white"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
