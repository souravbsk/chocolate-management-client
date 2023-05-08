import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GiChocolateBar } from "react-icons/gi";
import { Link, useLoaderData } from "react-router-dom";
import ChocolateData from "./ChocolateData";
import Swal from "sweetalert2";
const Home = () => {
  const chocolatesData = useLoaderData();
  const [chocolates,setChocolates] = useState(chocolatesData)

  const handleRemoveChocolate = (_id) => {
    Swal.fire({
      text: "Do you really want to delete this record?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolates/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                const remaining = chocolates.filter(choco => choco._id !== _id)
                setChocolates(remaining)
              Swal.fire("Deleted!", "Your Chocolate has been deleted.", "success");
        
            }
          });
      }
    });
  };
  return (
    <div className="px-5">
      <div className="mb-5">
        <Link to="/addChocolate">
          <button className="hover:text-white flex items-center btn bg-transparent gap-3 text-gray-800">
            <FaPlus></FaPlus>{" "}
            <span className="flex items-center gap-2">
              New Chocolate{" "}
              <GiChocolateBar className="text-xl"></GiChocolateBar>
            </span>
          </button>
        </Link>
      </div>
      <hr />
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Country/Factory</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {chocolates.map((chocolate) => (
                <ChocolateData
                  handleRemoveChocolate={handleRemoveChocolate}
                  chocolate={chocolate}
                  key={chocolate._id}
                ></ChocolateData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
