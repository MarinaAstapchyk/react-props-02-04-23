const Expense = (props) => {
  console.log(props);
  return (
    <div className="card">
        <div className="card-body">
          <h5 className="card-title">Amount: $ {props.expense.value}</h5>
          <p className="card-text">{props.expense.category}</p>
          <p className="card-text">{props.expense.description}</p>
          <p className="card-text">{props.expense.date}</p>

        </div>
    </div>
  )
};

export default Expense;

