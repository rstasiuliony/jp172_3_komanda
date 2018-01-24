function Star(props) {
	var itemId = props.bookid + "star" + props.id;
	return (
		<div>
			<input type="radio" id={itemId} name={props.bookid} value={props.value} />
			<label htmlFor={itemId}></label>
		</div>
	);
}

function StarList(props) {
	const starNums = Array.apply(null, Array(5)).map((x, y) => y + 1);
	const listItems = starNums.map((number) =>
		<Star key={number.toString()} id={number.toString()} bookid={props.bookid}
							value={number} />
	);
	return (
		<div className="rating">
			{listItems}
		</div>
	);
}


function Book(props) {
   
	var itemId = `book${props.id}`;
	var imgName = `${props.image}`;
	var imgFile = `images/${props.image}`;
  var handleClick=function handleClick(){
      modal.style.display = "block";
      modcontent.innerHTML=" I like this book";
      if (imgName==="jewels_of_nizam.png")  { 
bookList[0].check = true;
}
      else if (imgName==="cakes_and_bakes.png")  { 
bookList[1].check = true;
}
     else if (imgName==="jamies_kitchen.png")  { 
bookList[2].check = true;
}
      
      else if (imgName==="inexpensive_family_meals.png")  { 
      bookList[3].check = true;
}
      else if (imgName==="paleo_slow_cooking.png")  { 
bookList[4].check = true;
}
     else if (imgName==="cook_like_an_italian.png")  { 
bookList[5].check = true;
}
      
       else if (imgName==="suneeta_vaswani.png")  { 
      bookList[6].check = true;
}
      else if (imgName==="jamie_does.png")  { 
bookList[7].check = true;
}
     else if (imgName==="jamies_italy.png")  { 
bookList[8].check = true;
}
       else if (imgName==="vegetables_cookbook.png")  { 
      bookList[9].check = true;
}
      else if (imgName==="a_man_called_ove.png")  { 
bookList[10].check = true;
}
      
      
     else if (imgName==="all_the_light_we_cannot_see.png")  { 
bookList[11].check = true;
}
       else if (imgName==="hillbilly_elegy.png")  { 
      bookList[12].check = true;
}
      else if (imgName==="leonardo_da_vinci.png")  { 
bookList[13].check = true;
}
     else if (imgName==="the_catcher_in_the_rye.png")  { 
bookList[14].check = true;
}
       else if (imgName==="to_kill_a_mockingbird.png")  { 
      bookList[15].check = true;
}
      else if (imgName==="wonder.png")  { 
bookList[16].check = true;
}
     else if (imgName==="jesus_calling.png")  { 
bookList[17].check = true;

  }
    else if (imgName==="the_subtile_art_of_not_giving_a_fuck.png")  { 
bookList[18].check = true;
modcontent.innerHTML=" I like this book";}
  }
	return (
		<div className="book" id={itemId}>
			<a href="#" onClick={handleClick}><img src={imgFile} alt={imgName}/></a>
			<p className="bookName"><a href="#">{props.name}</a></p>
			<p>by <a href="#">{props.author}</a></p>
			<StarList bookid={itemId} rating={props.rating} />
		</div>
	);
}


function BookList(props) {
	const listItems = props.books.map((book) =>
		<Book
			key={book.id.toString()}
			id={book.id} 
			name={book.name} 
			author={book.author} 
			image={book.image} 
            rating={book.rating}
            props={book}  />
	);
	return (
		<div className="wholeblock">
			{listItems}
		</div>
	);
}

function bookListRun(list){
    ReactDOM.render(
        <BookList books={list} />, 
        document.getElementById("bookList")
    );
}

bookListRun(bookList);

