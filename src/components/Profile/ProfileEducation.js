import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({ education }) => {
  return (
    <div className="profile-edu bg-white p-2">
      <h2 className="text-primary">Education</h2>
      {education.length > 0 ? (
        <Fragment>
          {education.map((each, index) => (
            <div key={index}>
              <h3 className="text-dark">{each.school}</h3>
              <p>
                <Moment format="YYYY/MM/DD">{each.from}</Moment> -{' '}
                {each.to ? (
                  <Moment format="YYYY/MM/DD">{each.to}</Moment>
                ) : (
                  ' Now'
                )}
              </p>
              <p>
                <strong>Degree: </strong>
                {each.degree}
              </p>
              <p>
                <strong>Field of study: </strong>
                {each.fieldOfStudy}
              </p>
              <p>
                <strong>Description: </strong>
                {each.description}
              </p>
            </div>
          ))}
        </Fragment>
      ) : (
        <h4>No education credentials</h4>
      )}
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
