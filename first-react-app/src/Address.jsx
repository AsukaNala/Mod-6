function Address({ no, street, surburb = "Fremantle" }) {
  return (
    <div className="Address componentBox">
      <h2>Address</h2>
      <p>
        {no}
        {"  "}
        {street}
        {"  "}
        {surburb}
      </p>
    </div>
  );
}

export default Address;
