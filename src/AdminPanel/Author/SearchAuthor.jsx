import './SearchAuthor.css';
import React, { Component } from 'react';



export class SearchAuthor extends Component {

     render() {
      
    return (
        <div>
            <input type="word" class="form-control" id="inputPassword2" placeholder="Wyszukiwanie"/> 
            <div>
            <form>
                <div class="category">
                    <select>
                        <option>id</option>
                        <option>imię</option>
                        <option>nazwisko</option>
                        <option>rok urodzenia</option>
                        <option>narodowość</option>
                    </select>
                </div>
            </form>                            
            <input type="btsearch" value="Szukaj"/>
            </div>
        </div>
    );
};
}

export default SearchAuthor;