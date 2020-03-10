import React, { useState } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import ListOfBooks from "./ListOfBooks";

const StyledInput = styled.input`
    width: 700px;
    font-size: 24px;
    padding: 10px;
    border-radius: 4px;
    margin: 15px;
`;

const StyledButton = styled.button`
    background: blue;
    color: white;
    font-size: 20px;
    border-radius: 4px;
    padding: 14px 20px;
    box-sizing: border-box;
`;

const Typeahead = ({ suggestions, handleSelect, categories }) => {
    const [book, setBook] = useState("");
    const [selected, setSelected] = useState(0);
    const [bookTitleList, setBookTitleList] = useState([]);
    React.useEffect(() => {
        const filterArr = suggestions.filter(booky => {
            return booky.title.toLowerCase().includes(book.toLowerCase());
        });
        console.log(filterArr);
        console.log(book);
        setBookTitleList(filterArr);
    }, [book]);
    return (
        <div>
            <StyledInput
                value={book}
                type="text"
                placeholder="Search for a book"
                onChange={event => {
                    setBook(event.target.value);
                }}
                onKeyDown={event => {
                    switch (event.key) {
                        case "Enter": {
                            handleSelect(bookTitleList[selected].title);
                            return;
                        }
                        case "ArrowUp": {
                            setSelected(selected - 1);
                            return;
                        }
                        case "ArrowDown": {
                            setSelected(selected + 1);
                            return;
                        }
                    }
                }}
            ></StyledInput>
            <StyledButton onClick={() => setBook("")}>Clear</StyledButton>
            <ListOfBooks
                input={book}
                books={suggestions}
                handleSelect={handleSelect}
                categories={categories}
                selected={selected}
                setSelected={setSelected}
            />
        </div>
    );
};

export default Typeahead;
