import AddNewRecord from "@/components/AddNewRecord";
import AverageSleep from "@/components/AverageSleep";
import BestWorstSleep from "@/components/BestWorstSleep";
import Guest from "@/components/Guest";
import RecordChart from "@/components/RecordChart";
import RecordHistory from "@/components/RecordHistory";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main className="bg-[#f9fafb] text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="">
          <div
            className="bg-white p-4 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-8
            border-1 border-[#199473] hover:shadow-2xl transition-shadow duration-300">
            {/* User Image */}
            <Image
              src={user.imageUrl}
              alt={`${user.firstName}'s profile`}
              className="w-20 h-20 rounded-full border-4 border-[#f2a365] shadow-xl object-cover"
              width={112}
              height={112}
              priority
            />

            {/* User Details */}
            <div className="flex-1">
              <h2 className="text-xl font-extrabold italic text-[#199473] mb-3 tracking-wide">
                Welcome Back, {user.firstName}{" "}
                <span className="text-2xl">👋</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Here’s a quick overview of your recent sleep activity. Stay on
                top of your data insights and manage your tasks efficiently!
              </p>
              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-semibold text-[#199473]">Joined:</span>{" "}
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold text-[#199473]">
                    Last Active:
                  </span>{" "}
                  {user.lastActiveAt
                    ? new Date(user.lastActiveAt).toLocaleString()
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Add New Record Component */}
          <AddNewRecord />
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          <RecordChart />
          <AverageSleep />
          <BestWorstSleep />
        </div>
      </div>

      {/* Sleep History */}
      <div className="max-w-7xl mx-auto mt-16 px-6">
        <RecordHistory />
      </div>
    </main>
  );
}
