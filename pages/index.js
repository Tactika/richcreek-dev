import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {!user && (
        <a href="/api/auth/login">Login</a>

      )}
      {user && (

        <a href="/api/auth/logout">Logout</a>
      )}
    </div>
  )
}
