import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileByID } from '../../actions/profile';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';

const Profile = ({
  getProfileByID,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileByID(match.params.id);
  }, [getProfileByID, match.params.id]);

  return (
    <Fragment>
      <Link to="/profiles" className="btn btn-light">
        Back To Profiles
      </Link>
      {auth.isAuthenticated &&
        !auth.loading &&
        auth?.user?._id === profile?.user?._id && (
          <Link to="/edit-profile" className="btn btn-dark">
            Edit Profile
          </Link>
        )}
      <div className="profile-grid my-1">
        {profile && <ProfileTop profile={profile} />}
        {profile && <ProfileAbout profile={profile} />}
        {profile && profile.experience && (
          <ProfileExperience experience={profile.experience} />
        )}
        {profile && profile.education && (
          <ProfileEducation education={profile.education} />
        )}
        {loading && <Spinner />}
        {profile && profile.githubUsername && (
          <ProfileGithub username={profile.githubUsername} />
        )}
      </div>
      {!profile && !loading && (
        <div className="alert alert-danger">
          <h6>No Profile Info To Show!</h6>
        </div>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileByID: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileByID })(Profile);
