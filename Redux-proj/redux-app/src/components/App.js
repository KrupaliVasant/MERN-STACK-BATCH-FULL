import React from 'react';
import List from './List';
import Form from './Form';  

const App=()=>(
    <>
    <div>
        <h2>Article</h2>
        <List />

        <h2>Add a new article</h2>
        <Form />
    </div>
    </>
)

export default App;