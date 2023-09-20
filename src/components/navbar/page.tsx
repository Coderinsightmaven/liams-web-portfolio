import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 flex justify-center items-center">
      <div className="flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
