import { motion, AnimatePresence } from "motion/react";
import { Waveform } from "./components/wave";
import { Music, Music2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export function App() {
  const emotes = useMemo(
    () => [
      {
        name: "pepeD",
        url: "https://cdn.betterttv.net/emote/5b1740221c5a6065a7bad4b5/3x.webp",
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
      {
        name: "VIBE",
        url: "https://cdn.betterttv.net/emote/6228bfe606fd6a9f5be69c39/3x.webp",
      },
      {
        name: "dekuHYPE",
        url: "https://cdn.betterttv.net/emote/594c13b436b6a43b492ce4bd/3x.webp",
      },
      {
        name: "xar2EDM",
        url: "https://cdn.betterttv.net/emote/5b7e01fbe429f82909e0013a/3x.webp",
      },
      {
        name: "rareChar",
        url: "https://cdn.betterttv.net/emote/562b9101a6646e202bcc5447/3x.webp",
      },
      {
        name: "KirbDance",
        url: "https://cdn.betterttv.net/emote/5b9011eea2c5266ff2b8fde5/3x.webp",
      },
      {
        name: "HAMDANCE",
        url: "https://cdn.betterttv.net/emote/5b3aa96a05e329206af700c8/3x.webp",
      },
      {
        name: "dogJAM",
        url: "https://cdn.betterttv.net/emote/5f2e2fcf6f378244660275ae/3x.webp",
      },
      {
        name: "CATJAM",
        url: "https://cdn.betterttv.net/emote/60c5d2fdf8b3f62601c3d25b/3x.webp",
      },
      {
        name: "PepoDance",
        url: "https://cdn.betterttv.net/emote/5a6edb51f730010d194bdd46/3x.webp",
      },
      {
        name: "BirbRave",
        url: "https://cdn.betterttv.net/emote/5c32f7f9b2b08c560f6ae60a/3x.webp",
      },
      {
        name: "crabRave",
        url: "https://cdn.betterttv.net/emote/5dbaeed327360247dd64e03d/3x.webp",
      },
      {
        name: "RatSpin",
        url: "https://cdn.betterttv.net/emote/62d05713d991a3e26c1281bb/3x.webp",
      },
    ],
    [],
  );

  const [random, setRandom] = useState(
    emotes[Math.floor(Math.random() * emotes.length)],
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandom(emotes[Math.floor(Math.random() * emotes.length)]);
    }, 10000); // 10 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [emotes]);

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

        <div className="h-52 w-52 relative">
          <AnimatePresence>
            {random && (
              <motion.img
                key={random.name}
                src={random.url}
                alt={random.name}
                className="h-52 w-52 absolute inset-0"
                initial={{
                  opacity: 0,
                  scale: 0.3,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.3,
                }}
                transition={{
                  duration: 0.6,
                }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-50"></div> */}
    </div>
  );
}
