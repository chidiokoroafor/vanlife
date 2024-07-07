import { Link } from "react-router-dom"

function Home() {
  return (
    <main className="main">
        <img src="/images/home-background.jpg" alt="backgrond" />
            <div className="container">
                <h1 className="heading">You got the travel plans, we got the travel vans.</h1>
                <p className="main-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta alias natus cumque amet vero ipsam dolore numquam ab sequi tempora?</p>
                <Link to={'#'} className="main-btn">Find your van</Link>
            </div>
    </main>
  )
}

export default Home