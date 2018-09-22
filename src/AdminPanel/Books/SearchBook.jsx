import './SearchBook.css';
import React, { Component } from 'react';



export class SearchBook extends Component {

     render() {
      
    return (
        <div>
            <input type="word" class="form-control" id="inputPassword2" placeholder="Wyszukiwanie"/> 
            <div>
            <form>
                <div class="category">
                    <select>
                        <option>id</option>
                        <option>autor</option>
                        <option>tytuł</option>
                        <option>wydawnictwo</option>
                        <option>rok</option>
                        <option>data publikacji</option>
                         <option>opis</option>
                    </select>
                </div>
            </form>                            
            <input type="btsearch" value="Szukaj"/>
            </div>
        </div>
    );
};
}

export default SearchBook;