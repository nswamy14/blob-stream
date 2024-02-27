import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import legacy from 'rollup-plugin-legacy';
import { babel } from '@rollup/plugin-babel';

export default [
    {
        input: "./blob-stream.js",
        output: [
            {
                file: "dist/blob-stream.esm.js",
                format: "es",
                name: "blobStream",
            },
        ],
        plugins: [
            babel(),
            nodeResolve(),
            legacy({
                './blob-stream.js': 'blobStream'
            }),
        ],
    },
    {
        input: "./blob-stream.js",
        output: [
            {
                file: "dist/blob-stream.js",
                format: "umd",
                name: "blobStream",
            },
        ],
        plugins: [
            babel(),
            nodeResolve(),
            legacy({
                './blob-stream.js': 'blobStream'
            })
        ],
    }
];
