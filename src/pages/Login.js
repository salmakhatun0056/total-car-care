import React from 'react';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, Rerror] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate()
    let signInError;
    if (gUser || user) {
        navigate('/')
    }
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        reset()
        console.log(data)
    };

    const resetPassword = async (data) => {
        console.log(data)
        await sendPasswordResetEmail(data.email);
        if (data.email) {
            await sendPasswordResetEmail(data.email);
            alert('Sent email');
        }
        else {
            alert('please enter your email address');
        }
    }
    return (
        <div class="bg--base-100 w-full h-screen justify-center items-center flex">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h2 className='text-3xl text-center font-bold text-primary'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input    {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })} type="text" placeholder="Enter Your Email" class="input input-bordered" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input   {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} type="password" placeholder="Enter Your Password" class="input input-bordered" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.password.message}</span>}
                                {errors.password?.type === 'minLenth' && <span className="label-text-alt text-red-500 ">{errors.password.message}</span>}
                            </label>
                            <small>Forget Password? <button className='px-2 text-sm btn-link text-primary' onClick={resetPassword}>Reset Password</button> </small>

                            <small className='mt-2 '> New to car parts shop?  <a href="/register" class=" px-2 text-primary">Please Register</a></small>

                        </div>
                        {signInError}
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                        <div class="divider">OR</div>
                    </form>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-primary w-full">Continue with google</button>
                </div>
            </div>
        </div>



    );
};

export default Login;