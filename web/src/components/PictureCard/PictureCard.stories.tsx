import PictureCard from './PictureCard'

export const generated = () => {
  return (
    <PictureCard
      title="eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur."
      picture="https://picsum.photos/id/237/870/500"
      altText="random picture"
      date={'1776.07.04'}
      category="NEWS"
    />
  )
}

export default { title: 'Components/PictureCard' }
