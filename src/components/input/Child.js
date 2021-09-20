/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

export class Child extends Component {
  render() {
    return (
      <div className="main">
        <form action="submit">
          <label htmlFor="title">
            Title:
            <input
              type="text"
              name="title"
              value={this.props.title}
              onChange={this.props.handleTitle}
            />
          </label>
          <br />
          <br />
          <label htmlFor="title">
            Description:
            <textarea
              type="text"
              name="description"
              value={this.props.description}
              onChange={this.props.handleDescription}
            />
          </label>
          <br />
          <br />

          <button type="submit" onClick={this.props.handleSubmit}>
            Submit
          </button>
        </form>
        <div className="list">
          {this.props.arr.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <h3>{item.description}</h3>
              <button
                type="submit"
                onClick={() => this.props.handleDelete(item)}
              >
                Delete
              </button>
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Child;
