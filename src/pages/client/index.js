import WelcomeBackComponent from "@/components/FrontPage/WelcomeBack";
import UpcomingEvents from "@/components/FrontPage/UpComingEvents";
import RegisteredEvents from "@/components/FrontPage/RegisteredEvents";
import { ChatEpic } from "@/components/clients/ChatEpic";

const HomePage = () => {
    return(
       <div>
        <WelcomeBackComponent />
        <UpcomingEvents />
        <RegisteredEvents />
        <ChatEpic />
        </div>
       
    );
};

export default HomePage;
