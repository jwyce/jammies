import { Waveform } from "./components/wave";
import { Music, Music2 } from "lucide-react";

export function App() {
  const emotes = [
    {
      name: "jammies",
      url: "https://cdn.betterttv.net/emote/5d2dc7dcff6ed3680130eb6d/3x.webp",
    },
    {
      name: "catjam",
      url: "https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/3x.webp",
    },
    {
      name: "pepeJAM",
      url: "https://cdn.betterttv.net/emote/5b77ac3af7bddc567b1d5fb2/3x.webp",
    },
    {
      name: "jammiesHD",
      url: "https://cdn.betterttv.net/emote/5f7e99c6ccde1f4a870c66bd/3x.webp",
    },
    {
      name: "ratJAM",
      url: "https://cdn.betterttv.net/emote/5f43037db2efd65d77e8a88f/3x.webp",
    },
    {
      name: "lebronJAM",
      url: "https://cdn.betterttv.net/emote/5fa939a9f32aa26441c83a70/3x.webp",
    },
    {
      name: "squirtleJam",
      url: "https://cdn.betterttv.net/emote/6011c9536c75a765d463e478/3x.webp",
    },
  ];

  const random = emotes[Math.floor(Math.random() * emotes.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex flex-col items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-20"></div>

      <Waveform />

      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center z-10">
        Starting Soon...
      </h1>

      <div className="relative">
        <Music className="h-6 w-6 absolute top-0 -left-10 rotate-12 stroke-[2.5]" />
        <Music2 className="h-8 w-8 absolute top-4 -right-12 -rotate-12 stroke-[2.5]" />
        <Music2 className="h-5 w-5 absolute -top-8 right-10 rotate-12 stroke-[2.5]" />

        <img src={random.url} alt={random.name} className="h-52 w-52" />
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-50"></div> */}
    </div>
  );
}
