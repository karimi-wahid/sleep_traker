import React from "react";
import getUserRecord from "@/actions/getUserRecord";

const AverageSleep = async () => {
  try {
    const { record, daysWithRecords } = await getUserRecord();

    const validRecord = record || 0;
    const validDays = daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;

    const averageSleep = validRecord / validDays;
    const hours = Math.floor(averageSleep);
    const minutes = Math.round((averageSleep - hours) * 60);

    return (
      <div className="min-h-[30vh] bg-[#fffbea] flex items-center justify-center p-4">
        <div className="bg-white border border-[#199473]/10 shadow-md rounded-xl px-8 py-10 w-full max-w-lg text-center">
          <h4 className="text-md sm:text-lg font-medium text-gray-500 mb-2">
            Your Average Sleep (Last Month)
          </h4>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#199473]">
            {hours}h {minutes}m
          </h1>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user record:", error);
    return (
      <div className="min-h-[30vh] bg-[#fffbea] flex items-center justify-center p-4">
        <div className="bg-white border border-red-200 shadow-md rounded-xl px-8 py-10 w-full max-w-lg text-center">
          <h4 className="text-md font-semibold text-red-600 mb-2">Error</h4>
          <p className="text-sm text-gray-500">
            Unable to calculate average sleep. Please try again later.
          </p>
        </div>
      </div>
    );
  }
};

export default AverageSleep;
