/**
 * Created by leo on 12/3/14.
 */


module.exports = function (sails) {


  /**
   * Module dependencies.
   */

  var schedule = require('node-schedule');

  /**
   * Expose hook definition
   */

  return {

    // Run when sails loads-- be sure and call `next()`.
    initialize: function (next) {
      Object.keys(sails.config.crontab).forEach(function(key) {
        var val = sails.config.crontab[key];
        schedule.scheduleJob(key, val);
      });
      return next();
    }
  };
};/**
 * Created by leo on 12/3/14.
 */
