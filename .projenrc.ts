import { typescript, javascript } from 'projen';
const project = new typescript.TypeScriptProject({
  authorName: 'yicr',
  authorEmail: 'yicr@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  name: 'jest-aws-cdk-asset-hash-serializer',
  projenrcTs: true,
  description: 'this package is aws cdk construct asset hash serializer',
  devDeps: [
    'aws-cdk-lib',
  ],
  jestOptions: {
    jestConfig: {
      snapshotSerializers: ['<rootDir>/src/index.ts'],
    },
  },
  publishTasks: true,
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '22.4.x',
  // depsUpgradeOptions: {
  //   workflowOptions: {
  //     labels: ['auto-approve', 'auto-merge'],
  //     schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 16 * * 4']), // every thursday 16:00 (JST/FRI/02:00)
  //   },
  // },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();