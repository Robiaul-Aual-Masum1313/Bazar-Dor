"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";

import { useRouter } from "next/navigation";
export default function ProfilePage() {
  const {data: session} = useSession()
    const router = useRouter();
    const handleSignOut = async () => {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/sign-in");
          },
        },
      });
    };

  return (
    <div className="bg-[#F0F5F0]  pt-7 pb-10 h-[70vh]">
      <div className="lg:w-3xl mx-auto">
        <h2 className="text-[32px] font-bold">আমার প্রোফাইল</h2>
        <p className="text-[14px] font-medium">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
        <div className="space-y-8">
          <div className="bg-[#FAFCFA] px-5 py-7 border border-[#E1E8E1] rounded-2xl flex justify-between items-center">
            <div>
              <div></div>
              <div>
                <h2>{session?.user.name}</h2>
                <p>{session?.user.email}</p>
              </div>
            </div>
            <div>
              <button className="border border-[#eee] px-2.5 py-1 rounded-lg" onClick={handleSignOut}>↩ সাইন আউট</button>
            </div>
          </div>
          <div className="bg-[#FAFCFA] px-5 py-7 border border-[#E1E8E1] rounded-2xl text-center">
            <Link className="border border-[#eee] px-2.5 py-1 rounded-lg" href={'/profile/updateProfile'} >আপডেট প্রোফাইল</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
