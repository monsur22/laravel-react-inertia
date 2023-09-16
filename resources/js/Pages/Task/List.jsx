import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Inertia from '@inertiajs/inertia';

export default function List({ auth, tasks }) {

    const { data, setData, errors, get, post, put, patch, delete: destroy } = useForm({
        title: "",
        description: "",
    });


    function handleSubmit(e) {
        e.preventDefault();

        post(route('tasks.store',data),
        {
            onSuccess: () => {
                console.log('success')
                setData({ title: "", description: "" });
            }
        }
        )
      }

    function handleDelete(id) {
        destroy(route('tasks.destroy',id),
        {
            onSuccess: () => {
                console.log('delete successful')
            }
        }
        )
    }

    console.log(tasks)
    return (

        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Task
                </h2>
            }
        >
            <Head title="Task List" />

            <div>
                {/* form start */}
                <div className="col-md-6">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Add Task</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
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
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Table start */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Task Table</h3>
                            </div>

                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{ width: 10 }}>#</th>
                                            <th>Tittle</th>
                                            <th style={{ width: 20 }}>
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {

                                tasks && tasks.map((item)=>(
                                    <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <div className="btn-group btn-group-sm">

                                            <Link href={route("tasks.show",item.id)} className="btn btn-success">
                                                <FontAwesomeIcon icon={faEye} />
                                            </Link>

                                            <Link href={route("tasks.edit",item.id)} className="btn btn-info">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Link>

                                            <a  className="btn btn-danger">
                                                <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(item.id)}/>
                                            </a>

                                        </div>
                                    </td>
                                </tr>
                                ))
                            }

                                    </tbody>
                                </table>
                            </div>
                            {/* pagination will be here */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}