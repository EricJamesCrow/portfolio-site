import S3 from 'aws-sdk/clients/s3'

const s3 = new S3({
  apiVersion: '2006-03-01'
})

interface RequestBody {
  file: string;
  fileType: string;
}

export async function POST(req: Request) {
  const body:RequestBody = await req.json();
  
  const post = await s3.createPresignedPost({
    Bucket: process.env.BUCKET_NAME,
    Fields: {
      key: body.file,
      'Content-Type': body.fileType,
    },
    Expires: 60, // seconds
    Conditions: [
      ['content-length-range', 0, 5242880] // up to 5 MB
    ],
  })

  return new Response(JSON.stringify(post))
}
