import React from "react";
import Dashboard from "./Components/Dashboard"; // Adjust the import path as needed
import Contact from "./Components/Contact"; // Adjust the import path as needed
import Login from "./Components/Login"; // Assuming you have a Login component
import "./App.css";

function App() {
  const [currentUrl, setCurrentUrl] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentUrl(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const renderComponent = () => {
    switch (currentUrl) {
      case "/":
        return <Login setCurrentUrl={setCurrentUrl} />;
      case "/dashboard":
        return <Dashboard setCurrentUrl={setCurrentUrl} />;
      case "/contact":
        return <Contact setCurrentUrl={setCurrentUrl} />;
      default:
        return <div>404 Not Found</div>;
    }
  };

  return <div className="background">{renderComponent()}</div>;
}

export default App;
