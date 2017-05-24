module.exports = function fieldGoalPlay (fieldGoalAttempt) {
  const team = fieldGoalAttempt.teamAbbreviation;
  const shooter = fieldGoalAttempt.shootingPlayer.FirstName + ' ' + fieldGoalAttempt.shootingPlayer.LastName;
  const result = fieldGoalAttempt.outcome.toLowerCase();
  const shot =  fieldGoalAttempt.shotType;
  const points = fieldGoalAttempt.Points;
  let play;

  switch (result) {
    case 'missed':
      play = `${shooter} ${result} ${shot} for ${points} points`;
      break;
    case 'blocked':
      play = `${shooter} ${shot} ${result} by ${fieldGoalAttempt.blockingPlayer.LastName}`;
      break;
    case 'scored':
      play = `${shooter} ${result} ${shot} for ${points} points`;
      break;
    default:
      return;
  }

  return {team, play};
}