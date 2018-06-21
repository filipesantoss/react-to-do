import React from 'react';
import { connect } from 'react-redux';
import './message.css';

const Message = ({ text }) => (text ? <span className="message">{text}</span> : null);

const mapStateToProps = state => ({ text: state.message });

export default connect(mapStateToProps)(Message);
