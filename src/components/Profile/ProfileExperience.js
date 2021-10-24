import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({ experience }) => {
  return (
    <div className="profile-exp bg-white p-2">
      <h2 className="text-primary">Experience</h2>
      {experience.length > 0 ? (
        <Fragment>
          {experience.map((each, index) => (
            <div key={index}>
              <h3 className="text-dark">{each.company}</h3>
              <p>
                <Moment format="YYYY/MM/DD">{each.from}</Moment> -{' '}
                {each.to ? (
                  <Moment format="YYYY/MM/DD">{each.to}</Moment>
                ) : (
                  ' Now'
                )}
              </p>
              <p>
                <strong>Position: </strong>
                {each.title}
              </p>
              <p>
                <strong>Description: </strong>
                {each.description}
              </p>
            </div>
          ))}
        </Fragment>
      ) : (
        <h4>No experience credentials</h4>
      )}
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
