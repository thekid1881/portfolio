import Link from "next/link";
import { FaCircleNotch } from "react-icons/fa";
import { FlipCard } from "@/components/FlipCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 pt-20 gap-16 mt-30 bg-[#b3eff2] border-solid border-2 border-[#d33eed]">
      <main className="flex flex-col gap-[32px] items-start min-h-screen">
        <div className="flex flex-row items-start p-6 mt-70 mr-30">
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
        <div className="grid grid-cols-4 gap-4">
          <div className="grid-cols-subgrid col-start-1">
            <FlipCard
              frontContent={<h2>Tell me about yourself?</h2>}
              backContent={<p>I'm a nerdy introvert who loves people and learning about new things. I also love yoga, Legos, and Star Trek.</p>}
            />
          </div>
          <div className="grid-cols-subgrid col-start-2">
            <FlipCard
              frontContent={<h2>What are your strengths?</h2>}
              backContent={<p>Creativity, Problem Solving, Improvement Mindset, and E.Q. (Emotional Intelligence).</p>}
            />
          </div>
          <div className="grid-cols-subgrid col-start-3">
            <FlipCard
              frontContent={<h2>What are your weaknesses?</h2>}
              backContent={<p>Ignoring processes or tools which are holding back business strategy or innovation.</p>}
            />
          </div>
          <div className="grid-cols-subgrid col-start-4">
            <FlipCard
              frontContent={<h2>How do you resolve conflict?</h2>}
              backContent={<p>Using elicitation techniques to make goals and expectations transparent, then finding common ground using data and business strategy.</p>}
            />
          </div>
          <div className="grid-cols-subgrid col-start-1">
            <FlipCard
              frontContent={<h2>Where do you see yourself in five years?</h2>}
              backContent={<p>Life pivots pretty fast, so I try to go with the flow. But I hope to continue learning how AI and new tech can be used to contribute to society.</p>}
            />
          </div>
          <div className="grid-cols-subgrid col-start-2">
            <FlipCard
              frontContent={<h2>What do you think leadership is?</h2>}
              backContent={<p>Helping people achieve excellent outcomes by finding and leveraging their unique skill sets.</p>}
            />
          </div>
          <div className="grid-cols-subgrid col-start-3">
            <FlipCard
              frontContent={<h2>How do you measure success?</h2>}
              backContent={<p>A balance of customer, teammate, and stakeholder satisfaction; measured through communication and data.</p>}
            />
          </div>
          <div className="grid-cols-subgrid col-start-4">
            <FlipCard
              frontContent={<h2>What unique qualities do you bring to a team?</h2>}
              backContent={<p>Creativity, Psychological Safety, and Transparent Leadership.</p>}
            />
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