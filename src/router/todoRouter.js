import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import ModifyPage from "../pages/todo/ModifyPage.js";

const Loading = <div className={"bg-red-700"}>Loading...</div>;
const TodoList = lazy(() => import("../pages/todo/ListPage.js"));
const TodoRead = lazy(() => import("../pages/todo/ReadPage.js"));
const TodoAdd = lazy(() => import("../pages/todo/AddPage.js"));
const TodoModify = lazy(() => import("../pages/todo/ModifyPage.js"));

const todoRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <TodoList></TodoList>
        </Suspense>
      ),
    },
    {
      path: "",
      element: <Navigate replace={true} to={"list"} />,
    },
    {
      path: "read/:tno",
      element: (
        <Suspense fallback={Loading}>
          <TodoRead></TodoRead>
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={Loading}>
          <TodoAdd></TodoAdd>
        </Suspense>
      ),
    },
    {
      path: "modify/:tno",
      element: (
        <Suspense fallback={Loading}>
          <ModifyPage></ModifyPage>
        </Suspense>
      ),
    },
  ];
};

export default todoRouter;
