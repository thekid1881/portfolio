import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 pt-20 gap-16 mt-50 bg-[#b3eff2] border-solid border-2 border-[#d33eed]">
      <main className="flex flex-col gap-[32px] items-center min-h-screen">
        <div className="flex flex-col justify-center p-8 mt-80">
          <Link
            href="/"
          >
            <Image
              className="mt-6 mb-6 mr-250 rounded-md border-solid border-8 border-[#d33eed]"
              src="/headline.jpg"
              alt="profile-pic"
              width={240}
              height={120}
            />
          </Link>
          <div>
            <h1 className="text-5xl font-extrabold text-[#0b14b8] mb-5">
              Project Manager
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center">
          <Link
            href="/agile"
          >
            <p className="items-center justify-center text-center gap-2 p-10 border-solid border-4 border-[#d33eed] rounded-md text-2xl font-bold bg-blue-400 hover:bg-[#d1a9fc] m-4">
              Agile and Scrum
            </p>
            <p className="items-center justify-center text-center gap-2 p-10 border-solid border-4 border-[#d33eed] rounded-md text-2xl font-bold bg-blue-400 hover:bg-[#d1a9fc] m-4">
              Project Management
            </p>
            <p className="items-center justify-center text-center gap-2 p-10 border-solid border-4 border-[#d33eed] rounded-md text-2xl font-bold bg-blue-400 hover:bg-[#d1a9fc] m-4">
              Program Management
            </p>
          </Link>
        </div>
        <div className="text-lg justify-items-center">
          <p>Each section link will have three things: approach and philosophy, stories of problem solving, and examples of work and tech used</p>
        </div>
        <div className="flex gap-4 items-center flex-row">
          <Link
            className="mx-4 rounded-full border-2 border-solid border-[#0b14b8] transition-colors flex items-center justify-center bg-[#9ee8ff] text-gray-800 gap-2 hover:bg-[#d1a9fc] hover:text-gray-800 font-bold text-lg h-10 p-6"
            href="/project"
          >
            Project Manager
          </Link>
          <Link
            className="mx-4 rounded-full border-2 border-solid border-[#0b14b8] transition-colors flex items-center justify-center bg-[#9ee8ff] text-gray-800 gap-2 hover:bg-[#d1a9fc] hover:text-gray-800 font-bold text-lg h-10 p-6"
            href="computer"
          >
            Web Developer
          </Link>
          <Link
            className="mx-4 rounded-full border-2 border-solid border-[#0b14b8] transition-colors flex items-center justify-center bg-[#9ee8ff] text-gray-800 gap-2 hover:bg-[#d1a9fc] hover:text-gray-800 font-bold text-lg h-10 p-6"
            href="data"
          >
            Data Analyst
          </Link>
        </div>
        <div className="flex gap-[24px] flex-wrap items-center justify-center">
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:bg-gray-300 bg-gray-100 border-solid border-1 border-[#d33eed] rounded-full p-2"
            href="/interview"
          >
            Interview Questions
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:bg-gray-300 bg-gray-100 border-solid border-1 border-[#d33eed] rounded-full p-2"
            href="/resumes"
          >
            Resumes
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:bg-gray-300 bg-gray-100 border-solid border-1 border-[#d33eed] rounded-full p-2"
            href="/references"
          >
            References
          </Link>
        </div>
      </main>
    </div>
  );
}