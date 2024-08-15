import "./App.css";
import { ButtonActive } from "./components/ButtonActive";
import { ButtonPrimary } from "./components/ButtonPrimary";
import { Notification } from "./components/Notification";
import { Profile } from "./components/Profile";

function App() {
  return (
    <section className="h-full w-full flex gap-5 justify-center items-center flex-col">
      <h1 className="text-white text-3xl font-bold text-center">
        Learning tailwind
      </h1>
      <div className="w-4/5 p-8">
        <h2 className="text-cyan-400 text-xl">Utility-First Fundamentals</h2>
        <Notification />
        <Profile />
        <h2 className="text-cyan-400 text-xl">Handling Hover, Focus, and Other States</h2>
        <ButtonPrimary />
        <ButtonActive />
      </div>
    </section>
  );
}

export default App;
