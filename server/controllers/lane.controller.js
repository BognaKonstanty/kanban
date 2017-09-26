import Lane from '../models/lane';
import Note from '../models/note';
import uuid from 'uuid/v4';
import mongoose from 'mongoose';

/*export function getSomething(req, res) {
  return res.status(200).end();
}*/

export function addLane(req, res) {
  if (!req.body.name) {
    res.status(403).end();
  }

  const newLane = new Lane(req.body);

  newLane.notes = [];

  newLane.id = uuid();
  newLane.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ lane: saved });
  });
}

export function getLanes(req, res) {
	Lane.find().exec((err, lanes) => {
		if(err) {
			res.status(500).send(err);
		}
		res.json({lanes});
	});
}

export function deleteLane(req, res) {
  var notesToRemove = [];

  Lane.findOne({ id: req.params.laneId }).exec((err, lane) => {
    if (err) {
      res.status(500).send(err);
    }

    for (var i = 0; i < lane.notes.length; i++) {
      notesToRemove.push(mongoose.Types.ObjectId(lane.notes[i]));
    }

    console.log(notesToRemove)

    Note.remove({ _id: { $in: notesToRemove} }).exec((err) => {
      lane.remove(() => {
        res.status(200).end();
      });
    });
  });
}