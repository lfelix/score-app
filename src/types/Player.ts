import Team from "./Team";

export default interface Player{
  id?: string,
  name?: string,
  profilePicUrl?: string,
  team?: Team
  isHomeTeam?: boolean
}

