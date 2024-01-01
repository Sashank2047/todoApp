import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Addtask.css';

const Addtask = () => {
    const [todoTasks, setTodoTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [inReviewTasks, setInReviewTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [newTask, setNewTask] = useState({ name: '', startDate: '', endDate: '', status: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const handleAddTask = () => {
        // ? E R R O R ? //
    };

    const handleStatusChange = (selectedStatus) => {
        setNewTask({ ...newTask, status: selectedStatus });
    };

    return (
        <div>
            <div className='Addtask-Main'>
                <Popup trigger={<button className='Addtask-btn'>+ Add new</button>} modal nested>
                    <div>
                        {
                            <div className='modal'>
                                <button className='Addtask-closebtn'>X</button>
                                <h3 className='Addtask-heading'>Add New Task</h3>
                                <hr className='vertical-line'></hr>
                                <label>Name of the task<br />
                                    <input className='Addtask-inputname' type="text" name="name" 
                                    placeholder='Text' value={newTask.name} onChange={handleInputChange} />
                                </label>
                                <div className='Addtask-dates'>
                                    <label>Start date
                                        <input type="date" className="Addtask-startDate" name="startDate" value={newTask.startDate} onChange={handleInputChange} />
                                    </label>
                                    <label>Deadline
                                        <input type="date" className="Addtask-endDate" name="endDate" value={newTask.endDate} onChange={handleInputChange} />
                                    </label>
                                </div>
                                <label>Status<br />
                                    <select className='Addtask-status' name='status' value={newTask.status} onChange={(e) => handleStatusChange(e.target.value)}>
                                        <option value="To Do">To Do</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="In Review">In Review</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </label>
                                <hr className='vertical-line'></hr>
                                <div className='Addtask-footer'>
                                    <button className='Addtask-cancelbtn'>Cancel</button>
                                    <button className='Addtask-taskbtn' onClick={handleAddTask}>Add Task</button>
                                </div >
                                
                            </div>
                        }
                    </div>
                </Popup>
            </div>
        </div>
    );
}

export default Addtask;