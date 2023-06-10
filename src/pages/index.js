/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import BlocLink from "@/components/BlocLink";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Let blocLinks help you find this pesky blocGLOBAL, blocSonic and
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
          content="Let blocLinks help you find this pesky blocGLOBAL, blocSonic and
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
          Let blocLinks help you find this pesky blocGLOBAL, blocSonic and
          Mind’s Ear Records links!
        </h1>
        <h2>Get great music now</h2>
        <nav>
          <BlocLink href="https://blocsonic.com">blocSonic.com</BlocLink>
          <BlocLink href="https://blocsonic.com/releases/donnie-ozone/dust-on-wax-ggg-mixx-featuring-puck">
            Donnie Ozone - Dust On Wax (GGG MIXX) (Featuring P.U.C.K.)
          </BlocLink>
          <BlocLink href="https://blocsonic.com/releases/manyfeathers/444">
            ManyFeathers - 4:44
          </BlocLink>
          <BlocLink href="https://blocsonic.com/bloccasts/episode/the-june-2023-episode">
            Tha Bloc Report Episode 58: The June 2023 Episode
          </BlocLink>
          <BlocLink href="https://blocsonic.com/bloccasts/episode/whats-up-chuck-origins-and-krazy-yuk">
            Bloc Discovery Sessions Episode 1: What’s Up Chuck, Origins and
            Krazy Yuk
          </BlocLink>
          <BlocLink href="https://open.spotify.com/user/blocsonic?si=1cbd5d782966449b">
            Spotify
          </BlocLink>
          <BlocLink href="https://www.mixcloud.com/blocSonic/">
            Mixcloud
          </BlocLink>
          <BlocLink href="https://twitter.com/blocsonic">Twitter</BlocLink>
          <BlocLink href="https://www.facebook.com/blocsonic">
            Facebook
          </BlocLink>
          <BlocLink href="https://www.instagram.com/blocsonic">
            Instagram
          </BlocLink>
          <BlocLink href="https://post.news/@/blocsonic">Post.</BlocLink>
          <BlocLink href="https://universeodon.com/@blocsonic">
            Mastodon
          </BlocLink>
        </nav>
        <a href="https://blocsonic.com" className="blocsonic_com">
          <img src="/blocsonic_com.svg" alt="blocSonic.com logo" />
        </a>
      </main>
    </>
  );
}
