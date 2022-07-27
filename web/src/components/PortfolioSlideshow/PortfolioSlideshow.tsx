import { MdKeyboardArrowRight } from 'react-icons/md'
import Slideshow from 'src/components/base/Slideshow'
import OverlaidElement from 'src/components/base/OverlaidElement'
import { Screenshot } from 'src/assets'

const PortfolioSlideshow = () => {
  const slideDuration = 5000
  const initialIndex = 0

  return (
    <div className='flex gap-2 items-center w-full'>
      <Slideshow
        className='bg-violet-300/80 border-violet-800 border-2 shadow-[0_0_8px_4px] shadow-gray-700 flex-auto gap-2 px-2'
        initialIndex={initialIndex}
        slideDuration={slideDuration}
        controls={{
          leftControl: (
            <div className='text-4xl'>
              <MdKeyboardArrowRight className='rotate-180 hover:bg-violet-400 fill-violet-400 hover:fill-violet-800 hover:cursor-pointer rounded-full' />
            </div>
          ),
          rightControl: (
            <div className='text-4xl'>
              <MdKeyboardArrowRight className='hover:bg-violet-400 fill-violet-400 hover:fill-violet-800 hover:cursor-pointer rounded-full' />
            </div>
          ),
        }}
      >
        <OverlaidElement
          className='duration-1000 flex flex-center'
          overlay={
            <>
              <p key="name" className='text-center font-medium'>Pixel Art Creator</p>
              <p key="caption" className='text-justify mt-4'>
                A pixel art creator webapp with a simply interface. Made purely
                with HTML, CSS, and vanilla JS.
              </p>
              <p key="description-0" className='font-medium mt-4'>Features:</p>
              <ul key="description-1" className='mt-2 ml-8 list-disc'>
                <li>
                  Preserve canvas content after resizing canvas dimensions
                </li>
                <li>Different brush colors and opacity</li>
                <li>Color stacking based on opacity</li>
                <li>Different background colors</li>
                <li>
                  Option to choose between a static solid background color or an
                  animated background
                </li>
                <li>Save canvas locally as an SVG</li>
              </ul>
            </>
          }
        >
          <img
            className='aspect-auto h-full'
            src={Screenshot.EtchASketch}
            alt='Pixel Art Creator Screenshot'
          />
        </OverlaidElement>
        <OverlaidElement
          className='duration-1000 flex flex-center'
          overlay={
            <>
              <p key="name" className='text-center font-medium'>Rock, Paper, Scissors</p>
              <p key="caption" className='text-justify mt-4'>
                A simple rock, paper, scissors webapp made with HTML, CSS, and
                vanilla JS.
              </p>
              <ul key="description-0" className='mt-4 ml-8 list-disc'>
                <li>Random opponent name thru the use of an external API</li>
              </ul>
            </>
          }
        >
          <img
            className='aspect-auto h-full'
            src={Screenshot.RockPaperScissors}
            alt='Rock, Paper, Scissors Screenshot'
          />
        </OverlaidElement>
        <OverlaidElement
          className='duration-1000 flex flex-center'
          overlay={
            <>
              <p key="name" className='text-center font-medium'>
                Static Landing Page Sample
              </p>
              <p key="caption" className='text-justify mt-4'>
                A static website landing page. Made with HTML, CSS, and vanilla
                JS.
              </p>
              <ul key="description-0" className='mt-4 ml-8 list-disc'>
                <li>
                  Responsive web design, tested on both desktop and mobile
                  devices
                </li>
              </ul>
            </>
          }
        >
          <img
            className='aspect-auto h-full'
            src={Screenshot.LandingPage}
            alt='Landing Page Screenshot'
          />
        </OverlaidElement>
      </Slideshow>
    </div>
  )
}

export default PortfolioSlideshow
