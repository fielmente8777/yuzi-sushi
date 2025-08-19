import { PopularDishesPropsType } from "@/@types/@types";
import Image from "next/image";

const PopularDishesCard: React.FC<PopularDishesPropsType["cards"][0]> = ({
  src,
  title,
}) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <figure className="relative w-full md:aspect-[4/2.5] aspect-[4/3] box-shadow_2">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </figure>
      <figcaption className="text-center text-2xl font-fr text-primary">{title}</figcaption>
    </div>
  );
};

export default PopularDishesCard;
