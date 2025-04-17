
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Card, CardBody, Col, Container, Row, CardHeader, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'
import Layout from './layout'
import HeaderComponent from './header.component'
import axios from 'axios'

const LoginComponent = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const router = useRouter()
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameErr] = useState('')
  const [userEmailErr, setUserEmailErr] = useState('')
  const [userPasswordErr, setUserpasswordErr] = useState('')
  const [formFillErr,setFormFillErr] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedRole, setSelectedRole] = useState({ name: 'Customer', value: 4 }); // Default role is Customer

  const registerInfo = JSON.parse(localStorage.getItem('userInfo'))
    const onsubmitRegisterForm= (e) =>{
        e.preventDefault()
        // if (username == ''){
        //   setUsernameErr('Username is Required')
        //   // setFormFillErr(!formFillErr)

        // }

        if (userEmail  == ''){
          setUserEmailErr("Email is Required")
          // setFormFillErr(!formFillErr)
          
        }
        if (userPassword == ''){
          setUserpasswordErr('Password is Required')
          // setFormFillErr(!formFillErr)

        }

        else{
          setUsernameErr('')
          setUserEmailErr('')
          setUserpasswordErr('')
          setUserEmail('')
          setUserPassword('')
          setUsername('')
          // setFormFillErr('')

        }
        
        if (userEmail.length >2 && userPassword.length > 2 ){

          axios.post(
            `${BASE_URL}/userlogin`, {
            email: userEmail,
            passcode: userPassword,
            // user_type_category_id:selectedRole.value
        })
        .then((response) => {
          if (response.data.success) {
              console.log("Login successful");
              router.push('/dashboardPage');
          } else {
              console.log("Login failed: " + response.data.message);
              alert("Login failed: " + response.data.message);
          }
      })

      .catch((error) => {
        console.log(error?.message);
        })
      }
    }

    const onChangeUsername= (e) =>{
      if (e.target.value.length > 2){
        setUsernameErr('')
      }
      setUsername(e.target.value)

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
      // console.log("password.length", userPassword.length)
      if (username.length > 2 && userEmail.length > 2 && userPassword.length > 2){
        setFormFillErr(false)
      }

    },[username, userEmail, userPassword])

  
  return (
    <>
     <Layout>
      <HeaderComponent />
      <div className="login-container mt-2 pt-2">
      <div className="login-box mt-5">
        <h4 className="mb-4 fw-400 mt-5">Login</h4>
        <form onSubmit={onsubmitRegisterForm}>
          {/* <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" value={username} onChange={onChangeUsername} />
            {usernameError && <p style={{color:'red'}}>{usernameError}</p>}
         
          </div> */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" value={userEmail} onChange={onChangeUserEmail} />
            {userEmailErr&& <p style={{color:'red'}}>{userEmailErr}</p>}
          
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password"  value={userPassword} onChange={onChangeUserPassword}/>
          {userPasswordErr && <p style={{color:'red'}}>{userPasswordErr}</p>}

          </div>
          <div className="d-flex mt-5">
          <ButtonDropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)} className="ms-3 custom-dropdown">
          <DropdownToggle caret className="custom-dropdown-toggle bg-primary">
             {selectedRole?.name}
           </DropdownToggle>
          <DropdownMenu className="custom-dropdown-menu">
            <DropdownItem onClick={() => setSelectedRole({ name: 'Customer', value: 4 })}>Customer</DropdownItem>
            <DropdownItem onClick={() => setSelectedRole({ name: 'Photographer', value: 3 })}>Photographer</DropdownItem>
            <DropdownItem onClick={() => setSelectedRole({ name: 'Admin', value: 2 })}>Admin</DropdownItem>
            <DropdownItem onClick={() => setSelectedRole({ name: 'Super Admin', value: 1 })}>Super Admin</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
            <Link href='' className="font-rubik ml-3">Forgot password ?</Link>
           </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block mb-3 mt-3">Login</button>
          <p className="">Don&apos;t have account? <Link href="/signupPage">Register</Link></p>
        </form>
      </div>
    </div>
    </Layout>
    </>
  )
}

export default LoginComponent