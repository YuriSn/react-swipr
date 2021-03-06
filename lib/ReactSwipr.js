'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Swipr component
**/
var ReactSwipr = function (_Component) {
  _inherits(ReactSwipr, _Component);

  function ReactSwipr() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactSwipr);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactSwipr.__proto__ || Object.getPrototypeOf(ReactSwipr)).call.apply(_ref, [this].concat(args))), _this), _this.next = function () {
      _this.swipr.next();
    }, _this.prev = function () {
      _this.swipr.prev();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactSwipr, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var elementId = this.props.elementId;
      var element = document.getElementById(elementId);

      if (element == null || element == undefined) {
        return;
      } else {
        this.swipe(element);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.swipr.setIndex(this.props.index);
    }
  }, {
    key: 'swipe',
    value: function swipe(element) {
      var swipr = require('./Swipr');
      this.swipr = swipr(element, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          navigation = _props.navigation,
          elementId = _props.elementId;

      return _react2.default.createElement(
        'div',
        { className: 'react-swipr', id: elementId },
        _react2.default.createElement(
          'div',
          { className: 'swipr' },
          _react2.default.createElement(
            'div',
            { className: 'swipr_slides' },
            this.props.children
          )
        ),
        navigation && _react2.default.createElement(
          'div',
          { className: 'nav' },
          _react2.default.createElement('span', {
            className: 'swipr_next',
            onClick: this.next
          }),
          _react2.default.createElement('span', {
            className: 'swipr_prev',
            onClick: this.prev
          })
        )
      );
    }
  }]);

  return ReactSwipr;
}(_react.Component);

exports.default = ReactSwipr;


ReactSwipr.propTypes = {
  elementId: _propTypes2.default.string.isRequired,
  navigation: _propTypes2.default.bool
};