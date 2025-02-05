const Footer = () => {
  return (
    <div className='container'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <div className='col-md-4 d-flex align-items-center'>
          <span className='text-secondary text-uppercase'>
            &copy; 2024 E-commerce Website
          </span>
        </div>

        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'>
            <a href='/' className='nav-link text-secondary text-uppercase'>
              Home
            </a>
          </li>
          <li className='ms-3'>
            <a
              href='/products'
              className='nav-link text-secondary text-uppercase'
            >
              Products
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
