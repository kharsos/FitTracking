// src/WorkoutTracker.js
import React, { useState } from 'react';

const WorkoutTracker = () => {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    date: '',
    workout: '',
    duration: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWorkout((prevWorkout) => ({ ...prevWorkout, [name]: value }));
  };

  const handleAddWorkout = () => {
    
    if (newWorkout.date && newWorkout.workout && newWorkout.duration) {
      setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
      setNewWorkout({ date: '', workout: '', duration: '' });
      
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleDeleteWorkout = (index) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts.splice(index, 1);
    setWorkouts(updatedWorkouts);
  };

  return (
    <div className='workout'>
      <h1>Workout Tracker</h1>
        <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Workout</th>
            <th>Duration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        <td><input
          type="date"
          name="date"
          value={newWorkout.date}
          onChange={handleInputChange}
        /></td>
       <td><select
          name="workout"
          value={newWorkout.workout}
          onChange={handleInputChange}
        >
            <option value="walking" >walking</option>
            <option value="Running">Running</option>
            <option value="Swimming">Swimming</option>
            <option value="Yoga">Yoga</option>
            <option value="Weight lifting">Weight lifting</option>
            <option value="Outdoor Cycling">Outdoor Cycling</option>
            <option value="Intdoor Cycling">Intdoor Cycling</option>    
        </select></td> 
        <td><input
            className='duration'
          type="number"
          name="duration"
          value={newWorkout.duration}
          onChange={handleInputChange}
        />min</td>
     
       <td><button onClick={handleAddWorkout}>Add </button></td>
      </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Workout</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, index) => (
            
            <tr key={index}>
              <td>{workout.date}</td>
              <td>{workout.workout}</td>
              <td>{workout.duration} min</td>
              <td
                 className='delete' onClick={() => handleDeleteWorkout(index)}>
                  x
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
  );
};

export default WorkoutTracker;
