import React from 'react';
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "yellow"};
//   }

//   render() {
//     return (
//       <h1 style={{color: this.state.favoritecolor}}>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }









// getDerivedStateFromProps
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "blue"};
//   }

//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: props.favcol };
//   }

//   render() {
//     return (
//       <h1 style={{color: this.state.favoritecolor}}>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }









// componentDidMount()
// The componentDidMount() method is called after the component is rendered.
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 2000)
//   }

//   render() {
//     console.log(this.state.favoritecolor)
//     return (
//       <h1 style={{color: this.state.favoritecolor}}>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }









// ----- Updating 
// If the component gets updated, the getDerivedStateFromProps() method is called:
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "yellow"};
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('color from props');
//     return {favoritecolor: props.favcol };
//   }

//   changeColor = () => {
//     console.log('color is changed');
//     this.setState({favoritecolor: "red"});
//   }

//   render() {
//     return (
//       <div>
//       <h1 style={{color: this.state.favoritecolor}}>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }









// shouldComponentUpdate()
// In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }

//   shouldComponentUpdate() {
//     return false;
//   }

//   changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//   }

//   render() {
//     return (
//       <div>
//       <h1 style={{color: this.state.favoritecolor}}>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }









// getSnapshotBeforeUpdate()
// Use the getSnapshotBeforeUpdate() method to find out what the state object looked like before the update:
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 2000)
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     document.getElementById("div1").innerHTML =
//     "Before the update, the favorite was " + prevState.favoritecolor;
//   }

//   componentDidUpdate() {
//     document.getElementById("div2").innerHTML =
//     "The updated favorite is " + this.state.favoritecolor;
//   }

//   render() {
//     return (
//       <div>
//         <h1 style={{color: this.state.favoritecolor}}>My Favorite Color is {this.state.favoritecolor}</h1>
//         <div id="div1"></div>
//         <div id="div2"></div>
//       </div>
//     );
//   }
// }










// componentDidUpdate
// The componentDidUpdate method is called after the update has been rendered in the DOM:
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 2000)
//   }

//   componentDidUpdate() {
//     document.getElementById("mydiv").innerHTML =
//     "The updated favorite is " + this.state.favoritecolor;
//   }

//   render() {
//     return (
//       <div>
//       <h1 style={{color: this.state.favoritecolor}}>My Favorite Color is {this.state.favoritecolor}</h1>
//       <div id="mydiv"></div>
//       </div>
//     );
//   }
// }









// componentWillUnmount()
// The componentWillUnmount method is called when the component is about to be removed from the DOM.
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hide: false,
//       color: 'red',
//       show: true
//     };
//   }

//   delHeader = () => {
//     this.setState({show: !this.state.show});
//   }

//   render() {
//     let myheader;
//     if (this.state.show) {
//       myheader = <Child />;
//     };

//     return (
//       <div>
//       {myheader}
//       <button type="button" onClick={this.delHeader}>Delete Header</button>
//       <div>{this.state.color}</div>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   componentWillUnmount() {
//     alert("The component named Header is about to be unmounted.");
//   }

//   render() {
//     return (
//       <h1>Hello World!</h1>
//     );
//   }
// }

// export default Header;