import "./App.css";
import { Notification } from "./components/Notification";
import { Profile } from "./components/Profile";
import { ButtonPrimary } from "./components/ButtonPrimary";
import { ButtonActive } from "./components/ButtonActive";
import { ContactsList } from "./components/ContactsList";
import { PeopleTable } from "./components/PeopleTable";
import { Form } from "./components/Form";
import { NewProject } from "./components/NewProject";
import { ContactsWithOptions } from "./components/ContactsWithOptions";
import { InputWithErrorMessage } from "./components/InputWithErrorMessage";
import { CATEGORIES_DATA, CONTACTS_DATA, CONTACTS_LIST_DATA, PEOPLE_LIST_DATA } from "./constants";
import { PublishedStatus } from "./components/PublishedStatus";
import { Categories } from "./components/Categories";
import { PaymentMethod } from "./components/PaymentMethod";

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
        <ContactsList contactsData={CONTACTS_LIST_DATA} />
        <PeopleTable peopleList={PEOPLE_LIST_DATA} />
        <Form />
        <NewProject />
        <ContactsWithOptions contactsData={CONTACTS_DATA} />
        <InputWithErrorMessage />
        <PublishedStatus />
        <Categories categories={CATEGORIES_DATA} />
        {/* has-[:checked]: */}
        <PaymentMethod />
      </div>
    </div>
  );
}

export default App;
