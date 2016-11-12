'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*****************************************
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 This is the Player component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *****************************************/

var Player = function (_Component) {
  _inherits(Player, _Component);

  function Player(props) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

    _this.state = {
      character: { character: _this.props.character }, //contains name, italianDescription, maxHealth, englishDescription, and ability
      currentHealth: null,
      cardCount: 4,
      inJail: false,
      hasDynamite: false,
      shootRange: 1,
      regularRange: 1,
      ability: null,
      role: null
    };
    return _this;
  }

  _createClass(Player, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ character: this.props.character });
    }
  }, {
    key: 'ability',
    value: function ability(callback) {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.state.character.name
      );
    }
  }]);

  return Player;
}(_react.Component);

exports.default = Player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllci5qcyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJwcm9wcyIsInN0YXRlIiwiY2hhcmFjdGVyIiwiY3VycmVudEhlYWx0aCIsImNhcmRDb3VudCIsImluSmFpbCIsImhhc0R5bmFtaXRlIiwic2hvb3RSYW5nZSIsInJlZ3VsYXJSYW5nZSIsImFiaWxpdHkiLCJyb2xlIiwic2V0U3RhdGUiLCJjYWxsYmFjayIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7K2VBTEE7Ozs7O0lBT01BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVyxFQUFDQSxXQUFXLE1BQUtGLEtBQUwsQ0FBV0UsU0FBdkIsRUFEQSxFQUNtQztBQUM5Q0MscUJBQWUsSUFGSjtBQUdYQyxpQkFBVyxDQUhBO0FBSVhDLGNBQVEsS0FKRztBQUtYQyxtQkFBYSxLQUxGO0FBTVhDLGtCQUFZLENBTkQ7QUFPWEMsb0JBQWMsQ0FQSDtBQVFYQyxlQUFTLElBUkU7QUFTWEMsWUFBTTtBQVRLLEtBQWI7QUFGaUI7QUFhbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDVCxXQUFXLEtBQUtGLEtBQUwsQ0FBV0UsU0FBdkIsRUFBZDtBQUNEOzs7NEJBRU9VLFEsRUFBVSxDQUVqQjs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBTSxhQUFLWCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJXO0FBQTNCLE9BREY7QUFHRDs7Ozs7O2tCQUdZZCxNIiwiZmlsZSI6IlBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBUaGlzIGlzIHRoZSBQbGF5ZXIgY29tcG9uZW50XG5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hhcmFjdGVyOiB7Y2hhcmFjdGVyOiB0aGlzLnByb3BzLmNoYXJhY3Rlcn0sIC8vY29udGFpbnMgbmFtZSwgaXRhbGlhbkRlc2NyaXB0aW9uLCBtYXhIZWFsdGgsIGVuZ2xpc2hEZXNjcmlwdGlvbiwgYW5kIGFiaWxpdHlcbiAgICAgIGN1cnJlbnRIZWFsdGg6IG51bGwsXG4gICAgICBjYXJkQ291bnQ6IDQsXG4gICAgICBpbkphaWw6IGZhbHNlLFxuICAgICAgaGFzRHluYW1pdGU6IGZhbHNlLFxuICAgICAgc2hvb3RSYW5nZTogMSxcbiAgICAgIHJlZ3VsYXJSYW5nZTogMSxcbiAgICAgIGFiaWxpdHk6IG51bGwsXG4gICAgICByb2xlOiBudWxsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2hhcmFjdGVyOiB0aGlzLnByb3BzLmNoYXJhY3Rlcn0pO1xuICB9XG5cbiAgYWJpbGl0eShjYWxsYmFjaykge1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+e3RoaXMuc3RhdGUuY2hhcmFjdGVyLm5hbWV9PC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiXX0=