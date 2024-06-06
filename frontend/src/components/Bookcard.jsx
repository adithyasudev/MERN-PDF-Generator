import { useState} from 'react';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const token = JSON.parse(localStorage.getItem('token'));
    


    const handleTaskRefresh = async()=>{
        try {                            
         const response = await axios.get( `https://evalution3-3.onrender.com/books/`, {
             headers: {
               Authorization: `Bearer ${token}`
             }
           });
           console.log(response.data.books);
           setBooks(response.data.books);
        } catch (error) {
         console.log(error.message);
        }
 }
 

    return (
        <div>
            <h2>Books</h2>
            <button onClick={handleTaskRefresh}>Refresh Books</button>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {books.map(book => (
                    <div key={book._id} style={{ width: '300px', margin: '10px', border: '1px solid #ccc', borderRadius: '5px' , boxshadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                        <img src={book.frontCoverImage} style={{ width: '100%', height: 'auto', borderRadius: '5px 5px 0 0' }} alt={book.title} />
                        <div style={{ padding: '10px' }}>
                            <h5>{book.title}</h5>
                            <p>Author: {book.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;