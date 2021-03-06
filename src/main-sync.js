#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const program = require('commander');
// Patch commander for nicer help
require("./inc/commander");

const sync = require("./actions/sync");

const configure = require("./actions/configure");
const common = require("./inc/common");
const log = common.log;
const error = common.error;
const debug = common.debug;

common.register("Synchronize data between filesystem and remote server.");
configure.register();

program
    .usage("sync [options] [command]");

program
    .command("pull [name]")
    .description("Pull the current structure of the server and store it locally.")
    .action(sync.pull);

program
    .command("push")
    .description("Push the local changes to the remote server.")
    //the local bootstrap structure with the remote Gentics Mesh instance. You can use this command to setup initial project structure which you added to your local repository.
    .action(sync.push);

common.registerEnd();

program.parse(process.argv);

var noSubCommand = program.args.length === 0;
if (noSubCommand) {
    program.help();
}

