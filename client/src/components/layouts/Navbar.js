import React, { Fragment } from 'react';
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
      <ul>
        <li>
          <Link to='/profiles'>Developers</Link>
        </li>
        {!loading && isAuthenticated ? (
          <Fragment>
            <li>
              <Link to='/posts'>
                <span className='hide-sm'>Posts</span>
              </Link>
            </li>
            <li>
              <Link to='/dashboard'>
                <i className='fas fa-user'></i>{' '}
                <span className='hide-sm'>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link onClick={logout}>
                <i className='fas fa-sign-out-alt'></i>{' '}
                <span className='hide-sm'>Logout</span>
              </Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </Fragment>
        )}
      </ul>
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

export default connect(mapStateToProps, { logout })(Navbar);
