declare function sleep(ms?: number): Promise<unknown>;
declare function random(min?: number, max?: number): number;
/**
 * @function readdir Get the all of file names from directory
 * @param dir The path of directory
 */
declare function readdir(dir: string): string[];
declare function read(dir: string): Promise<void>;
declare function write(dir: string, data: any): void;
declare const _default: {
    sleep: typeof sleep;
    random: typeof random;
    write: typeof write;
    read: typeof read;
    readdir: typeof readdir;
};
export default _default;
