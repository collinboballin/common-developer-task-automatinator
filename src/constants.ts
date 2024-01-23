import * as os from 'os';

const platform: NodeJS.Platform = os.platform();
const macPlatform: NodeJS.Platform = 'darwin';
const windowsPlatform: NodeJS.Platform = 'win32';
const linuxPlatform: NodeJS.Platform = 'linux';
const homeDir: string = os.homedir();
const emptySpace = ' ';

export {
    platform,
    macPlatform,
    windowsPlatform,
    linuxPlatform,
    homeDir,
    emptySpace
}


