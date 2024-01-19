import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import LogoutButton from "./components/LogoutButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // const { user } = session;
  return (
    <div className="p-10">
      <h1>Public component</h1>
      {session ? (
        <div>
          <h2>You are logged in, {session.user?.name}</h2>
          <LogoutButton />
          <button onClick={() => console.log(session)}>Show session</button>
        </div>
      ) : (
        <div>
          <h2>Please log in to see something</h2>
          <Button asChild>
            <Link href="/auth">Log in</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
