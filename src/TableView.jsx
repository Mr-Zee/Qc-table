import React, { useState } from 'react';

const TableView = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const elementsPerPage = 10;
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;

    const customOrder = ["just now", "min", "hour"];

const sortData = (data, sortConfig) => {
    if (sortConfig.key !== null) {
        return [...data].sort((a, b) => {
            const keyA = a[sortConfig.key];
            const keyB = b[sortConfig.key];

            // Check if the column being sorted is "Age"
            if (sortConfig.key === 'Age') {
                // Toggle between custom order and default sorting
                if (sortConfig.direction === 'asc') {
                    return customOrder.indexOf(keyA) - customOrder.indexOf(keyB);
                } else {
                }
            }

            // Default sorting for other columns
            if (typeof keyA === 'string' && typeof keyB === 'string') {
                return sortConfig.direction === 'asc' ? keyA.localeCompare(keyB) : keyB.localeCompare(keyA);
            } else if (typeof keyA === 'string' && typeof keyB === 'number') {
                return sortConfig.direction === 'asc' ? -1 : 1;
            } else if (typeof keyA === 'number' && typeof keyB === 'string') {
                return sortConfig.direction === 'asc' ? 1 : -1;
            } else {
                return sortConfig.direction === 'asc' ? keyA - keyB : keyB - keyA;
            }
        });
    }
    return data;
};

    

    const sortedData = sortData(data, sortConfig);
    const currentElements = sortedData.slice(indexOfFirstElement, indexOfLastElement);
    const totalPages = Math.ceil(data.length / elementsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Updated React Table Component with Tailwind CSS</h1>
            <div className="shadow-md rounded-lg overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200 bg-white">
                    <thead>
                        <tr className="bg-blue-200 border-b border-gray-300">
                            {Object.keys(data[0]).map((column, index) => (
                                <th key={index} className="px-4 py-2 text-left text-gray-700 cursor-pointer" onClick={() => handleSort(column)}>
                                    {column}
                                    {sortConfig.key === column && (
                                        <span className="ml-1">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentElements.map((row, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                {Object.keys(row).map((column, index) => (
                                    <td key={index} className="px-4 py-2">{row[column]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        className={`px-3 py-1 mx-1 rounded-md focus:outline-none ${currentPage === i + 1 ? 'bg-blue-400 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        onClick={() => paginate(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TableView;
