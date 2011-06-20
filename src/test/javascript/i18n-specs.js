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

describe('i18n', function() {

  it('works even when not setup', function(){
    expect('This is a test'.toLocaleString()).toEqual('This is a test');
  });

  it('have a default locale', function(){
    expect(i18n.language).toBeDefined();
    expect(i18n.language.length).toEqual(2);
    i18n.language = 'fr';
    expect(i18n.defaultLocale).toBeDefined();
    expect(i18n.locales).toBeDefined();
    expect(i18n.locale).toBeDefined();
    i18n.defaultLocale.add({'getmessage':'This is a constant test message',
                            'formatmesg':'This is a #{variable} message with #{two} arguments'});
    expect(i18n.locales['']._tr.getmessage).toEqual('This is a constant test message');
    expect(i18n.locales['']._tr.formatmesg).toEqual('This is a #{variable} message with #{two} arguments');
  });

  it('provide an implementation of toLocalString() for Strings, as well as two alias ($,_)', function() {
    expect('getmessage'.toLocaleString()).toEqual('This is a constant test message');
    expect('formatmesg'.toLocaleString({variable:"custom",two:2})).toEqual('This is a custom message with 2 arguments');
    expect('getmessage'.$()).toEqual('This is a constant test message');
    expect('formatmesg'.$({variable:"custom",two:2})).toEqual('This is a custom message with 2 arguments');
    expect('getmessage'._()).toEqual('This is a constant test message');
    expect('formatmesg'._({variable:"custom",two:2})).toEqual('This is a custom message with 2 arguments');
  });

  it('allows capturing of toLocaleString() per locale for Number', function(){
    i18n.locales[''].numberToLocaleString = jasmine.createSpy('numbertoLocaleString');
    (1).toLocaleString('test1');
    expect(i18n.locales[''].numberToLocaleString).toHaveBeenCalledWith(1,'test1');
    (2).$('test2');
    expect(i18n.locales[''].numberToLocaleString).toHaveBeenCalledWith(2,'test2');
    (3)._('test3');
    expect(i18n.locales[''].numberToLocaleString).toHaveBeenCalledWith(3,'test3');
  });

  it('allows capturing of toLocaleString() per locale for Date', function(){
    i18n.locales[''].dateToLocaleString = jasmine.createSpy('datetoLocaleString');
    var now1 = new Date();
    now1.toLocaleString('test1');
    expect(i18n.locales[''].dateToLocaleString).toHaveBeenCalledWith(now1,'test1');
    var now2 = new Date();
    now2.$('test2');
    expect(i18n.locales[''].dateToLocaleString).toHaveBeenCalledWith(now2,'test2');
    var now3 = new Date();
    now3._('test3');
    expect(i18n.locales[''].dateToLocaleString).toHaveBeenCalledWith(now3,'test3');
  });

  it('allows capturing of toLocaleString() per locale for Array', function(){
    i18n.locales[''].arrayToLocaleString = jasmine.createSpy('arraytoLocaleString');
    [1].toLocaleString('test1');
    expect(i18n.locales[''].arrayToLocaleString).toHaveBeenCalledWith([1],'test1');
    [2].$('test2');
    expect(i18n.locales[''].arrayToLocaleString).toHaveBeenCalledWith([2],'test2');
    [3]._('test3');
    expect(i18n.locales[''].arrayToLocaleString).toHaveBeenCalledWith([3],'test3');
  });

  it('can loads new locale and switch to them', function(){
    runs(function() {
      expect(i18n.locales.fr).not.toBeDefined();
      expect(i18n.load('fr','../test-scripts/i18n-locale-fr.js')).toBeFalsy();
      expect(i18n.locales.fr).not.toBeDefined();
      expect('getmessage'.toLocaleString()).toEqual('This is a constant test message');
      expect('formatmesg'.toLocaleString({variable:"custom",two:2})).toEqual('This is a custom message with 2 arguments');
    });

    waits(1000);

    runs(function() {
      expect(i18n.load('fr','../test-scripts/i18n-locale-fr.js')).toBeTruthy();
      expect(i18n.locales.fr._tr.getmessage).toBeDefined();
      expect(i18n.locales.fr._tr.formatmesg).toBeDefined();
      expect('getmessage'.toLocaleString()).toEqual('Voici un message constant');
      expect('formatmesg'.toLocaleString({variable:'spécial',two:2})).toEqual('Voici un message spécial avec 2 arguments');
    });
  });

});
