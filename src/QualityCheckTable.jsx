import React from "react";

const QualityCheckDisplay = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <span className="flex justify-between bg-yellow-200 rounded-lg">
        <h1 className="text-2xl font-bold m-4">
          Quality Check #{data.qualityCheck.id}
        </h1>
        <p className="m-4 font-semibold text-md  font-white">{data.qualityCheck.status}</p>
      </span>

      <div className="flex flex-wrap justify-between">
        {/* First container (75%) */}
        <div className="w-full md:w-3/4 bg-gray-100 rounded-lg shadow-md border border-gray-300 mb-4">
          <div className="p-6 flex flex-row ">
            <div className="mx-5">
              <h3 className="text-lg font-semibold mb-2">Work Order:
              <span className="font-semibold">{data.qualityCheck.project.number}</span>
               </h3>
              <p>Signtype:<span className="font-semibold"> {data.qualityCheck.sign.type}</span></p>
              <p>Date: <span className="font-semibold">{data.qualityCheck.workOrder.date}</span></p>
            </div>
            <div className="ms-20">
              <p>Project: <span className="font-semibold">{data.qualityCheck.project.number}</span></p>
              <p>Quantity:<span className="font-semibold"> {data.qualityCheck.sign.quantity}</span></p>
              <p>Partial or Full: <span className="font-semibold"> {data.qualityCheck.project.partialOrFull}</span></p>
              <p>Project Name: <span className="font-semibold"> {data.qualityCheck.project.name}</span></p>
            </div>
          </div>
          {data.qualityCheck.checks.map((check, index) => (
            <div key={index} className="mt-6">
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
        <div className="w-full md:w-1/4 bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300">
          {/* Content of the second container */}
        </div>
      </div>
    </div>
  );
};

export default QualityCheckDisplay;
