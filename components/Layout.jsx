import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-code-darkerpurple pt-16">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
