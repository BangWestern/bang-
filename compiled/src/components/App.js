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

var _sampleData = require('../data/sampleData');

var _sampleData2 = _interopRequireDefault(_sampleData);

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

//IMPORT OTHER COMPONENTS


//IMPORT STYLES
//import logo from '../styles/logo.svg';


//IMPORT SAMPLE DATA


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
          { className: 'drawDeck-container' },
          _react2.default.createElement(_DrawDeck2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'otherPlayers-container' },
          _react2.default.createElement(_OtherPlayers2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'player-container' },
          _react2.default.createElement(_Player2.default, { character: _sampleData2.default[0] })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFTQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUlBOztBQUdBOzs7Ozs7Ozs7OytlQXJCQTs7Ozs7Ozs7O0FBV0E7OztBQUtBO0FBQ0E7OztBQUdBOzs7SUFHTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBRWxCOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxJQUFHLE9BQVI7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSx3QkFBZjtBQUNFO0FBREYsU0FKRjtBQU9FO0FBQUE7QUFBQSxZQUFLLFdBQVUsa0JBQWY7QUFDRSw0REFBUSxXQUFXLHFCQUFjLENBQWQsQ0FBbkI7QUFERjtBQVBGLE9BREY7QUFhRDs7Ozs7O2tCQUdZRCxHIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBUaGlzIGlzIHRoZSBUb3AgbGV2ZWwgZ2FtZSBCb2FyZFxuICBcbiAgQ3VycmVudGx5IG9ubHkgY29udHJvbHMgdGhlIHJlbmRlcmluZyBvZlxuICAgIC0gT3RoZXIgcGxheWVyc1xuICAgIC0gWW91ciBQbGF5ZXJcbiAgICAtIERyYXcgRGVja1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vSU1QT1JUIE9USEVSIENPTVBPTkVOVFNcbmltcG9ydCBEcmF3RGVjayBmcm9tICcuL0RyYXdEZWNrJztcbmltcG9ydCBPdGhlclBsYXllcnMgZnJvbSAnLi9PdGhlclBsYXllcnMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5cbi8vSU1QT1JUIFNUWUxFU1xuLy9pbXBvcnQgbG9nbyBmcm9tICcuLi9zdHlsZXMvbG9nby5zdmcnO1xuaW1wb3J0ICcuLi9zdHlsZXMvQXBwLmNzcyc7XG5cbi8vSU1QT1JUIFNBTVBMRSBEQVRBXG5pbXBvcnQgY2hhcmFjdGVyRGF0YSBmcm9tICcuLi9kYXRhL3NhbXBsZURhdGEnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJCb2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyYXdEZWNrLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxEcmF3RGVjayAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlclBsYXllcnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPE90aGVyUGxheWVycyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPFBsYXllciBjaGFyYWN0ZXI9e2NoYXJhY3RlckRhdGFbMF19Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==