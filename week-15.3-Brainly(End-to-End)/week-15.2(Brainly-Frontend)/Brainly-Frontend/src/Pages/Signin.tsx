import axios from 'axios'
import { Input } from "../component/Input";
import { Button } from "../component/Button";
import { useRef } from "react";
import { Backend_URL } from '../config'
import { useNavigate } from 'react-router-dom';



export function Signin(){ 

const emailRef = useRef<HTMLInputElement | null>(null);
const passwordRef = useRef<HTMLInputElement | null>(null);
const navigate = useNavigate();

   async function handleSignin(){ 
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post(Backend_URL + "/api/v1/signin", { 
                email,
                password

        });

        const jwt = response.data.token;
        localStorage.setItem("token", jwt)

        alert("user signedIn");
        navigate("/dashboard")
    }

    return<div className="w-screen h-screen flex justify-center items-center bg-gray-400 "> 
        <div className="Card bg-white p-5 rounded-2xl "> 
            <Input ref={emailRef} placeholder="email" />
            <Input ref={passwordRef} placeholder="password" />
            <div className="flex justify-center pt-4"> 
                <Button onClick={handleSignin} fullWidth={true} variant="primary" size="md" text="SignIn"/>
            </div>
        </div>
    </div>
}