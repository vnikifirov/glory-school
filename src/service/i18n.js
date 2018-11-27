import dictionary from "./dictionary";

class I18nService {
  constructor(locale) {
    this._locale = locale;
  }

  get locale() {
    return this._locale;
  }

  set locale(locale) {
    this._locale = locale;
  }

  translate = (token, defaultValue) => {
    return dictionary[this._locale][token] || defaultValue;
  };

  getToken = (value, locale) => {
    for(let key in dictionary[locale]) {
      if (dictionary[locale][key] === value) return key;
    }
  }
}

export default I18nService;
