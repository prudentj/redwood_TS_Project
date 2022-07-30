import { ReactElement } from 'react'

import ButtonRound from 'src/components/ButtonRound/ButtonRound'

interface CardWithButtonProps {
  title: string | ReactElement
  subtitle?: string | ReactElement
  buttonLabel: ReactElement | string
  cssClass?: string
}

const CardWithButton = ({
  title,
  subtitle,
  buttonLabel,
  cssClass,
}: CardWithButtonProps) => {
  return (
    <div className={`flex flex-col uppercase ${cssClass} `}>
      <h5 className="text-5xl lg:text-6xl xl:text-7xl font-bold">{title}</h5>
      {subtitle ? <p className="py-6  lg:pb-20">{subtitle}</p> : <></>}
      <ButtonRound label={buttonLabel} />
    </div>
  )
}

export default CardWithButton
