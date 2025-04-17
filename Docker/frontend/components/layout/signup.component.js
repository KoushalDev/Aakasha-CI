import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from "./index"
import HeaderComponent from '../header.component'
import axios from 'axios'
import Link from "next/link"

const SignupComponent = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  let apiEndpoint = `${BASE_URL}/users`;

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNbr, setMobileNbr] = useState('')
  const [pinNbr, setPinNbr] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [middleNameError, setMiddleNameErr] = useState('')


  const [usernameError, setUsernameErr] = useState('')
  const [userEmailErr, setUserEmailErr] = useState('')
  const [userPasswordErr, setUserpasswordErr] = useState('')
  const [mobileNbrErr, setMobileNbrErr] = useState('')
  const [pinNbrErr, setPinNbrErr] = useState('')
  const [lastNameErr, setLastNameErr] = useState('')

  const [selectedRole, setSelectedRole] = useState({
    name: "Customer",
    value: '4',
  });

  // console.log("user-type-id", typeof(selectedRole.value))

  const [formFillErr,setFormFillErr] = useState(false)

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

    const router= useRouter()
    const onsubmitRegisterForm=  (e) =>{
        e.preventDefault()
        if (firstName== ''){
          setUsernameErr('First Name is Required')
          setFormFillErr(!formFillErr)

        }
        if (middleName == ''){
          setMiddleNameErr("Middle Name is Required")
        }

        if (userEmail  == ''){
          setUserEmailErr("Email is Required")
          setFormFillErr(!formFillErr)
          
        }
        if (userPassword == ''){
          setUserpasswordErr('Password is Required')
          setFormFillErr(!formFillErr)

        }
        if (lastName == ''){
          setLastNameErr("Last Name is Required")
        }
        if (mobileNbr == ''){
          setMobileNbrErr('Mobile Nbr is Required')

        }
        if (pinNbr == ''){
          setPinNbrErr('Pinode is required')
        }
        else{
          setUsernameErr('')
          setUserEmailErr('')
          setUserpasswordErr('')
          setFirstName('')
          setMiddleName('')
          setLastName('')
          setUserEmail('')
          setUserPassword('')
          setMobileNbr('')
          setPinNbr('')

        }
        if (firstName.length > 2 && userEmail.length >2 && userPassword.length > 2 ){
          setFormFillErr(false)
          const formData={
            firstName,
            middleName,
            lastName,
            userEmail,
            userPassword,
            mobileNbr,
            pinNbr
          }

          var today = new Date();
          const payload = {
            uid: Math.floor(Math.random() * 9000) + 1000,
            fname: firstName,
            mname: middleName,
            lname: lastName,
            mob: mobileNbr,
            uemail: userEmail,
            ucreated: today.toISOString().split('T')[0],
            ucby: "Admin",
            umodified: today.toISOString().split('T')[0],
            umby: "Admin",
            ustatus:"Success",
            pin:pinNbr,
            pass: userPassword,
          };
          console.log(payload)
          localStorage.setItem("userInfo", JSON.stringify(formData))
          axios.post(apiEndpoint, payload)
          .then((response) => {
            // setDisable(true);
            console.log(response.data, 'signup-res');
            alert(response.data.message)
            router.push('/loginPage')
            // toast.success(response.data.message);
            // router.push(
            //   "/authentication/twoFactorVerification"
            // );
          })
          .catch((error) => {
            // setDisable(false);
            console.log("error", error);
           
              // toast.error(
              //   error?.response?.data?.message || error.message
              // );
          });
        }

    }

    const onChangeFirstName= (e) =>{
      if (e.target.value.length > 2){
        setUsernameErr('')
      }
      setFirstName(e.target.value)

    }

    const onChangeMiddleName= (e) =>{
      if (e.target.value.length > 2){
        setMiddleNameErr('')
      }
      setMiddleName(e.target.value)

    }
    const onChangeLastName= (e) =>{
      if (e.target.value.length > 2){
        setLastNameErr('')
      }
      setLastName(e.target.value)

    }

    const onChangeMobileNbr= (e) =>{
      if (e.target.value.length > 2){
        setMobileNbrErr('')
      }
      setMobileNbr(e.target.value)
    }
    const onChangePinNbr= (e) =>{
      if (e.target.value.length > 2){
        setPinNbrErr('')
      }
      setPinNbr(e.target.value)

    }
    const onChangeUserEmail= (e)=>{
      if (e.target.value.length > 2){
        setUserEmailErr('')
      }
      setUserEmail(e.target.value)
    }

    const onChangeUserPassword= (e)=>{
      if (e.target.value.length > 2){
        setUserpasswordErr('')
      }
      setUserPassword(e.target.value)
    }
    useEffect(() =>{
      console.log("password.length", userPassword.length)
      // if (username.length > 2 && userEmail.length > 2 && userPassword.length > 2){
      //   setFormFillErr(false)
      // }

    },[firstName, userEmail, userPassword])
  return (
    <>
    <Layout>
      <HeaderComponent />
    <div className="login-container mt-2 pt-2">
      <div className="login-box mt-5">
        <h4 className="mb-4 fw-400">Create your account...</h4>
        <form  onSubmit={onsubmitRegisterForm}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className="form-control" id="firstname" name='firstname' value={firstName} onChange={onChangeFirstName}/>
          {usernameError && <p className='input-error' style={{color:'red'}}>{usernameError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="middlename">Middle Name</label>
            <input type="text" className="form-control" id="middlename" name='middlename' value={middleName} onChange={onChangeMiddleName}/>

            {middleNameError && <p className='input-error' style={{color:'red'}}>{middleNameError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="middlename">Last Name</label>
            <input type="text" className="form-control" id="lastname" name="lastname" value={lastName} onChange={onChangeLastName}/>
          {lastNameErr && <p className='input-error' style={{color:'red'}}>{lastNameErr}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="mobilenumber">Mobile Number</label>
            <input type="number" className="form-control" id="mobilenumber"  name='mobilenumber'  value={mobileNbr} onChange={onChangeMobileNbr} />
          {mobileNbrErr && <p style={{color:'red'}}>{mobileNbrErr}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode</label>
            <input type="number" className="form-control" id="pincode"  name='pincode'  value={pinNbr} onChange={onChangePinNbr} />
          {pinNbrErr && <p style={{color:'red'}}>{pinNbrErr}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" id="email" name='email' value={userEmail} onChange={onChangeUserEmail} />
            {userEmailErr&& <p style={{color:'red'}}>{userEmailErr}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password"  name='password'  value={userPassword} onChange={onChangeUserPassword} />
          {userPasswordErr && <p style={{color:'red'}}>{userPasswordErr}</p>}
          </div>
          {/* {formFillErr && <p style={{color:'red'}}>Please Fill All Feilds</p>} */}
          <button type="submit" className="btn btn-primary btn-lg btn-block mb-3 mt-3">Register</button>
          <p className="">Already You have account? <Link href="/loginPage">Login</Link></p>
        </form>
      </div>
    </div>
    </Layout>
    </>
  )
}

export default SignupComponent