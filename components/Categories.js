import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRef } from "react";

const categories = {
  pools: { name: "Amazing Pools", image: "/icons/pools.jpg" },
  cabins: { name: "Cabins", image: "/icons/cabins.jpg" },
  views: { name: "Amazing Views", image: "/icons/views.jpg" },
  design: { name: "Design", image: "/icons/design.jpg" },
  parks: { name: "National Parks", image: "/icons/parks.jpg" },
  beach: { name: "Beachfront", image: "/icons/beach.jpg" },
  mansions: { name: "Mansions", image: "/icons/mansions.jpg" },
  containers: { name: "Containers", image: "/icons/pools.jpg" },
  luxe: { name: "Luxe", image: "/icons/luxe.jpg" },
  private: { name: "Private Rooms", image: "/icons/private.jpg" },
  boats: { name: "Boats", image: "/icons/boats.jpg" },
  castle: { name: "Castles", image: "/icons/castle.jpg" },
  domes: { name: "Domes", image: "/icons/domes.jpg" },
  tiny: { name: "Tiny Homes", image: "/icons/tiny.jpg" },
  truli: { name: "Truli", image: "/icons/truli.jpg" },
  artic: { name: "Artic", image: "/icons/artic.jpg" },
  caves: { name: "Caves", image: "/icons/caves.jpg" },
  earth: { name: "Earth Houses", image: "/icons/earth.jpg" },
  golfing: { name: "Golfing", image: "/icons/golfing.jpg" },
  surf: { name: "Surfing", image: "/icons/surf.jpg" },
  iconic: { name: "Iconic Cities", image: "/icons/iconic.jpg" },
  lakes: { name: "Lakes", image: "/icons/lakes.jpg" },
  trending: { name: "Trending", image: "/icons/trending.jpg" },
  tropical: { name: "Tropical", image: "/icons/tropical.jpg" },
  vineyard: { name: "Vineyard", image: "/icons/vineyard.jpg" },
};

function Categories() {
  const scrollLeftButton = useRef(null);
  const scrollRightButton = useRef(null);
  const scrollCategories = useRef(null);

  const scrollRight = (event) => {
    const element = scrollCategories.current;
    element.scrollTo({ left: element.scrollLeft + 700, behavior: "smooth" });
  };
  const scrollLeft = (event) => {
    const element = scrollCategories.current;
    element.scrollTo({ left: element.scrollLeft - 700, behavior: "smooth" });
  };

  const handleScroll = (event) => {
    const element = event.currentTarget;
    const leftButton = scrollLeftButton.current;
    const rightButton = scrollRightButton.current;
    var sLeft = element.scrollLeft;
    var mScroll = element.scrollWidth - element.clientWidth;
    sLeft > 50
      ? leftButton.classList.add("lg:inline-flex")
      : leftButton.classList.remove("lg:inline-flex");
    sLeft > mScroll - 50
      ? rightButton.classList.remove("lg:inline-flex")
      : rightButton.classList.add("lg:inline-flex");
  };

  return (
    <div>
      <div
        ref={scrollLeftButton}
        className="absolute hidden left-12 bg-white after:bg-blue after:h-20 after:w-10 after:bg-gradient-to-r to-transparent from-white after:z-50"
      >
        <div className="z-50 bg-white flex items-center">
          <button
            onClick={scrollLeft}
            className="bg-white px-1 py-1 rounded-full border border-gray-500"
          >
            <ChevronLeftIcon className="h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRightButton}
        className="absolute hidden lg:inline-flex right-12 bg-white before:bg-blue before:h-20 before:w-10 before:bg-gradient-to-r from-transparent to-white before:z-50"
      >
        <div className="z-50 bg-white flex items-center">
          <button
            onClick={scrollRight}
            className="bg-white px-1 py-1 rounded-full border border-gray-500"
          >
            <ChevronRightIcon className="h-5" />
          </button>
        </div>
      </div>
      <div
        onScroll={handleScroll}
        ref={scrollCategories}
        className="relative flex items-center h-20 space-x-5 text-center text-xs font-semibold my-5 overflow-x-auto scrollbar-hide lg:mx-12"
      >
        {Object.values(categories).map((cat) => {
          return (
            <div className="flex items-center justify-center flex-col px-2 border-b-2 border-transparent opacity-70 hover:border-b-gray-300 hover:border-b-2 hover:opacity-100">
              <Image
                src={cat["image"]}
                width={24}
                height={24}
                style={{ objectFit: "cover", objectPosition: "left" }}
                className=""
              />
              <p className="text-gray-600 my-2">{cat["name"]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Categories;
