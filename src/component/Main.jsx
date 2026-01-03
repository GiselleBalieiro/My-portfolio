export default function Main() {
  return (
    <div>
      <div className="flex flex-col">
        <img
          src="./images/my-icon-circle.png"
          alt=""
          className="rounded-full w-32"
        />
        <div className="flex flex-col text-base">
          <h2 className="text-primary">Giselle Balieiro</h2>
          <span className="text-secondary">Software Engineering</span>
        </div>
        <div className="flex flex-col text-secondary text-sm">
          <span>ERA</span>
          <span>Campinas - São Paulo</span>
          <a  className="text-brand-blue" href="https://www.linkedin.com/in/gisellebalieiro" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </div>

      </div>
    </div>
  )
}