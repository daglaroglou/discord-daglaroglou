import AnchorIcon from './icons/AnchorIcon';
import GitHubIcon from './icons/GitHubIcon';
import TwitterIcon from './icons/TwitterIcon';
import SpotifyIcon from './icons/SpotifyIcon';
import VerifiedIcon from './icons/VerifiedIcon';
import LoLIcon from './icons/LoLIcon';
import InstaIcon from './icons/InstaIcon';

export default function Connections() {
  return (
      <div className="flex flex-initial mt-3 flex-col flex-wrap items-stretch">
        
        {/* GitHub */}
        <div className="h-12 mb-2 text-md w-auto relative flex items-center px-4 justify-between text-white border border-transparent rounded">
         <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <GitHubIcon />
            <span className="text-md font-semibold text-normal text-white">daglaroglou</span>
            <div className="w-[16px] h-[16px]">
              <VerifiedIcon />
            </div>
          </div>
          
          <a href="https://github.com/daglaroglou" rel="noopener noreferrer" target="_blank">
            <AnchorIcon />
          </a>
        </div>
        
        {/* Spotify */}
        <div className="h-12 mb-2 text-md w-auto relative flex items-center px-4 justify-between text-white border border-transparent rounded">
          <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <SpotifyIcon />
            <span className="text-md font-semibold text-white">DaG</span>
            <div className="w-[16px] h-[16px]">
              <VerifiedIcon />
            </div>
          </div>
          <a href="https://open.spotify.com/user/k13b5fnpzdnhbmd7wkiq9u73w?si=4826e4b24611419b"  rel="noopener noreferrer" target="_blank">
            <AnchorIcon />
          </a>
        </div>

        {/* Instagram */}
        {
        <div className="h-12 mb-2 text-md w-auto relative flex items-center px-4 justify-between text-white border border-transparent rounded">
          <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <InstaIcon />
            <span className="text-md font-semibold text-white">_daglaroglou_</span>
            <div className="w-[16px] h-[16px]">
              <VerifiedIcon />
            </div>
          </div>
          <a href="https://instagram.com/_daglaroglou_" rel="noopener noreferrer" target="_blank">
            <AnchorIcon />
          </a>
        </div>
        }

        {/* Valorant */}
        {
        <div className="h-12 mb-2 text-md w-auto relative flex items-center px-4 justify-between text-white border border-transparent rounded">
          <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <LoLIcon />
            <span className="text-md font-semibold text-white">DaG#1337</span>
            <div className="w-[16px] h-[16px]">
              <VerifiedIcon />
            </div>
          </div>
          <a href="https://www.op.gg/summoners/eune/DaG-1337" rel="noopener noreferrer" target="_blank">
            <AnchorIcon />
          </a>
        </div>
        }

        {/* Twitter */}
        {/*
        <div className="h-12 mb-2 text-md w-auto relative flex items-center px-4 justify-between text-white border border-transparent rounded">
          <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <TwitterIcon />
            <span className="text-md font-semibold text-white">_daglaroglou_</span>
            <div className="w-[16px] h-[16px]">
              <VerifiedIcon />
            </div>
          </div>
          <a href="/twitter">
            <AnchorIcon />
          </a>
        </div>
        */}
      </div>
  );
}
