import {homeDir, emptySpace, platform, windowsPlatform, linuxPlatform, macPlatform} from "../../constants";
import * as child_process from "child_process";

const createChildProcess = (installCommand: string, installArgs: string, optionalLoggingCallback: any, optionalGenericSuccessCallback: any): child_process.ChildProcessWithoutNullStreams => {
    const pathVariables = process.env.PATH;
    let installOptions: object = null;
    switch (platform) {
        case windowsPlatform:
            installOptions = {
                env: {
                    ...process.env,
                    HOMEDRIVE: "C:/",
                    PATH: pathVariables
                }
            }
            break;
        case linuxPlatform:
        case macPlatform:
            installOptions = {
                env: {
                    ...process.env,
                    PATH: pathVariables
                }
            }
            break;
    }
    return child_process.exec(installCommand + emptySpace + installArgs, installOptions, (error: Error, stdout: string, stderr: string) => {
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