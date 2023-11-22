"use client"
import Image from 'next/image'
import search_icon from '@/public/images/search_icon.svg'
import add_icon from '@/public/images/add.svg'
import Table from './Components/Table'
import { useState } from 'react'

interface FormData {
  title: any;
  dueDate: any;
}

export default function Home() {
  const [tableData, setTableData]: any = useState<FormData[]>([]);
  const data: any = [];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = document.getElementById("todo") as HTMLInputElement;
    const dueDate = document.getElementById("date") as HTMLInputElement;

    const getFormData = (title: any, dueDate: any) => {
      const formData: FormData = {
        title: title.value,
        dueDate: dueDate.value,
      };

      if (formData.title && formData.dueDate) {
        setTableData((prevData: FormData[]) => [...prevData, formData]);
        console.log(tableData);
      }

      title.value = "";
      dueDate.value = "";
    };

    // Call the function
    getFormData(title, dueDate);
  };


  return (
    <main className="flex flex-col justify-around items-center">
      <div className='bg-white px-4 py-4 mx-6 my-4 rounded-2xl shadow-md w-full md:w-[650px] flex flex-row '>
        <button className='mb-2 md:mb-0 w-fit'>
          <Image alt='search icon' src={search_icon} />
        </button>
        <input type='text' placeholder='search...' className='w-full md:mx-4 text-gray-800' />
      </div>

      <div className='divider'></div>

      <div className="container">
        <form className='flex flex-col md:flex-row' onSubmit={handleSubmit} action="">
          <div className="form-itam flex flex-col mb-4 md:mb-0 md:mr-12">
            <label htmlFor="todo" className='font-semibold mb-2 ml-2'>Todo Title :</label>
            <input type="text" name="todo" id="todo"
              className='bg-white rounded-lg border-slate-400 shadow-md py-3 px-4'
              placeholder='ex: do homework'
            />
          </div>

          <div className="form-itam flex flex-col md:w-1/6">
            <label htmlFor="date" className='font-semibold mb-2 ml-2'>Due Date :</label>
            <input type="date" name="date" id="date"
              className='bg-white rounded-lg border-slate-400 shadow-md py-3 px-4 text-gray-400'
            />
          </div>

          <button type="submit" className='bg-green-800 rounded-full flex w-full md:w-12 h-12 self-end items-center justify-center'>
            <Image alt='add icon' src={add_icon} className='self-center' />
          </button>
        </form>

        <div className="divider"></div>

        <div className="container flex justify-center items-center">
          <Table data={tableData} setTableData={setTableData} />
        </div>
      </div>
    </main>

  )
}
