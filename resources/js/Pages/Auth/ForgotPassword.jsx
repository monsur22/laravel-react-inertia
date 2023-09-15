import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

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
                            You forgot your password? Here you can easily
                            retrieve a new password.
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
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
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
                            <div className="row">
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        disabled={processing}
                                    >
                                        Request new password
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
