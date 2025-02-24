import PlayerScoreComponent from "./PlayerScoreComponent";
import Player from "../../types/Player";
import Event from "../../types/Event";

export default function PlayersList({ players, onNewEvent }: { 
  players: Player[]; 
  onNewEvent: (event: Event) => void;
}) {
  return (
    <div className="flex flex-col items-center space-y-6 w-full max-w-[550px]">
      {players.map(player => (
        <PlayerScoreComponent key={player.id} player={player} onNewEvent={onNewEvent} />
      ))}
    </div>
  );
}
