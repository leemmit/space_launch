import IMAGE from '../public/pngwing.com.png'
import SVG from '../public/react.svg'

export const App = () => {
  return (
    <>
      <h1>RTW Starter</h1>
      <h1 className='text-2xl font-bold underline'>Hello World!</h1>
      <button className='bd-indigo-500'>Click</button>
      <img src={IMAGE} alt="React Logo" />
      <img src={SVG} alt="React Logo" />
    </>
  )
}
