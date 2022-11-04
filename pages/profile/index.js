import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";

export default function Profile() {
    const { user, error, isLoading } = useUser();

    return (
        <div>
            {isLoading && <p>Loading profile...</p>}
            {error && (
                <>
                    <h1>{error.message}</h1>
                </>
            )}
            {user && (
                <>
                    <Image src={user.picture} alt={user.name} width={100} height={100} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </>
            )}
        </div>
    );
}