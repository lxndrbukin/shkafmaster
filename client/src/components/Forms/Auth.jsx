import React from 'react';
import './Auth.scss';
import '../assets/Form.scss';
import {Input} from './Input';

class Auth extends React.Component {
	render() {
		return (
			<form action="/api/users" method="post"  className="form">
				<Input type="text" label="Имя пользователя" name="login" />
				<Input type="password" label="Пароль" name="password" />
				<input type="submit" value="Войти" className="form-button" />
			</form>
		)
	}
}

export default Auth;