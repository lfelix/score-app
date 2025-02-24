import EventType from "../types/EventType";
import Match from "./dto/Match";

export const calculateScore = (match: Match): { goalsTeamHome: number; goalsTeamAway: number } => {
  if(match.events == null)
    return { goalsTeamHome: 0, goalsTeamAway: 0 };

  return match.events!.reduce(
    (score, event) => {
      if (!event.player || !event.player.team || event.type === undefined) return score;

      const playerTeam = event.player.team;
      const isHomeTeam = match.teamHome!.id === playerTeam.id;
      const isAwayTeam = match.teamAway!.id === playerTeam.id;

      if (event.type === EventType.Goal) {
        if (isHomeTeam) score.goalsTeamHome++;
        if (isAwayTeam) score.goalsTeamAway++;
      }

      if (event.type === EventType.OwnGoal) {
        if (isHomeTeam) score.goalsTeamAway++;
        if (isAwayTeam) score.goalsTeamHome++;
      }
      return score;
    },
    { goalsTeamHome: 0, goalsTeamAway: 0 }
  );
}
