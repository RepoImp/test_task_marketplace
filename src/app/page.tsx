"use client";

import MarketPlaceComponent from '@/component/MarketPlaceComponent';
import TagComponent from '@/component/TagComponent';
import { marketArr, tagArr } from '@/utils/helper';
import { useState } from 'react';
import * as style from './style';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';

export default function Home() {
  const [myApp, setMyApp] = useState<any>([]);

  const handleAddClick = (elem: any) => {
    setMyApp([...myApp, elem]);
  }
  const handleRemoveClick = (index:any) => {
    const newApp = [...myApp];
    newApp.splice(index, 1);
    setMyApp(newApp);
  }
  return (
    <>
    <style.Container>
      <style.Main>
        <style.MainHeading>MarketPlace</style.MainHeading>
        <style.ContainWrapper>
          <style.MyAppContain>
            <style.Heading>My Apps</style.Heading>
            <style.Apps>
              {
                myApp.length > 0 && myApp.map((elem: any, index:any) => {
                  return <MarketPlaceComponent
                    name={elem.name}
                    subName={elem.subName}
                    image={elem.image}
                    color="red"
                    icon={<RiDeleteBin5Line />}
                    handleClick={() => handleRemoveClick(index)}
                  />
                })
              }
            </style.Apps>
          </style.MyAppContain>
          <style.Tag>
            {
              tagArr.length > 0 && tagArr.map((elem: any) => {
                return <TagComponent name={elem?.name} />
              })
            }
          </style.Tag>
          <style.PopularSection>
            <style.MyAppContain>
              <style.Heading>Most Popular </style.Heading>
              <style.Apps>
                {
                  marketArr.length > 0 && marketArr.map((elem: any) => {
                    return <MarketPlaceComponent
                      name={elem.name}
                      subName={elem.subName}
                      image={elem.image}
                      color="#1c6cf8"
                      icon={<AiOutlinePlus />}
                      handleClick={() => handleAddClick(elem)}
                    />
                  })
                }
              </style.Apps>
            </style.MyAppContain>
          </style.PopularSection>
        </style.ContainWrapper>
      </style.Main>
    </style.Container>
    </>
  )
}
