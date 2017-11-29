/// <reference types="vss-web-extension-sdk" />

import * as Q from "q";
import * as WitExtensionContracts from "TFS/WorkItemTracking/ExtensionContracts";
import * as WorkItemServices from "TFS/WorkItemTracking/Services";

export function register() {
    VSS.register(VSS.getContribution().id, {
        onLoaded: (args: WitExtensionContracts.IWorkItemLoadedArgs) => {
            // Stuff to do when item is loaded here
            getOutputPromiseBased().then(result => {
                document.write(result);
            });

            getOutputAsync().then(result => {
                document.write(result);
            });
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

// This uses Q to create a promise, which is resolved when the result from the WorkItemFormService comes in
function getOutputPromiseBased(): Q.IPromise<string> {
    let defer = Q.defer<string>();

    WorkItemServices.WorkItemFormService.getService().then((svc) => {
        console.log("Got work item form service!");
        svc.getFields().then(fields => {
            console.log("Promise Fulfilled!");
            defer.resolve("Work item fields from Promise: <pre>" + JSON.stringify(fields,null,2) + "</pre><br>");
        }, reason => {
            console.log("Promise Rejected!");
        })
    });
    console.log("Blep");
    return defer.promise;
}

// This uses the new TypeScript async/await. Upside is that it's much more readable. Downside is that it needs a polyfill for older browsers 
// (not included in this sample, but you can use e.g. es6-promise), and it's not as intuitive when using a debugger 
async function getOutputAsync(): Promise<string> {
    let svc = await WorkItemServices.WorkItemFormService.getService();
    console.log("Got work item form service async!");
    let fields = await svc.getFields();
    console.log("Got fields async!");
    return "Work item fields from async: <pre>" + JSON.stringify(fields,null,2) + "</pre><br>";
}