import React from "react";
import data from "../data";
import Typeahead from "./Typeahead";

function App(props) {
    // TODO!
    return (
        <>
            <Typeahead
                suggestions={data.books}
                categories={data.categories}
                handleSelect={suggestion => window.alert(suggestion)}
            />
        </>
    );
}

export default App;
