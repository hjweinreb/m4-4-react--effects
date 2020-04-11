
import React from 'react';
import styled from 'styled-components';

const Item = ({ name, cost, cookieValue, onClick }) => {

    const clickEvent = () => {
        onClick(name, cost, cookieValue)
    }

    // document.addEventListener("click", clickEvent)

    return (
        <Purchaser>

            <span onClick={clickEvent} >
                <h3> {name} </h3>

                <span>  Cost: {cost}       </span>
                <span> &nbsp; Cookies: {cookieValue}</span>

            </span>


        </Purchaser>

    );

};





export default Item;

const Purchaser = styled.div`
  border solid 1px black;
  padding 8px;
  cursor: pointer;
`;