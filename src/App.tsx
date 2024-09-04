import React, { useEffect } from "react";
import { useAppDispatch } from "./store/store";
import Filters from "./components/Filters";
import UsersTable from "./components/UsersTable";
import { fetchUsers } from "./store/usersSlice";
import "./App.css";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>User Management</h1>
      <Filters />
      <UsersTable />
    </div>
  );
};

export default App;
