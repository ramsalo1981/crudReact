import React from "react";

const CourseForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addCourse}>
        <input
          type="text"
          value={props.current}
          onChange={props.updateCourse}
        />
        <button type="submit"> Add Course</button>
      </form>
    </div>
  );
};
export default CourseForm;
