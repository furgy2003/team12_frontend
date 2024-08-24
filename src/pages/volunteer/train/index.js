import TrainPreview from "@/components/train/TrainPreview";
import FilterButtons from "@/components/ui/FilterButtons";
import Header from "@/components/ui/Header";
import { Divider } from "@mui/material";

export default function TrainHomePage() {
  return (
    <div>
      <Header
        img="/images/kayaking.jpg"
        heading="Trainings"
        description="Review the events where you've volunteered and watch those requiring training."
      />
      <FilterButtons b1="All" b2="Registered" b3="Completed" b4="Filter" />
      <Divider />
      <TrainPreview
        title="Kayaking with your fellow friends"
        date="Sun, Jul 28, 2024"
        time="10:00 AM"
        location="Sham Shui Po"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        eventID="e1"
      />
    </div>
  );
}
