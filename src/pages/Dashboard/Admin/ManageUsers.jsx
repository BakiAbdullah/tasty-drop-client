// import React from "react";
// import getAllCustomers from "../../../api/users";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUsers from "../../../Hooks/useUsers";

const ManageUsers = () => {
  // const { axiosSecure } = useAxiosSecure()
  // const { data: usersData = [] } = useQuery({
  //   queryKey: ['users'],
  //   queryFn: async () => {
  //     const data = await axiosSecure.get(`/users`)
  //     return data.data
  //   }
  // })
  const { usersData } = useUsers()
  // const { usersData } = useUsers()
  // const allCustomers = getAllCustomers();
  console.log(usersData);
  const data = [
    { name: "Jhon Wick", email: "wick@hotmail.com", role: "Customer" },
    { name: "Jhon Wick", email: "wick@hotmail.com", role: "Customer" },
    { name: "Jhon Wick", email: "wick@hotmail.com", role: "Customer" },
    { name: "Jhon Wick", email: "wick@hotmail.com", role: "Customer" },
    { name: "Jhon Wick", email: "wick@hotmail.com", role: "Customer" },
    { name: "Jhon Wick", email: "wick@hotmail.com", role: "Customer" },
    { name: "Jhon Wick", email: "wick@hotmail.com", role: "Customer" },
    { name: "Jhon Wick", email: "wick@hotmail.com", role: "Customer" },
    { name: "Jhon Wick", email: "wick@hotmail.com", role: "Customer" },
    { name: "Jhon Wick", email: "wick@hotmail.com", role: "Customer" },
    { name: "Jhon Wick", email: "wick@hotmail.com", role: "Customer" },
  ];
  return (
    <div className=" bg-white p-5 ">
      <h1 className="text-lg text-slate-500">Customer List </h1>
      <hr className="border border-slate-200 mt-3" />
      <table className=" mt-5 w-full">
        <thead>
          <tr className="bg-orange-500 text-white text-start">
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d, i) => (
            <tr key={i} className="text-center hover:bg-gray">
              <td className="py-4">{i + 1}</td>
              <td className="flex items-center gap-2 justify-center">
                <img src={""} alt="adf" /> {d.name}
              </td>
              <td>{d.email}</td>
              <td>{d.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>hi</p>
    </div>
  );
};
export default ManageUsers
