'use strict';

const rest = require("../inc/rest");
const common = require("../inc/common");
const log = common.log;
const error = common.error;
const debug = common.debug;

function status() {
    rest.get("/api/v1/admin/status").end(r => {
        if (rest.check(r, 200, "Could not get status")) {
            log("Status: " + r.body.status);
        }
    });
}

function indexSync(env, options) {
    rest.post("/api/v1/search/sync").end(r => {
        if (rest.check(r, 200, "Could not invoke index sync")) {
            log("Invoked: " + r.body.message);
        }
    });
}

function indexClear(env, options) {
    rest.post("/api/v1/search/clear").end(r => {
        if (rest.check(r, 200, "Could not invoke index clear")) {
            log("Invoked: " + r.body.message);
        }
    });
}

function backup(env, options) {
    rest.post("/api/v1/admin/graphdb/backup").end(r => {
        if (rest.check(r, 200, "Could not invoke backup")) {
            log("Invoked server side backup process.");
        }
    });
}

function restore(env, options) {
    rest.post("/api/v1/admin/graphdb/restore").end(r => {
        if (rest.check(r, 200, "Could not invoke restore")) {
            log("Invoked server side restore process.");
        }
    });
}

module.exports = { status, backup, restore, indexClear, indexSync }