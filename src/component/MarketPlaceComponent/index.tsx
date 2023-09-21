import * as style from './style';
import Image from 'next/image';

function MarketPlaceComponent(props:any) {
  const {name, subName, image, icon, color, handleClick} = props;
  return (
    <>
      <style.Container>
        <style.Wrapper>
          <Image src={image} alt="image" width={35} />
          <style.SideInfo>
            <style.Title>
              {name}
            </style.Title>
            <style.SubTitle>
              {subName}
            </style.SubTitle>
          </style.SideInfo>
        </style.Wrapper>
        <style.Icon color={color} onClick={handleClick}>
          {icon}
        </style.Icon>

      </style.Container>
    </>
  )
}

export default MarketPlaceComponent
