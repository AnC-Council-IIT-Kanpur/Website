import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  // {
  //   id: 2.3,
  //   title: "Docs",
  //   newTab: false,
  //   path: "/docs",
  // },
  {
    id: 3,
    title: "Wings and Club",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Career Development Wing",
        newTab: false,
        path: "/blog", //change
      },
      {
        id: 34,
        title: "Research Wing",
        newTab: false,
        path: "/auth/signin", //change
      },
      {
        id: 35,
        title: "Web Wing",
        newTab: false,
        path: "/auth/signup", //change
      },
      {
        id: 35,
        title: "International Relationship",
        newTab: false,
        path: "/docs", //change
      },
      {
        id: 35.1,
        title: "UG Academics",
        newTab: false,
        path: "/support", //change
      },
      {
        id: 36,
        title: "PG Academics",
        newTab: false,
        path: "/error", //change
      },
      {
        id: 37,
        title: "Product Club",
        newTab: false,
        path: "/Wings/ProductClub",
      },
    ],
  },

  {
    id: 4,
    title: "Contact Us",
    newTab: false,
    path: "/support",
  },
  {
    id: 5,
    title : "Research Wing",
    newTab: false,
    path: "/Wings/research",
  }
];

export default menuData;
