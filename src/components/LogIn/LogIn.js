import useFirebase from "../../Hook/useFirebase";
import "./Login.css"
const LogIn = () => {
    const {
        handleGoogleLogin,
        user,
    } = useFirebase();





    return (
        <div className="form-container text-center p-5">
            <h1 className="p-5 fw-bolder">Log In your Account</h1>

            <div className="pb-5">
                <h3 className="fw-bold">Log in with Google</h3>
                <button onClick={handleGoogleLogin} className="btn btn-outline-dark m-2 ">LoginGoogle</button>
            </div>
        </div>
    )
};

export default LogIn