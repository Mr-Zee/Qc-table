import React from "react";
import {Link } from 'react-router-dom';


const QualityCheckDisplay = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <span className="flex justify-between bg-yellow-200 rounded-lg">
        <h1 className="text-2xl font-bold m-4">
      <Link to="/" className="text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline-block mb-2 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="Black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Link>
          Quality Check #{data.qualityCheck.id}
        </h1>
        <p className="m-4 font-semibold text-md  font-white">
          {data.qualityCheck.status}
        </p>
      </span>
      <div className="flex flex-wrap justify-between">
        {/* First container (75%) */}
        <div className="w-full md:w-3/4 bg-gray-100 rounded-lg shadow-md border border-gray-300 mb-4">
          <div className="p-6 flex flex-row ">
            <div className="mx-5">
              <h3 className="text-lg font-semibold mb-2">
                Work Order:
                <span className="font-semibold">
                  {data.qualityCheck.project.number}
                </span>
              </h3>
              <p>
                Signtype:
                <span className="font-semibold">
                  {" "}
                  {data.qualityCheck.sign.type}
                </span>
              </p>
              <p>
                Date:{" "}
                <span className="font-semibold">
                  {data.qualityCheck.workOrder.date}
                </span>
              </p>
            </div>
            <div className="ms-20">
              <p>
                Project:{" "}
                <span className="font-semibold">
                  {data.qualityCheck.project.number}
                </span>
              </p>
              <p>
                Quantity:
                <span className="font-semibold">
                  {" "}
                  {data.qualityCheck.sign.quantity}
                </span>
              </p>
              <p>
                Partial or Full:{" "}
                <span className="font-semibold">
                  {" "}
                  {data.qualityCheck.project.partialOrFull}
                </span>
              </p>
              <p>
                Project Name:{" "}
                <span className="font-semibold">
                  {" "}
                  {data.qualityCheck.project.name}
                </span>
              </p>
            </div>
          </div>
          {data.qualityCheck.checks.map((check, index) => (
            <div key={index} className="my-6">
              <div className="relative">
                <div className="bg-blue-200  border border-gray-300 p-2 mb-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {check.category}
                  </h3>
                </div>
              </div>

              {/* Items */}
              {check.items.map((item, idx) => (
                <div key={idx} className="flex justify-between px-5">
                  {Object.entries(item).map(([key, value]) => (
                    <p key={key} className="font-semibold">
                      {value}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Second container (25%) */}
        <div className="w-full md:w-1/4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
          <div className="min-h-80">
            <div className="container flex justify-center rounded-lg bg-sky-400 py-4">
              <h2 className="font-medium text-white ">Quality Check History</h2>
            </div>
            <h2 className="font-medium text-gray-700 p-4">last checked : An hour ago</h2>
          </div>
          <div className="min-h-80">
            <div className="container flex justify-center bg-sky-400 py-4 rounded-lg">
              <h2 className="font-medium text-white">Comments</h2>
            </div>
            <h2 className=" text-gray-400 p-4">comments...</h2>
          </div>
          <div className="min-h-80">
            <div className="container flex justify-center bg-sky-400 py-4 rounded-lg">
              <h2 className="font-medium text-white">Files</h2>
            </div>
            <h2 className=" text-gray-400 p-4">Upload Your Files Here</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityCheckDisplay;
