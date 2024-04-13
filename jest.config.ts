import type { Config } from 'jest';

const config: Config = {
    verbose: true,
};

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(test).[tj]s?(x)'], // Ajuste os padrões para encontrar testes
    moduleFileExtensions: ['ts', 'js'], // Adicione a extensão .ts
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest', // Transformar arquivos .ts e .tsx com ts-jest
    },
};


export default config;