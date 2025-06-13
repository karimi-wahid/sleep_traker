"use client";

import { useState } from "react";
import { Record } from "@/types/Records";
import deleteRecord from "@/actions/deleteRecord";
import { useRouter } from "next/navigation";

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDeleteRecord = async (recordId: string) => {
    try {
      setIsLoading(true);
      await deleteRecord(recordId);
      router.refresh(); // Refresh server component data
    } catch (error) {
      console.error("Failed to delete record", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <li
      className={`flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4 border-t border-t-gray-100 ${
        record.amount < 7
          ? "border-l-4 border-red-500"
          : "border-l-4 border-green-500"
      }`}>
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">
          {new Date(record.date).toLocaleDateString()}
        </span>
        <span className="text-lg font-bold text-gray-800">
          {record.amount} hours
        </span>
        <span className="text-sm text-gray-600">Sleep Mode: {record.text}</span>
      </div>
      <button
        onClick={() => handleDeleteRecord(record.id)}
        className={`bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition cursor-pointer ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-label="Delete record"
        disabled={isLoading}>
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
    </li>
  );
};

export default RecordItem;
