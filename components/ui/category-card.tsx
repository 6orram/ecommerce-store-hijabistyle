"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Billboard, Category } from "@/types";
import { useState } from "react";

interface CategoryCard {
  data: Category
}

const CategoryCard: React.FC<CategoryCard> = ({
  data,
}) => {
  const [hovered, setHovered] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    router.push(`/category/${data?.id}`);
  };

  
  return ( 
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-white group cursor-pointer rounded-xl border p-3 space-y-4 transition-transform transform ${
        hovered ? 'scale-110' : ''
      }`}
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl overflow-hidden relative shadow-lg">
        <Image
          src={data.imageUrl}
          alt=""
          fill
          className="object-cover w-full h-full rounded-t-xl"
        />
      </div>
      {/* Description */}
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold text-lg text-center">
          Collection {data.name}
        </p>
      </div>
      {/* Price & Review */}
    </div>
  );
}

export default CategoryCard;
