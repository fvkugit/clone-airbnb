import { MapIcon } from "@heroicons/react/24/solid";

function ShowMap() {
  return (
    <div class="grid grid-cols-1 fixed bottom-10 text-center w-full justify-items-center z-50">
      <div className="w-1/4">
        <button className="bg-gray-800 py-3 px-5 opacity-80 rounded-3xl text-white font-semibold hover:opacity-100 hover:scale-105 transition duration-150">
          <p>
            Show map <MapIcon className="h-5 inline text-white" />
          </p>
        </button>
      </div>
    </div>
  );
}
export default ShowMap;
