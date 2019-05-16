import { AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import reducers from '../reducers';


let persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet
}
const persistedReducer = persistReducer(persistConfig, reducers);
export default function configureStore() {
    const store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor };
}
