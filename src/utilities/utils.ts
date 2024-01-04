import { platform, linuxPlatform, macPlatform, windowsPlatform } from "../constants";

const isMac: boolean = (platform === macPlatform);
const isLinux: boolean = (platform === linuxPlatform);
const isWindows: boolean = (platform === windowsPlatform);

export {
    isMac,
    isLinux,
    isWindows
}