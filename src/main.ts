import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/exec";
import * as io from "@actions/io";

async function run(): Promise<void> {
  try {
    // `who-to-greet` input defined in action metadata file
    const certificatePath = core.getInput("certificate-path");
    const provisioningProfilePath = core.getInput("provisioning-profile-path");
    const itunesConnectUsername = core.getInput("itunes-connect-username");
    const itunesConnectPassword = core.getInput("itunes-connect-password");

    console.log({
      certificate: certificatePath,
      provisioningProfilePath: provisioningProfilePath,
      itunesConnectUsername: itunesConnectUsername,
      itunesConnectPassword: itunesConnectPassword
    });

    const time = new Date().toTimeString();
    core.setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

// 1.install cordova
// 2.set key chain
// 3.add provisioning profile
// 4.add siging certificate
// 5.build the app
// 6.deploy the app
