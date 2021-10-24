import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { getProfiles } from '../../actions/profile';
import { connect } from 'react-redux';
import ProfileItem from './ProfileItem';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Users</h1>
      <p className="lead">
        <i className="fab fa-connectdevelop"></i>&nbsp;Browse and connect with
        users
      </p>
      <div className="profiles">
        {loading ? (
          <Spinner />
        ) : (
          profiles.map((profile) => (
            <ProfileItem key={profile._id} profile={profile} />
          ))
        )}
        {profiles && profiles?.length === 0 && loading === false && (
          <h4>No profiles found...</h4>
        )}
      </div>
    </Fragment>
  );
};

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
