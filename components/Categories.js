import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

function Categories() {
  return (
    <div>
      <div className="absolute hidden lg:inline-flex left-12 bg-white after:bg-blue after:h-20 after:w-10 after:bg-gradient-to-r to-transparent from-white after:z-50">
        <div className="z-50 bg-white flex items-center">
          <button className="bg-white px-1 py-1 rounded-full border border-gray-500">
            <ChevronLeftIcon className="h-5" />
          </button>
        </div>
      </div>
      <div className="absolute hidden lg:inline-flex right-12 bg-white before:bg-blue before:h-20 before:w-10 before:bg-gradient-to-r from-transparent to-white before:z-50">
        <div className="z-50 bg-white flex items-center">
          <button className="bg-white px-1 py-1 rounded-full border border-gray-500">
            <ChevronRightIcon className="h-5" />
          </button>
        </div>
      </div>
      <div className="relative flex items-center h-20 space-x-5 text-center text-xs font-semibold my-5 overflow-x-auto scrollbar-hide lg:mx-12">
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-black opacity-100 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/pools.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">Amazing Pools</p>
        </div>
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/cabins.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">Cabins</p>
        </div>
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/views.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">Amazing Views</p>
        </div>
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/design.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">Design</p>
        </div>
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/parks.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">National Parks</p>
        </div>
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/beach.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">Beachfront</p>
        </div>
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/mansions.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">Mansions</p>
        </div>
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/containers.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">Containers</p>
        </div>
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/luxe.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">Luxe</p>
        </div>
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/private.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">Private Rooms</p>
        </div>
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/boats.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">Boats</p>
        </div>
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/castle.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">Castles</p>
        </div>
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/domes.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">Domes</p>
        </div>
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/tiny.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">Tiny Homes</p>
        </div>
        <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
          <Image
            src="/icons/truli.jpg"
            width={24}
            height={24}
            style={{ objectFit: "cover", objectPosition: "left" }}
            className=""
          />
          <p className="text-gray-600 my-2">Truli</p>
        </div>
      </div>
    </div>
  );
}
export default Categories;
