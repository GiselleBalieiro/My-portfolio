export default function Main() {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <img
          src="./images/my-icon-circle.png"
          alt=""
          className="rounded-full w-62"
        />
        <div className="pl-4">
          <div className="flex flex-col text-base mb-4 mt-4">
            <h2 className="text-[#E5E7EB]">Giselle Balieiro</h2>
            <span className="text-[#6B7280]">Software Engineering</span>
          </div>
          <div className="flex flex-col text-secondary text-sm">
            <span>ERA</span>
            <span>Campinas - São Paulo</span>
          </div>
        </div>
      </div>
    </div>
  )
}