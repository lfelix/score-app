import EventType from "./EventType";
import Player from "./Player";

export default interface Event{
  time?: string,
  type?: EventType,
  player?: Player
}