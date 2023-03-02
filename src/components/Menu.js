const Menu = (props) => {
  return (

    <div>

      <ul className="nav">
        {props.menu.map(el => <li key={el.id} className="nav-item">
          <div className="nav-link active" aria-current="page">{el.title}</div>
        </li>
        )}

      </ul>

    </div>
  )
};

export default Menu;