import './SearchBorrow.css';
import React, { Component } from 'react';



export class SearchBorrow extends Component {

     render() {
      
    return (
        <div>
            <input type="word" class="form-control" id="inputPassword2" placeholder="Wyszukiwanie"/> 
            <div>
            <form>
                <div class="category">
                    <select>
                        <option>id</option>
                        <option>id użytkownika</option>
                        <option>id książki</option>
                        <option>data wypożyczenia</option>
                        <option>koniec wypożyczenia</option>
                        <option>kara</option>
                        <option>przedłużenie</option>
                        <option>czy zakończono</option>
                        <option>przedluz</option>
                    </select>
                </div>
            </form>                            
            <input type="btsearch" value="Szukaj"/>
            </div>
        </div>
    );
};
}

export default SearchBorrow;