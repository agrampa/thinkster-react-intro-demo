let Hello = React.createClass({
  render: function() {
    return (

      let targetOfGreeting = 'World!';
      let exampleClassNameForStyling = 'nameOfTheClass';
      // createElement is a helper method
      // React.createElement('div', null, 'Hello World!')
      // instead of createElement, do this instead:
      // <div>Hello World!</div>  // use JSX transformer along with Gulp and Grunt, otherwise in-browser transformer will be too slow on a large-scale program
      <div className="exampleClassNameForStyling">Hello, { targetOfGreeting }!
    )
  }
})

//reactDom is a package, allows interaction with browser DOM
// two args: component to render, and DOM node to attach to
ReactDOM.render(<Hello />, document.getElementById('container'));
// in source code in console, will have a reactID

// create reusable components that can be used throughout the application


// LOOPS

let Hello = React.createClass({
  render: function() {
    let names = ['Allie', 'Dave', 'Gary', 'Charlotte'];

    // return (
    //   <ul>
    //     {names.map(function(name, index) {
    //       return <li key={ index }>{ name }</li>;
    //     })};
    //   </ul>
    // )

    let namesList = names.map(function(name, index) {
      return <li key={ index }>{ name }</li>;
    });

    return (
      <ul>
        { namesList }
      </ul>
    )
  }
})


let Water = React.createClass({
  getInitialState: function() {
    return {
      currentTemp: 50;
    };
  },

  setTemperature: function(e) {
    this.setState({ currentTemp: e.target.value });
  },

  render: function() {
    // empty variable to hold 'solid', 'liquid', or 'gas'
    let stateOfMatter;

    // SOLID
    if(this.state.currentTemp <= 32) {
      stateOfMatter = 'Solid';
    }

    // GAS
    else if(this.state.currentTemp >= 212) {
      stateOfMatter = 'Gas';
    }

    // LIQUID
    else {
      stateOfMatter = 'Liquid';
    };

    return (
      <div>
        <input type="text" onChange={ this.setTemperature() } value={ this.state.currentTemp }
        <p>At { this.state.currentTemp } degrees Farenheit, water is considered to be a "{ stateOfMatter }" state of matter.</p>
      </div>
    )
  };
})
