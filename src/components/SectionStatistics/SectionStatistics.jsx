import React from "react";
import PropTypes from 'prop-types';
import {SectionStatisticsStyled} from './SectionStatistics.styled'
const SectionStatistics = ({ title }) => (
    <SectionStatisticsStyled>
        <h2>{title}</h2>
    </SectionStatisticsStyled>
);

export default SectionStatistics;

SectionStatistics.propTypes = {
    title: PropTypes.string.isRequired,
}