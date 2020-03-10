import React, { useState } from "react";
import styled from "styled-components";
const StyledUl = styled.ul`
    width: 690px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 3px lightgrey;
    padding: 15px;
    margin-left: 15px;
    margin-top: 0;
`;
const StyledLi = styled.li`
    list-style-type: none;
    /* text-decoration: none; */
    font-size: 24px;
    flex-wrap: wrap;
    padding: 12px;
    /* margin: 0 10px; */
    /* &:hover {
        background: lightyellow;
    } */
`;
const Prediction = styled.span`
    font-weight: bold;
`;
const ItalicSpan = styled.span`
    font-size: 14px;
    font-style: italic;
`;

const ListOfBooks = ({
    input,
    books,
    handleSelect,
    categories,
    selected,
    setSelected
}) => {
    const filter = books.filter(book => {
        return book.title.toLowerCase().includes(input.toLowerCase());
    });
    const mapArr = filter.map((book, index) => {
        const cutOff = book.title.toLowerCase().indexOf(input.toLowerCase());
        const firstHalf = book.title.slice(0, cutOff);
        const searchValue = book.title.slice(cutOff, cutOff + input.length);
        const secondHalf = book.title.slice(cutOff + input.length);
        // setBookTitle(book.title);
        return (
            <StyledLi
                onMouseEnter={event => {
                    console.log(event);
                    // console.log(mapArr.indexOf(event.target));
                }}
                key={book.id}
                onClick={() => handleSelect(book.title)}
                style={{
                    background:
                        selected === index
                            ? "hsla(50deg, 100%, 80%, 0.25)"
                            : "transparent"
                }}
            >
                <span>
                    {cutOff > 0 && <Prediction>{firstHalf}</Prediction>}
                    <span>{searchValue}</span>
                    <Prediction>{secondHalf}</Prediction>
                    <ItalicSpan>
                        {" "}
                        in{" "}
                        <span style={{ color: "purple" }}>
                            {categories[book.categoryId].name}
                        </span>
                    </ItalicSpan>
                </span>
            </StyledLi>
        );
    });
    return input.length > 1 && filter.length && <StyledUl>{mapArr}</StyledUl>;
};

export default ListOfBooks;
