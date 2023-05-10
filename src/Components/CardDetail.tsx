interface CardDetailProps {
  resTitle: string;
  resDescription: string;
  star: number;
}

export default function CardDetail({
  resTitle,
  resDescription,
  star,
}: CardDetailProps) {
  return (
    <div className="bg-gray-400 w-full p-4 ">
      <div className="flex justify-between">
        <h1 className="font-bold">{resTitle}</h1>
        <div className="flex items-center space-x-2">
          <p>{star}</p>
          <i className="fa fa-star"></i>
        </div>
      </div>
      <p>{resDescription ?? "No Description"}</p>
    </div>
  );
}
