import "./App.css";
import { Notification } from "./components/Notification";
import { Profile } from "./components/Profile";
import { ButtonPrimary } from "./components/ButtonPrimary";
import { ButtonActive } from "./components/ButtonActive";
import { ContactsList } from "./components/ContactsList";
import { PeopleTable } from "./components/PeopleTable";
import { Form } from "./components/Form";


const contactsListData = [
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

const peopleListData = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    email: "jane.cooper@example.com"
  },
  {
    name: "Cody Fisher",
    title: "Product Directives Officer",
    email: "cody.fisher@example.com "
  },
  {
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com "
  },
  {
    name: "Emily Selman",
    title: "VP, Hardware Engineering",
    email: "emily.selman@example.com "
  },
  {
    name: "Anna Roberts",
    title: "Chief Strategy Officer",
    email: "anna.roberts@example.com "
  },
]

function App() {

  return (
    <div className="flex gap-5 justify-center items-center flex-col">
      <h1 className="text-white text-3xl font-bold text-center">
        Learning tailwind
      </h1>
      <h2 className="text-cyan-400 text-xl">Utility-First Fundamentals</h2>
      <div className="flex gap-20 items-center justify-center">
        <Notification />
        <Profile />
      </div>
      <h2 className="text-cyan-400 text-xl">Handling Hover, Focus, and Other States</h2>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-center gap-10">
          <ButtonPrimary />
          <ButtonActive />
        </div>
        <ContactsList contactsData={contactsListData} />
        <PeopleTable peopleList={peopleListData} />
        <Form />
      </div>
    </div>
  );
}

export default App;
