interface LandingProps {
  onClick: () => void,
}

const Landing: React.FC<LandingProps> = ({ onClick }) => {
  return (
    <section>
      <p>Which house will you get?</p>
      <button onClick={onClick}>Start Sorting Quiz!</button>
    </section>
  )
}

export default Landing;