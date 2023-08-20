import S3 from 'aws-sdk/clients/s3'
import { NextApiRequest } from 'next'

const s3 = new S3({
  apiVersion: '2006-03-01',
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

interface RequestBody {
  image: File;
}

export async function POST(req: NextApiRequest) {
  const body: RequestBody = await req.body;

  console.log(body)
  console.log(body.image);

  const params = {
    Bucket: process.env.BUCKET_NAME as string, // Ensure it's not undefined
    Key: body.image.name,
    Body: body.image, 
    ContentType: body.image.type,
  }

  try {
    const upload = await s3.upload(params).promise();
    // You can return the URL or other information here.
    console.log("Upload successful:", upload.Location);
    return upload.Location;
  } catch (error) {
    console.error("Error uploading to S3:", error);
    // Handle error appropriately, maybe return an error response.
  }
}
