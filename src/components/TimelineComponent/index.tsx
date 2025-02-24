import Event from '../../types/Event';

const TimelineComponent = ({ events }: { events: Event[] }) => {
  return (
    <div className="w-full max-w-[550px] min-h-[500px] mx-auto bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-center text-lg font-semibold text-gray-300">Events</h2>
      {events.length === 0 ? (
        <p className="text-center text-gray-500 mt-2">No events yet.</p>
      ) : (
        <ul className="mt-2 space-y-2">
          {events.map((event, index) => (
            <li 
              key={index} 
              className={`text-sm text-gray-400 flex ${
                event.player?.isHomeTeam ? "justify-start" : "justify-end"
              } mb-2`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-white">{event.time}</span>
                <span className={`font-bold ${event.player?.isHomeTeam ? "text-red-400" : "text-blue-400"}`}>
                  {event.player?.name}
                </span> 
                <span className="text-white">
                  {event.type === 0 ? "⚽ Goal" : event.type === 1 ? "❌ Own Goal" : event.type === 2 ? "🟥 Red Card" : "🟨 Yellow Card"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimelineComponent;
