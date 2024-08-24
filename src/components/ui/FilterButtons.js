export default function FilterButtons(props) {
  const { b1, b2, b3, b4 } = props;
  return (
    <div className="flex justify-evenly mr-20 ml-20 mb-12">
      <div className="cursor-pointer w-56 p-2 hover:text-red hover:border hover:border-red flex justify-center items-center bg-gray-100 text-text rounded-full font-bold">
        {b1}
      </div>
      <div className="cursor-pointer w-56 p-2 hover:text-red hover:border hover:border-red flex justify-center items-center bg-gray-100 text-text rounded-full font-bold">
        {b2}
      </div>
      <div className="cursor-pointer w-56 p-2 hover:text-red hover:border hover:border-red flex justify-center items-center bg-gray-100 text-text rounded-full font-bold">
        {b3}
      </div>
      <div className="cursor-pointer w-56 p-2 hover:text-red hover:border hover:border-red border border-gray-100 flex justify-center items-center bg-gray-100 text-text rounded-full font-bold">
        {b4}
      </div>
    </div>
  );
}
