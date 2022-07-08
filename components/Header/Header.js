import Link from "next/link"

export default function Header() {
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                        <div className="container">
                            <a className="navbar-brand text-uppercase fw-bolder" href="#">brand name</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link href="#home"><a className="nav-link active" aria-current="page">Home</a></Link>
                                    </li>
                                    <li>
                                        <Link href="#about"><a className="nav-link active">About US</a></Link>
                                    </li>
                                    <li>
                                        <Link href="#tutorial"><a className="nav-link active">How To Join</a></Link>
                                    </li>
                                    <li>
                                        <Link href="#contact"><a className="nav-link active">Contact</a></Link>
                                    </li>
                                </ul>
                                <a className="btn btn-outline-primary px-5">Login</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}