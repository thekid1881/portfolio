import Link from "next/link";
import { FaCircleNotch } from "react-icons/fa";

export default function Project() {
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 pt-20 gap-16 mt-30 bg-[#b3eff2] border-solid border-2 border-[#d33eed]">
      <main className="flex flex-col gap-[32px] items-start min-h-screen">
        <div className="flex flex-row items-start p-6 mt-105 mr-30">
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
                  className="flex flex-row ml-2 mt-2"
              />
              <p className="flex flex-row justify-start text-gray-900 ml-6">
                All projects adhere to the "iron triangle" - the interconnectedness of TIME, RESOURCES, and SCOPE.
              </p>
            </div>
            <div className="flex flex-row ml-2 mt-2">
              <FaCircleNotch 
                  className="flex flex-row ml-2 mt-2"
              />
              <p className="flex flex-row justify-items-start text-gray-900 ml-6">
                Because of these inescapable limitations, stakeholder alignment is critical.
              </p>
            </div>
            <div className="flex flex-row ml-2 mt-2">
              <FaCircleNotch 
                  className="flex flex-row ml-2 mt-2"
              />
              <p className="flex flex-row justify-items-start text-gray-900 ml-6">
                Alignment requires clear communication and agreement on strategy, goals, and data measurements.
              </p>
            </div>
          </div>
          <div className="justify-items-start text-lg border-solid border-2 border-gray-500 rounded-md p-4 ml-6">
            <div>
              <p className="flex flex-col col-start-2 justify-start text-2xl font-bold text-gray-900 ml-4">
                Problem Solving
              </p>
            </div>
            <div className="flex flex-row ml-2 mt-2">
              <FaCircleNotch 
                  className="flex flex-row ml-2 mt-2"
              />
              <p className="flex flex-row justify-start text-gray-900 ml-6">
                  Stakeholder Conflict: Align individual goals to common business strategies, then use data to clear a path for project expectations.
              </p>
            </div>
            <div className="flex flex-row ml-2 mt-2">
              <FaCircleNotch 
                  className="flex flex-row ml-2 mt-2"
              />
              <p className="flex flex-row justify-items-start text-gray-900 ml-6">
                Scope Creep: Changing requirements is inevitable. In traditional projects, the BRD can be used with change management techniques. With agile initiatives, sprint metrics can be discussed to carefully commit to work.
              </p>
            </div>
            <div className="flex flex-row ml-2 mt-2">
              <FaCircleNotch 
                  className="flex flex-row ml-2 mt-2"
              />
              <p className="flex flex-row justify-items-start text-gray-900 ml-6">
                Dependency Delays: Resolving impediments is a top priority; achieved through honest and direct transparency on both sides -- the project team, as well as the stakeholders.
              </p>
            </div>
          </div>
          <div className="justify-items-start text-lg border-solid border-2 border-gray-500 rounded-md p-4 ml-6">
            <div>
              <p className="flex flex-col col-start-3 justify-start text-2xl font-bold text-gray-900 ml-4 mb-20">
                Work Examples
              </p>
            </div>
            <div className="flex flex-row justify-self-center ml-2 mt-2">
              <Link
                className="mx-4 rounded-md border-2 border-solid border-[#0b14b8] transition-colors flex items-center justify-center bg-[#50c0fa] text-gray-800 gap-2 hover:bg-[#d1a9fc] hover:text-gray-800 font-bold text-lg h-10 p-6 mb-4"
                href="/gantt"
              >
                Gantt Chart
              </Link>
            </div>
            <div className="flex flex-row justify-self-center ml-2 mt-2">
              <Link
                className="mx-4 rounded-md border-2 border-solid border-[#0b14b8] transition-colors flex items-center justify-center bg-[#50c0fa] text-gray-800 gap-2 hover:bg-[#d1a9fc] hover:text-gray-800 font-bold text-lg h-10 p-6 mb-4"
                href="/stakeholder"
              >
                Stakeholder Communication
              </Link>
            </div>
            <div className="flex flex-row justify-self-center ml-2 mt-2">
              <Link
                className="mx-4 rounded-md border-2 border-solid border-[#0b14b8] transition-colors flex items-center justify-center bg-[#50c0fa] text-gray-800 gap-2 hover:bg-[#d1a9fc] hover:text-gray-800 font-bold text-lg h-10 p-6 mb-4"
                href="/retro"
              >
                Retrospective
              </Link>
            </div>
          </div>          
        </div>
        <div className="flex gap-[24px] flex-wrap items-center justify-center mx-115 mt-4">
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