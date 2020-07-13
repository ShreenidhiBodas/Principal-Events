// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faLock, faAirFreshener, faAnchor, faCalender } from '@fortawesome/free-solid-svg-icons';

const categories = [
  {
    id: "Schedule",
    name: "Schedule",
    tags: ["products", "inspirations"],
    count: 147,
    image: require("../assets/icons/download.png"),
    selected: "Schedule",
    icon: 'calendar',
  },
  {
    id: "Attendees",
    name: "Attendees",
    tags: ["products", "shop"],
    count: 16,
    image: require("../assets/icons/seeds.png"),
    selected: "Attendee",
    icon: 'users',
  },
  {
    id: "Speakers",
    name: "Speakers",
    tags: ["products", "inspirations"],
    count: 68,
    image: require("../assets/icons/flowers.png"),
    selected: "Speaker",
    icon: 'user-tie',
  },
  {
    id: "Event Info",
    name: "Event Info",
    tags: ["products", "shop"],
    count: 17,
    image: require("../assets/icons/sprayers.png"),
    selected: "EventInfo",
    icon: 'info',
  },
  {
    id: "Survey",
    name: "Survey",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/survey.png"),
    selected: "Survey",
    icon: 'check-square-o',
  },
  {
    id: "About App",
    name: "About App",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/fertilizers.png"),
    selected: "AboutApp",
    icon: 'question',
  }
];

const eventinfo = [
  {
    id: 1,
    name: "Information About Something",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
    ]
  }
];

const aboutapp = [
  {
    id: 1,
    name: "Event Management App",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
    ]
  }
];
const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "react-ui-kit",
  location: "Europe",
  email: "contact@react-ui-kit.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

const events =
  [
    {
      title: "9:15 am",
      data: [
        {
          name: "Introduction to Booster.io", time: "9:15 am - 9:30 am", place: "Room 2203", color: "#3392F0",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        },
        {
          name: "Getting started with React Native", time: "9:30 am - 9:45 am", place: "Room 2202", color: "#3392F0",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        },
        {
          name: "Advanced JSX", time: "9:45 am - 10:00 am", place: "Room 2204", color: "#F05233",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        }
      ]
    },
    {
      title: "8:00 am",
      data: [
        { name: "Breakfast", time: "8:00 am - 9:00 am", place: "Main hallway", color: "#33E4F0" },
        { name: "Meet and Greet", time: "9:00 am - 9:15 am", place: "Main hallway", color: "#33E4F0" }
      ]
    },

    {
      title: "10:00 am",
      data: [
        {
          name: "Migration to Expo", time: "10:00 am - 10:15 am", place: "Room 2203", color: "#C12071",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        },
        {
          name: "React Native SVG Icons", time: "10:15 am - 10:30 am", place: "Room 2202", color: "#30C120",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        },
        {
          name: "HapiJS Services", time: "10:30 am - 10:45 am", place: "Room 2204", color: "#DEC311",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        },
        {
          name: "Workshop - Advanced JSX", time: "10:45 am - 11:00 am", place: "Room 2201", color: "#36BBE4",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        }
      ]
    },
    {
      title: "11:00 am",
      data: [
        {
          name: "Migration from Ionic", time: "11:00 am - 11:15 am", place: "Room 2203", color: "#C12071",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        },
        {
          name: "Community Integration", time: "11:15 am - 11:30 am", place: "Room 2202", color: "#808080",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        },
        {
          name: "Feathers Workshop", time: "11:30 am - 12:00 pm", place: "Room 2204", color: "#DEC311",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        }
      ]
    },
    {
      title: "12:00 pm",
      data: [
        { name: "Lunch", time: "12:00 pm - 1:15 pm", place: "Auditorium", color: "#33E4F0" }
      ]
    },
    {
      title: "1:15 pm",
      data: [
        {
          name: "Introduction to Booster.io", time: "1:15 pm - 1:30 pm", place: "Room 2203", color: "#3392F0",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        },
        {
          name: "Getting started with React Native", time: "1:30 pm - 1:45 pm", place: "Room 2202", color: "#3392F0",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        },
        {
          name: "Advanced JSX", time: "1:45 pm - 2:00 pm", place: "Room 2204", color: "#F05233",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        }
      ]
    },
    {
      title: "2:00 pm",
      data: [
        {
          name: "Migration to Expo", time: "2:00 pm - 2:15 pm", place: "Room 2203", color: "#C12071",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        },
        {
          name: "React Native SVG Icons", time: "2:15 pm - 2:30 pm", place: "Room 2202", color: "#30C120",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        },
        {
          name: "HapiJS Services", time: "2:30 pm - 2:45 pm", place: "Room 2204", color: "#DEC311",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        },
        {
          name: "Workshop - Advanced JSX", time: "2:45 pm - 3:00 pm", place: "Room 2201", color: "#36BBE4",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        }
      ]
    },
    {
      title: "3:00 pm",
      data: [
        {
          name: "Migration from Ionic", time: "3:00 pm - 3:15 pm", place: "Room 2203", color: "#C12071",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        },
        {
          name: "Community Integration", time: "3:15 pm - 3:30 pm", place: "Room 2202", color: "#808080",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        },
        {
          name: "Feathers Workshop", time: "3:30 pm - 4:00 pm", place: "Room 2204", color: "#DEC311",
          speaker: "John Doe",
          description: "Vivamus lobortis dapibus quam vitae sagittis. In in commodo nisi. In aliquam ante vel mi bibendum, maximus molestie ex pellentesque. Proin maximus efficitur efficitur. Aliquam a dolor ultricies, dapibus metus vitae, rutrum ex. Curabitur bibendum tempor ullamcorper"
        }
      ]
    }
  ]

export { categories, explore, eventinfo, profile, events, aboutapp };
