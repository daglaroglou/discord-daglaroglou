import { LanyardPresence } from '../../types/lanyard';
import About from './About';
import GameActivity from './activity/Game';
import SpotifyActivity from './activity/Spotify';
import Avatar from './Avatar';
import Connections from './Connections';
import Roles from "./Roles"

interface CardProps {
  data: LanyardPresence;
}

export default function Profile(props: CardProps) {
  const game = props.data.activities.find(x => x.type === 0);

  return (
    <div className="w-[300px] text-slate-200 drop-shadow-xl font-['Whitney']">
      <div className="rounded-2xl overflow-hidden bg-zinc-900">
        <div className="relative">
          {/* Banner */}
          
          <picture>
            {/* <source type="image/webp" srcSet="/images/banner.webp" />
            <source type="image/png" srcSet="/images/banner.png" /> */}
            <img src="https://cdn.discordapp.com/banners/852825042630475827/936942b9b3f2ca0752e8690afa7bb018.png" alt="banner" width="300" height="120" aria-hidden="true" draggable="false" className="block select-none" />
          </picture>

          {/* Avatar */}
          <div className="absolute top-[76px] left-[16px]">
            <div className="rounded-full select-none">{Avatar(props.data)}</div>
          </div>

          {/* Username and tag */}
          <div className="pt-14 pb-3 px-4">
            <div className="text-xl font-semibold leading-6">
              <span className="text-slate-50">{props.data.discord_user.username}</span>
              {/* <span className="text-slate-300">#{props.data.discord_user.discriminator}</span> */}
            </div>
          </div>

          <div className="px-4 pb-3.5 flex-initial text-sm">
            <div className="w-full h-[1px] bg-zinc-800 mb-3" />

            {/* About me */}
            <About />

            {/* Member Since */}
            <div className="mb-3 select-none">
              <h2 className="font-bold text-xs text-slate-300 leading-4 mb-2 uppercase">Alive Since</h2>
              <span className="whitespace-pre-line text-normal">May 27, 2005</span>
            </div>
            {/* Roles */}
            <Roles />

            {/* Activities */}
            {game && GameActivity(game)}
            {props.data.spotify && !game && SpotifyActivity(props.data.spotify)}

            {/* Connections */}
            <div>
              <h2 className="font-bold text-xs text-slate-300 leading-4 mb-2 uppercase select-none">Connections</h2>
              <Connections />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
