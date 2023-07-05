import Products from "./Products";
import "./Products.css";
const ProductsList =(props:any) => {
  const books=props.books;

  console.log(props, books);
  return (
    <div className="productsList">
      {
        books.map((book:any) => (
          <div className="productCard" style={{backgroundColor:"white"}} key={book.id}>
            <h2 className="productName">{book.title}</h2>
            <p>Written by {book.author}</p>
            <p className=".productPrice">Price {book.price} RON</p>
        
          </div>
        ))
      }
    </div>
  );
}

export default ProductsList;