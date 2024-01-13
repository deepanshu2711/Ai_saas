import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="text-3xl text-green-500">
      <p>Landing UnProtected</p>
      <div>
        <Link href={"/sign-in"}>
        <Button>Login</Button>
        </Link>
        <Link href={"/sign-up"}>
        <Button>Register</Button>
        </Link>
      </div>
    </div>
  )
}
