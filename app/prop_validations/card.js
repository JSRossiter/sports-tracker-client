import PropTypes from 'prop-types';

export default {
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  homeScore: PropTypes.number,
  awayScore: PropTypes.number
};
