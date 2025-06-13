"use client";
import { useRef, useState } from "react";
import addSleepRecord from "@/actions/addSleepRecord";

const AddNewRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(6);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sleepQuality, setSleepQuality] = useState("");

  const clientAction = async (formData: FormData) => {
    setIsLoading(true);
    setAlertMessage(null);

    formData.set("amount", amount.toString());
    formData.set("text", sleepQuality);

    const { error } = await addSleepRecord(formData);

    if (error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType("error");
    } else {
      setAlertMessage("Sleep record added successfully!");
      setAlertType("success");
      formRef.current?.reset();
      setAmount(6);
      setSleepQuality("");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#fffbea] flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-[#199473]/10">
        <h3 className="text-3xl font-bold text-center text-[#199473] mb-8">
          🛏️ Track Your Sleep
        </h3>
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(formRef.current!);
            clientAction(formData);
          }}
          className="space-y-6"
        >
          {/* Sleep Quality & Date */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Sleep Quality */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Sleep Quality
              </label>
              <select
                id="text"
                name="text"
                value={sleepQuality}
                onChange={(e) => setSleepQuality(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#199473]"
              >
                <option value="" disabled>
                  Choose how you felt...
                </option>
                <option value="Refreshed">🌞 Refreshed</option>
                <option value="Tired">😴 Tired</option>
                <option value="Neutral">😐 Neutral</option>
                <option value="Exhausted">😫 Exhausted</option>
                <option value="Energetic">⚡ Energetic</option>
              </select>
            </div>

            {/* Date Picker */}
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Sleep Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                required
                onFocus={(e) => e.target.showPicker()}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#199473]"
              />
            </div>
          </div>

          {/* Hours Slept */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Hours Slept
              <span className="block text-xs text-gray-400">
                (0 - 12 hours in 0.5 increments)
              </span>
            </label>
            <input
              type="range"
              name="amount"
              id="amount"
              min="0"
              max="12"
              step="0.5"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="w-full accent-[#199473]"
            />
            <p className="text-center mt-1 font-medium text-gray-700">
              {amount} hours
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center px-4 py-2 bg-[#199473] text-white font-semibold rounded-lg hover:bg-emerald-700 transition duration-200"
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Add Sleep Record"
            )}
          </button>
        </form>

        {/* Alert Message */}
        {alertMessage && (
          <div
            className={`mt-6 px-4 py-3 rounded-lg text-sm border ${
              alertType === "success"
                ? "bg-green-50 text-green-800 border-green-300"
                : "bg-red-50 text-red-800 border-red-300"
            }`}
          >
            {alertMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddNewRecord;
