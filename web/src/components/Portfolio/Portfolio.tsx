import { Link, routes } from "@redwoodjs/router"
import { MdDoubleArrow } from "react-icons/md"
import PortfolioSlideshow from "src/components/PortfolioSlideshow"

const Portfolio = () => {
  return (
    <section className='bg-gray-200 px-8 py-8 flex flex-col gap-12 items-center rounded-[8px]'>
      <h2 className='text-center font-semibold'>Portfolio</h2>
      <PortfolioSlideshow />
      <Link
        className='flex items-center gap-2 text-link text-xl font-semibold'
        to={routes.projects()}
      >
        Go To Portfolio <MdDoubleArrow />
      </Link>
    </section>
  )
}

export default Portfolio
