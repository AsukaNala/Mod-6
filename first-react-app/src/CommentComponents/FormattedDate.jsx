function FormattedDate(props) {
  return <div className="FormattedDate">{props.date.toLocaleString()}</div>;
}
export default FormattedDate;
