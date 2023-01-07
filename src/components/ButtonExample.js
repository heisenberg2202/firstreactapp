function ButtonExample(){

    const fourthExample = () => alert('fourth example');
    return(
    <button onClick={fourthExample}>
        using a separate function expression
    </button>
    );
}

export default ButtonExample;