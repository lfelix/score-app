import Player from "../../../types/Player";
import EventType from "../../../types/EventType";
import Event from "../../../types/Event";

export default function PlayerScoreComponent({ onNewEvent, player }: { 
  onNewEvent: (event: Event) => void; 
  player: Player; 
}) {
  return (
    <div className={`flex flex-col items-center p-4 rounded-lg shadow-md w-[500px] ${
      player.isHomeTeam ? "bg-red-900 text-red-300" : "bg-blue-900 text-blue-300"
    }`}>
      
      <div className="flex items-center space-x-4">
        <img 
          src={player.profilePicUrl} 
          alt={player.name} 
          className="w-16 h-16 rounded-full border-2 border-white aspect-square object-cover"
        />
        <b className="text-lg">{player.name}</b>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 w-full mt-4">
        <button 
          onClick={() => onNewEvent({ player, type: EventType.Goal })}
          className="bg-blue-500 text-white flex items-center justify-center px-4 py-2 text-xs rounded-md shadow-lg hover:bg-blue-600 transition w-full">
          ⚽ Goal
        </button>
        <button 
          onClick={() => onNewEvent({ player, type: EventType.OwnGoal })}
          className="bg-gray-600 text-white flex items-center justify-center px-4 py-2 text-xs rounded-md shadow-lg hover:bg-gray-700 transition w-full">
          ❌ Own Goal
        </button>
        <button 
          onClick={() => onNewEvent({ player, type: EventType.YellowCard })}
          className="bg-yellow-500 text-black flex items-center justify-center px-4 py-2 text-xs rounded-md shadow-lg hover:bg-yellow-600 transition w-full">
          🟨 Y. Card
        </button>
        <button 
          onClick={() => onNewEvent({ player, type: EventType.RedCard })}
          className="bg-red-500 text-white flex items-center justify-center px-4 py-2 text-xs rounded-md shadow-lg hover:bg-red-600 transition w-full">
          🟥 R. Card
        </button>
      </div>
    </div>
  );
}
