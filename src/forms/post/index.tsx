//import { useState } from 'react'
import styles from './login.module.scss'
//import { useSelector } from 'react-redux'
//import type { RootState } from '../../store/store'
import { useForm, SubmitHandler} from 'react-hook-form'

function Loginpage() {
  //const theme = useSelector((state: RootState) => state.settings.theme);
  const { register, handleSubmit } = useForm<FormValues>()

  type FormValues = {
    firstName: string
    lastName: string
    email: string
    password: string
  }

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email) || '');
        if (userData) { // getItem can return actual value or null
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };
    return (
        <div className={styles.login_container}>
            <p className={styles.login_title}>Modulo di accesso</p>
            <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='nome' {...register("firstName", { required: true })} />
                <input type="text" placeholder='cognome' {...register("lastName", { required: true })} />
                <input type="email" placeholder='email' {...register("email", { required: true })} />
                <input type="password" placeholder='password' {...register("password")} />
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </div>
    );
}

export default Loginpage
