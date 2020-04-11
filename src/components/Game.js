import React, { useReducer } from 'react';
import styled from 'styled-components';
import Item from './Item';
import cookieSrc from '../cookie.svg';
import useInterval from '../hooks/use-interval.hook';


const items = [
  { id: 'cursor', name: 'Cursor', cost: 10, value: 1 },
  { id: 'grandma', name: 'Grandma', cost: 100, value: 10 },
  { id: 'farm', name: 'Farm', cost: 1000, value: 80 },
];

const Game = () => {
  // TODO: Replace this with React state!

  const [numCookies, setNumCookies] = React.useState(100);
  const [purchasedItems, setPurchasedItems] = React.useState({
    Cursor: 0,
    Grandma: 0,
    Farm: 0,
  })




  const clickAction = (vals) => {

    let currentItem = items.filter(clickerObject => clickerObject.name === vals)
    console.log(`the current item is ${currentItem[0].name}`)
    console.log(vals)
    if (numCookies >= currentItem[0].cost) {
      setPurchasedItems({
        ...purchasedItems,
        [vals]: purchasedItems[vals] + 1,



      });
      setNumCookies(numCookies - currentItem[0].cost)
    }
    else window.alert("You dont have enough Cookies!!!")
  }

  const cookieClick = () => {
    setNumCookies(numCookies + 1);
  };

  console.log('purchasedItems ', purchasedItems)


  let passiveCookies = ((purchasedItems.Cursor * 1) + (purchasedItems.Grandma * 10) + (purchasedItems.Farm * 80))

  console.log('passive Cookies' + passiveCookies)

  useInterval(() => {
    setNumCookies(numCookies + passiveCookies);
  }, 1000);

  React.useEffect(() => {
    document.title = `${numCookies} cookies - Cookie Clicker Workshop`;
  }, [numCookies]);

  return (
    <Wrapper>
      <GameArea>
        <div>{purchasedItems.Cursor} Cursors &nbsp;
        {purchasedItems.Grandma} Grandmas &nbsp;
        {purchasedItems.Farm} Farms</div>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          {/* TODO: Calcuate the cookies per second and show it here: */}
          <strong>{passiveCookies}</strong> cookies per second
        </Indicator>
        <Button onClick={cookieClick}>
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {items.map((clicker, index) => {

          return (
            <Item

              name={clicker.name}
              index={index}
              cost={clicker.cost}
              cookieValue={clicker.value}
              onClick={clickAction}
            //currentClicker={clicker.name}





            />

          )

        }
        )
        }

      </ItemArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const GameArea = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Cookie = styled.img`
  width: 200px;
`;

const ItemArea = styled.div`
  height: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: yellow;
`;

const Indicator = styled.div`
  position: absolute;
  width: 250px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

const Total = styled.h3`
  font-size: 28px;
  color: lime;
`;

export default Game;