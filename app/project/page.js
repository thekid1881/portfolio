import Link from "next/link";
import { FaCircleNotch } from "react-icons/fa";
import Image from "next/image";
import { FlipCard } from "@/components/FlipCard";

export default function Project() {
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 pt-20 gap-16 mt-30 bg-[#b3eff2] border-solid border-2 border-[#d33eed]">
      <main className="flex flex-col gap-[32px] items-start min-h-screen">
        <div className="flex flex-row items-start p-6 mt-135 mr-30">
          <Link
            href="/"
          >
            <h1
              className="text-2xl text-white bg-[#0b14b8] w-50 text-center font-bold my-6 px-4 mr-8 rounded-md border-solid border-8 border-[#d33eed]"
            >
              Sarah Bill
            </h1>
          </Link>
          <div className="grid grid-cols-3 gap-2 align-center justify-center text-center ml-120 mt-5">
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
            <div className="ml-2 my-2 p-2 justify-items-center text-center">
              <FlipCard
                frontContent={<h2>Nature of Projects</h2>}
                backContent={<p>All projects adhere to the "iron triangle" - the interconnectedness of TIME, RESOURCES, and SCOPE.</p>}
              />
            </div>
            <div className="ml-2 my-2 p-2 justify-items-center text-center">
              <FlipCard
                frontContent={<h2>Overcoming Limitations</h2>}
                backContent={<p>Because of these inescapable limitations, stakeholder alignment is critical.</p>}
              />
            </div>
            <div className="ml-2 my-2 p-2 justify-items-center text-center">
              <FlipCard
                frontContent={<h2>Achieving Alignment</h2>}
                backContent={<p>Alignment requires clear communication and agreement on strategy, goals, and data measurements.</p>}
              />
            </div>
          </div>
          <div className="justify-items-start text-lg border-solid border-2 border-gray-500 rounded-md p-4 ml-6">
            <div>
              <p className="flex flex-col col-start-2 justify-start text-2xl font-bold text-gray-900 ml-4">
                Problem Solving
              </p>
            </div>
            <div className="ml-2 my-2 p-2 justify-items-center text-center">
              <FlipCard
                frontContent={<h2>Stakeholder Conflict</h2>}
                backContent={<p>Align individual goals to common business strategies, then use data to create clear project expectations.</p>}
              />
            </div>
            <div className="ml-2 my-2 p-2 justify-items-center text-center">
              <FlipCard
                frontContent={<h2>Scope Creep</h2>}
                backContent={<p>In traditional projects, the BRD can be used with change management. With agile projects, sprint metrics can be discussed to carefully commit to work.</p>}
              />
            </div>
            <div className="ml-2 my-2 p-2 justify-items-center text-center">
              <FlipCard
                frontContent={<h2>Dependency Delays</h2>}
                backContent={<p>Resolving impediments is a top priority, achieved through honest and direct transparency between the project team and the stakeholders.</p>}
              />
            </div>
          </div>
          <div className="justify-items-start text-lg border-solid border-2 border-gray-500 rounded-md p-4 ml-6">
            <div>
              <p className="flex flex-col col-start-3 justify-start text-2xl font-bold text-gray-900 ml-4 mb-20">
                Work Examples
              </p>
            </div>
            <div className="flex flex-row justify-self-center ml-2 mt-2">
              <FlipCard
                frontContent={<h2>Program Schedule</h2>}
                backContent={
                  <Link
                    href="/gantt"
                  >
                    <Image
                      src="/programschedule.png"
                      width={250}
                      height={250}
                      alt="program schedule"
                    />
                  </Link>
                }
              />
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