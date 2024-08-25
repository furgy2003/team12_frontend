import TrainPreview from "@/components/train/TrainPreview";
import FilterButtons from "@/components/ui/FilterButtons";
import Header from "@/components/ui/Header";
import { Divider } from "@mui/material";

export default function TrainHomePage() {
  // TO DO: CALL DB TO FETCH EVENTS
  const events = [
    {
      id: "e1",
      createState: "Finished",
      isPublished: false,
      isDeleted: false,
      created_by: "Michael Loh",
      last_modified_by: "Michael Loh",
      event_details: {
        event_name: "Kayaking with your fellow friends",
        image_url: "/images/kayaking.jpg",
        quota: 100,
        start_date: "2024-07-28",
        start_time: "10:00",
        end_date: "2024-07-28",
        end_time: "16:00",
        published_date: "2024-07-15",
        published_time: "09:00",
        location: "Sham Shui Po",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        target_audience: ["Male", "Female"],
        event_tags: ["Outdoors", "Sports", "Kayaking"],
      },
      training: {
        sections: [
          {
            section_heading: "Briefing Video",
            video_link: "https://www.youtube.com/embed/tgbNymZ7vqY",
            section_description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          },
          {
            section_heading: "Preparations",
            section_description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
          },
        ],
      },
      reminder: {
        default_message: "",
        additional_message: "",
      },
      participants: {
        clients: [],
        volunteers: [],
        admins: [],
      },
    },
  ];

  return (
    <div>
      <Header
        img="/images/kayaking.jpg"
        heading="Trainings"
        description="Review the events where you've volunteered and watch those requiring training."
      />
      <FilterButtons b1="Registered" b2="All" b3="Completed" b4="Filter" />
      <Divider />
      {events.map((event) => {
        return (
          <TrainPreview
            key={event.id}
            id={event.id}
            title={event.event_details.event_name}
            date={event.event_details.start_date}
            time={event.event_details.start_time}
            location={event.event_details.location}
            description={event.event_details.description}
            img={event.event_details.image_url}
          />
        );
      })}
    </div>
  );
}
