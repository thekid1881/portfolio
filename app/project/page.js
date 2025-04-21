import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 pt-20 gap-16 mt-30 bg-[#b3eff2] border-solid border-2 border-[#d33eed]">
      <main className="flex flex-col gap-[32px] items-start min-h-screen">
        <div className="flex flex-row items-start p-8 mt-40 mr-150">
          <Link
            href="/"
          >
            <Image
              className="mt-6 mb-6 rounded-md border-solid border-8 border-[#d33eed]"
              src="/headline.jpg"
              alt="profile-pic"
              width={240}
              height={120}
            />
          </Link>
          <div>
            <h1 className="text-5xl font-extrabold text-[#0b14b8] mb-6 mt-6 ml-8">
              Project Manager
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-items-start">
          <p className="text-2xl font-bold text-[#0b14b8] mb-8 ml-8">
            Philosophy: [placeholder]
          </p>
          <p className="text-2xl font-bold text-[#0b14b8] mb-8 ml-8">
            Problem Solving: [placeholder]
          </p>
          <p className="text-2xl font-bold text-[#0b14b8] mb-8 ml-8">
            Work Examples: [placeholder]
          </p>
        </div>
        <div className="flex gap-[24px] flex-wrap items-center justify-center mx-110 mt-20">
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:bg-gray-300 bg-gray-100 border-solid border-1 border-[#d33eed] rounded-md p-2"
            href="/interview"
          >
            Interview Questions
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:bg-gray-300 bg-gray-100 border-solid border-1 border-[#d33eed] rounded-md p-2"
            href="/resumes"
          >
            Resumes
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:bg-gray-300 bg-gray-100 border-solid border-1 border-[#d33eed] rounded-md p-2"
            href="/references"
          >
            References
          </Link>
        </div>
      </main>
    </div>
  );
}