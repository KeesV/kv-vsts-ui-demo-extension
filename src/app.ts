/// <reference types="vss-web-extension-sdk" />

import * as WitExtensionContracts  from "TFS/WorkItemTracking/ExtensionContracts";

export function register() {
    VSS.register(VSS.getContribution().id, {
        onLoaded: (args: WitExtensionContracts.IWorkItemLoadedArgs) => {
            // Stuff to do when item is loaded here
            writeOutput();
        },
        onUnloaded: (args: WitExtensionContracts.IWorkItemChangedArgs) => {
            // Stuff to do when item is unloaded here
        }
        ,
        onRefreshed: (args: WitExtensionContracts.IWorkItemChangedArgs) => {
            // Stuff to do when item is refreshed here
        },
        onSaved: (args: WitExtensionContracts.IWorkItemChangedArgs) => {
            // Stuff to do when item is saved here
        }
    } as WitExtensionContracts.IWorkItemNotificationListener)
}

function writeOutput() {

    let text: string = "Hello World!";
    document.write(text);
}