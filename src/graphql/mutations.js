/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
      id
      title
      venue
      startDate
      endDate
      description
      attire
      airTransport
      accomodation
      flightAssist
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent($id: ID!) {
    deleteEvent(id: $id) {
      id
      title
      venue
      startDate
      endDate
      description
      sessions {
        nextToken
      }
      attire
      airTransport
      accomodation
      flightAssist
      attendees {
        nextToken
      }
    }
  }
`;
export const createNewSession = /* GraphQL */ `
  mutation CreateNewSession($input: CreateSessionInput!) {
    createNewSession(input: $input) {
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
export const createAttendee = /* GraphQL */ `
  mutation CreateAttendee($input: CreateAttendeeInput!) {
    createAttendee(input: $input) {
      eventId
      name
      email
      attendeeId
    }
  }
`;
