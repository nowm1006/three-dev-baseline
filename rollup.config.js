import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import css from 'rollup-plugin-css-only'
import url from '@rollup/plugin-url'

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/main.js',
        format: 'iife'
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        css({output:'style.css'}),
        terser(),
        url()
    ]
}