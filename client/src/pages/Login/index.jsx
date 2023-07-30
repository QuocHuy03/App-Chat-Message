import React from "react";

export default function Login() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px:6 lg:px-8 bg-gray-100 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          alt="Logo"
          loading="lazy"
          width={48}
          height={48}
          decoding="async"
          data-nimg={1}
          className="mx-auto w-auto"
          style={{ color: "transparent" }}
          src="https://messenger-xuantruong.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=48&q=75"
        />
        <h2 className=" mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 ">
          <form className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="email"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className="
          form-input
          block 
          w-full
          rounded-md
          py-1.5
          text-gray-900
          shadow-sm
          ring-1
          ring-inset
          ring-gray-300
          placeholder: text-gray-400
          focus:ring-2
          focus:ring-inset
          focus:ring-sky-600
          sm:text-sm
          sm:leading-6"
                  name="email"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="password"
                  className="
          form-input
          block 
          w-full
          rounded-md
          py-1.5
          text-gray-900
          shadow-sm
          ring-1
          ring-inset
          ring-gray-300
          placeholder: text-gray-400
          focus:ring-2
          focus:ring-inset
          focus:ring-sky-600
          sm:text-sm
          sm:leading-6"
                  name="password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="
 flex
 justify-center
 rounded-md
 px-3
 py-2
 text-sm
 font-semibold
 focus-visible:outline
 focus-cisible: outline2
 focus-visible: outline-offset-2
  w-full text-white bg-sky-500 hover:bg-sky-600 focus-visible: outline-sky-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className=" absolute  inset-0  flex  items-center ">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <button
                type="button"
                className=" inline-flex w-full  justify-center  rounded-md  bg-white  px-4  py-2  text-gray-500  shadow-sm  ring-1  ring-inset  ring-gray-300  hover:bg-gray-50  focus:outline-offset-0 "
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </button>
              <button
                type="button"
                className=" inline-flex w-full  justify-center  rounded-md  bg-white  px-4  py-2  text-gray-500  shadow-sm  ring-1  ring-inset  ring-gray-300  hover:bg-gray-50  focus:outline-offset-0 "
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </button>
            </div>
          </div>
          <div className=" flex  gap-2  justify-center  text-sm  mt-6  px-2  text-gray-500 ">
            <div>New to Messenger?</div>
            <div className="underline cursor-pointer">Create an account</div>
          </div>
        </div>
      </div>
    </div>
  );
}
