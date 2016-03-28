function serializeForm(formElement) {
	var elements = {},
		serializeObject = {};

	if (formElement == null) {
		return false;
	}

	if (typeof formElement === "string") {
		console.log(formElement);
		console.log(document.getElementById(formElement));
		return serializeForm(document.getElementById(formElement));
	}

	elements = formElement.elements;

	for (let i = 0, len = elements.length; i < len; i++) {
		let elem = elements[i];

		if (elem.name == null) {
			continue;
		}

		console.log(elem.type);
	}

	return serializeObject;

}

export default serializeForm;