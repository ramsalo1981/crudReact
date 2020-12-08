import React, { Component, Fragment } from "react";

class CourseList extends Component {
  state = {
    isEdite: false,
  };
  renderCourse = () => {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <button
          onClick={() => {
            this.toggleCourse();
          }}
        >
          Edite Course
        </button>
        <button
          onClick={() => {
            this.props.deleteCourse(this.props.index);
          }}
        >
          Delete Course
        </button>
      </li>
    );
  };

  toggleCourse = () => {
    let { isEdite } = this.state;
    this.setState({
      isEdite: !isEdite,
    });
  };
  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleCourse();
  };
  renderUpdate = () => {
    return (
      <div>
        <form onSubmit={this.updateCourseItem}>
          <input
            type="text"
            ref={(v) => {
              this.input = v;
            }}
            defaultValue={this.props.details.name}
          />
          <button>Update</button>
        </form>
      </div>
    );
  };
  render() {
    let { isEdite } = this.state;
    return (
      <Fragment>{isEdite ? this.renderUpdate() : this.renderCourse()}</Fragment>
    );
  }
}

export default CourseList;
