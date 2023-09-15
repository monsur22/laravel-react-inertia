import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <Link href="/" className="h1">
                            <b>Admin</b>LTE
                        </Link>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">
                            Sign in to start your session
                        </p>
                        <form onSubmit={submit}>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    // isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="icon-class"
                                        />
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
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
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

                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input
                                            type="checkbox"
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    "remember",
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <label htmlFor="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        disabled={processing}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="social-auth-links text-center mt-2 mb-3">
                            <a href="#" className="btn btn-block btn-primary">
                                <FontAwesomeIcon icon={faFacebook} /> Sign in
                                using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <FontAwesomeIcon icon={faGooglePlus} /> Sign in
                                using Google+
                            </a>
                        </div>

                        <p className="mb-1">
                            {canResetPassword && (
                                <Link href={route("password.request")}>
                                    Forgot your password?
                                </Link>
                            )}
                        </p>
                        <p className="mb-0">
                            <Link href={route("register")}>
                                Register a new membership
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
