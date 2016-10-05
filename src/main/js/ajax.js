import $ from "jquery";

/**
 * Ajax functions.
 * TODO: rewrite with fetch APIs.
 */

const urlBase = '/bass';
export function list(url, callback, callbackError) {

	$.ajax({
		type: 'post',
		url: urlBase + url, //Controller/method
		dataType: 'json',
		cache: false,
		success: (data) => {
			callback(data)
		},
		error: (xhr, status, err) => {
			console.error(xhr, status, err.toString())
			if (callbackError !== undefined) {
				callbackError(err)
			}
		}
	});
}
/*export function create(url, user, callback, callbackError) {

	$.ajax({
		type: 'post',
		url: url, //Controller/method
		dataType: 'json',
		data: user,
		cache: false,
		success: (data) => {
			callback(data)
		},
		error: (xhr, status, err) => {
			console.error(xhr, status, err.toString())
			if (callbackError !== undefined) {
				callbackError(err)
			}
		}
	});
}*/

