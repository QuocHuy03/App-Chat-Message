import React from "react";
import Layout from "../../components/Layout";

export default function Conversations() {
  return (
    <Layout>
      <div className="lg:pl-80 h-full" style={{ height: "100vh" }}>
        <div className=" px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center  items-center bg-gray-100 ">
          <div className="text-center items-center flex flex-col">
            <h3 className=" mt-2 text-2xl font-semibold text-gray-900 ">
              Select a chat or start a new converstation
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}
