import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[6px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 pt-20 gap-16 mt-50 bg-[#a3f5f7] border-solid border-2 border-[#d33eed]">
      <main className="flex flex-col gap-[32px] items-center min-h-screen">
      <div className="flex flex-row items-start p-6 mt-43 mr-30">
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
              className="text-xl font-extrabold text-white bg-[#0b14b8] rounded-md border-solid border-1 border-[#0b14b8] px-4"
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
        <div className="flex gap-4 items-center flex-row">
            <a 
                className="mx-4 rounded-md border-2 border-solid border-[#0b14b8] transition-colors flex items-center justify-center bg-[#50c0fa] text-gray-800 gap-2 hover:bg-[#d1a9fc] hover:text-gray-800 font-bold text-lg h-10 p-6"
                href="/resumemaster.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                Master Resume
            </a>
          <Link
            className="mx-4 rounded-md border-2 border-solid border-[#0b14b8] transition-colors flex items-center justify-center bg-[#50c0fa] text-gray-800 gap-2 hover:bg-[#d1a9fc] hover:text-gray-800 font-bold text-lg h-10 p-6"
            href="computer"
          >
            Project Manager Resume
          </Link>
          <Link
            className="mx-4 rounded-md border-2 border-solid border-[#0b14b8] transition-colors flex items-center justify-center bg-[#50c0fa] text-gray-800 gap-2 hover:bg-[#d1a9fc] hover:text-gray-800 font-bold text-lg h-10 p-6"
            href="data"
          >
            Data Analyst Resume
          </Link>
        </div>
        <div className="flex gap-[24px] flex-wrap items-center justify-center mt-20">
          <Link
            className="flex items-center gap-2 font-bold hover:underline hover:underline-offset-4 p-2"
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
