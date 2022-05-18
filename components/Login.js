import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative h-screen">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          alt=""
          height={200}
          width={200}
          objectFit="cover"
          className="rounded-full"
        />
        <button
          className="bg-yellow-500 rounded-lg p-4 font-bold animate-pulse"
          onClick={authenticate}
        >
          Login to METAVERSE
        </button>
      </div>

      <div className="flex absolute z-50 w-full items-center justify-center bottom-5">
        { <h1 className="text-gray-100 font-semibold text-xl text-center">
          Made with ❤️ by {"Arvind❤praveen"}
          <span className="text-pink-500 hover:text-pink-700">
  
          </span>
        </h1> }
      </div>

      <div className="-z-50">
        <Image
          src="https://links.papareact.com/55n"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
