import { ReactElement } from 'react'

interface ButtonRoundProps {
  label?: string | ReactElement
  cssClass?: string
}

//On large Screen need to animate the hover transition to the next state

const ButtonRound = ({
  label = 'Continue',
  cssClass = '',
}: ButtonRoundProps) => {
  return (
    <div className="flex flex-shrink">
      <button
        className={`uppercase px-8 py-2 font-semibold text-xs bg-transparent rounded-full border-2 ${cssClass} `}
      >
        <span>{label}</span>
      </button>
    </div>
  )
}

export default ButtonRound
