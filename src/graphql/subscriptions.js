/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const subscribeToEventSessions = /* GraphQL */ `
  subscription SubscribeToEventSessions($eventId: String!) {
    subscribeToEventSessions(eventId: $eventId) {
      eventId
      sessionId
      title
      startDate
      endDate
      type
      description
      speaker
    }
  }
`;
export const onCreateAttendee = /* GraphQL */ `
  subscription OnCreateAttendee($eventId: ID, $name: String) {
    onCreateAttendee(eventId: $eventId, name: $name) {
      eventId
      name
      email
      attendeeId
    }
  }
`;
