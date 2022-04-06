import Navbar from '../../../Components/Navbar'

const Header = () => {
  return (
    <>
      <Navbar />
      <section className="employee-header">
        <div className="left-section">
          <h1>
            Make Any Day <span>Payday!</span>
          </h1>
          <div className="paragraphs">
            <p>
              Get the money you worked for today, to spend on what matters to
              you the most.
            </p>
            <p>
              Life is increasingly flexible and on demand. But not how we get
              paid. It’s still at the end or beginning of the month, often at
              the end of our money, and after bills are due.
            </p>
            <p>
              That’s all changed with Viveria HQ. Our app gives you power and
              control over your earned money.
            </p>
          </div>
        </div>

        <div className="right-section">
          <img src={require("../../../Assets/mobileImg.png")} alt="" />
        </div>
      </section>
    </>
  );
}

export default Header