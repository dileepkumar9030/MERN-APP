import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';
import PropTypes from 'prop-types';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' /> DevConnector
        </Link>
      </h1>
      {/* <ul>
        <li>
          <a href='profiles.html'>Developers</a>
        </li>
        <li>
          <Link to='register'>Register</Link>
        </li>
        <li>
          <Link to='login'>Login</Link>
        </li>
      </ul>
      <ul>
        <li>
          <a onClick={logout} href='profiles.html'>
            <i className='fas fa-sign-out-alt'></i>{' '}
            <span className='hide-sm'>Logout</span>
          </a>
        </li>
      </ul> */}
      {!loading &&
        (isAuthenticated ? (
          <ul>
            <li>
              <Link to='/dashboard'>
                <i className='fas fa-user'></i>{' '}
                <span className='hide-sm'>Dashboard</span>
              </Link>
            </li>
            <li>
              <a onClick={logout} href='#!'>
                <i className='fas fa-sign-out-alt'></i>{' '}
                <span className='hide-sm'>Logout</span>
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <a href='#!'>Developers</a>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        ))}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
