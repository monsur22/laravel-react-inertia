import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="register-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <Link href="/" className="h1">
                            <b>Admin</b>LTE
                        </Link>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">
                            Register a new membership
                        </p>
                        <form onSubmit={submit}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Full name"
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        {/* <span className="fas fa-user" /> */}
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            className="icon-class"
                                        />
                                    </div>
                                </div>
                            </div>
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="icon-class"
                                        />{" "}
                                    </div>
                                </div>
                            </div>
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    id="password"
                                    name="password"
                                    value={data.password}
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon
                                            icon={faLock}
                                            className="icon-class"
                                        />
                                    </div>
                                </div>
                            </div>
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />

                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Retype password"
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon
                                            icon={faLock}
                                            className="icon-class"
                                        />
                                    </div>
                                </div>
                            </div>
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />

                            <div className="row">
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="social-auth-links text-center">
                            <a href="#" className="btn btn-block btn-primary">
                                <FontAwesomeIcon icon={faFacebook} />
                                Sign up using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <FontAwesomeIcon icon={faGooglePlus} />
                                Sign up using Google+
                            </a>
                        </div>

                        <Link href={route("login")}>Already registered?</Link>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
