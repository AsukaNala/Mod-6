import { useState } from "react";
import SingleCat2 from "./SIngleCat2";
import AddCatForm from "./AddCatForm";

const cats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/320px-TheCheethcat.jpg",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/480px-Mountain_Lion_in_Glacier_National_Park.jpg",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/480px-Standing_jaguar.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/480px-African_leopard_male_%28cropped%29.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/480px-Lion_waiting_in_Namibia.jpg",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/480px-Irbis4.JPG",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/480px-Walking_tiger_female.jpg",
  },
]; //if data doesn't have keys, one way to make id is to make the function to make keys. Also add , at the end  in case another data is added

//to display each cat in <li> it goes in <ul>

//to manage cats array and display <ul>
function BigCats2() {
  //data will change. so manage cat array in state
  const [currentCats, setCurrentCats] = useState(cats);

  const handleRemoveCat = (id) => {
    const newCats = currentCats.filter((cat) => cat.id != id);
    setCurrentCats(newCats);
  };

  //to display mapped cats as <li>
  const catList = currentCats.map((cat) => (
    <SingleCat2
      key={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      img={cat.img}
      onRemoveCat={() => handleRemoveCat(cat.id)}
    />
  ));

  const handleSortCats = () => {
    let newCats = [...currentCats];
    newCats.sort((a, b) => a.name.localeCompare(b.name));
    //newCats.sort((cat1, cat2)=>(cat1.name < cat2.name ? -1 :1)
    setCurrentCats(newCats);
  };

  const handleReverseCats = () => {
    let newCats = [...currentCats];
    newCats.reverse();
    setCurrentCats(newCats);
  };

  const handleFilterCats = () => {
    let newCats = [...currentCats];
    newCats = newCats.filter((cat) => cat.latinName.includes("Panthera"));
    setCurrentCats(newCats);
  };

  const handleResetCats = () => {
    setCurrentCats(cats);
  };

  //Lab5
  const handleAddCat = (newCat) => {
    //newCat.id = currentCats.length + 1;  // not great
    newCat.id =
      currentCats.reduce((maxId, cat) => Math.max(maxId, cat.id), 0) + 1; //find the max id in currentCats and add new id
    //引数として渡されたコールバック関数は、第1引数が累積される値（maxId）、第2引数が現在の要素（cat).
    //Math.max(maxId, cat.id) は、現在の要素の id とこれまでの最大の id を比較し、より大きい方を返す。
    //The reduce() method does not reduce the original array.
    setCurrentCats([...currentCats, newCat]);
    console.log(newCat.id);
  };

  return (
    <div className="BigCats componentBox">
      <ul>{catList}</ul>
      <div>
        <button onClick={handleSortCats}>Sort Cats Alphabetically</button>
        <button onClick={handleReverseCats}>Reverse Cats</button>
      </div>
      <div>
        <button onClick={handleFilterCats}>Filter "Panthera"</button>
        <button onClick={handleResetCats}>Reset</button>
      </div>
      <AddCatForm onAddCat={handleAddCat} />
    </div>
  ); //onAddCat is props which accesses to parent data and it gets data from handleAddCat
}

export default BigCats2;
