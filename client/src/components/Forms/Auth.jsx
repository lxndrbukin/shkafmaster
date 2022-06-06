import React from 'react';
import './Auth.scss';
import '../assets/Form.scss';
import { socialsLogin } from './socialsLogin';
import { Input } from './Input';

class Auth extends React.Component {
	state = {
		auth: ''
	}

	render() {
		return (
			<form className="form">
				{/* <Input type="text" label="Имя пользователя" name="login" />
				<Input type="password" label="Пароль" name="password" /> */}
				<div className="auth-buttons">
					{/* <input type="submit" value="Войти" className="form-button" /> */}
					{socialsLogin.map(socialButton => {
						const { color, name, disabled, icon } = socialButton;
						return (
							<a 
								href={`/auth/${name.toLocaleLowerCase()}`}  
								style={{backgroundColor: color}} 
								className={`form-button social ${disabled ? `disabled` : ''}`}
								onClick={() => this.setState({auth: name.toLocaleLowerCase()})}
							>
								<i className={icon}></i>
								<span>Войти через {name}</span>
							</a>
						)
					})}
				</div>
			</form>
		)
	}
}

export default Auth;