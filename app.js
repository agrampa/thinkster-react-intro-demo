let Hello = React.createClass({
  render: function() {
    return (
      // createElement is a helper method
      // React.createElement('div', null, 'Hello World!')
      // instead of createElement, do this instead:
      <div>Hello World!</div>  // use JSX transformer along with Gulp and Grunt, otherwise in-browser transformer will be too slow on a large-scale program
    )
  }
})

//reactDom is a package, allows interaction with browser DOM
// two args: component to render, and DOM node to attach to
ReactDOM.render(<Hello />, document.getElementById('container'));
// in source code in console, will have a reactID

// create reusable components that can be used throughout the application
