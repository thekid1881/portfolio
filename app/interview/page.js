import Image from "next/image";
import Link from "next/link";
import { FaCircleNotch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 pt-20 gap-16 mt-30 bg-[#b3eff2] border-solid border-2 border-[#d33eed]">
      <main className="flex flex-col gap-[32px] items-start min-h-screen">
        <div className="flex flex-row items-start p-6 mt-42 mr-30">
          <Link
            href="/"
          >
            <h1
              className="text-2xl text-white bg-[#0b14b8] w-50 text-center font-bold my-6 px-4 mr-8 rounded-md border-solid border-8 border-[#d33eed]"
            >
              Sarah Bill
            </h1>
          </Link>
          <div className="grid grid-cols-3 gap-2 align-center justify-center text-center ml-120 mt-10">
            <Link 
              className="text-xl font-extrabold text-[#0b14b8] bg-[#50c0fa] hover:bg-[#d33eed] hover:text-gray-800 rounded-md border-solid border-2 border-[#0b14b8] px-4"
              href="/project"
            >
              Project Manager
            </Link>
            <Link
              className="text-xl font-extrabold text-[#0b14b8] bg-[#50c0fa] hover:bg-[#d33eed] hover:text-gray-800 rounded-md border-solid border-2 border-[#0b14b8] px-4"
              href="/data"
            >
              Data Analyst
            </Link>
            <Link
              className="text-xl font-extrabold text-[#0b14b8] bg-[#50c0fa] hover:bg-[#d33eed] hover:text-gray-800 rounded-md border-solid border-2 border-[#0b14b8] px-4"
              href="computer"
            >
              Computer Engineer
            </Link>
          </div>
        </div>
        <div className="text-4xl text-[#0b14b8] font-extrabold ml-8">
          Interview Questions
        </div>
        <div className="flex flex-row">
          <FaCircleNotch 
            className="ml-10 mt-2"
          />
          <p className="text-lg text-gray-900 ml-6">
            What is your biggest strength?
          </p>
        </div>
        <div className="flex flex-row">
          <FaCircleNotch 
            className="ml-10 mt-2"
          />
          <p className="text-lg text-gray-900 ml-6">
            What is your biggest weakness?
          </p>
        </div>
        <div className="flex flex-row">
          <FaCircleNotch 
            className="ml-10 mt-2"
          />
          <p className="text-lg text-gray-900 ml-6">
            Tell me about a time you encountered a major issue and had to come up with a solution.
          </p>
        </div>
        <div className="flex gap-[24px] flex-wrap items-center justify-center mx-110 mt-20">
          <Link
            className="flex items-center gap-2 font-bold hover:underline hover:underline-offset-4 p-2 border-transparent rounded-md bg-gray-300"
            href="/interview"
          >
            Interview Questions
          </Link>
          <Link
            className="flex items-center gap-2 font-bold hover:underline hover:underline-offset-4 p-2"
            href="/resumes"
          >
            Resumes
          </Link>
          <Link
            className="flex items-center gap-2 font-bold hover:underline hover:underline-offset-4 p-2"
            href="/references"
          >
            References
          </Link>
        </div>
      </main>
    </div>
  );
}