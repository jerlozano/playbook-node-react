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

      var index = -1;
      for (var i = 0; i < playbook.items.length; i++) {
        if (playbook.items[i]._id == playbookitemid) {
          index = i;
        }
      }

      var itemsChanged = false;
      if (index > -1) {
        var itemCountBefore = playbook.items.length;
        var result = playbook.items.splice(index, 1);
        var itemCountAfter = playbook.items.length;
        if (itemCountBefore != itemCountAfter) {
          itemsChanged = true;
        }
      }

      if (!itemsChanged) {
        callback({
          success: false,
          message: 'item not deleted'
        });
        return;
      }

      playbook.save();
      callback({
        success: true,
        message: 'pbitem: ' + playbookitemid + ' removed from pb: ' + playbookid
      });
    });
  }

  return module;
};
