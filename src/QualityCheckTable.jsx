import React from 'react';

const QualityCheckDisplay = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quality Check #{data.qualityCheck.id}</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-lg font-semibold mb-4">{data.qualityCheck.status}</h2>
        <div>
          <h3 className="text-lg font-semibold mb-2">Work Order:</h3>
          <p>Number: {data.qualityCheck.workOrder.number}</p>
          <p>Date: {data.qualityCheck.workOrder.date}</p>
        </div>
        {data.qualityCheck.checks.map((check, index) => (
          <div key={index} className="mt-6">
            <h3 className="text-lg font-semibold mb-2">{check.category}</h3>
            {check.items.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <p className="font-semibold">{item.name}</p>
                <div>
                  <p className="mb-1">Quantity: {item.quantity}</p>
                  <p className="mb-1">Workmanship: {item.workmanship}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualityCheckDisplay;
