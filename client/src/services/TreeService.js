import axios from 'axios';

const url = '/api/v1/trees';
const s3url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/v1/s3/sign-s3'
    : '/api/v1/s3/sign-s3';

class TreeService {
  // GET trees
  static async getTrees() {
    try {
      const res = await axios.get(url);
      const data = res.data;
      return data;
    } catch (error) {
      alert(error);
    }
  }

  // Create trees
  static async addTree(data) {
    try {
      const dataWithImageUrl = await TreeService.getSignedImage(data);
      const result = await axios.post(url, dataWithImageUrl);
      const newData = result.data;
      return newData;
    } catch (error) {
      alert(error);
    }
  }

  static async getSignedImage(data) {
    try {
      if (data.photo === null) {
        return data;
      }

      const dataCopy = Object.assign({}, data);
      const urlEncodedName = encodeURI(
        `image_${Math.round(new Date().getTime() / 1000)}`
      );

      const photoType = dataCopy.photo.type;

      const photoImageUrl = `${s3url}?file-name=${urlEncodedName}&file-type=${photoType}`;
      let photoData = await axios.get(photoImageUrl);
      photoData = photoData.data;

      const uploadOptions = {
        method: 'PUT',
        headers: { 'Content-type': `${photoType}` },
        body: dataCopy.photo
      };

      await fetch(photoData.signedRequest, uploadOptions);
      dataCopy.photo = photoData.url;
      return dataCopy;
    } catch (error) {
      alert(error);
    }
  }

  // Delete Trees
  static deleteTree(id) {
    return axios.delete(`${url}/${id}`);
  }
}

export default TreeService;
