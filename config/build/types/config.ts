export type buildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildEnv {
    mode: buildMode;
    port: number;
}

export interface buildOptions {
    mode: buildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}