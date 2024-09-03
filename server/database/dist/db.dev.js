"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var USERNAME = process.env.DB_USERNAME;
var PASSWORD = process.env.DB_PASSWORD;

var Connection = function Connection() {
  //const MONGODB_URI = `mongodb://localhost:27017`;
  _mongoose["default"].connect('mongodb://127.0.0.1:27017/todo'); //mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


  _mongoose["default"].connection.on('connected', function () {
    console.log('Database connected Successfully');
  });

  _mongoose["default"].connection.on('disconnected', function () {
    console.log('Database disconnected');
  });

  _mongoose["default"].connection.on('error', function () {
    console.log('Error while connecting with the database ', error.message);
  });
};

var _default = Connection;
exports["default"] = _default;
//# sourceMappingURL=db.dev.js.map
