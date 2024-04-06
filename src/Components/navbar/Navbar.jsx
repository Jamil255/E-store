import { Link } from 'react-router-dom'
import SearchBar from '../Searchbar/SearchBar'

const Navbar = () => {
  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      {/* Home */}
      <li>
        <Link to={'/'}>Home</Link>
      </li>

      {/* All Product */}
      <li>
        <Link to={'/allproduct'}>All Product</Link>
      </li>

      {/* Signup */}
      <li>
        <Link to={'/signup'}>Signup</Link>
      </li>

      {/* User */}
      <li>
        <Link to={'/user-dashboard'}>Jamil </Link> {/* User-Dashboard */}
      </li>

      {/* Admin */}
      <li>
        <Link to={'/admin-dashboard'}>Admin</Link>
      </li>

      {/* logout */}
      {/* <li>
                logout
            </li> */}

      {/* Cart */}
      <li>
        <Link to={'/cart'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </Link>
      </li>
    </ul>
  )
  return (
    <nav className="bg-pink-600 sticky top-0">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={'/'}>
            <h2 className=" font-bold text-white text-2xl text-center">
              E-Store
            </h2>
          </Link>
        </div>

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>

        {/* Search Bar  */}
        <SearchBar />
      </div>
    </nav>
  )
}

export default Navbar
