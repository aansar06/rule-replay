import { Link } from 'react-router-dom';

export default function AppHeader() {
  return (
    <header className="app-header">
      <Link to="/" className="app-header__link">
        Next Play – Rule Library
      </Link>
    </header>
  );
}
