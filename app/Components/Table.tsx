import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'
import delete_icon from '@/public/images/delete.svg'
import check_icon from '@/public/images/check.svg'

const Table = ({ data }: any) => {
    return (
        <table className="bg-white shadow-sm rounded-md w-[850px] overflow-y-scroll overflow-x-hidden self-center">
            <thead className='border-b-2 border-b-gray-100'>
                <th className='py-4'>ToDo Title</th>
                <th>Due Date</th>
                <th>Actions</th>
            </thead>
            <tbody className='text-center'>
                {data.map((item: any, index: any) => (
                    <tr key={index}>
                        <td className='py-4'>{item.title}</td>
                        <td>{item.dueDate}</td>
                        <td>
                            <button className='bg-red-500 hover:bg-red-600 p-3 rounded-lg mx-4 transition-all duration-300'>
                                <Image alt='DELETE Icon' src={delete_icon} />
                            </button>
                            <button className='bg-green-800 hover:bg-green-700 transition-all duration-300 p-3 rounded-lg mx-4'>
                                <Image alt='check Icon' src={check_icon} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            dueDate: PropTypes.string,
        })
    ).isRequired,
};

export default Table;