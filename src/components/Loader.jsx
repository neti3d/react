import { SpinnerRoundFilled } from 'spinners-react'

function Loader() {
    return (
        <div>
            <br />
            <SpinnerRoundFilled size={140} thickness={150} speed={90} color="#36ad47" />
        </div>
    )
}

export default Loader
