import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 pt-20 gap-16 mt-50 bg-[#b3eff2] border-solid border-2 border-[#d33eed]">
      <main className="flex flex-col gap-[32px] items-center min-h-screen">
        <div className="flex-row justify-items-center p-8">
          <h1 className="font-extrabold text-7xl p-6 text-[#0b14b8] mt-20">
            Sarah Bill
          </h1>
          <Link
            href="/"
          >
            <Image
              className="m-6 rounded-md border-solid border-8 border-[#d33eed]"
              src="/portfolio.jpg"
              alt="profile-pic"
              width={200}
              height={400}
            />
          </Link>
        </div>
        <div className="flex gap-4 items-center flex-row">
          <Link
            className="mx-4 rounded-full border-2 border-solid border-[#0b14b8] transition-colors flex items-center justify-center bg-[#50c0fa] text-gray-800 gap-2 hover:bg-[#d1a9fc] hover:text-gray-800 font-bold text-lg h-10 p-6"
            href="/project"
          >
            Project Manager
          </Link>
          <Link
            className="mx-4 rounded-full border-2 border-solid border-[#0b14b8] transition-colors flex items-center justify-center bg-[#50c0fa] text-gray-800 gap-2 hover:bg-[#d1a9fc] hover:text-gray-800 font-bold text-lg h-10 p-6"
            href="computer"
          >
            Web Developer
          </Link>
          <Link
            className="mx-4 rounded-full border-2 border-solid border-[#0b14b8] transition-colors flex items-center justify-center bg-[#50c0fa] text-gray-800 gap-2 hover:bg-[#d1a9fc] hover:text-gray-800 font-bold text-lg h-10 p-6"
            href="data"
          >
            Data Analyst
          </Link>
        </div>
        <div className="flex gap-[24px] flex-wrap items-center justify-center mt-6">
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:bg-gray-300 bg-white border-solid border-1 border-[#d33eed] rounded-md p-2"
            href="/interview"
          >
            Interview Questions
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:bg-gray-300 bg-white border-solid border-1 border-[#d33eed] rounded-md p-2"
            href="/resumes"
          >
            Resumes
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:bg-gray-300 bg-white border-solid border-1 border-[#d33eed] rounded-md p-2"
            href="/references"
          >
            References
          </Link>
        </div>
      </main>
    </div>
  );
}
