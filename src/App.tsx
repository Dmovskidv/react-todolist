import { Outlet } from "react-router-dom";
import AuthHOC from "./hoc/AuthHOC";
import Layout from "./layout";

const App = () => {
  return (
    <AuthHOC>
      <Layout>
        <Outlet />
      </Layout>
    </AuthHOC>
  );
};

export default App;
