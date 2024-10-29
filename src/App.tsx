import IMAGE from '../public/pngwing.com.png'
import SVG from '../public/react.svg'

export const App = () => {
    const name = 'leo'
    return (
    <>
        <h1>RTW Starter</h1>
        <img src={IMAGE} alt="React Logo" />
        <img src={SVG} alt="React Logo" />
    </>
    )
}