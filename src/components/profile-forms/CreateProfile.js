import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactChipInput from 'react-chip-input';
import { toast } from 'react-toastify';
import { createProfile } from '../../actions/profile';
import { Link, withRouter } from 'react-router-dom';

const CreateProfile = ({ createProfile, history }) => {
  const [skill, setSkill] = useState('');
  const skillColors = [
    'info',
    'dark',
    'danger',
    'warning',
    'primary',
    'success',
    'secondary',
    'light',
  ];
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    bio: '',
    status: '',
    githubUsername: '',
    skills: [],
    youtube: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
  });
  const {
    company,
    website,
    location,
    bio,
    status,
    githubUsername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = formData;

  const [displaySocialInputs, toggleSociaInputs] = useState(false);

  const onChange = (e) => {
    e.target.name !== 'skill'
      ? setFormData({ ...formData, [e.target.name]: e.target.value })
      : setSkill(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
    setFormData({
      company: '',
      website: '',
      location: '',
      bio: '',
      status: '',
      githubUsername: '',
      skills: [],
      youtube: '',
      facebook: '',
      twitter: '',
      instagram: '',
      linkedin: '',
    });
  };

  const addSkill = () => {
    setSkill('');
    if (!skills.some((x) => x === skill) && skill !== '') {
      setFormData({ ...formData, skills: [...skills, skill] });
    } else {
      skills.some((x) => x === skill)
        ? toast.warning(`Already added ${skill}`)
        : toast.warning(`Please write something`);
    }
  };
  const removeSkill = (index) => {
    skills.splice(index, 1);
    setFormData({ ...formData, skills });
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <select name='status' value={status} onChange={onChange}>
            <option value='0'>* Select Professional Status</option>
            <option value='Developer'>Developer</option>
            <option value='Junior Developer'>Junior Developer</option>
            <option value='Senior Developer'>Senior Developer</option>
            <option value='Manager'>Manager</option>
            <option value='Student or Learning'>Student or Learning</option>
            <option value='Instructor'>Instructor or Teacher</option>
            <option value='Intern'>Intern</option>
            <option value='Other'>Other</option>
          </select>
          <small className='form-text'>
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='Company'
            name='company'
            value={company}
            onChange={onChange}
          />
          <small className='form-text'>
            Could be your own company or one you work for
          </small>
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='Website'
            name='website'
            value={website}
            onChange={onChange}
          />
          <small className='form-text'>
            Could be your own or a company website
          </small>
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={onChange}
          />
          <small className='form-text'>
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className='form-group'>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='add skill'
              onChange={onChange}
              name='skill'
              value={skill}
            />
            <button
              onClick={addSkill}
              className='btn btn-outline-dark'
              type='button'
              id='button-addon2'>
              Add
            </button>
          </div>
          <div className='col-lg-6'>
            {skills.length > 0 &&
              skills.map((each, index) => (
                <span
                  key={index}
                  className={`badge p-1 bg-${skillColors[index]}`}>
                  {each}&nbsp;
                  <i
                    style={{ cursor: 'pointer' }}
                    onClick={() => removeSkill(index)}
                    className='fas fa-times-circle'
                  />
                </span>
              ))}
          </div>
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='Github Username'
            name='githubUsername'
            value={githubUsername}
            onChange={onChange}
          />
          <small className='form-text'>
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className='form-group'>
          <textarea
            className='form-control'
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={onChange}></textarea>
          <small className='form-text'>Tell us a little about yourself</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSociaInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'>
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                className='form-control'
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                className='form-control'
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input
                className='form-control'
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input
                className='form-control'
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                className='form-control'
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={onChange}
              />
            </div>
          </Fragment>
        )}
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
