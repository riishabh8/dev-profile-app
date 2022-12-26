import "./banner.css"

export default function Banner() {
  return (
    <div className="banner">
        <h1 className="bannerTxt">The Developer<br />Respository</h1>
        <img className="bannerImg" src={require("../assets/Icons _ Illustrations/banner-img.png")} alt="Home Banner" />
    </div>
  )
}
