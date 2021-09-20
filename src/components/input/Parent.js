/* eslint-disable react/sort-comp */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import ChildComponent from "./Child";

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      formArr: [],
    };
  }

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  handleDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      formArr: [
        ...this.state.formArr,
        { title: this.state.title, description: this.state.description },
      ],
    });
  };

  handleDelete = (item) => {
    const newArr = this.state.formArr.filter(
      (specificItem) => specificItem !== item
    );
    this.setState({ formArr: newArr, title: "", description: "" });
  };

  render() {
    return (
      <div>
        <ChildComponent
          title={this.state.title}
          description={this.state.description}
          handleSubmit={this.handleSubmit}
          handleTitle={this.handleTitle}
          handleDescription={this.handleDescription}
          handleDelete={this.handleDelete}
          arr={this.state.formArr}
        />
      </div>
    );
  }
}

export default Parent;
