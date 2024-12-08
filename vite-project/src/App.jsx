import { useState } from "react";
import Button from "./button";
import Chai from "./chai";



function app(){
  const username='Sushant Niraula'
  return (
  <div>
    <h1>Hello World {username}</h1>
    <Button/>
    <Chai/>
  </div>
  )
}
export default app;