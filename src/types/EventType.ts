export enum EventType {
  Goal = 0,
  OwnGoal = 1,
  RedCard = 2,
  YellowCard = 3,
  Substituition = 4
}

// Melhor abordagem com um Record<>
export const EventTypeLabel: Record<EventType, string> = {
  [EventType.Goal]: "Goal ⚽",
  [EventType.OwnGoal]: "Own Goal ❌⚽",
  [EventType.RedCard]: "Red Card 🟥",
  [EventType.YellowCard]: "Yellow Card 🟨",
  [EventType.Substituition]: "Substitution 🔃"
};

export const getEventLabel = (eventType?: EventType): string => {
  return eventType !== undefined && eventType in EventTypeLabel
    ? EventTypeLabel[eventType]
    : "Unknown Event ❓";
};

export default EventType;
