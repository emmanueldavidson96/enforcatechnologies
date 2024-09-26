import Image from "next/image";

import Messages from "./_components/Messages"

export default function Home() {
  return (
      <div>

          <main className="min-h-screen">
              <Messages/>
          </main>

      </div>
  );
}
