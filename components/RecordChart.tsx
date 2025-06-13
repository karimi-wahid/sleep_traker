import getRecords from "@/actions/getRecords";
import BarChart from "@/components/BarChart";

const RecordChart = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className="bg-red-100 text-red-800 border border-red-300 rounded-md p-4 text-center">
        <p>{error}</p>
      </div>
    );
  }

  if (!records?.length) {
    return (
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl text-center">
          <h3 className="text-2xl font-bold mb-4">No Sleep Records Found</h3>
          <p className="text-gray-600">
            Start tracking your sleep to visualize your records here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h3 className="text-xl font-bold text-center mb-6 italic">
          Sleep Records Chart
        </h3>
        <BarChart records={records} />
      </div>
    </div>
  );
};

export default RecordChart;
