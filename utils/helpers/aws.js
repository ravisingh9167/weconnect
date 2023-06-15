const aws= require('aws-sdk')

const s3= new aws.S3({
    signatureVersion: 'v4',
    region: "ap-south-1",
    accessKeyId: "AKIATBGSFL7XGS77MXP4",
    secretAccessKey: "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"
})

exports.uploadS3= (body)=>{
    const params={
        Bucket: "weconnect-here",
        Key: "temp.txt",
        Body: body
    }
    return new Promise((resolve, reject)=>{
        s3.upload(params, (err, data)=>{
            if(err) reject(err)
            else resolve(data)
        })
    })
}

exports.getSignedUrl= (key)=>{
    let url= s3.getSignedUrl("getObject", {
        Bucket: "weconnect-here",
        Key: key,
        Expires: 24*60*60
    })
    return url;
}