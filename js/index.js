var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}
var defaultState = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n";var













































MyComponent = function (_React$Component) {_inherits(MyComponent, _React$Component);
  function MyComponent(props) {_classCallCheck(this, MyComponent);var _this = _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this,
    props));
    _this.state = {
      input: defaultState,
      message: "" };


    _this.handleChange = _this.handleChange.bind(_this);return _this;
  }_createClass(MyComponent, [{ key: "handleChange", value: function handleChange(

    event) {
      this.setState({
        input: event.target.value,
        message: this.state.input });

    } }, { key: "getMarkdownText", value: function getMarkdownText()
    {
      var rawMarkup = marked(this.state.input, { breaks: true, sanitize: true, gfm: true });
      return { __html: rawMarkup };
    } }, { key: "render", value: function render()
    {
      return (

        React.createElement("div", { className: "container", id: "wrapper" },
          React.createElement("h1", { id: "title", className: "text-center" }, "Markdown Live Preview"),
          React.createElement("hr", null),
          React.createElement("div", { className: "row" },
            React.createElement("textarea", { id: "editor", className: "col-md-12", cols: "60", rows: "20", onChange: this.handleChange },
              this.state.input),



            React.createElement("div", { id: "preview",
              className: "col-md-12",
              dangerouslySetInnerHTML: this.getMarkdownText() }))));






    } }]);return MyComponent;}(React.Component);


ReactDOM.render(React.createElement(MyComponent, null), document.getElementById('root'));