const files = [
  {
    name: "krizia-bianca",
    children: [
      // Regular project files
      { name: "about.js", active: false, component: "About", path: "/about" },
      {
        name: "skills.jsx",
        active: false,
        component: "Skills",
        path: "/skills",
      },
      {
        name: "projects.json",
        active: false,
        component: "Projects",
        path: "/projects",
      },
      {
        name: "contact.ts",
        active: false,
        component: "Contact",
        path: "/contact",
      },
      { name: "README.md", active: true, component: "Readme", path: "/" },

      // Assets folder
      {
        name: "assets",
        children: [
          {
            name: "images",
            children: [
              {
                name: "medfad.png",
                path: "/projects/medfad.png",
                type: "image",
                content: null,
              },
              {
                name: "nextlevel.png",
                path: "/projects/nextlevel.png",
                type: "image",
                content: null,
              },
              {
                name: "portfolioui.png",
                path: "/projects/portfolio-ui.png",
                type: "image",
                content: null,
              },
              {
                name: "airportcodesph.png",
                path: "/projects/airportcodesph-2.png",
                type: "image",
                content: null,
              },
              {
                name: "portfolio.png",
                path: "/projects/portfolio.png",
                type: "image",
                content: null,
              },
              {
                name: "evap.png",
                path: "/projects/evap.png",
                type: "image",
                content: null,
              },
              {
                name: "sev.png",
                path: "/projects/sev.png",
                type: "image",
                content: null,
              },
              {
                name: "redemp.png",
                path: "/projects/redemp.png",
                type: "image",
                content: null,
              },
              {
                name: "metpest.png",
                path: "/projects/metpest-2.png",
                type: "image",
                content: null,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default files;
