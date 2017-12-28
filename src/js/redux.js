import {
    applyMiddleware,
    combineReducers,
    createStore,
} from 'redux';

import thunk from 'redux-thunk';

import { TAB_LOGIC } from './constants/TAB_LOGIC';

import { GALLERY_LOGIC } from './constants/GALLERY_LOGIC';

import { INTRO_LOGIC } from './constants/INTRO_LOGIC';

import tabLogicState from './states/tabLogic';

import galleryLogicState from './states/galleryLogic';

import introLogicState from './states/introLogic';

// actions.js
export const changePage = (title) => ({
	type: TAB_LOGIC.CHANGE_PAGE,
	title
});

export const showPicture = (src) => ({
    type: GALLERY_LOGIC.SHOW_PICTURE,
    src
});

export const hidePicture = () => ({
    type: GALLERY_LOGIC.HIDE_PICTURE,
});

export const hideIntro = () => ({
    type: INTRO_LOGIC.HIDE_INTRO
});

// reducers.js
export const introLogicReducer = (state = introLogicState, action) => {
    switch (action.type) {
        case INTRO_LOGIC.HIDE_INTRO:
            return Object.assign({}, state, {
                introActive: false
            });
        default:
            return state;
    }
};

export const tabLogicReducer = (state = tabLogicState, action) => {
	switch (action.type) {
		case TAB_LOGIC.CHANGE_PAGE:
            return Object.assign({}, state, {
                page: action.title
            });
        default:
            return state;
    }
};

export const galleryLogicReducer = (state = galleryLogicState, action) => {
	switch (action.type) {
		case GALLERY_LOGIC.SHOW_PICTURE:
            return Object.assign({}, state, {
                activePicture: action.src,
                pictureActive: true
            });
        case GALLERY_LOGIC.HIDE_PICTURE:
            return Object.assign({}, state, {
                activePicture: '',
                pictureActive: false
            });
        default:
            return state;
    }
};

export const reducers = combineReducers({
    tabLogicReducer,
    galleryLogicReducer,
    introLogicReducer
});

// store.js
export function configureStore(initialState = {}) {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    )
    return store;
};

export const store = configureStore();