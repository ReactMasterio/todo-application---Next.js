import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import delete_icon from '@/public/images/delete.svg';
import check_icon from '@/public/images/check.svg';

interface FormData {
    id: number;
    title: string;
    dueDate: string;
    checked: boolean;
}

interface TableProps {
    data: FormData[];
    setTableData: React.Dispatch<React.SetStateAction<FormData[]>>;
}

const Table: React.FC<TableProps> = ({ data, setTableData }) => {

    const handleDelete = (index: number) => {
        const newData = [...data];
        newData.splice(index, 1);
        setTableData(newData);
    };

    const handleCheck = (index: number) => {
        const newData = [...data];
        newData[index].checked = !newData[index].checked;
        setTableData(newData);

    };


    return (
        <table className="bg-white shadow-sm rounded-md w-[850px] overflow-y-scroll overflow-x-hidden self-center">
            <thead className='border-b-2 border-b-gray-100'>
                <tr>
                    <th className='py-4'>ToDo Title</th>
                    <th>Due Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                {data.map((item: FormData, index: number) => (
                    <tr key={index} style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
                        <td className='py-4'>{item.title}</td>
                        <td>{item.dueDate}</td>
                        <td>
                            <button
                                className='bg-red-500 hover:bg-red-600 p-3 rounded-lg mx-4 transition-all duration-300'
                                onClick={() => handleDelete(index)}
                            >
                                <Image alt='DELETE Icon' src={delete_icon} />
                            </button>
                            <button
                                className='bg-green-800 hover:bg-green-700 transition-all duration-300 p-3 rounded-lg mx-4'
                                onClick={() => handleCheck(index)}
                            >
                                <Image alt='check Icon' src={check_icon} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
