import Link from "next/link"
import style from "./Content.module.css"
import Image from "next/image"
import tutorial from "./../../asset/img/tutorial.png"

export default function Content() {
    return(
        <>
            <div className={style.container} id="home">
                <div className={style.title}>
                    <h1 className={style["title-wrapper"]}>Welcome</h1>
                    <p className={style.wrapper}>
                        <span className="fw-bolder">Brand Name </span>is a contest website that has many contests that have high nominal prizes. followed by many users and the number of contests in one day is the advantage of our website. the ease of participating in a contest makes the contestants or users on our website happy. Start freelance by taking part in the contests that we provide on our website. only with a signal and your creativity can make money
                    </p>
                    <Link href="/"><a className="btn btn-outline-primary py-2 px-5 mt-3">Search Contes</a></Link>
                </div>
            </div>
            <div className={style["container-about"]} id="about">
                <div className={style["about-section"]}>
                    <p className={style["title-about"]}>- about -</p>
                    <h3 className={style["title-brand"]}>Brand <span>Name</span></h3>
                    <p className={style.wrapper}>
                        Developed in 2022. To date we have 100 users, and 100 total contests. We also provide many facilities, including being able to multi-user or being able to create multiple accounts with one device. Multi content, each contestant can submit and participate in more than one contest thereby increasing your chances of getting prizes from our contests. Portfolio, if you win one of the available contests, it will be entered into your profile and can be used for your portfolio
                    </p>
                    <div className={style.card}>
                        <div className={style["user-card"]}>
                            <i class="fa-solid fa-circle-user"></i>
                            <h3>Multiple User</h3>
                            <p>Can have multiple accounts to have a greater chance of winning in one contest</p>
                        </div>
                        <div className={style["contes-card"]}>
                            <i class="fa-solid fa-trophy"></i>
                            <h3>Multiple Contes</h3>
                            <p>Many choices of contests, adjust to your liking and choose the one you are sure to win</p>
                        </div>
                        <div className={style["portfolio-card"]}>
                            <i class="fa-solid fa-briefcase"></i>
                            <h3>Portfolio</h3>
                            <p>Portfolios help you have a winning history that can be used to apply for jobs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style["container-tutorial"]} id="tutorial">
                <div className={style["tutorial-section"]}>
                    <p className={style["title-about"]}>- How To Join -</p>
                    <div class="card mb-3 border-0 bg-transparent mt-5">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <Image src={tutorial} width={520} height={380} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">How to register</h5>
                                    <p class="card-text">on the first page please press the login button, then enter the requested data. when you don't have an account please click don't have an account</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 border-0 bg-transparent mt-5">
                        <div class="row g-0">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">How to register</h5>
                                    <p class="card-text">on the first page please press the login button, then enter the requested data. when you don't have an account please click don't have an account</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <Image src={tutorial} width={520} height={380} />
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 border-0 bg-transparent mt-5">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <Image src={tutorial} width={520} height={380} />
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">How to register</h5>
                                <p class="card-text">on the first page please press the login button, then enter the requested data. when you don't have an account please click don't have an account</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 border-0 bg-transparent mt-5">
                        <div class="row g-0">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">How to register</h5>
                                    <p class="card-text">on the first page please press the login button, then enter the requested data. when you don't have an account please click don't have an account</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <Image src={tutorial} width={520} height={380} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}