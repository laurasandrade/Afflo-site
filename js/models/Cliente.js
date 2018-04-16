class Cliente {
	constructor(nome,email,ip,data) {
		this._nome = nome;
		this._email = email;
		this._ip = ip;
		this._data = data;
		Object.freeze(this);
	}

	get nome() {
		return this._nome;
	}

	get email() {
		return this.email;
	}

	get ip() {
		return this._ip;
	}
	get data() {
		return this._data;
	}


}