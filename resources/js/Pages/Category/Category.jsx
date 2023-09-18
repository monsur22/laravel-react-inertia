import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Inertia from '@inertiajs/inertia';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
export default function Category({ auth, categories, category_edit }) {

    const { data, setData, errors, get, post, put, patch, delete: destroy } = useForm({
        title: ""
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editData, setEditData] = useState({
        isEditing: false,
        editItemId: null, // Store the ID of the category being edited

    });


    function handleSubmit(e) {
        e.preventDefault();
        console.log("click submit")
        post(route('category.store',data),
        {
            onSuccess: () => {
                console.log('success')
                setData({ title: ""});
                handleClose()
            }
        }
        )
    }
    // const handleEdit = (id) => {
    //     setEditData({
    //         isEditing: true,
    //         editItemId: id,
    //     });
    //     handleShow(); // Show the modal
    // };

    function handleDelete(id) {
        destroy(route('category.destroy',id),
        {
            onSuccess: () => {
                console.log('delete successful')
            }
        }
        )
    }

    console.log(categories)
    ///
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Category
                </h2>
            }
        >
            <Head title="Category List" />

            <div>
                {/* form start */}
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="card-primary">
                        {editData.isEditing ? 'Edit Category' : 'Add Category'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Category Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Category Title"
                                    // value={editData.isEditing ? category_edit.title : data.title}
                                    // onChange={(e) =>
                                    //     setData("title", e.target.value)
                                    // }
                                    value={editData.isEditing ? editCategory.title : data.title}
                                    onChange={(e) => {
                                        if (editData.isEditing) {
                                            setEditCategory({ ...editCategory, title: e.target.value });
                                        } else {
                                            setData("title", e.target.value);
                                        }
                                    }}
                                    autoFocus
                                />

                            </Form.Group>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={handleClose}
                                >
                                    Close
                                </Button>
                                <Button variant="primary" type="submit">
                                {editData.isEditing ? 'Update' : 'Create'}
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>

                {/* Table start */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Category Table</h3>
                                <button
                                    type="submit"
                                    className="btn btn-primary  float-right"
                                    onClick={handleShow}
                                >
                                    Add Category
                                </button>
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
                                        {categories &&
                                            categories.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.title}</td>
                                                    <td>
                                                        <div className="btn-group btn-group-sm">
                                                            <Link
                                                                href={route(
                                                                    "category.show",
                                                                    item.id
                                                                )}
                                                                className="btn btn-success"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faEye}
                                                                />
                                                            </Link>
{/*
                                                            <a className="btn btn-info">
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faEdit
                                                                    }
                                                                    onClick={() => handleEdit(item.id)}
                                                                />
                                                            </a> */}
                                            <Link href={route("category.edit",item.id)} className="btn btn-info">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Link>
                                                            <a className="btn btn-danger">
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faTrash
                                                                    }
                                                                    onClick={() =>
                                                                        handleDelete(
                                                                            item.id
                                                                        )
                                                                    }
                                                                />
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
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