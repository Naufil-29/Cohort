import axios from 'axios'
import { useRef } from "react"
import { Input } from "../component/Input";
import { Button } from "../component/Button";
import { Backend_URL } from '../config'
import { useNavigate } from 'react-router-dom';

export function Signup(){ 

const emailRef = useRef<HTMLInputElement | null>(null);
const passwordRef = useRef<HTMLInputElement | null>(null);
const navigate = useNavigate();

   async function Signup(){ 
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(Backend_URL + "/api/v1/signup", { 
                email,
                password

        });

        alert("user created successfully");
        navigate("/signin")
    }

    return<div className="w-screen h-screen flex justify-center items-center bg-gray-400 "> 
        <div className="Card bg-white p-5 rounded-2xl "> 
            <Input ref={emailRef} placeholder="email" />
            <Input ref={passwordRef} placeholder="password" />
            <div className="flex justify-center pt-4"> 
                <Button onClick={Signup} fullWidth={true} variant="primary" size="md" text="Signup"/>
            </div>
        </div>
    </div>
}