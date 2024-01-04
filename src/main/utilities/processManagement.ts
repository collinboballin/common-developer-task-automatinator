import {homeDir, emptySpace, platform, windowsPlatform, linuxPlatform, macPlatform} from "../../constants";
import * as child_process from "child_process";

const createChildProcess = (execCommand: string, execArgs: string, optionalLoggingCallback: any, optionalGenericSuccessCallback: any): child_process.ChildProcessWithoutNullStreams => {
    const pathVariables = process.env.PATH;
    let execOptions: object = null;
    switch (platform) {
        case windowsPlatform:
            execOptions = {
                env: {
                    ...process.env,
                    HOMEDRIVE: "C:/",
                    PATH: pathVariables
                }
            }
            break;
        case linuxPlatform:
        case macPlatform:
            execOptions = {
                env: {
                    ...process.env,
                    PATH: pathVariables
                }
            }
            break;
    }
    return child_process.exec(execCommand + emptySpace + execArgs, execOptions, (error: Error, stdout: string, stderr: string) => {
        if (error) {
            if (optionalLoggingCallback) {
                optionalLoggingCallback(error.message);
            }
        }
        if (stdout) {
            if (optionalGenericSuccessCallback) {
                optionalGenericSuccessCallback(stdout);
            }
            if (optionalLoggingCallback) {
                optionalLoggingCallback(stdout);
            }
        }
        if (stderr) {
            if (optionalLoggingCallback) {
                optionalLoggingCallback(stderr);
            }
        }
    }).on('close', () => {
        console.log('closing child process...');
    });
}

export {
    createChildProcess
}