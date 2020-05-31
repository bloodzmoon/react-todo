import { HomePage, TodoPage } from "../pages";

export const routes = [
  {
    key: "HomePage",
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    key: "TodoPage",
    path: "/todo",
    component: TodoPage,
  },
];
