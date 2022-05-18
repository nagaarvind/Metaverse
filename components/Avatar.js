import Image from "next/image";
import { useMoralis } from "react-moralis";

const Avatar = ({ username, logoutOnPress }) => {
  const { user, logout } = useMoralis();

  return (
    <Image
      className="bg-black cursor-pointer rounded-full hover:opacity-75 transition ease-in-out"
      src={`https://avatars.dicebear.com/api/adventurer/${
        username || user.getUsername()
      }.svg`}
      alt=""
      layout="fill"
      onClick={() => logoutOnPress && logout()}
    />
  );
};

export default Avatar;
