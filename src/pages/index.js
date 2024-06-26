import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button
        onClick={async () => {
          const res = await axios.get("/api/hello");
          console.log("res", res);
        }}
      >
        click
      </button>
    </main>
  );
}
