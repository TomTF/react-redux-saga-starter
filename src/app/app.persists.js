import {createTransform} from 'redux-persist';
import { asyncSessionStorage } from 'redux-persist/storages'

const getInformationToPersist = (state, key) => {
    switch (key) {
        case 'authentication':
            return state;
        default:
            return null;
    }
}

const customTransform = createTransform(getInformationToPersist, getInformationToPersist);

// return a redux-persist config
export default {
    transforms : [customTransform],
    whitelist : ['authentication'],
    storage: asyncSessionStorage
};