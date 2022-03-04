const { v4: uuidv4 } = require("uuid");

const params = (fileName) => {
    const myFile = fileName.originalname.split(".");
    const fileType = myFile[myFile.length - 1];

    const imageParams = {
        Bucket: "user-images-af573661-1fd0-4a72-bbf5-882d43859088",
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer,
    };

    return imageParams;
};

module.exports = params;