#! /usr/bin/env node

import * as SDK from "@the-stations-project/sdk";

async function init() {
	const result = new SDK.Result(SDK.ExitCodes.Ok, undefined);

	/* create dir */
	(await SDK.Registry.mkdir("actions")).or_log_error()
		.err(() => result.finalize_with_code(SDK.ExitCodes.ErrUnknown));

	return result;
}

init().then((result) => console.log(result.to_string()));
