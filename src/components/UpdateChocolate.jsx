import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';
import { GiChocolateBar } from 'react-icons/gi';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateChocolate = () => {
    const chocolateData = useLoaderData();
  const { _id, photo, name, country, category } = chocolateData;

    const handleUpdateChocolate = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const updateChocolate = {photo,name,country,category};
        fetch(`http://localhost:5000/chocolates/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(updateChocolate)

        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Update Success',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }
    return (
        <div>
      <div className="mb-5 flex flex-col gap-5 px-5 md:flex-row justify-between md:items-center">
        <Link to="/">
          <button className="hover:text-white flex items-center btn bg-transparent gap-3 border-0 text-gray-800">
            <FiArrowLeft></FiArrowLeft> <span>All Chocolates</span>
          </button>
        </Link>
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

      <div className="bg-slate-200 mt-5 px-5 py-11 rounded-lg md:px-28">
        <div className="text-center mb-8">
          <h3 className="text-3xl mb-2 font-semibold text-gray-800">
            Update Chocolates
          </h3>
          <p className="text-gray-500">
            Use the below form to Update product
          </p>
        </div>
        <form onSubmit={handleUpdateChocolate}>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text text-lg font-semibold">Photo URL</span>
            </label>
            <input
              name="photo"
              defaultValue={photo}
              type="text"
              placeholder="photo url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text text-lg font-semibold">Name</span>
            </label>
            <input
              name="name"
              defaultValue={name}
              type="text"
              placeholder="Hot Pink Chocolate"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text text-lg font-semibold">Country</span>
            </label>
            <input
              name="country"
              defaultValue={country}
              type="text"
              placeholder="Enter Country Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-10">
            <label className="label">
              <span className="label-text text-lg font-semibold">Category</span>
            </label>
            <select
              name="category"
              defaultValue={category}
              className="select select-bordered w-full"
            >
              <option disabled value={"select"}>Chose one</option>
              <option value={"premium"}>Premium</option>
              <option value={"gold"}>Gold</option>
              <option value={"silver"}>Silver</option>
            </select>
          </div>
          <input
            type="submit"
            className="btn btn-block hover:bg-yellow-700 bg-yellow-800"
            value="Update"
          />
        </form>
      </div>
    </div>
    );
};

export default UpdateChocolate;