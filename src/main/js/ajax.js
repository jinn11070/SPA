import $ from "jquery";

/**
 * Ajax functions.
 * TODO: rewrite with fetch APIs.
 */

export function getList(callback, callbackError) {

	$.ajax({
		type: 'post',
		url: '/user/getList', //Controller/method
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

