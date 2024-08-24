import Description from "@/components/ui/description";
import Header from "@/components/ui/header";
import { Button } from "@mui/material";

export default function TrainPage() {
  const eventName = "Train for Kayaking Event";
  const eventImg = "/images/kayaking.jpg";
  const eventDate = "Date: Sun, Jul 28, 2024";
  const sectionVideo = "https://www.youtube.com/embed/tgbNymZ7vqY";
  const sectionTitle = "Briefing Video";
  const sectionDescription =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in";

  return (
    <div className="mb-40">
      <Header img={eventImg} heading={eventName} description={eventDate} />
      <div className="flex justify-center">
        <div className="flex justify-center text-text font-bold w-1/2 bg-gray-100 rounded-full mt-4">
          0%
        </div>
      </div>
      <div className="w-4/5 flex flex-col justify-center m-auto mt-20">
        <iframe src={sectionVideo} className="min-w-full h-96 m-4" />
        <div className="font-bold text-2xl m-4">{sectionTitle}</div>
        <Description>{sectionDescription}</Description>
      </div>
      <div className="flex justify-end mr-32 p-4 mt-8">
        <div className="text-text bg-gray-100 border border-text rounded-full flex justify-center items-center p-3 w-44 hover:bg-gray-200 cursor-pointer">
          Proceed
        </div>
      </div>
    </div>
  );
}
