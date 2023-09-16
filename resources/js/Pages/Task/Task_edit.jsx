import React, { useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react'

const Task_edit = ({auth,task}) => {
    // const [values, setValues] = useState({
    //     title: task.title,
    //     description: task.description
    // });

    const { data, setData, put, errors } = useForm({
        title: task.title || "",
        description: task.description || "",
    });
    function handleUpdate(e){
        e.preventDefault();
        console.log("updated function")
        // router.patch(`/tasks/${task.id}`, values)
        put(route("tasks.update", task.id));

    }
  return (
      <AuthenticatedLayout
          user={auth.user}
          header={
              <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                  Task Edit
              </h2>
          }
      >
          <Head title="Task List" />
          <div>
              <div className="col-md-6">
                  <div className="card card-primary">
                      <div className="card-header">
                          <h3 className="card-title">Edit Task</h3>
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
                              <div className="form-group">
                                  <label>Description</label>
                                  <textarea
                                      className="form-control"
                                      rows="3"
                                      placeholder="Enter ..."
                                      name="description"
                                      value={data.description}
                                      onChange={(e) =>
                                        setData("description", e.target.value)
                                      }
                                  ></textarea>
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

export default Task_edit