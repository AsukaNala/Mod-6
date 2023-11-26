function SingleCat2({ id, name, latinName, img, onRemoveCat }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Latin Name: {latinName}</p>
      <img src={img} width="200" alt={name} />
      <br />
      <button onClick={() => onRemoveCat(id)}>Remove</button>
    </div>
  );
}

export default SingleCat2;
