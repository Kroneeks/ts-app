import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isSvg(value: string) {
    return value.startsWith('@/shared') && value.endsWith('svg');
}

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();

        if (isSvg(value)) {
            importDeclaration.setModuleSpecifier(`${value}?react`);
        }
    });
});

project.save();
