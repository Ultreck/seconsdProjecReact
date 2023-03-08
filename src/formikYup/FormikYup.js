// import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react'

const FormikYup = () => {
      const validationSchema = Yup.object({
            firstname: Yup.string().required(),
            lastname: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(8).max(32).required(),
      })
      const initialValues = {
            firstname:"",
            lastname:"",
            email:"",
            password:"",
      };


      const formik = useFormik({
            initialValues,
            validationSchema,
            onSubmit: (value) =>{
                  console.log(value);
                  // axios.post()
            }
      })
  return (
    <div className='mt-60'>
            <h3 className="text">Sign Up</h3>
            <input name='firstname' placeholder='First Name' onChange={formik.handleChange} value={formik.firstname} type="text" className="text border" />
            <input name='lastname' placeholder='Last Name' onChange={formik.handleChange} value={formik.lastname} type="text" className="text border" />
            <input name='password' placeholder='Email' onChange={formik.handleChange} value={formik.email} type="email" className="text border" />
            <input name='email' placeholder='Password' onChange={formik.handleChange} value={formik.password} type="password" className="text border" />
            {formik.errors.password}
           <button onClick={formik.handleSubmit} className="text">Submit</button>
    </div>
  )
}

export default FormikYup
