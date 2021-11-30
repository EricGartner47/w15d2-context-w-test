import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import coffeeBeans from "./mockData/coffeeBeans.json";
import SetCoffeeBean from "./components/SetCoffeeBean";



function App() {
  return (
    <>
      <SelectedCoffeeBean />
      <SetCoffeeBean coffeeBeans={coffeeBeans} />
    </>
  );
}

export default App;
