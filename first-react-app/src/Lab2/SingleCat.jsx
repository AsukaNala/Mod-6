function SingleCat({ name, latinName, img }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Latin Name: {latinName}</p>
      <img src={img} width="200" alt={name} />
    </div>
  );
}

export default SingleCat;
