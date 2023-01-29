import React from 'react';
import { TextField , MenuItem  , Button} from '@mui/material'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ConditionalForm = ({isRegister,formikValues , setValues}) => {
        //It is login page ' s form 
        //If isRegister is false but if it is true it'll be registerForm
    const formik = useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            password:"",
            email:"",
            isRegister:isRegister,
        },
        onSubmit:values =>{
            if(isRegister){///This is for register after submitting
                let count = 0
                    formikValues.map(registeredArr => {
                        if(registeredArr.email === values.email){
                            alert("You have account with this email");
                            count++;
                        }
                    })
                    if(count === 0 ){
                        setValues([...formikValues,values]);
                        formik.resetForm();
                    }
            }
            else{//This is for Login
                let count = 0;
                const getLocalData  = JSON.parse(localStorage.getItem("registerArr"));
                if(getLocalData !== null)
                getLocalData.map(item =>{
                    if(item.email === values.email && item.password === values.password){
                        setValues(item);
                        count++;
                    }
                })
                if(count === 0)
                alert("You don't have account with this email and password . Please try again ")
                else{
                    formik.resetForm();
                }
            }
            // formik.resetForm();
        },
        validationSchema:  Yup.object().shape({
            firstName:Yup.string().when('isRegister' , {
                is:true,
                then:Yup.string().required("Required")
            }),
            lastName:Yup.string().when('isRegister' , {
                is:true,
                then:Yup.string().required("Required")
            }),
            isRegister:Yup.boolean(),
            password:Yup.string().required("You must enter Password").min(6),
            email:Yup.string().required("Required"),
        })
    });


    return (
    <>
    <form onSubmit={formik.handleSubmit}>
       
        {isRegister ? (
             <div style={{display:'flex',gap:'25px',margin:'15px 0'}}>
             <TextField 
            {...formik.getFieldProps("firstName")}
            value={formik.values.firstName} id="FirstName" label="First name" variant="outlined"
            helperText={formik.errors && formik.touched.firstName ? formik.errors.firstName : null }
            />
             <TextField 
            {...formik.getFieldProps("lastName")}
            value={formik.values.lastName} id="LastName" label="Last name" variant="outlined" 
            helperText={formik.errors && formik.touched.lastName ? formik.errors.lastName : null }
            />
                 </div>
        ) : null}
     <div style={{display:'flex',gap:'25px',margin:'15px 0'}}>
            <TextField 
           {...formik.getFieldProps("email")} type="email"
           value={formik.values.email} id="Email" label="Email" variant="outlined"
           helperText={formik.errors && formik.touched.email ? formik.errors.email : null }
           />
            <TextField 
           {...formik.getFieldProps("password")} type='password'
           value={formik.values.password} id="password" label="Password" variant="outlined"
           helperText={formik.errors && formik.touched.password ? formik.errors.password : null }
           />
                </div>

        <Button aria-label='On Click' type='submit'  size='medium' variant="contained"  >Submit</Button>
    </form>
    </>
  )
}

export default ConditionalForm