'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DrawDeck = require('./DrawDeck');

var _DrawDeck2 = _interopRequireDefault(_DrawDeck);

var _OtherPlayers = require('./OtherPlayers');

var _OtherPlayers2 = _interopRequireDefault(_OtherPlayers);

var _Player = require('./Player');

var _Player2 = _interopRequireDefault(_Player);

require('../styles/App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*****************************************
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 This is the Top level game Board
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Currently only controls the rendering of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   - Other players
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   - Your Player
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   - Draw Deck
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *****************************************/

//import logo from '../styles/logo.svg';


var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'Board' },
        _react2.default.createElement(
          'div',
          { id: 'drawDeck' },
          _react2.default.createElement(_DrawDeck2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { id: 'otherPlayers' },
          _react2.default.createElement(_OtherPlayers2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { id: 'player' },
          _react2.default.createElement(_Player2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFTQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OzsrZUFkQTs7Ozs7Ozs7O0FBVUE7OztJQU1NQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFFbEI7Ozs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLElBQUcsT0FBUjtBQUNFO0FBQUE7QUFBQSxZQUFLLElBQUcsVUFBUjtBQUNFO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLElBQUcsY0FBUjtBQUNFO0FBREYsU0FKRjtBQU9FO0FBQUE7QUFBQSxZQUFLLElBQUcsUUFBUjtBQUNFO0FBREY7QUFQRixPQURGO0FBYUQ7Ozs7OztrQkFHWUQsRyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgVGhpcyBpcyB0aGUgVG9wIGxldmVsIGdhbWUgQm9hcmRcbiAgXG4gIEN1cnJlbnRseSBvbmx5IGNvbnRyb2xzIHRoZSByZW5kZXJpbmcgb2ZcbiAgICAtIE90aGVyIHBsYXllcnNcbiAgICAtIFlvdXIgUGxheWVyXG4gICAgLSBEcmF3IERlY2tcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy9pbXBvcnQgbG9nbyBmcm9tICcuLi9zdHlsZXMvbG9nby5zdmcnO1xuaW1wb3J0IERyYXdEZWNrIGZyb20gJy4vRHJhd0RlY2snO1xuaW1wb3J0IE90aGVyUGxheWVycyBmcm9tICcuL090aGVyUGxheWVycyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcbmltcG9ydCAnLi4vc3R5bGVzL0FwcC5jc3MnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiQm9hcmRcIj5cbiAgICAgICAgPGRpdiBpZD1cImRyYXdEZWNrXCI+XG4gICAgICAgICAgPERyYXdEZWNrIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwib3RoZXJQbGF5ZXJzXCI+XG4gICAgICAgICAgPE90aGVyUGxheWVycyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInBsYXllclwiPlxuICAgICAgICAgIDxQbGF5ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==