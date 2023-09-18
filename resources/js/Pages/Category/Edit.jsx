import React, { useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react'

const Edit = ({auth,category_edit}) => {

    const { data, setData, put, errors } = useForm({
        title: category_edit.title || ""
    });
    function handleUpdate(e){
        e.preventDefault();
        console.log("updated function")
        // router.patch(`/tasks/${task.id}`, values)
        put(route("category.update", category_edit.id));

    }
  return (
      <AuthenticatedLayout
          user={auth.user}
          header={
              <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                  Category Edit
              </h2>
          }
      >
          <Head title="Task List" />
          <div>
              <div className="col-md-6">
                  <div className="card card-primary">
                      <div className="card-header">
                          <h3 className="card-title">Edit Category</h3>
                      </div>
                      <form onSubmit={handleUpdate}>
                          <div className="card-body">
                              <div className="form-group">
                                  <label>Title</label>
                                  <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Title"
                                      name="title"
                                      value={data.title}
                                      onChange={(e) =>
                                        setData("title", e.target.value)
                                      }
                                  />
                              </div>
                          </div>
                          <div className="card-footer">
                              <button
                                  type="submit"
                                  className="btn btn-primary  float-right"
                              >
                                  Update
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </AuthenticatedLayout>
  );
}

export default Edit