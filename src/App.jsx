import "./App.css";
import { ButtonActive } from "./components/ButtonActive";
import { ButtonPrimary } from "./components/ButtonPrimary";
import { Notification } from "./components/Notification";
import { Profile } from "./components/Profile";

function App() {
  return (
    <section className="h-full w-full flex gap-5 justify-center items-center flex-col">
      <h1 className="text-3xl font-bold underline text-center">
        Learning Tailwind
      </h1>
      <div className="w-4/5 p-8 bg-slate-900">
        <Notification />
        <Profile />
        <ButtonPrimary />
        <ButtonActive />
      </div>
    </section>
  );
}

export default App;
