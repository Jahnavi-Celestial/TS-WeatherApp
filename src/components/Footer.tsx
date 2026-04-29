
const Footer = () => {
    function handleClick(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

  return (
    <div id = "footerDiv">
        <div id = "logo2" className = "light-div">
            <h1><i className="fa-solid fa-cloud"></i> Weather</h1>
        </div>
        <div id = "footerText" className = "light-div"> Weather data provided by OpenWeather </div>
        <div id = "scrollToTop" className = "light-div" onClick={handleClick}>
            ^
        </div>
    </div>
  )
}

export default Footer
