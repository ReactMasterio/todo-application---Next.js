"use client"
import Image from 'next/image'
import search_icon from '@/public/images/search_icon.svg'
import add_icon from '@/public/images/add.svg'
import Table from './Components/Table'
import { useState } from 'react'






export default function Home() {
  const [tableData, setTableData]: any = useState([]);

  const data: any = [];



  const handleSubmit = (e: any) => {
    e.preventDefault();

    const title: any = document.getElementById("todo");
    const dueDate: any = document.getElementById("date");

    const getFormData = (title: HTMLInputElement, dueDate: HTMLInputElement) => {
      const formData = {
        title: title.value,
        dueDate: dueDate.value,
      };

      if (formData.title && formData.dueDate) {
        data.push(formData);
        console.log(data);
        setTableData([...data]);
        console.log(tableData);
      }

      title.value = "";
      dueDate.value = "";
    };

    // Call the function
    getFormData(title, dueDate);

  }


  return (
    <main className="flex flex-col justify-around align-middle">
      <div className='bg-white px-4 py-4 mx-6 my-4 rounded-2xl shadow-md w-[650px] self-center flex'>
        <button>
          <Image alt='search icon' src={search_icon} />
        </button>
        <input type='text' placeholder='search...' className='w-full mx-4 text-gray-800' />
      </div>

      <div className='divider'></div>

      <div className="container">
        <form className='flex' onSubmit={handleSubmit} action="">
          <div className="form-itam flex flex-col w-1/6 mr-12">
            <label htmlFor="todo" className='font-semibold mb-2 ml-2'>Todo Title :</label>
            <input type="text" name="todo" id="todo"
              className='bg-white rounded-lg border-slate-400 shadow-md py-3 px-4'
              placeholder='ex: do homework'
            />
          </div>

          <div className="form-itam flex flex-col w-1/6 mr-12">
            <label htmlFor="date" className='font-semibold mb-2 ml-2'>Due Date :</label>
            <input type="date" name="date" id="date"
              className='bg-white rounded-lg border-slate-400 shadow-md py-3 px-4 text-gray-400'
            />
          </div>

          <button type="submit" className='bg-green-800 rounded-full flex w-12 h-12 justify-center align-middle self-end'>
            <Image alt='add icon' src={add_icon} className='self-center' />
          </button>


        </form>

        <div className="divider"></div>


        <div className="container flex justify-center align-middle">
          {/* <Table data={tableData} /> */}
        </div>
      </div>
    </main>
  )
}
