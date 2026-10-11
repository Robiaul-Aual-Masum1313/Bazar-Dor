"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

export default function SignInSignOutBtn() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  if (isPending) {
    return <></>;
  }
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
    <div>
      {session?.user ? (
        <>
          <details className="dropdown">
            <summary className="btn m-1 relative">{session.user.name}</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-3 shadow-sm absolute right-0">
              <li>
                <p className="font-bold text-[12px]">{session.user.name}</p>
                <p>{session.user.email}</p>
              </li>
              <li>
                <Link href={'/profile'}>👤 আমার প্রোফাইল</Link>
                
              </li>
              <li onClick={handleSignOut} className="cursor-pointer">
                ↩ সাইন আউট
              </li>
            </ul>
          </details>
        </>
      ) : (
        <>
          <Link href={"/sign-in"}>
            <button className="px-2 md:px-3 py-1 md:py-1.5 ">সাইন ইন</button>{" "}
          </Link>
          <Link href={"/sign-up"}>
            {" "}
            <button className="font-semibold text-white bg-red-700 px-2 md:px-3 py-1 md:py-1.5 rounded-sm">
              সাইন আপ
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
