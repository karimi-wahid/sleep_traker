import getBestWorstSleep from "@/actions/getBestWorstSleep";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const BestWorstSleep = async () => {
  const { bestSleep, worstSleep } = await getBestWorstSleep();

  return (
    <div className="bg-gray-100 flex items-center justify-center py-6">
      <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-3xl">
        <h3 className="text-xl font-bold italic text-center mb-6 text-gray-800">
          Best and Worst Sleep
        </h3>

        <div className="flex flex-col sm:flex-row sm:justify-around gap-8 text-center">
          {/* Best Sleep */}
          <div className="flex-1 space-y-2">
            <h4 className="text-gray-600 text-lg font-medium flex justify-center items-center gap-2">
              <FaArrowUp className="text-green-500" /> Best Sleep
            </h4>
            <p className="text-3xl font-bold bg-gradient-to-r from-[#159C7E] to-[#199473] bg-clip-text text-transparent">
              {bestSleep !== undefined ? `${bestSleep} hours` : "No data available"}
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px bg-gray-300" />

          {/* Worst Sleep */}
          <div className="flex-1 space-y-2">
            <h4 className="text-gray-600 text-lg font-medium flex justify-center items-center gap-2">
              <FaArrowDown className="text-red-500" /> Worst Sleep
            </h4>
            <p className="text-3xl font-bold bg-gradient-to-r from-[#FFA726] to-[#EF5350] bg-clip-text text-transparent">
              {worstSleep !== undefined ? `${worstSleep} hours` : "No data available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestWorstSleep;
