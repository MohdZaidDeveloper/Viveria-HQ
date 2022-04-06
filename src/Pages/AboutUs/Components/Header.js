import Navbar from '../../../Components/Navbar'

const Header = () => {
  return (
    <>
      <Navbar />
      <header className="about-header">
        <div className="left-section">
          <h1>
            Our <span>Mission</span>
          </h1>
          <p>
            Our mission is simple. We want every working person to have complete
            financial freedom by giving them earned wage access.
          </p>
          <p className='downtext'>
            Earned wage access means the ability to instantly access, track,
            save and manage earned wages that not paid. We want to transform
            people's lives and the organisations they work for.
          </p>
        </div>

        <div className="right-section">
          <img src={require("../../../Assets/mobileImg.png")} alt="" />
        </div>
      </header>
    </>
  );
}

export default Header