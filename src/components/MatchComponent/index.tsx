import ScoreboardComponent from "../ScoreboardComponent";
import StopwatchComponent from "../StopwatchComponent";
import PlayersList from "../PlayersListcomponent";
import EventList from "../TimelineComponent";
import Event from "../../types/Event";
import { useRef, useState } from "react";
import Player from "../../types/Player";
import { v4 as uuidv4 } from 'uuid'
import Team from "../../types/Team";
import { v4 as uuid } from "uuid";
import Match from "../../business/dto/Match";

const mockTeams : { teamHome: Team, teamAway: Team } = { 
  teamHome: { id: '6a27e915-05c3-4da5-afd2-e6dd87923855', name: 'Time A', crestPicUrl: ''  }, 
  teamAway: { id: '0c38b5b1-a165-43e2-822e-8073d2cf876a', name: 'Time B', crestPicUrl: ''  }
}

const mockPlayers: Player[] = [
  { id: uuidv4(), name: "Lionel Messi", profilePicUrl: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg", team: mockTeams.teamHome, isHomeTeam: true },
  { id: uuidv4(), name: "Cristiano Ronaldo", profilePicUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5xtr3jr2u4xpvF2jn4Es1PphhCCoRdJU2g&s", team: mockTeams.teamHome, isHomeTeam: true },
  { id: uuidv4(), name: "Neymar Jr.", profilePicUrl: "https://images.ctfassets.net/3mv54pzvptwz/55YLwKPDnRXkqMBITRpWbC/0c2aefc04afa455c20e9ca0d209698e0/53174188191_42d4c831ae_o.jpg", team: mockTeams.teamAway, isHomeTeam: false },
  { id: uuidv4(), name: "Kylian Mbappé", profilePicUrl: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcToyJB5vYdLIGtPOxgZxj_f16EeZmiQH0Fjkt_IHvlJ5p28p1F1Z-bsIizx0kBbDxdxFIzsWawlzh-V5VTx-kqMLXkuwpX9DOqW3HFhqJuevzYIoV2wuIbTFiMYYfYL1TRodFwDoRpB", team: mockTeams.teamAway, isHomeTeam: false }
];


export default function MatchComponent() {
  const [events, setEvents] = useState<Event[]>([]);
  const timeRef = useRef(0);
  const mockMatch: Match = { id: uuid(), teamHome: mockTeams.teamHome, teamAway: mockTeams.teamAway, players: mockPlayers, events: events }

  const handleTimeUpdate = (newTime: number) => {
    timeRef.current = newTime;
  };

  const handleNewEvent = (event: Event) => {
    const minutes = Math.floor(timeRef.current / 60);
    const seconds = timeRef.current % 60;
    const formattedTime = `${minutes}" ${seconds}'`;

    setEvents(prevEvents => [...prevEvents, { ...event, time: formattedTime }]);
  };

  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-gray-900 space-y-6 p-6">
      
      <div className="flex flex-col items-center space-y-4">
        <ScoreboardComponent match={mockMatch} />
        <StopwatchComponent onTimeChange={handleTimeUpdate} />
      </div>

      <div className="grid grid-cols-3 gap-12 w-full max-w-[90vw]">
        <div className="flex flex-col space-y-6 w-full">
          <PlayersList players={mockPlayers.filter(p => p.team!.id === mockTeams.teamHome.id)} onNewEvent={handleNewEvent} />
        </div>
        <div className="flex justify-center w-full">
          <EventList events={events} />
        </div>
        <div className="flex flex-col space-y-6 w-full">
          <PlayersList players={mockPlayers.filter(p => p.team!.id === mockTeams.teamAway.id)} onNewEvent={handleNewEvent} />
        </div>
      </div>
    </div>
  );
}