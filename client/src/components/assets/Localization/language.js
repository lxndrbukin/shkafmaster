const language = localStorage.getItem('language');
export const lang = language ? language.toLocaleLowerCase() : 'ro';