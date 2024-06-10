export default function Message() {
function handleClick(){
    console.log("buttonclick");
}

    return <div>
        <button onClick={handleClick}> Click for button</button>
    </div>
}