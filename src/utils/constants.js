export const errorsMessages = {
  moviesResError:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
};

export const classes = {
  favoriteBtn: 'movie-card__favorite-btn',
  deleteBtn: 'movie-card__favorite-delete',
};

//breakpoints
export const SCREEN_MOBILE = 765;
export const SCREEN_S = 766;
export const SCREEN_XL = 1280;

export const nameRegex = /^[a-zA-Zа-яА-Я\s-]+$/;
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;