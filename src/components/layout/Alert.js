import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const Alert = ({ alerts }) => {
  const options = {
    position: 'top-right',
    autoClose: 3000,
    // hideProgressBar: false,
    // pauseOnHover: true,
    draggable: true,
  };

  useEffect(() => {
    // console.log(alerts);
    alerts !== null &&
      alerts.length > 0 &&
      alerts.map((alert) => {
        toast(alert.msg, { ...options, type: alert.alertType });
      });
  }, [alerts]);
  return <></>;
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
