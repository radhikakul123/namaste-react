import React,{lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestourantMenu from "./components/RestourantMenu";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";


//Lazy distribute application in smaller smaller chunks

const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));

const AppLayout = () => {

  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Radhika Kulkarni",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>

    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};    


const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout />,
    children:[
      {
        path: "/", 
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>
        
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element: <RestourantMenu />   
      }
      
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
