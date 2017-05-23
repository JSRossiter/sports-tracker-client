import PropTypes from 'prop-types';

export default {
  plays: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired,
  league: PropTypes.string.isRequired,
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  homeScore: PropTypes.number.isRequired,
  awayScore: PropTypes.number.isRequired,
  quarter: PropTypes.number.isRequired,
  timeRemaining: PropTypes.number.isRequired
};
