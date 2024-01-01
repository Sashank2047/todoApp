import TaskBoardLogo from './TaskBoardLogo.png';
import './TaskBoards.css';
import Addtask from './Addtask';

const TaskBoards = () => {
    return (
        <div className='TaskBoard-Main'>
            <div className='TaskBoard-Nav'>
                <img src={TaskBoardLogo} alt=""></img>
                <h1>Task Boards</h1>
            </div>
            <div className='TaskBoard-Projects-Section'>
                <div className='TaskBoard-projects-top'>
                    <button>FreeLance Project</button>
                    <button>SBI OutSource</button>
                    <button>HPCL Project 1</button>
                </div>
                <div className='TaskBoard-projects-bottom'>
                    <p>+ Add new Project</p>
                    <Addtask />
                </div>
            </div>
        </div>
    );
} 

export default TaskBoards;