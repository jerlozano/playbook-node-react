var Playbooks = require('../models/playbooks');
var logger = require('../common/logger');
var Playbookitems = require('../models/playbookitems');

/* Export exposed functions */
module.exports = function() {

  module.createPlaybookitem = function(data, callback) {
    // find the playbook via id
    Playbooks.findById(data.pbid, function (err, playbook) {
      if(err) {
        logger.error(err);
        callback({
          success: false,
          message: err
        });
        return;
      }
      else if (!playbook) {
        logger.error('playbook not found with id: ' + data.pbid);
        callback({
          success: false,
          message: 'playbook not found with id: ' + data.pbid
        });
        return;
      }
      /*
        if the playbook exists, create a new playbook item, then save it as
        an embedded document and push it into the playbook
      */
      var pbitem = new Playbookitems(data);
      playbook.items.push(pbitem);
      playbook.save(function(err) {
        if (err) {
          logger.error(err);
          callback({
            success: false,
            message: err
          });
        }
        callback({
          success: true,
          message: playbook.items,
        });
      });

    });
  }

  /*
    Not finished
  */
  module.deletePlaybookitem = function(playbookid, playbookitemid, callback) {
    Playbooks.findById(playbookid, function (err, playbook) {
      if(err) {
        logger.error(err);
        callback({
          success: false,
          message: err
        });
        return;
      }
      else if (!playbook) {
        logger.error('playbook not found with id: ' + playbookid);
        callback({
          success: false,
          message: 'playbook not found with id: ' + playbookid
        });
        return;
      }
      // loop through the playbook items, find the one you want, then delete


      // calling the id function on the items is not working, might be due to the
      // way the schema is set up
      playbook.items.pull(playbookitemid);
      logger.debug(playbook.items);
      // playbook.save();
      callback({
        success: true,
        message: 'pbitem: ' + playbookitemid + ' removed from pb: ' + playbookid
      });
    });

  }

  return module;
};
