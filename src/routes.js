import Index from "./pages/index";
import About from "./pages/about";
import SimpleLists from "./pages/simple-lists";
import DynamicPerson from "./pages/dynamic-person";

export const routes = [
  { title: "Index", path: "/", component: Index },
  { title: "About", path: "/about", component: About },
  { title: "Lists", path: "/simple-lists", component: SimpleLists },
  {
    title: "DynamicPerson",
    path: "/dynamic-person/:name",
    dynamic: true,
    component: DynamicPerson,
  },
];

export const dynamicRoutes = [
  { title: "DynamicPerson-billy", path: "/dynamic-person/billy" },
  { title: "DynamicPerson-joe", path: "/dynamic-person/joe" },
];
