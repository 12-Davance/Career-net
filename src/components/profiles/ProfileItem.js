import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({
  profile: { user, status, company, location, skills },
}) => {
  return (
    <Fragment>
      <div className='profile bg-light'>
        <img src={user ? user.avatar : ''} alt='' className='round-img' />
        <div>
          <h2>{user ? user.name : ''}</h2>
          <p>
            {status} {company && <span> at {company}</span>}
          </p>
          <p className='my-1'>{location && <span>{location}</span>}</p>
          <Link
            to={`/profile/${user ? user._id : 0}`}
            className='btn btn-primary'>
            View Profile
          </Link>
        </div>
        <ul>
          {skills.slice(0, 4).map((each, index) => (
            <li key={index} className='text-primary'>
              <i className='fas fa-check' />
              &nbsp;{each}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

ProfileItem.propTypes = {};

export default ProfileItem;
