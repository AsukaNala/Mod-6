import { useState } from "react";

function AddCatForm({ onAddCat }) {
  //onAddCat is callback function(object) and also props to recieve new cat data
  //manage new data in state
  const [newName, setNewName] = useState("");
  const [newLatinName, setNewLatinName] = useState("");
  const [newImg, setNewImg] = useState("");

  //submit handler.
  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent reload when form is submitted
    // const catToAdd = {}; // { name: newName, latinName: newLatinName, img: newImg };
    // catToAdd.name = newName;
    // catToAdd.newLatinName = newLatinName;
    // catToAdd.img = newImg;
    //onAddCat(catToAdd); //excute onAddCats.(call back function. when  form is submitted it's recieved newName and NewLatinName) //Now it works!
    onAddCat({ name: newName, latinName: newLatinName, img: newImg });
  };

  return (
    <div className="AddCatForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Cat Name:
          <input
            //type="text"
            name="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </label>
        {"  "}
        <label>
          Cat Latin Name:
          <input
            //type="text"
            name="latinName"
            value={newLatinName}
            onChange={(e) => setNewLatinName(e.target.value)}
          />
        </label>
        <label>
          Image:
          <input
            type="url"
            name="imgUrl"
            value={newImg}
            onChange={(e) => setNewImg(e.target.value)}
          />
        </label>
        <button>Add Cat</button>
      </form>
    </div>
  );
}

export default AddCatForm;
