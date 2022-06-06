import React from 'react';
import './Auth.scss';
import '../assets/Form.scss';
import { lang } from '../assets/Languages/language';
import authLocalization from '../assets/Languages/authLocalization.json';
import { Input } from './Input';

class Auth extends React.Component {
	render() {
		return (
			<form className="form">
				{/* <Input type="text" label="Имя пользователя" name="login" />
				<Input type="password" label="Пароль" name="password" /> */}
				<div className="auth-buttons">
					{/* <input type="submit" value="Войти" className="form-button" /> */}
					{
						authLocalization[0].authButtons.map(authButton => {
							return (
								<a 
									href={ `/auth/${authButton.name.toLocaleLowerCase()}` }  
									style={ {backgroundColor: authButton.color} } 
									className={ `form-button social ${authButton.disabled === true ? `disabled` : ''}` }
									onClick={ () => this.setState({auth: authButton.name.toLocaleLowerCase()}) }
								>
									<i className={ authButton.icon }></i>
									<span>{ authLocalization[1].text[lang] } { authButton.name }</span>
								</a>
							)
						})
					}
				</div>
			</form>
		)
	}
}

export default Auth;