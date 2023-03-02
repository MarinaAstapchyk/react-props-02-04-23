import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import Categorie from "./components/Categorie";
import Menu from "./components/Menu";

function App() {

  const categories = [
    {
      id: uuidv4(),
      title: "Food",
      description: 'All that we buy to eat at grocery stores and cafes',
    },
    {
      id: uuidv4(),
      title: "Apartment",
      description: 'Renters fees and other payments for accommodation',
    },
    {
      id: uuidv4(),
      title: "Car",
      description: 'Cas, car washing, maintenance',
    },
    {
      id: uuidv4(),
      title: "Telephone and internet",
      description: 'Cellphone payments, home internet',
    },
    {
      id: uuidv4(),
      title: "Entertainment",
      description: 'Cinema, restaurants, exibitions, trips',
    },
    {
      id: uuidv4(),
      title: "Health care",
      description: 'Vitamins, sports nutrition, gym, fitness',
    },
    {
      id: uuidv4(),
      title: "Insurance",
      description: 'Health, life and car insurance',
    },
    {
      id: uuidv4(),
      title: "Clothes",
      description: 'Clothes, bags, shoes etc',
    },
  ];

  const expenses = [
    {
      id: uuidv4(),
      date: "5.01.2023",
      value: 120,
      category: "Food",
      description: "Ralphs grocery store"
    },
    {
      id: uuidv4(),
      date: "6.01.2023",
      value: 2550,
      category: "Apartment",
      description: "landlord"
    },
    {
      id: uuidv4(),
      date: "6.01.2023",
      value: 94,
      category: "Clothes",
      description: "Zara"
    },
    {
      id: uuidv4(),
      date: "6.01.2023",
      value: 175,
      category: "Clothes",
      description: "Macy`s"
    },
    {
      id: uuidv4(),
      date: "8.01.2023",
      value: 65,
      category: "Telephone and internet",
      description: "At&t"
    },
    {
      id: uuidv4(),
      date: "8.01.2023",
      value: 875,
      category: "Insurance",
      description: "The J. Morey Company"
    },
    {
      id: uuidv4(),
      date: "9.01.2023",
      value: 88,
      category: "Food",
      description: "Ralphs grocery store"
    },
    {
      id: uuidv4(),
      date: "10.01.2023",
      value: 55,
      category: "Health care",
      description: "Vitamine shoppe"
    },
    {
      id: uuidv4(),
      date: "11.01.2023",
      value: 23,
      category: "Food",
      description: "7 Eleven"
    },
    {
      id: uuidv4(),
      date: "11.01.2023",
      value: 55,
      category: "Health care",
      description: "LA Fitness"
    },
    {
      id: uuidv4(),
      date: "11.01.2023",
      value: 55,
      category: "Entertainment",
      description: "Cinemark Playa Vista and XD"
    },
    {
      id: uuidv4(),
      date: "12.01.2023",
      value: 65,
      category: "Car",
      description: "Auto Fuels Gas Station"
    },
    {
      id: uuidv4(),
      date: "12.01.2023",
      value: 115,
      category: "Entertainment",
      description: "The Roof on Wilshire"
    },
    {
      id: uuidv4(),
      date: "11.01.2023",
      value: 23,
      category: "Food",
      description: "Traders Joes"
    },
    {
      id: uuidv4(),
      date: "12.01.2023",
      value: 17,
      category: "Car",
      description: "Joe Bell Express Car Wash"
    },
  ];

  const menu = [
    {
      id:uuidv4(),
      title:"Income",
    },
    {
      id:uuidv4(),
      title:"Expenses",
    },
    {
      id:uuidv4(),
      title:"Saving",
    },
    {
      id:uuidv4(),
      title:"Investment",
    },
  ];

  return (
    <div>
      <Menu menu={menu}/>
      <h1>Expenses: </h1>
      <div className="row align-items-start">
        {categories.map(el =>
          <Categorie key={el.id} categorie={el} expenses={expenses} />
        )
        }


      </div>

    </div>
  );
}

export default App;
