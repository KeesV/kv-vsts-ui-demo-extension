# kv-vsts-ui-demo-extension
A demo work item form tab page extension for Visual Studio Team Services (VSTS), using TypeScript and Webpack.

This repository is contains a few branches. Each branch builds on top of the previous, to show the various steps in creating a UI extension for VSTS.

The following branches are present:

0. **Master**: Contains the basic plumbing, like directory structure and initial configuration files for TypeScript & WebPack.
1. **VSTSIntegration**: Adds a manifest file and scripts for creating a VSIX file used for development.
1. **LocalDebugging**: Adds a launch configuration for VS Code to allow local debugging of your code. Note: this requires the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension for VS Code.
1. **ReleasePackage**: Adds scripts for creating the VSIX file that can be released to the Visual Studio Marketplace.
1. **SampleAPICall**: Adds some code to show how to do a call to the VSTS Rest API to get some data. Two implementations are provided: one using the (old) Q-based method, and one using the new async/await method.

So, if you want a quick way to get started with your own VSTS UI extension, then checkout the `SampleAPICall` branch and go from there. If you want to get an idea of how everything fits together, then have a look at the intermediate steps by checking out the other branches.

