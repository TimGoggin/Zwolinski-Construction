
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './components/Error';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Reviews from "./pages/Reviews";
import Accessibility from "./pages/Accessibility";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
    errorElement: <Error />,
  },
  {
    path: "/services",
    element: <Layout><Services /></Layout>,
    errorElement: <Error />,
  },
  {
    path: "/gallery",
    element: <Layout><Gallery /></Layout>,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
    errorElement: <Error />,
  },
  {
    path: "/reviews",
    element: <Layout><Reviews /></Layout>,
    errorElement: <Error />,
  },
  {
    path: "/accessibility",
    element: <Layout><Accessibility /></Layout>,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
