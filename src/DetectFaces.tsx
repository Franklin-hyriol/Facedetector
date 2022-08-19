import { RekognitionClient } from "@aws-sdk/client-rekognition";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { DetectFacesCommand } from "@aws-sdk/client-rekognition";

async function DetectFaces(imageData: Uint8Array) {

    const REGION: string = "eu-west-2";

    const rekognitionClient = new RekognitionClient({
        region: REGION,
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({ region: REGION }),
            identityPoolId: "eu-west-2:371cdf1c-657e-4e3f-a6a0-3cdcf905bfdc"
        }),
    });

  var params = {
    Image: {
      Bytes: imageData,
    },
    Attributes: ["ALL"],
  };
  try {
    const data = await rekognitionClient.send(new DetectFacesCommand(params));
    console.log(data.FaceDetails);
  } catch (err) {
    console.log("Error", err);
  }
}
export default DetectFaces;