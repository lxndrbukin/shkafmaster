import React from 'react';
import './Auth.scss';
import { Input } from './Input';

class NewAuth extends React.Component {
	render() {
		return (
			<form onSubmit={(e) => {e.preventDefault()}} className="form">
				<Input type="text" label="Имя пользователя" name="login" />
				<Input type="password" label="Пароль" name="password" />
				<Input type="password" label="Повторить пароль" name="password-repeat" />
				<input type="submit" value="Регистрация" className="form-button" />
			</form>
		)
	}
}

export default NewAuth;