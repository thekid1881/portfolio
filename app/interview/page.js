import Link from "next/link";
import { FaCircleNotch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 pt-20 gap-16 mt-30 bg-[#b3eff2] border-solid border-2 border-[#d33eed]">
      <main className="flex flex-col gap-[32px] items-start min-h-screen">
        <div className="flex flex-row items-start p-6 mt-125 mr-30">
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
          <p className="text-lg font-bold text-gray-900 ml-6">
            Tell me about yourself?
          </p>
          <p className="text-md text-gray-900 ml-10">
            I'm a nerdy introvert who loves people and learning about new things.
          </p>
          <p className="text-md text-gray-900 ml-10">
            I also love yoga, Legos, and Star Trek.
          </p>
        </div>
        <div className="flex flex-row">
          <FaCircleNotch 
            className="ml-10 mt-2"
          />
          <p className="text-lg font-bold text-gray-900 ml-6">
            What are your biggest strengths?
          </p>
          <p className="text-md text-gray-900 ml-10">
            Creativity, Problem Solving, Improvement Mindset, and Empathy...
          </p>
        </div>
        <div className="flex flex-row">
          <FaCircleNotch 
            className="ml-10 mt-2"
          />
          <p className="text-lg font-bold text-gray-900 ml-6">
            What are your biggest weaknesses?
          </p>
          <p className="text-md text-gray-900 ml-10">
            "Falling in line" with unfounded rules/bureaucracy...
          </p>
        </div>
        <div className="flex flex-row">
          <FaCircleNotch 
            className="ml-10 mt-2"
          />
          <p className="text-lg font-bold text-gray-900 ml-6">
            When was a time you had a conflict at work and came up with a solution?
          </p>
          <p className="text-md text-gray-900 ml-10">
            (Murphy's and dealing with SPF line?)
          </p>
        </div>
        <div className="flex flex-row">
          <FaCircleNotch 
            className="ml-10 mt-2"
          />
          <p className="text-lg font-bold text-gray-900 ml-6">
            Where do you see yourself in five years?
          </p>
          <p className="text-md text-gray-900 ml-10">
            I've found that life pivots pretty fast, so I try to go with the flow. But I hope to keep learning more about how AI and new tech can be used to contribute to society.
          </p>
        </div>
        <div className="flex flex-row">
          <FaCircleNotch 
            className="ml-10 mt-2"
          />
          <p className="text-lg font-bold text-gray-900 ml-6">
            When was a time you demonstrated leadership?
          </p>
          <p className="text-md text-gray-900 ml-10">
            (found opportunity in old inventory costs at murphys?)
          </p>
        </div>
        <div className="flex flex-row">
          <FaCircleNotch 
            className="ml-10 mt-2"
          />
          <p className="text-lg font-bold text-gray-900 ml-6">
            When was a time you learned from a mistake?
          </p>
          <p className="text-md text-gray-900 ml-10">
            (leaving RH bc of Dave?)
          </p>
        </div>
        <div className="flex flex-row">
          <FaCircleNotch 
            className="ml-10 mt-2"
          />
          <p className="text-lg font-bold text-gray-900 ml-6">
            How do you measure success?
          </p>
          <p className="text-md text-gray-900 ml-10">
            A balance of customer, teammate, and stakeholder satisfaction.
          </p>
        </div>
        <div className="flex flex-row">
          <FaCircleNotch 
            className="ml-10 mt-2"
          />
          <p className="text-lg font-bold text-gray-900 ml-6">
            What unique qualities would you bring to a team?
          </p>
          <p className="text-md text-gray-900 ml-10">
            Creativity, cultivation of psychological safety, and transparency.
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