import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
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

        post(route("password.store"));
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <Link href="/" className="h1">
                            <b>Admin</b>LTE
                        </Link>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">
                            You forgot your password? Here you can easily
                            retrieve a new password.
                        </p>
                        <form onSubmit={submit}>
                            <div>
                                <div className="input-group mb-3">
                                    <input
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={data.email}
                                        autoComplete="username"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        disabled
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
                                        autoComplete="new-password"
                                        isFocused={true}
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

                                <div className="input-group mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
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
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        disabled={processing}
                                    >
                                        Change Password
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
