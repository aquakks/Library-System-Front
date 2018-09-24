import './Edit.css';
import * as React from "react";
import { Head } from "./Head";
import { Footer } from './Footer';
import { Form } from 'antd';

const FormItem = Form.Item;

const Edit = () => {
    const login = localStorage.getItem('email');
    return (
        <div> <Head />
      <div>Jesteś zalogowany jako : {login} </div>
      <FormItem>
          <label>login: <input type="text" name="login" onChange={this.handleSurnameChange} /></label><br />
        </FormItem>
        <FormItem>
          <label>hasło: <input type="text" name="password" onChange={this.handleBirthYearChange} /></label><br />
        </FormItem>
        <FormItem>
          <label>email:  <input type="text" name="email" onChange={this.handlenationalityChange} /></label>
        </FormItem>
          <input type="submit" value="Zatwierdź"/>
 <Footer />
      </div>
    );
};
export default Edit;