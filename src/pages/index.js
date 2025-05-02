/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import BlocLink from "@/components/BlocLink";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Let blocLinks help you find those pesky blocGLOBAL, blocSonic and
          Mind’s Ear Records links!
        </title>
        <meta
          name="description"
          content="blocLinks points you to all the various blocGLOBAL web presences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <link rel="canonical" href="https://bloclinks.com"></link>

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@blocsonic" />
        <meta property="og:url" content="https://bloclinks.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Let blocLinks help you find those pesky blocGLOBAL, blocSonic and
          Mind’s Ear Records links!"
        />
        <meta
          property="og:description"
          content="blocLinks points you to all the various blocGLOBAL web presences."
        />
        <meta
          property="og:image"
          content="https://bloclinks.com/bloclinks.png"
        />
      </Head>
      <main>
        <h1 className="sr-only">
          Let blocLinks help you find those pesky blocGLOBAL, blocSonic and
          Mind’s Ear Records links!
        </h1>
        <h2>Get great music now</h2>
        <nav>
          <BlocLink href="https://blocsonic.com">blocSonic.com</BlocLink>
          <BlocLink href="https://lorenzosmusic.blocsonic.com/">
            Remix Lorenzo’s Music!
          </BlocLink>
          <BlocLink href="https://badluck.blocsonic.com/">
            Remix BADLUCK!
          </BlocLink>
          <BlocLink href="https://blocsonic.com/releases/yk-beats/soul-on-tape/">
            Y.K.Beats - Soul On Tape
          </BlocLink>
          <BlocLink href="https://blocsonic.com/bloccasts/episode/the-april-2025-episode/">
            Tha Bloc Report Episode 80: The April 2025 Episode
          </BlocLink>
          <BlocLink href="https://blocsonic.com/bloccasts/episode/netbloc-originals-headsnack-spotlight">
            Bloc Discovery Sessions Episode 2: netBloc Originals & Headsnack
            Spotlight
          </BlocLink>
          <BlocLink href="https://blocsonic.com/collections/netlabel-day-2024/1/">
            Netlabel Day 2024 Releases
          </BlocLink>
          <BlocLink href="https://blocsonic.com/signup">
            Signup for the Newsletter
          </BlocLink>
          <BlocLink href="https://open.spotify.com/user/blocsonic?si=1cbd5d782966449b">
            Spotify
          </BlocLink>
          <BlocLink href="https://www.mixcloud.com/blocSonic/">
            Mixcloud
          </BlocLink>
          <BlocLink href="https://mastodon.social/@blocsonic">
            Mastodon
          </BlocLink>
          <BlocLink href="https://threads.net/@blocsonic">Threads</BlocLink>
          <BlocLink href="https://www.facebook.com/blocsonic">
            Facebook
          </BlocLink>
          <BlocLink href="https://www.instagram.com/blocsonic">
            Instagram
          </BlocLink>
        </nav>
        <a href="https://blocsonic.com" className="blocsonic_com">
          <img src="/blocsonic_com.svg" alt="blocSonic.com logo" />
        </a>
      </main>
    </>
  );
}
