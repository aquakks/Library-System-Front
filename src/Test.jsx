import React, { Component } from "react";

let token = localStorage.getItem('token');


class Test extends Component {

    


    render() {
        return (
       <div>
 Twoj token to :   {token}
 <a href="/">Przejdz do strony glownej</a>

       </div>
    );
}};

export default Test;