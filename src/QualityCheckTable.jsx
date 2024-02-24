import React from "react";
import { Link } from 'react-router-dom';

const QualityCheckDisplay = ({ data }) => {
  return (
    <div className="container mx-auto p-6 lg:p-12">
      <div className="flex items-center justify-between bg-yellow-200 rounded-lg p-4 lg:p-6 mb-6">
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
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold">
          Quality Check #{data.qualityCheck.id}
        </h1>
        <p className="font-semibold text-md text-black">
          {data.qualityCheck.status}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-3/4 bg-gray-100 rounded-lg shadow-md border border-gray-300 mb-6 lg:mb-0">
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Work Order:</h3>
                <p>
                  Signtype:
                  <span className="font-semibold">
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
              <div>
                <p>
                  Project:{" "}
                  <span className="font-semibold">
                    {data.qualityCheck.project.number}
                  </span>
                </p>
                <p>
                  Quantity:
                  <span className="font-semibold">
                    {data.qualityCheck.sign.quantity}
                  </span>
                </p>
                <p>
                  Partial or Full:{" "}
                  <span className="font-semibold">
                    {data.qualityCheck.project.partialOrFull}
                  </span>
                </p>
                <p>
                  Project Name:{" "}
                  <span className="font-semibold">
                    {data.qualityCheck.project.name}
                  </span>
                </p>
              </div>
            </div>
          </div>
          {data.qualityCheck.checks.map((check, index) => (
            <div key={index} className="my-6">
              <div className="relative">
                <div className="bg-blue-200 border border-gray-300 p-2 mb-4">
                  <h3 className="text-lg font-semibold mb-2">{check.category}</h3>
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

        <div className="w-full lg:w-1/4 grid grid-cols-1 lg:grid-rows-3 gap-6">
          <div className="bg-gray-100 rounded-lg shadow-md border border-gray-300 p-4">
            <div className="container flex justify-center rounded-lg bg-blue-400 py-4">
              <h2 className="font-medium text-white">Quality Check History</h2>
            </div>
            <p className="font-medium text-gray-700 pt-3">Last checked: An hour ago</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md border border-gray-300 p-4">
            <div className="container flex justify-center bg-blue-400 py-4 rounded-lg">
              <h2 className="font-medium text-white">Comments</h2>
            </div>
            <p className="text-gray-400 pt-3">comments...</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md border border-gray-300 p-4">
            <div className="container flex justify-center bg-blue-400 py-4 rounded-lg">
              <h2 className="font-medium text-white">Files</h2>
            </div>
            <p className="text-gray-400 pt-3">Upload Your Files Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityCheckDisplay;
