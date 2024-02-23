import React, { useState } from 'react';

const TableView = ({ data }) => {
    const columns = Object.keys(data[0]);
    const [currentPage, setCurrentPage] = useState(1);
    const elementsPerPage = 10;
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = data.slice(indexOfFirstElement, indexOfLastElement);
    const totalPages = Math.ceil(data.length / elementsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Updated React Table Component with Tailwind CSS</h1>
            <div className="shadow-md rounded-lg overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200 bg-white">
                    <thead>
                        <tr className="bg-blue-200 border-b border-gray-300">
                            {columns.map((column, index) => (
                                <th key={index} className="px-4 py-2 text-left text-gray-700">{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentElements.map((row, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                {columns.map((column, index) => (
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
