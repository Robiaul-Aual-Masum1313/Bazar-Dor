"use client";

import { updateUser, useSession } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

interface IupdateFromData {
  name: string
}

export default function ProfilePage() {
  const {data: session} = useSession()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as IupdateFromData;
    await updateUser({
      name: data.name
    })

    // // Convert FormData to plain object
    // formData.forEach((value, key) => {
    //   data[key] = value.toString();
    // });

    // alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };
  return (
    <div className="bg-[#F0F5F0]  pt-7 pb-10 h-[70vh]">
      <div className="w-3xl mx-auto">
        <h2 className="text-[32px] font-bold">আমার প্রোফাইল</h2>
        <p className="text-[14px] font-medium">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
        <div className="space-y-8">
          <div className="bg-[#FAFCFA] px-5 py-7 border border-[#E1E8E1] rounded-2xl">
            <div>
              <div></div>
              <div>
                <h2>{session?.user.name}</h2>
                <p>{session?.user.email}</p>
              </div>
            </div>
            <div>
              <Link href={""}>↩ সাইন আউট</Link>
            </div>
          </div>
          <div className="bg-[#FAFCFA] px-5 py-7 border border-[#E1E8E1] rounded-2xl">
            <h3 className="text-[20px] font-bold pb-6">তথ্য</h3>
            <div>
               <Form
              className="flex  flex-col gap-4  text-left"
              onSubmit={onSubmit}
            >
              <TextField
                isRequired
                name="name"
                validate={(value) => {
                  if (value.length < 3) {
                    return "Name must be at least 3 characters";
                  }
                  return null;
                }}
              >
                <Label>নাম</Label>
                <Input placeholder="যেমন: রহিম উদ্দিন" />
                <FieldError />
              </TextField>




              <div>
                <Button className="w-full bg-[#05883E]" type="submit">
                  আপডেট 
                </Button>
              </div>
            </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
