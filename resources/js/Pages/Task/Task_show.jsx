import React, { useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react'

const Task_edit = ({auth,task}) => {

    const { data, setData, put, errors } = useForm({
        title: task.title || "",
        description: task.description || "",
    });
    function handleUpdate(e){
        e.preventDefault();
        console.log("updated function")
        put(route("tasks.update", task.id));
    }
  return (
      <AuthenticatedLayout
          user={auth.user}
          header={
              <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                  Task Show
              </h2>
          }
      >
          <Head title="Task List" />
          <div>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                    <h5 className="m-0">{task.title}</h5>
                    </div>
                    <div className="card-body">
                    <p className="card-text">{task.description}</p>
                    <Link href={route("tasks.index")}  className="btn btn-primary">
                                                Go Back
                    </Link>
                    </div>
                </div>
            </div>

          </div>
      </AuthenticatedLayout>
  );
}

export default Task_edit