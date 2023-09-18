import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faSearch,
    faTh,
    faAngleLeft,
    faCopy,
} from "@fortawesome/free-solid-svg-icons";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
      setShowSubMenu(!showSubMenu);
    };

    return (
        <div className="hold-transition sidebar-mini layout-fixed">
            <div className="wrapper">
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-widget="pushmenu"
                                href="#"
                                role="button"
                            >
                                <FontAwesomeIcon icon={faBars} />
                            </a>
                        </li>

                        <li className="nav-item d-none d-sm-inline-block">
                            <Link
                                className="nav-link"
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Home
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="index3.html" className="brand-link">
                        <img
                            src="/assets/img/AdminLTELogo.png"
                            alt="AdminLTE Logo"
                            className="brand-image img-circle elevation-3"
                        />
                        <span className="brand-text font-weight-light">
                            AdminLTE 3
                        </span>
                    </a>

                    <div className="sidebar">
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img
                                    src="/assets/img/user2-160x160.jpg"
                                    className="img-circle elevation-2"
                                    alt="User Image"
                                />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">
                                    Alexander Pierce
                                </a>
                            </div>
                        </div>

                        <div className="form-inline">
                            <div
                                className="input-group"
                                data-widget="sidebar-search"
                            >
                                <input
                                    className="form-control form-control-sidebar"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <nav className="mt-2">
                            <ul
                                className="nav nav-pills nav-sidebar flex-column"
                                data-widget="treeview"
                                role="menu"
                                data-accordion="false"
                            >
                                <li className="nav-item">
                                    <a href="" className="nav-link">
                                        <FontAwesomeIcon
                                            icon={faTh}
                                            className="nav-icon"
                                        />
                                <Link href={route("dashboard")}>
                                <p>Dashboard</p>

                                </Link>
                                    </a>
                                </li>
                                <li className="nav-item">

                                    <a href="#" className="nav-link">
                                        <FontAwesomeIcon icon={faCopy} className="nav-icon" />
                                        <Link href={route("tasks.index")}>
                                            <p>Task</p>
                                        </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <FontAwesomeIcon icon={faCopy} className="nav-icon" />
                                        <Link href={route("category.index")}>
                                            <p>Category</p>
                                        </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <FontAwesomeIcon icon={faCopy} className="nav-icon" />
                                        <Link href={route("tasks.index")}>
                                            <p>Supplier</p>
                                        </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <FontAwesomeIcon icon={faCopy} className="nav-icon" />
                                        <Link href={route("tasks.index")}>
                                            <p>Product</p>
                                        </Link>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                {header && (
                                <h1 className="m-0">{header}</h1>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">{children}</div>
                    </section>
                </div>

                <footer className="main-footer">
                    <strong>
                        Copyright &copy; 2023{" "}
                        <a href="">Laravel React Inertia</a>.
                    </strong>
                    &nbsp; All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 1.0.0
                    </div>
                </footer>
            </div>
        </div>
    );
}
