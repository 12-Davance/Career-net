import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { school, degree, fieldOfStudy, from, to, current, description } =
    formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Add Education</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add any school/bootcamp that you
        have attended
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            value={degree}
            onChange={onChange}
            type='text'
            placeholder='* Degree / Certificate'
            name='degree'
            required
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            value={school}
            onChange={onChange}
            type='text'
            placeholder='* School / Bootcamp'
            name='school'
            required
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            value={fieldOfStudy}
            onChange={onChange}
            type='text'
            placeholder='Field of Study'
            name='fieldOfStudy'
          />
        </div>
        <div className='form-group'>
          <h4>From Date</h4>
          <input
            className='form-control'
            value={from}
            onChange={onChange}
            type='date'
            name='from'
          />
        </div>
        <div className='form-group'>
          <p>
            <input
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
              type='checkbox'
              name='current'
              value=''
            />{' '}
            Current Job
          </p>
        </div>
        <div className='form-group'>
          <h4>To Date</h4>
          <input
            className='form-control'
            disabled={toDateDisabled}
            value={to}
            onChange={onChange}
            type='date'
            name='to'
          />
        </div>
        <div className='form-group'>
          <textarea
            className='form-control'
            value={description}
            onChange={onChange}
            name='description'
            cols='30'
            rows='5'
            placeholder='Program Description'></textarea>
        </div>
        <input
          className='form-control'
          type='submit'
          className='btn btn-primary my-1'
        />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
