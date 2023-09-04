import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";

const ManageMenu = () => {
  // const { usersData } = useUsers();
  const user = useSelector((state) => state.user.user);
  // console.log(usersData);
  const { axiosSecure } = useAxiosSecure();
  const [menuItems, setMenuItems] = useState([]);
  console.log(menuItems);

  useEffect(() => {
    axiosSecure
      .get(`restaurant-data?email=${user?.email}`)
      // .then((res) => res.json())
      .then((data) => {
        setMenuItems(data.data);
        console.log(data);
      });
  }, [user?.email, axiosSecure]);

  // State to track whether each menu's dropdown is open or closed
  const [isOpen, setIsOpen] = useState(Array(menuItems.length).fill(false));

  const toggleDropdown = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <>
      <div className="sm:px-4 w-full">
        <div className="py-4 md:py-5">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-black/80">
            Menu Items
          </p>
        </div>
        <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
              <a
                className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
                href=" javascript:void(0)">
                <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                  <p>All</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)">
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                  <p>Done</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)">
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                  <p>Pending</p>
                </div>
              </a>
            </div>
          </div>

          <table className="w-full overflow-x-auto mt-7 whitespace-nowrap">
            <thead className="bg-gray">
              <tr className="text-left text-sm text-black/80">
                <th className="py-3 px-4">Product</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Added Date</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Quantity</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* always try to use optional chaining or optional rendering*/}
              {menuItems &&
                menuItems.map((items, i) => (
                  <>
                    <tr key={i} className="">
                      <td className="py-4 whitespace-no-wrap border-b border-gray">
                        <div className="flex items-center ">
                          <div>
                            <div className="text-sm leading-5 text-indigo-500">
                              <img
                                className="w-20 h-14 object-cover rounded-md"
                                src={items.menuItemImage}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-gray">
                        <div className="text-sm leading-5 text-black/80">
                          {items.menuCategory}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b text-black/80 border-gray text-sm leading-5">
                        need to add
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b text-black/80 border-gray text-sm leading-5">
                        ${items.menuItemPrice}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b text-black/80 border-gray text-sm leading-5">
                        23
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-gray text-black/80 text-sm leading-5">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-purple-200 opacity-50 rounded-full"></span>
                          <span className="relative text-xs">active</span>
                        </span>
                      </td>
                      <td className="px-7 py-4 relative whitespace-no-wrap cursor-pointer border-b border-gray text-sm leading-5">
                        <Menu
                          as={"div"}
                          className="relative inline-block text-left">
                          <Menu.Button
                            onClick={() => toggleDropdown(i)}
                            className="inline-flex items-center">
                            <BsThreeDots
                              className="text-slate-400"
                              size={20}></BsThreeDots>
                          </Menu.Button>

                          {/* Dropdown menu */}
                          {isOpen[i] && (
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95">
                              <Menu.Items className="absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        className={`${
                                          active
                                            ? "bg-violet-400 text-white"
                                            : "text-gray-900"
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                        {active ? (
                                          <span className="flex items-center gap-1">
                                            <IoMdCreate className="text-white text-lg"></IoMdCreate>
                                            Edit
                                          </span>
                                        ) : (
                                          <span className="flex items-center gap-1">
                                            <IoMdCreate className="text-red-400 text-lg"></IoMdCreate>
                                            Edit
                                          </span>
                                        )}
                                      </button>
                                    )}
                                  </Menu.Item>
                                </div>
                                <div className="px-1 py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        className={`${
                                          active
                                            ? "bg-violet-400 text-white"
                                            : "text-gray-900"
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                        {active ? (
                                          <span className="flex items-center gap-1">
                                            <IoMdTrash className="text-white text-lg"></IoMdTrash>
                                            Delete
                                          </span>
                                        ) : (
                                          <span className="flex items-center gap-1">
                                            <IoMdTrash className="text-red-400 text-lg"></IoMdTrash>
                                            Delete
                                          </span>
                                        )}
                                      </button>
                                    )}
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          )}
                        </Menu>
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageMenu;
