/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      title
      venue
      startDate
      endDate
      description
      sessions {
        items {
          sessionId
          startDate
          endDate
          title
        }
      }
      attire
      airTransport
      accomodation
      flightAssist
      attendees {
        items {
          attendeeId
          name
          email
        }
      }
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents($filter: TableEventFilterInput) {
    listEvents(filter: $filter) {
      items {
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
        sessions {
          items {
            sessionId
            startDate
            endDate
            title
            description
            speaker
            type
          }
        }
        attendees {
          items {
            attendeeId
            name
            email
          }
        }
      }
      nextToken
    }
  }
`;
