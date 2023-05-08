import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Swal from "sweetalert2";

const AddChocolate = () => {
  const handleAddChocolate = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    console.log(name,category,country);
    const newChocolate = {photo,name,country,category};
    fetch("http://localhost:5000/chocolates",{
        method:"POST",
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(newChocolate)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire({
                title: 'Success',
                text: 'Data Inserted Successfully!',
                icon: 'success',
                confirmButtonText: 'ok'
              })
            form.reset()
        }
    })
  };

  return (
    <div>
      <div className="mb-5">
        <Link to="/">
          <button className="hover:text-white flex items-center btn bg-transparent gap-3 border-0 text-gray-800">
            <FiArrowLeft></FiArrowLeft> <span>All Chocolates</span>
          </button>
        </Link>
      </div>
      <hr />

      <div className="bg-slate-200 mt-5 py-11 px-5 rounded-lg md:px-28">
        <div className="text-center mb-8">
          <h3 className="text-3xl mb-2 font-semibold text-gray-800">
            New Chocolates
          </h3>
          <p className="text-gray-500">
            Use the below form to create a new product
          </p>
        </div>
        <form onSubmit={handleAddChocolate}>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text text-lg font-semibold">Photo URL</span>
            </label>
            <input
              name="photo"
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
              defaultValue={"select"}
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
            value="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default AddChocolate;
