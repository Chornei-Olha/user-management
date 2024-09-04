import React from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setFilter } from "../store/usersSlice";

const Filters: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.users.filters);

  console.log("Filters:", filters);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={filters.name}
        onChange={handleInputChange}
        placeholder="Filter by name"
      />
      <input
        type="text"
        name="username"
        value={filters.username}
        onChange={handleInputChange}
        placeholder="Filter by username"
      />
      <input
        type="text"
        name="email"
        value={filters.email}
        onChange={handleInputChange}
        placeholder="Filter by email"
      />
      <input
        type="text"
        name="phone"
        value={filters.phone}
        onChange={handleInputChange}
        placeholder="Filter by phone"
      />
    </div>
  );
};

export default Filters;
