var CREDENTIALS = {
  dimensions: {
    width: 0,
    height: 0,
    ref: null
  },
  roster: [
    {id: 1, firstName: "Austin", lastName: "White", role: "Coach", img: null, team: "World Elite"},
    {id: 2, firstName: "Logan", lastName: "Dooley", role: "Athlete", img: null, team: "World Elite"}
  ],
  eventInfo: {
    title: "",
    location: "",
    date: "",
    logo: null
  },
  zones: {
    available: []
  },
  
  background: {
    color: '#fff',
    img: null
  },
  
  positioning: {
    roster: {},
    eventInfo: {
      title: { x: 0, y: 0 },
      location: { x: 0, y: 0 },
      date: { x: 0, y: 0 },
      logo: { x: 0, y: 0 }
    },
    zones: [
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0} // ....
    ]
  }
}

export default CREDENTIALS;
