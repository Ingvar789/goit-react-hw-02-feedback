import React from "react";
import PropTypes from 'prop-types';
import {SectionFeedbackStyled} from './SectionFeedback.styled'
const SectionFeedback = ({ title }) => (
    <SectionFeedbackStyled>
        <h2>{title}</h2>
        </SectionFeedbackStyled>
);

export default SectionFeedback;

SectionFeedback.propTypes = {
    title: PropTypes.string.isRequired,
}