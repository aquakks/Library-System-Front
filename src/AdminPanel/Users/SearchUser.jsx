import './SearchUser.css';
import React, { Component } from 'react';



export class SearchUser extends Component {

     render() {
      
    return (
        <div>
            <input type="word" class="form-control" id="inputPassword2" placeholder="Wyszukiwanie"/> 
            <div>
            <form>
                <div class="category">
                    <select>
                        <option>id</option>
                        <option>email</option>
                        <option>imię</option>
                        <option>nazwisko</option>
                        <option>zaaktualizowano</option>
                        <option>utworzono</option>
                    </select>
                </div>
            </form>                            
            <input type="btsearch" value="Szukaj"/>
            </div>
        </div>
    );
};
}

export default SearchUser;