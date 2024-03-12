import { put, takeEvery } from 'redux-saga/effects';
import mime from 'mime';

import { SEND_FILES } from '../actions/sendFiles';
import postActivity from '../actions/postActivity';
import whileConnected from './effects/whileConnected';

const getType = mime.getType.bind(mime);

// TODO: We want the message text to go with the files
function* postActivityWithFiles({ payload: { files, text } }) {
// console.log(files, text);
  yield put(
    postActivity({
      attachments: [].map.call(files, ({ name, thumbnail, url }) => ({
        contentType: getType(name) || 'application/octet-stream',
        contentUrl: url,
        name,
        thumbnailUrl: thumbnail
      })),
      channelData: {
        attachmentSizes: [].map.call(files, ({ size }) => size)
      },
      text,
      type: 'message'
    })
  );
}

function* sendFilesToPostActivity() {
  yield takeEvery(({ payload, type }) => type === SEND_FILES && payload.files.length, postActivityWithFiles);
}

export default function* sendFilesToPostActivitySaga() {
  yield whileConnected(sendFilesToPostActivity);
}
