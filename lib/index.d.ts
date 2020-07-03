declare let output: {
    common: {
        sleep: (ms?: number) => Promise<unknown>;
        random: (min?: number, max?: number) => number;
        write: (dir: string, data: any) => void;
        read: (dir: string) => Promise<void>;
        readdir: (dir: string) => string[];
    };
};
export default output;
