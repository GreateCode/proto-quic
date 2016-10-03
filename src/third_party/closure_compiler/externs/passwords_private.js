// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file was generated by:
//   tools/json_schema_compiler/compiler.py.
// NOTE: The format of types has changed. 'FooType' is now
//   'chrome.passwordsPrivate.FooType'.
// Please run the closure compiler before committing changes.
// See https://chromium.googlesource.com/chromium/src/+/master/docs/closure_compilation.md

/** @fileoverview Externs generated from namespace: passwordsPrivate */

/**
 * @const
 */
chrome.passwordsPrivate = {};

/**
 * @typedef {{
 *   originUrl: string,
 *   username: string
 * }}
 * @see https://developer.chrome.com/extensions/passwordsPrivate#type-LoginPair
 */
chrome.passwordsPrivate.LoginPair;

/**
 * @typedef {{
 *   loginPair: !chrome.passwordsPrivate.LoginPair,
 *   linkUrl: string,
 *   numCharactersInPassword: number,
 *   federationText: (string|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/passwordsPrivate#type-PasswordUiEntry
 */
chrome.passwordsPrivate.PasswordUiEntry;

/**
 * @typedef {{
 *   exceptionUrl: string,
 *   linkUrl: string
 * }}
 * @see https://developer.chrome.com/extensions/passwordsPrivate#type-ExceptionPair
 */
chrome.passwordsPrivate.ExceptionPair;

/**
 * @typedef {{
 *   loginPair: !chrome.passwordsPrivate.LoginPair,
 *   plaintextPassword: string
 * }}
 * @see https://developer.chrome.com/extensions/passwordsPrivate#type-PlaintextPasswordEventParameters
 */
chrome.passwordsPrivate.PlaintextPasswordEventParameters;

/**
 * Removes the saved password corresponding to |loginPair|. If no saved password
 * for this pair exists, this function is a no-op.
 * @param {!chrome.passwordsPrivate.LoginPair} loginPair The LoginPair
 *     corresponding to the entry to remove.
 * @see https://developer.chrome.com/extensions/passwordsPrivate#method-removeSavedPassword
 */
chrome.passwordsPrivate.removeSavedPassword = function(loginPair) {};

/**
 * Removes the saved password exception corresponding to |exceptionUrl|. If no
 * exception with this URL exists, this function is a no-op.
 * @param {string} exceptionUrl The URL corresponding to the exception to
 *     remove.
 * @see https://developer.chrome.com/extensions/passwordsPrivate#method-removePasswordException
 */
chrome.passwordsPrivate.removePasswordException = function(exceptionUrl) {};

/**
 * Returns the plaintext password corresponding to |loginPair|. Note that on
 * some operating systems, this call may result in an OS-level reauthentication.
 * Once the password has been fetched, it will be returned via the
 * onPlaintextPasswordRetrieved event. TODO(hcarmona): Investigate using a
 * callback for consistency.
 * @param {!chrome.passwordsPrivate.LoginPair} loginPair The LoginPair
 *     corresponding to the entry whose password     is to be returned.
 * @see https://developer.chrome.com/extensions/passwordsPrivate#method-requestPlaintextPassword
 */
chrome.passwordsPrivate.requestPlaintextPassword = function(loginPair) {};

/**
 * Returns the list of saved passwords.
 * @param {function(!Array<!chrome.passwordsPrivate.PasswordUiEntry>):void}
 *     callback Called with the list of saved passwords.
 * @see https://developer.chrome.com/extensions/passwordsPrivate#method-getSavedPasswordList
 */
chrome.passwordsPrivate.getSavedPasswordList = function(callback) {};

/**
 * Returns the list of password exceptions.
 * @param {function(!Array<!chrome.passwordsPrivate.ExceptionPair>):void}
 *     callback Called with the list of password exceptions.
 * @see https://developer.chrome.com/extensions/passwordsPrivate#method-getPasswordExceptionList
 */
chrome.passwordsPrivate.getPasswordExceptionList = function(callback) {};

/**
 * Fired when the saved passwords list has changed, meaning that an entry has
 * been added or removed.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/passwordsPrivate#event-onSavedPasswordsListChanged
 */
chrome.passwordsPrivate.onSavedPasswordsListChanged;

/**
 * Fired when the password exceptions list has changed, meaning that an entry
 * has been added or removed.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/passwordsPrivate#event-onPasswordExceptionsListChanged
 */
chrome.passwordsPrivate.onPasswordExceptionsListChanged;

/**
 * Fired when a plaintext password has been fetched in response to a call to
 * chrome.passwordsPrivate.requestPlaintextPassword().
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/passwordsPrivate#event-onPlaintextPasswordRetrieved
 */
chrome.passwordsPrivate.onPlaintextPasswordRetrieved;