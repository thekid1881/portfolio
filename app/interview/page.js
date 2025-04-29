import Link from "next/link";
import { FaCircleNotch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 pt-20 gap-16 mt-30 bg-[#b3eff2] border-solid border-2 border-[#d33eed]">
      <main className="flex flex-col gap-[32px] items-start min-h-screen">
        <div className="flex flex-row items-start p-6 mt-106 mr-30">
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
        <div className="text-4xl text-[#0b14b8] font-extrabold ml-8">
          Interview Questions
        </div>
        <div className="grid grid-rows-16">
          <div className="flex flex-row row-start-1">
            <FaCircleNotch 
              className="ml-10 mt-2"
            />
            <p className="text-lg font-bold text-gray-900 ml-6">
              Tell me about yourself.
            </p>
          </div>
          <div className="flex flex-row row-start-2 ml-10">
            <p className="text-md text-gray-900 ml-10">
            I'm a nerdy introvert who loves people and learning about new things. I also love yoga, Legos, and Star Trek.
            </p>
          </div>
          <div className="flex flex-row row-start-3">
            <FaCircleNotch 
              className="ml-10 mt-2"
            />
            <p className="text-lg font-bold text-gray-900 ml-6">
              What are your biggest strengths?
            </p>
          </div>
          <div className="flex flex-row row-start-4 ml-10">
            <p className="text-md text-gray-900 ml-10">
              Creativity, Problem Solving, Improvement Mindset, and E.Q. (Emotional Intelligence).
            </p>
          </div>
          <div className="flex flex-row row-start-5">
            <FaCircleNotch 
              className="ml-10 mt-2"
            />
            <p className="text-lg font-bold text-gray-900 ml-6">
              What are your biggest weaknesses?
            </p>
          </div>
          <div className="flex flex-row row-start-6 ml-10">
            <p className="text-md text-gray-900 ml-10">
              Ignoring processes or tools which are holding back business strategy or innovation.
            </p>
          </div>
          <div className="flex flex-row row-start-7">
            <FaCircleNotch 
              className="ml-10 mt-2"
            />
            <p className="text-lg font-bold text-gray-900 ml-6">
              How do you deal with resolving conflict at work?
            </p>
          </div>
          <div className="flex flex-row row-start-8 ml-10">
            <p className="text-md text-gray-900 ml-10">
              Using elicitation techniques to make goals and expectations transparent, then finding common ground using data and business strategy.
            </p>
          </div>
          <div className="flex flex-row row-start-9">
            <FaCircleNotch 
              className="ml-10 mt-2"
            />
            <p className="text-lg font-bold text-gray-900 ml-6">
              Where do you see yourself in five years?
            </p>
          </div>
          <div className="flex flex-row row-start-10 ml-10">
            <p className="text-md text-gray-900 ml-10">
              Life pivots pretty fast, so I try to go with the flow. But I hope to continue learning how AI and new tech can be used to contribute to society.
            </p>
          </div>
          <div className="flex flex-row row-start-11">
            <FaCircleNotch 
              className="ml-10 mt-2"
            />
            <p className="text-lg font-bold text-gray-900 ml-6">
              What do you think leadership is?
            </p>
          </div>
          <div className="flex flex-row row-start-12 ml-10">
            <p className="text-md text-gray-900 ml-10">
              Helping people achieve excellent outcomes, leveraging their unique skill sets.
            </p>
          </div>
          <div className="flex flex-row row-start-13">
            <FaCircleNotch 
              className="ml-10 mt-2"
            />
            <p className="text-lg font-bold text-gray-900 ml-6">
              How do you measure success?
            </p>
          </div>
          <div className="flex flex-row row-start-14 ml-10">
            <p className="text-md text-gray-900 ml-10">
              A balance of customer, teammate, and stakeholder satisfaction; measured through communication and data.
            </p>
          </div>
          <div className="flex flex-row row-start-15">
            <FaCircleNotch 
              className="ml-10 mt-2"
            />
            <p className="text-lg font-bold text-gray-900 ml-6">
              What unique qualities would you bring to a team?
            </p>
          </div>
          <div className="flex flex-row row-start-16 ml-10">
            <p className="text-md text-gray-900 ml-10">
              Creativity, Psychological Safety, and Transparent Leadership.
            </p>
          </div>
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