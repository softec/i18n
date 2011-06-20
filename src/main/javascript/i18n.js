/*
 * Copyright 2010 SOFTEC sa. All rights reserved.
 *
 * This source code is licensed under the Creative Commons
 * Attribution-NonCommercial-NoDerivs 3.0 Luxembourg
 * License.
 *
 * To view a copy of this license, visit
 * http://creativecommons.org/licenses/by-nc-nd/3.0/lu/
 * or send a letter to Creative Commons, 171 Second Street,
 * Suite 300, San Francisco, California, 94105, USA.
 */

var i18n = (function (i18n, ApiLoader, navigator) {

  var numberToLocaleString = Number.prototype.toLocaleString,
      dateToLocaleString = Date.prototype.toLocaleString,
      arrayToLocaleString = Array.prototype.toLocaleString;

  i18n.Locale = Class.create({
    initialize: function(lang,translations) {
      this._lang = lang;
      this._tr = translations || {};

      i18n.locales = i18n.locales || {};
      i18n.locales[lang] = this;
      i18n.locale = i18n.locales[i18n.language] || i18n.defaultLocale || this;
    },

    setTranslations: function(translations) {
      this._tr = translations;
    },

    add: function(translations) {
      Object.extend(this._tr,translations);
    },

    stringToLocaleString: function(msg,data) {
      var tmsg = this._tr[msg] || i18n.defaultLocale._tr[msg] || msg;
      if( arguments.length < 2 ) {
        return String.interpret(tmsg);
      } else {
        return String.interpret(tmsg).interpolate(data);
      }
    },

    numberToLocaleString: function(num) {
      numberToLocaleString.call(num);
    },

    dateToLocaleString: function(date) {
      dateToLocaleString.call(date);
    },

    arrayToLocaleString: function(array) {
      arrayToLocaleString.call(array);
    }
  });

  i18n.language = (navigator.language || navigator.userLanguage || navigator.systemLanguage || '').slice(0,2);
  i18n.defaultLocale = new i18n.Locale('');

  i18n.load = function(lang, baseUrl) {
    if( Object.isUndefined(i18n.locales[lang]) ) {
      ApiLoader.load({
          name: "i18n-locale-" + lang,
          url: (baseUrl || ('i18n-locale-' + lang + '.js'))
      });
      return void(0);
    }
    return i18n.locales[lang];
  };

  return i18n;
}(i18n || {}, ApiLoader, navigator));

Object.extend(String.prototype, {
  toLocaleString: function(data) {
    return i18n.locale.stringToLocaleString(this,data);
  },
  $: function(data) {
    return i18n.locale.stringToLocaleString(this,data);
  },
  _: function(data) {
    return i18n.locale.stringToLocaleString(this,data);
  }
});

Object.extend(Number.prototype, {
  toLocaleString: function(data) {
    return i18n.locale.numberToLocaleString(this,data);
  },
  $: function(data) {
    return i18n.locale.numberToLocaleString(this,data);
  },
  _: function(data) {
    return i18n.locale.numberToLocaleString(this,data);
  }
});

Object.extend(Date.prototype, {
  toLocaleString: function(data) {
    return i18n.locale.dateToLocaleString(this,data);
  },
  $: function(data) {
    return i18n.locale.dateToLocaleString(this,data);
  },
  _: function(data) {
    return i18n.locale.dateToLocaleString(this,data);
  }
});

Object.extend(Array.prototype, {
  toLocaleString: function(data) {
    return i18n.locale.arrayToLocaleString(this,data);
  },
  $: function(data) {
    return i18n.locale.arrayToLocaleString(this,data);
  },
  _: function(data) {
    return i18n.locale.arrayToLocaleString(this,data);
  }
});
