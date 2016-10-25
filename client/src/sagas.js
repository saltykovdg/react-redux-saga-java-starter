import { rootMessageSaga } from './modules/Message/MessageSaga';

export default function* rootSaga() {
  yield [
    ...rootMessageSaga,
  ];
}
