import { OurServicesPropsType } from "@/@types/@types";

const OurServicesCard: React.FC<OurServicesPropsType["cards"][0]> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center gap-[20px]">
      <span className="" ariaLabel={title}>
        {icon}
      </span>
      <div className="">
        <h3 className="text-2xl font-fr text-center">{title}</h3>
        <p className="text-center text-light text-lg">{description}</p>
      </div>
    </div>
  );
};

export default OurServicesCard;
