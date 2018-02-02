function Button(props){
    return <button
            id = {props.id}
            class="nav-button"
            ></button>;
}

function Footermenu (){ 
    const noOfPages = pagedBookList.noOfPages - 2;
	const itemNums = Array.apply(null, {length: noOfPages}).map(
        (x, y) => y + 1
    );
	const menuItems = itemNums.map((number) =>
		<Button 
            key={number.toString()} 
            id = {"p" + number.toString()} />
	);
    return 
        <div>
            <button id="p0" 
                class="nav-button" 
                >&#10094;</button>
            {menuItems}
            <button id="p-1" 
                class="nav-button" 
                >&#10095;</button>
        </div>;
}

ReactDOM.render(
    <Footermenu />, 
    document.getElementById("container")
);
