import { calculateScore } from "../../business/MatchBusiness"
import Match from "../../business/dto/Match";

export default function ScoreboardComponent({ match }: { match: Match }) {

  const scoreByTeam = calculateScore(match);

  return (
  <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center justify-center text-5xl font-bold space-x-4">
        <div className="w-20 text-center bg-red-500 px-4 py-2 rounded-lg shadow-md">{scoreByTeam.goalsTeamHome}</div>
        <span className="text-gray-400">X</span>
        <div className="w-20 text-center bg-blue-500 px-4 py-2 rounded-lg shadow-md">{scoreByTeam.goalsTeamAway}</div>
      </div>
      <div className="flex justify-between w-full mt-4 text-lg">
        <span className="text-red-400">Time 1</span>
        <span className="text-blue-400">Time 2</span>
      </div>
    </div>
  );
}
