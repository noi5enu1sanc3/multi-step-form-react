import './FormNav.scss';

function FormNav() {
  return (
    <nav className="form-nav">
      <button type="button" className="form-nav__button form-nav__button_direction_back"><span>Go back</span></button>
      <button type="button" className="form-nav__button form-nav__button_direction_next"><span>Next step</span></button>
    </nav>
  );
}

export default FormNav;
