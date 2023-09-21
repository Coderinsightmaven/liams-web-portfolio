import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <Image
        src="/plane.png"
        alt="Background image of a plane landing"
        fill={true}
        objectFit="contain"
        className="absolute inset-0 -z-10"
      />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Every Piece Tells a Story
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Dive Deeper: My Story Awaits Below.{" "}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
    </div>
  );
}
