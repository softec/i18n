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

(function (i18n) {
  new (Class.create(i18n.Locale, {
    initialize: function($super) {
      $super('fr');
      this.setTranslations({
//---- DO NOT EDIT ABOVE THIS LINE --------------------------------------------
getmessage: 'Voici un message constant',
formatmesg: 'Voici un message #{variable} avec #{two} arguments'
//---- DO NOT EDIT BELOW THIS LINE --------------------------------------------      
      });
    }
  }))();
}(i18n));
