import Link from 'next/link'
import { SiGithub } from 'react-icons/si'

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="flex-1">
          <Link
            className="btn btn-ghost text-primary-content normal-case text-xl"
            href="/">
            <SiGithub className="w-8 h-8" />
            &nbsp; Socialify
          </Link>
        </div>
      </div>

      <style jsx>{`
        .github-svg:hover .octo-arm {
          animation: octocat-wave 560ms ease-in-out;
        }

        @keyframes octocat-wave {
          0%,
          100% {
            transform: rotate(0);
          }

          20%,
          60% {
            transform: rotate(-25deg);
          }

          40%,
          80% {
            transform: rotate(10deg);
          }
        }

        @media (max-width: 500px) {
          .github-svg:hover .octo-arm {
            animation: none;
          }

          .github-svg .octo-arm {
            animation: octocat-wave 560ms ease-in-out;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
