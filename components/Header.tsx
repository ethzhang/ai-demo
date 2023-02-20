import Image from "next/image";
import Link from "next/link";


export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="https://www.theclassnow.com" className="flex space-x-3">
        <Image
          alt="header text"
          src="/classnow-logo.png"
          width={85}
          height={32}
        />
        <div className="w-2"/>
        <h1 className="sm:text-2xl text-xl font-bold ml-2 tracking-tight text-slate-900">
          ClassNow AI Helper
        </h1>
      </Link>


    </header>
  );
}
