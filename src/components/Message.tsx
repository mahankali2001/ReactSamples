// PascalCasing
function Message() {
    // JSX: Javascript XML - code compiles into JS
    // babeljs.io/repl

    const name = 'Vijay';
    if (name)
        return <h1>Hello {name}!</h1>;
    else
    return <h1>Hello World!</h1>;
}

export default Message;