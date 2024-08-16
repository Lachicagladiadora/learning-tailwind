import "./App.css";
import { ButtonActive } from "./components/ButtonActive";
import { ButtonPrimary } from "./components/ButtonPrimary";
import { ContactsList } from "./components/ContactsList";
import { Notification } from "./components/Notification";
import { Profile } from "./components/Profile";


const contactsData = [
  {
    imgSrc: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com"
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Floyd Miles",
    email: "floyd.miles@example.com"
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Courtney Henry",
    email: "courtney.henry@example.com"
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Ted Fox",
    email: "ted.fox@example.com"
  }
]

function App() {

  return (
    <div className="h-full w-full flex gap-5 justify-center items-center flex-col">
      <h1 className="text-white text-3xl font-bold text-center">
        Learning tailwind
      </h1>
      <h2 className="text-cyan-400 text-xl">Utility-First Fundamentals</h2>
      <div className="w-4/5 p-8">
        {/* <Notification /> */}
        <Profile />
      </div>
      <h2 className="text-cyan-400 text-xl">Handling Hover, Focus, and Other States</h2>
      <div>
        <ButtonPrimary />
        <ButtonActive />
        {/* <ContactsList contactsData={contactsData} /> */}
      </div>
    </div>
  );
}

export default App;
