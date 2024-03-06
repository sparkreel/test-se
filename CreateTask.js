import React, { useState } from 'react';

const CreateTask = ({ onCreate = () => { } }) => {
    const [title, setTitle] = useState(null);

    const submit = event => {
        event.preventDefault();
        onCreate({ title });
        setTitle('');
    };

    return (
        <form onSubmit={submit}>
            <h2>Create task</h2>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <button type="submit">Create</button>
        </form>
    );
};

export default CreateTask;