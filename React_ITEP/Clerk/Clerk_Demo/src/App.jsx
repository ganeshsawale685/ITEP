import React from 'react'
import { PricingTable, SignIn, SignInButton, SignOutButton, SignUp, useUser } from "@clerk/clerk-react";
const App = () => {
  const {user} = useUser()

  return (
    <>
    <h1>App</h1>
    <SignInButton  afterSignInUrl="/"/>
    <SignOutButton afterSignInUrl ='/' />
    {  console.log(user)}

    <PricingTable/>
    </>
    
  )
}

export default App