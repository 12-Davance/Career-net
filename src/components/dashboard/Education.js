import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((each) => (
    <tr key={each._id}>
      <td>{each.school}</td>
      <td className="hide-sm">{each.degree}</td>
      <td className="hide-sm">
        <Moment format="YYYY/MM/DD">{each.from}</Moment> -{' '}
        {each.to ? <Moment format="YYYY/MM/DD">{each.to}</Moment> : ' Now'}
      </td>
      <td>
        <button
          onClick={() => deleteEducation(each._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School / Bootcamp</th>
            <th className="hide-sm">Degree / Certificate</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
