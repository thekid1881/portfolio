import Link from "next/link";
import { FaCircleNotch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 pt-20 gap-16 mt-30 bg-[#b3eff2] border-solid border-2 border-[#d33eed]">
      <main className="flex flex-col gap-[32px] items-start min-h-screen">
        <div className="flex flex-row items-start p-6 mt-86 mr-30">
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
        <div className="justify-items-start text-4xl text-[#0b14b8] font-extrabold ml-8">
          Project Manager
        </div>
        <div className="grid grid-cols-3 gap-4 justify-items-start text-lg">
          <div className="justify-items-start text-lg border-solid border-2 border-gray-500 rounded-md p-4 ml-6">
            <div>
              <p className="flex flex-col col-start-1 justify-start text-2xl font-bold text-gray-900 ml-4">
                Philosophy
              </p>
            </div>
            <div className="flex flex-row ml-2 mt-2">
              <FaCircleNotch 
                  className="flex flex-row ml-6 mt-2"
              />
              <p className="flex flex-row justify-start text-gray-900 ml-6">
                All projects adhere to the "iron triangle" - the interconnectedness of TIME, RESOURCES, and SCOPE.
              </p>
            </div>
            <div className="flex flex-row ml-2 mt-2">
              <FaCircleNotch 
                  className="flex flex-row ml-6 mt-2"
              />
              <p className="flex flex-row justify-items-start text-gray-900 ml-6">
                Because of these inescapable limitations, stakeholder alignment is critical.
              </p>
            </div>
            <div className="flex flex-row ml-2 mt-2">
              <FaCircleNotch 
                  className="flex flex-row ml-6 mt-2"
              />
              <p className="flex flex-row justify-items-start text-gray-900 ml-6">
                Alignment requires clear communication and agreement on strategy, goals, and data measurements.
              </p>
            </div>
          </div>
          <div className="justify-items-start text-lg">
            <div className="justify-items-start text-lg">
              <div>
                <p className="flex flex-col col-start-2 justify-start text-2xl font-bold text-gray-900 ml-8">
                  Problem Solving Stories
                </p>
              </div>
              <div className="flex flex-row ml-6 mt-2">
                <FaCircleNotch 
                  className="flex flex-row text-lg ml-6 mt-2"
                />
                <p className="flex flex-row justify-start text-lg text-gray-900 ml-6">
                  example 1...
                </p>
              </div>
              <div className="flex flex-row ml-6 mt-2">
                <FaCircleNotch 
                  className="flex flex-row text-lg ml-6 mt-2"
                />
                <p className="flex flex-row justify-items-start text-lg text-gray-900 ml-6">
                  example 2...
                </p>
              </div>
              <div className="flex flex-row ml-6 mt-2">
                <FaCircleNotch 
                  className="flex flex-row text-lg ml-6 mt-2"
                />
                <p className="flex flex-row justify-items-start text-lg text-gray-900 ml-6">
                  example 3...
                </p>
              </div>
            </div>
          </div>
          <div className="justify-items-start text-lg">
            <div className="justify-items-start text-lg">
              <div>
                <p className="flex flex-col col-start-3 justify-start text-2xl font-bold text-gray-900 ml-8">
                  Work Examples
                </p>
              </div>
            </div>
            <div className="flex flex-row ml-6 mt-2">
              <FaCircleNotch 
                className="flex flex-row text-lg ml-6 mt-2"
              />
              <p className="flex flex-row justify-start text-lg text-gray-900 ml-6">
                example 1...
              </p>
            </div>
            <div className="flex flex-row ml-6 mt-2">
              <FaCircleNotch 
                className="flex flex-row text-lg ml-6 mt-2"
              />
              <p className="flex flex-row justify-items-start text-lg text-gray-900 ml-6">
                example 2...
              </p>
            </div>
            <div className="flex flex-row ml-6 mt-2">
              <FaCircleNotch 
                className="flex flex-row text-lg ml-6 mt-2"
              />
              <p className="flex flex-row justify-items-start text-lg text-gray-900 ml-6">
                example 3...
              </p>
            </div>
          </div>          
        </div>
        <div className="flex gap-[24px] flex-wrap items-center justify-center mx-115 mt-20">
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