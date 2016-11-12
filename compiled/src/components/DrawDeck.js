'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cardPlayBack = require('../images/card-play-back.png');

var _cardPlayBack2 = _interopRequireDefault(_cardPlayBack);

require('../styles/DrawDeck.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*****************************************
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 This is the Draw Deck component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *****************************************/

var DrawDeck = function (_Component) {
  _inherits(DrawDeck, _Component);

  function DrawDeck(props) {
    _classCallCheck(this, DrawDeck);

    return _possibleConstructorReturn(this, (DrawDeck.__proto__ || Object.getPrototypeOf(DrawDeck)).call(this));
  }

  _createClass(DrawDeck, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'drawDeck' },
        _react2.default.createElement('img', { name: 'drawDeckCardImage', src: _cardPlayBack2.default, alt: 'Draw Deck back of card.' }),
        _react2.default.createElement('p', null)
      );
    }
  }]);

  return DrawDeck;
}(_react.Component);

exports.default = DrawDeck;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RyYXdEZWNrLmpzIl0sIm5hbWVzIjpbIkRyYXdEZWNrIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OzsrZUFOQTs7OztJQVFNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBRWxCOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxJQUFHLFVBQVI7QUFDRSwrQ0FBSyxNQUFLLG1CQUFWLEVBQThCLDJCQUE5QixFQUE2QyxLQUFJLHlCQUFqRCxHQURGO0FBRUU7QUFGRixPQURGO0FBTUQ7Ozs7OztrQkFHWUQsUSIsImZpbGUiOiJEcmF3RGVjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBUaGlzIGlzIHRoZSBEcmF3IERlY2sgY29tcG9uZW50XG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjYXJkQmFjayBmcm9tICcuLi9pbWFnZXMvY2FyZC1wbGF5LWJhY2sucG5nJztcbmltcG9ydCAnLi4vc3R5bGVzL0RyYXdEZWNrLmNzcyc7XG5cbmNsYXNzIERyYXdEZWNrIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiZHJhd0RlY2tcIj5cbiAgICAgICAgPGltZyBuYW1lPVwiZHJhd0RlY2tDYXJkSW1hZ2VcIiBzcmM9e2NhcmRCYWNrfSBhbHQ9XCJEcmF3IERlY2sgYmFjayBvZiBjYXJkLlwiLz5cbiAgICAgICAgPHA+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3RGVjazsiXX0=