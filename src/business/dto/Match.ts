import Event from '../../types/Event';
import Player from '../../types/Player';
import Team from '../../types/Team';

export default interface Match {
  id?: string,
  teamHome?: Team,
  teamAway?: Team,
  events?: Event[],
  players?: Player[]
}