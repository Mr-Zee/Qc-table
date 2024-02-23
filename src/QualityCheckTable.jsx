import React from 'react';

const QualityCheckDisplay = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quality Check #{data.qualityCheck.id}</h1>



      <div style={{ display: 'flex', maxWidth: '100%', marginBottom: '8px' }}>
        {/* First container (75%) */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md" style={{ flex: '0 0 75%', border: '1px solid #4B5563' }}>
          <h2 className="text-lg font-semibold mb-4">{data.qualityCheck.status}</h2>
          <div>
            <h3 className="text-lg font-semibold mb-2">Work Order:</h3>
            <p>Number: {data.qualityCheck.workOrder.number}</p>
            <p>Date: {data.qualityCheck.workOrder.date}</p>
          </div>
          {data.qualityCheck.checks.map((check, index) => (
            <div key={index} className="mt-6">
              {/* Category with curved corner and black outline */}
              <div className="relative">
                <div className="bg-gray-100 rounded-lg border border-black p-1 mb-2 inline-block w-full">
                  <h3 className="text-lg font-semibold mb-2">{check.category}</h3>
                </div>
                {/* Green button */}
                <button className="bg-green-500 text-white font-semibold py-1 px-4 rounded-lg absolute bottom-0 right-0 mb-3">Click Button</button>
              </div>

              {/* Items */}
              {check.items.map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <p className="font-semibold">{item.name}</p>
                  <p className="mb-1">Quantity: {item.quantity}</p>
                  <p className="mb-1">Workmanship: {item.workmanship}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Second container (25%) */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md" style={{ flex: '0 0 25%', marginLeft: '8px', border: '1px solid #4B5563' }}>
          {/* Content of the second container */}
        </div>
      </div>





    </div>
  );
};

export default QualityCheckDisplay;
