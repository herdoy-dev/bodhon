import Image from "next/image";

interface Props {
  image: string;
  title: string;
  caption: string;
}

const ProgramCard = ({ image, title, caption }: Props) => {
  return (
    <div className="w-full space-y-2 rounded-2xl overflow-hidden shadow-2xl">
      <Image src={image} alt="language" width={400} height={140} />
      <div className="px-2 pb-3">
        <h2 className="font-semibold"> {title} </h2>
        <p> {caption.slice(0, 100) + "...."} </p>
      </div>
    </div>
  );
};

export default ProgramCard;
