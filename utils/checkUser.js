function isEmail(email) {
	if (email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi)) {
		return true;
	} else {
		return new Error('Некорректный е-мэил')
	}
}

function isBTCAddress(address) {
	if (address.match(/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/ig)) {
		return true;
	}
	else if (address.match(/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/ig)) {
		return true;
	}
	else {
		return new Error('Hе соответствует формату BTC адреса')
	}
}

function isPassword(password) {
	if (password.match(/^\S{8,}$/ig)) {
		return true;
	} else {
		return new Error('Пароль должен быть больше 8 символов и может соделжать латинские буквы, цифры и другие символы кроме пробелов')
	}

}

function isLogin(login) {
	if (login.match(/^[a-zA-Z0-9]{3,}$/gi)) {
		return true;
	} else {
		return new Error('Имя пользователя должно содержать только латинские буквы и цифры')
	}

}

export default {
	isEmail,
	isBTCAddress,
	isPassword,
	isLogin
}