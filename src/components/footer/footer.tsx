import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer footer-center p-2 text-base-content">
      <div>
        <p>
          <span>Made with 💖 by </span>
          <Link
            className="link link-accent no-underline"
            href="https://cryogenicplanet.tech"
            target="_blank">
            CryogenicPlanet
          </Link>
          &nbsp;and&nbsp;
          <Link
            className="link link-accent no-underline"
            href="https://github.com/wei/"
            target="_blank">
            Wei
          </Link>
          <span>. Modified Fork by </span>
          <Link
            className="link link-accent no-underline"
            href="https://thatcomputerscientist.com/"
            target="_blank">
            That Computer Scientist
          </Link>
          <span>. Original Work available at </span>
          <Link
            className="link link-accent no-underline"
            href="https://socialify.git.ci/"
            target="_blank">
            Socialify
          </Link>
          <span>.</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
