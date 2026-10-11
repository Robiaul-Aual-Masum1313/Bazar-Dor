"use client";

import { signIn } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";

interface IsInfromData {
  email: string;
  password: string;
}
export  const handleGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
    });

  };
export const handleGithubSignIn = async () => {
  await signIn.social({
    provider: 'github'
  })
}

export default function SignInPage() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(
      formData.entries(),
    ) as unknown as IsInfromData;
    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });
    if(resData?.user){
      toast.success('Loged in Successfully')
    }else{
      toast.error('Your Email Or Password was Incorrect')
    }
    
  };

  return (
    <div className="bg-[#F0F5F0]  pt-7 pb-10">
      <div className="container mx-auto text-center">
        <h2 className="text-[32px] font-bold text-[#1D271F]">সাইন ইন</h2>
        <p className="font-medium text-[14px] text-[#939B95]">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
        <div className="  flex flex-col justify-center items-center pt-7">
          <div className=" w-95 md:w-105 bg-[#FAFCFA] px-5 py-7 border border-[#E1E8E1] rounded-2xl">
            <Form
              className="flex  flex-col gap-4  text-left"
              onSubmit={onSubmit}
            >
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }

                  return null;
                }}
              >
                <Label>ইমেইল</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>

              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }

                  return null;
                }}
              >
                <Label>পাসওয়ার্ড</Label>
                <Input placeholder="Enter your password" />
                <Description>
                  Must be at least 8 characters with 1 uppercase and 1 number
                </Description>
                <FieldError />
              </TextField>

              <div>
                <Button className="w-full bg-[#05883E]" type="submit">
                  সাইন ইন
                </Button>
                {/* <Button type="reset" variant="secondary">
                Reset
                </Button> */}
              </div>
            </Form>
            <div>
              <div className="w-full">
                <div className="divider">অথবা</div>
              </div>
              <div className="space-x-2">
                <button
                  onClick={handleGoogleSignIn}
                  className="bg-[#FAFCFA] border border-[#eee] p-2.5 rounded-lg text-[14px] font-bold mb-2"
                >
                  Google দিয়ে চালিয়ে যান
                </button>
                <button onClick={handleGithubSignIn} className="bg-[#FAFCFA] border border-[#eee] p-2.5 rounded-lg text-[14px] font-bold">
                  GitHub দিয়ে চালিয়ে যান
                </button>
              </div>
              <div className="pt-5">
                <p>
                  অ্যাকাউন্ট নেই?{" "}
                  <Link className="text-[#05893E]" href={"/sign-up"}>
                    {" "}
                    সাইন আপ করুন{" "}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <Link href={"/"}>← হোম পেজে ফিরে যান</Link>
        </div>
      </div>
    </div>
  );
}
