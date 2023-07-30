import React from "react";
import Sidebar from "../Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <main className="lg:pl-20 h-full">
        <div className="h-full">
          <aside
            className="
  fixed 
  inset-y-0 
  pb-20
  lg:pb-0
  lg:left-20 
  lg:w-80 
  lg:block
  overflow-y-auto 
  border-r 
  border-gray-200 
 hidden"
          >
            <div className="px-5">
              <div className="flex justify-between mb-4 pt-4">
                <div className="text-2xl font-bold text-neutral-800">
                  Messages
                </div>
                <div className=" rounded-full  p-2  bg-gray-100  text-gray-600  cursor-pointer  hover:opacity-75  transition ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none">
                      <path d="M0 0h24v24H0z" />
                      <path d="M0 0h24v24H0z" />
                    </g>
                    <path d="M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM8 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H2v-.99C2.2 16.29 5.3 15 8 15s5.8 1.29 6 2v1zM12.51 4.05C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95zM16.53 13.83C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17z" />
                  </svg>
                </div>
              </div>
              <div
                className="
  w-full 
  relative 
  flex 
  items-center 
  space-x-3 
  p-3 
  hover:bg-neutral-100
  rounded-lg
  transition
  cursor-pointer
   bg-neutral-100"
              >
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
                <div className="min-w-0 flex-1">
                  <div className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-md font-medium text-gray-900">
                        Bảo Đinh Gia
                      </p>
                    </div>
                    <p
                      className="
        truncate 
        text-sm
         text-black font-medium"
                    >
                      Started a conversation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {children}
        </div>
      </main>
    </>
  );
}