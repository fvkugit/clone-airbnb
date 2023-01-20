import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image src="/images/city.webp" fill style={{ objectFit: "cover" }} />
      <div className="absolute top-1/2 w-full text-white text-center">
        <button className="text-red-500 bg-white px-10 py-4 rounded-full font-bold my-4 shadow-md border-red-300 border-2 hover:shadow-xl active:scale-90 transition duration-75 -translate-y-10">¿ Looking for a new place ?</button>
      </div>
    </div>
  );
}
export default Banner;
