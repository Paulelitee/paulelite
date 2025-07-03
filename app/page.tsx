import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="p-2 pt-20 pr-20">
        <h1 className="opacity-70 text-lg pb-4 font-medium">Paul Elite</h1>
        <div className="flex flex-col gap-2 opacity-40">
          <p>My work is guided by a deep belief: design is a tool for dignity. It shapes how people interact with the world, with technology, and with themselves. That's why I'm relentless about the details. Excellence isn't a standard — it's a mindset.</p>
          <p>I'm not chasing aesthetics; I'm building experiences that last. Every project is a chance to elevate, to refine, and to solve something real.</p>
          <p>This isn't just what I do. It's who I am.</p>
        </div>
        <div className="flex flex-row gap-2 pt-4 font-medium">
          <Link 
            href="https://cal.com/paulelite" 
            className="opacity-90 px-4 py-2 bg-[var(--foreground)] text-[var(--background)] opacity-90 rounded-xl hover:bg-gray-800 transition-colors"
          >
            Book a call
          </Link>
          <Link 
            href="https://twitter.com/your-username" 
            className="px-4 py-2 flex gap-2 justify-center items-center"
          >
            Follow on 
            <svg 
              className="w-4 h-4" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}