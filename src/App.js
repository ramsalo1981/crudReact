import React, { Component } from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
class App extends Component {
  state = {
    courses: [{ name: "HTML" }, { name: "JavaScript" }, { name: "Css" }],
    current: "",
  };

  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };
  addCourse = (e) => {
    e.preventDefault();
    let courses = this.state.courses;
    let current = this.state.current;
    if (current) {
      courses.push({ name: current });
      this.setState({
        courses,
        current: "",
      });
    }
  };

  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses,
    });
  };

  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses,
    });
  };
  render() {
    const { courses } = this.state;
    const coursesList = courses.map((course, index) => {
      return (
        <CourseList
          details={course}
          key={index}
          deleteCourse={this.deleteCourse}
          index={index}
          editCourse={this.editCourse}
        />
      );
    });
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current={this.state.current}
        />
        <ul>
          {this.state.courses.length > 0 ? (
            coursesList
          ) : (
            <p>there is no courses to show</p>
          )}
        </ul>
      </section>
    );
  }
}

export default App;
