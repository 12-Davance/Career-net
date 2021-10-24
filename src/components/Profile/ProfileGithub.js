import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);

  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">
        <i className="fab fa-github"></i> Github Repos
      </h2>
      {repos && repos.length === 0 ? (
        <h4>No repos for this user</h4>
      ) : (
        repos.map((each, index) => (
          <div key={index} className="repo bg-white p-1 my-1">
            <div>
              <h4>
                <a
                  href={each.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {each.name}
                </a>
              </h4>
              <p>{each.description}</p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">
                  Stars: {each.stargazers_count}
                </li>
                <li className="badge badge-dark">
                  Watchers: {each.watchers_count}
                </li>
                <li className="badge badge-light">Forks: {each.forks_count}</li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
