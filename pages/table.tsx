import React from "react";
import { usersData } from "../models/usersData";
import { NextPage } from "next";

const TablePage: NextPage = () => {
  return (
    <div>
      <h1>Listado de usuarios</h1>
      <div style={{ width: "900px", display: "grid", margin: "2em auto" }}>
        <table className="table-auto min-w-full">
          <thead className="bg-[#F0F0F0] text-[#818181] font-normal">
            <tr className="text-sm">
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th className="text-left">Nombre Completo</th>
              <th className="text-left">Comercio</th>
              <th className="text-left">Rol</th>
              <th className="text-left">Tipo</th>
              <th className="text-left">Email</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {usersData.map((user, i) => (
              <tr key={i} className="bg-white hover:bg-gray-100 ">
                <td className="p-4 py-7 w-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-table-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="text-left">{user.fullName}</td>
                <td className="text-left">{user.commerce}</td>
                <td className="text-left">{user.role}</td>
                <td className="text-left text-[#1672EC]">{user.type}</td>
                <td className="text-left">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePage;